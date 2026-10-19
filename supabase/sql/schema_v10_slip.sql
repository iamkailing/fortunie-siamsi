-- v10: automatic slip check (settings + duplicate-slip guard)
alter table public.config add column if not exists slip_auto boolean not null default false;
alter table public.config add column if not exists slip_name text not null default '';
alter table public.config add column if not exists slip_tail text not null default '';
alter table public.config add column if not exists slip_hours int not null default 24;
alter table public.topups add column if not exists slip_ref text;
alter table public.topups add column if not exists auto boolean not null default false;
alter table public.topups add column if not exists auto_note text not null default '';
create unique index if not exists topups_slip_ref_uq on public.topups(slip_ref) where slip_ref is not null;
