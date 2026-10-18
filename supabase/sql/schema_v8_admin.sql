-- v8: staff accounts + unique code batches
alter table public.profiles add column if not exists staff boolean not null default false;
alter table public.codes add column if not exists batch text;
alter table public.codes add column if not exists prefix text;
create index if not exists codes_batch_idx on public.codes(batch);
create index if not exists events_at_idx on public.events(at desc);
