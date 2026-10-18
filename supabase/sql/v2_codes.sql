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
