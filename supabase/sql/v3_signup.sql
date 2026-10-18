-- v3: sign up with email + phone, optional admin approval
alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists phone text;
alter table public.profiles add column if not exists approved boolean not null default true;
alter table public.profiles add column if not exists auth_email text;
create unique index if not exists profiles_email_key on public.profiles (email) where email is not null;
create unique index if not exists profiles_phone_key on public.profiles (phone) where phone is not null;
alter table public.config add column if not exists signup_approval boolean not null default false;
