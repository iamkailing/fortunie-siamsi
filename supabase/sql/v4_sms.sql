-- v4: SMS verification at sign-up
create table if not exists public.otp_codes (
  phone text primary key,
  code_hash text not null,
  expires_at timestamptz not null,
  tries integer not null default 0,
  last_sent timestamptz not null default now(),
  window_start timestamptz not null default now(),
  sent_in_window integer not null default 0
);
alter table public.otp_codes enable row level security;
revoke all on public.otp_codes from anon, authenticated;
alter table public.config add column if not exists sms_verify boolean not null default false;
