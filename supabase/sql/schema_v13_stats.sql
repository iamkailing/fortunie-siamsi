-- v13: Meta Pixel id (set in the admin page) + faster lookups for the owner stats page
alter table public.config add column if not exists pixel_id text not null default '';
create index if not exists events_kind_at_idx on public.events(kind, at);
create index if not exists events_user_kind_idx on public.events(user_id, kind);
