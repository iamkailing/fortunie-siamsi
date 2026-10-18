-- v6: profile avatar (pet) + frame
alter table public.profiles add column if not exists avatar integer not null default -1;
alter table public.profiles add column if not exists avatar_l integer not null default 1;
alter table public.profiles add column if not exists frame text not null default 'none';
