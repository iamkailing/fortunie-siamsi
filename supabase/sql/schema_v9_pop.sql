-- v9: ป๊อปเพื่อน tap counter + its leaderboard
alter table public.profiles add column if not exists pops bigint not null default 0;
alter table public.profiles add column if not exists pop_at timestamptz;
create index if not exists profiles_pops_idx on public.profiles(pops desc);
