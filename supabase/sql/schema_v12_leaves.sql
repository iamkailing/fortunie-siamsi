-- v12: leaves (ใบไม้) on reward codes
alter table public.codes add column if not exists l integer not null default 0;
