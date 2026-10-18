-- v7: rare ticket (แรร์/เอพิก/ตำนาน) + admin-editable drop rates
alter table public.config add column if not exists rates jsonb;
alter table public.codes  add column if not exists rt int not null default 0;
