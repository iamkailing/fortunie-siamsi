-- v5: collection leaderboard + profile showcase
alter table public.profiles add column if not exists score integer not null default 0;
alter table public.profiles add column if not exists score_at timestamptz not null default now();
alter table public.profiles add column if not exists showcase jsonb not null default '[]'::jsonb;
create index if not exists profiles_score_idx on public.profiles (score desc, score_at asc);
