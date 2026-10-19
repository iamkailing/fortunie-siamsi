-- v11: bank details shown on the top-up screen (also used to match the receiving account on slips)
alter table public.config add column if not exists pay_bank text not null default '';
alter table public.config add column if not exists pay_no text not null default '';
