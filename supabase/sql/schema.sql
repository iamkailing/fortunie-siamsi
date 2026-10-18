-- Fortunie Siamsi: database schema
-- All game writes go through the "game" edge function (service role). Players never write tables directly.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  login text unique not null,
  name text not null,
  code text unique not null,
  is_admin boolean not null default false,
  banned boolean not null default false,
  ban_reason text not null default '',
  created_at timestamptz not null default now(),
  last_seen timestamptz not null default now()
);

create table if not exists public.player_state (
  id uuid primary key references public.profiles(id) on delete cascade,
  state jsonb not null,
  ver integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.topups (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  baht integer not null,
  stars integer not null,
  slip_path text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  reason text not null default '',
  created_at timestamptz not null default now(),
  done_at timestamptz
);
create index if not exists topups_user_idx on public.topups(user_id, created_at desc);
create index if not exists topups_status_idx on public.topups(status, created_at);

create table if not exists public.codes (
  code text primary key,
  s integer not null default 0,
  t integer not null default 0,
  note text not null default '',
  off boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.redemptions (
  code text not null references public.codes(code) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  at timestamptz not null default now(),
  primary key (code, user_id)
);

create table if not exists public.config (
  id integer primary key default 1 check (id = 1),
  pay text not null default '',
  ann text not null default '',
  maint boolean not null default false,
  packs jsonb not null default '[{"baht":49,"stars":50},{"baht":99,"stars":110,"tag":"คุ้มกว่า 10%"},{"baht":199,"stars":240,"tag":"แถม 40 ดาว"},{"baht":399,"stars":520,"tag":"แถม 120 ดาว"}]'::jsonb,
  updated_at timestamptz not null default now()
);
insert into public.config (id) values (1) on conflict (id) do nothing;

create table if not exists public.events (
  id bigserial primary key,
  user_id uuid,
  actor uuid,
  kind text not null,
  data jsonb,
  at timestamptz not null default now()
);
create index if not exists events_user_idx on public.events(user_id, at desc);

-- Lock everything down: RLS on, no policies = no direct access for anon/authenticated users.
alter table public.profiles enable row level security;
alter table public.player_state enable row level security;
alter table public.topups enable row level security;
alter table public.codes enable row level security;
alter table public.redemptions enable row level security;
alter table public.config enable row level security;
alter table public.events enable row level security;
revoke all on public.profiles, public.player_state, public.topups, public.codes, public.redemptions, public.config, public.events from anon, authenticated;

-- Private bucket for payment slips (only the edge function reads/writes it).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('slips', 'slips', false, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

-- v2: two kinds of codes, user limit, expiry, and an atomic redeem
alter table public.codes add column if not exists kind text not null default 'each';
alter table public.codes add column if not exists max_uses integer not null default 0;
alter table public.codes add column if not exists expires_at timestamptz;

create or replace function public.redeem_code(p_code text, p_uid uuid) returns json
language plpgsql security definer set search_path = public as $$
declare c record; n int;
begin
  select * into c from codes where code = p_code for update;
  if not found or c.off then return json_build_object('err','bad'); end if;
  if c.expires_at is not null and c.expires_at < now() then return json_build_object('err','expired'); end if;
  if exists (select 1 from redemptions where code = p_code and user_id = p_uid) then return json_build_object('err','used'); end if;
  select count(*) into n from redemptions where code = p_code;
  if (c.kind = 'once' and n >= 1) or (c.max_uses > 0 and n >= c.max_uses) then return json_build_object('err','full'); end if;
  insert into redemptions (code, user_id) values (p_code, p_uid);
  return json_build_object('s', c.s, 't', c.t);
end $$;
revoke all on function public.redeem_code(text, uuid) from public, anon, authenticated;
grant execute on function public.redeem_code(text, uuid) to service_role;
