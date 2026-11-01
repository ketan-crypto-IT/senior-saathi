-- Run this in the Supabase SQL Editor to enable profile, progress, quiz, and guest-mode logging.
-- Safe to rerun after app updates.

-- Rename the existing event table so its records stay available under the new name.
do $$
begin
  if to_regclass('public.guest_mode_events') is null
     and to_regclass('public.demo_login_events') is not null then
    alter table public.demo_login_events rename to guest_mode_events;
  end if;

  if to_regclass('public.demo_login_events_id_seq') is not null
     and to_regclass('public.guest_mode_events_id_seq') is null then
    alter sequence public.demo_login_events_id_seq rename to guest_mode_events_id_seq;
  end if;

  if to_regclass('public.guest_mode_events') is not null then
    if exists (
      select 1 from pg_constraint
      where conrelid = 'public.guest_mode_events'::regclass
        and conname = 'demo_login_events_pkey'
    ) and not exists (
      select 1 from pg_constraint
      where conrelid = 'public.guest_mode_events'::regclass
        and conname = 'guest_mode_events_pkey'
    ) then
      alter table public.guest_mode_events
        rename constraint demo_login_events_pkey to guest_mode_events_pkey;
    end if;
  end if;
end;
$$;

create table if not exists public.guest_mode_events (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  source text not null default 'guest_mode'
    check (source = 'guest_mode')
);

alter table public.guest_mode_events
  add column if not exists learner_name text;

-- Convert existing event values and replace the old source constraint.
do $$
declare
  source_constraint record;
begin
  for source_constraint in
    select conname
    from pg_constraint
    where conrelid = 'public.guest_mode_events'::regclass
      and contype = 'c'
      and pg_get_constraintdef(oid) ilike '%source%'
  loop
    execute format(
      'alter table public.guest_mode_events drop constraint %I',
      source_constraint.conname
    );
  end loop;
end;
$$;

update public.guest_mode_events set source = 'guest_mode';
alter table public.guest_mode_events
  alter column source set default 'guest_mode';
alter table public.guest_mode_events
  add constraint guest_mode_events_source_check check (source = 'guest_mode');

alter table public.guest_mode_events enable row level security;

grant insert on table public.guest_mode_events to anon, authenticated;

drop policy if exists "Allow guest mode visit inserts" on public.guest_mode_events;
drop policy if exists "Allow demo visit inserts" on public.guest_mode_events;
create policy "Allow guest mode visit inserts"
  on public.guest_mode_events
  for insert
  to anon, authenticated
  with check (source = 'guest_mode');

-- Feedback from signed-in or anonymous-authenticated learners.
create table if not exists public.user_feedback (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  learner_name text,
  rating smallint not null check (rating between 1 and 5),
  message text not null check (char_length(btrim(message)) between 1 and 1000),
  created_at timestamptz not null default now()
);

alter table public.user_feedback enable row level security;
grant insert on table public.user_feedback to authenticated;
grant usage, select on sequence public.user_feedback_id_seq to authenticated;
drop policy if exists "Learners submit their own feedback" on public.user_feedback;
create policy "Learners submit their own feedback"
  on public.user_feedback for insert to authenticated
  with check (auth.uid() = user_id);

-- The app uses Supabase anonymous users for guest mode without email sign-in.
-- These policies let each signed-in user read and write only their own rows.
-- Learner details and each learner's unique completion certificate reference.
alter table public.profiles
  add column if not exists age integer,
  add column if not exists certificate_id text;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'profiles_age_valid'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_age_valid
      check (age is null or age between 1 and 120);
  end if;
end;
$$;

update public.profiles
set certificate_id = 'SS-' || to_char(now(), 'YYYY') || '-' || upper(left(replace(gen_random_uuid()::text, '-', ''), 12))
where certificate_id is null or btrim(certificate_id) = '';

alter table public.profiles
  alter column certificate_id set not null;

create unique index if not exists profiles_certificate_id_unique
  on public.profiles (certificate_id);
alter table public.profiles enable row level security;
grant select, insert, update on table public.profiles to authenticated;
drop policy if exists "Senior Saathi users read own profile" on public.profiles;
create policy "Senior Saathi users read own profile"
  on public.profiles for select to authenticated
  using (auth.uid() = id);
drop policy if exists "Senior Saathi users insert own profile" on public.profiles;
create policy "Senior Saathi users insert own profile"
  on public.profiles for insert to authenticated
  with check (auth.uid() = id);
drop policy if exists "Senior Saathi users update own profile" on public.profiles;
create policy "Senior Saathi users update own profile"
  on public.profiles for update to authenticated
  using (auth.uid() = id) with check (auth.uid() = id);

alter table public.module_progress enable row level security;
grant select, insert, update on table public.module_progress to authenticated;
create unique index if not exists module_progress_user_module_unique
  on public.module_progress (user_id, module_id);
drop policy if exists "Senior Saathi users read own progress" on public.module_progress;
create policy "Senior Saathi users read own progress"
  on public.module_progress for select to authenticated
  using (auth.uid() = user_id);
drop policy if exists "Senior Saathi users insert own progress" on public.module_progress;
create policy "Senior Saathi users insert own progress"
  on public.module_progress for insert to authenticated
  with check (auth.uid() = user_id);
drop policy if exists "Senior Saathi users update own progress" on public.module_progress;
create policy "Senior Saathi users update own progress"
  on public.module_progress for update to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

alter table public.quiz_scores enable row level security;
grant select, insert on table public.quiz_scores to authenticated;
drop policy if exists "Senior Saathi users read own quiz scores" on public.quiz_scores;
create policy "Senior Saathi users read own quiz scores"
  on public.quiz_scores for select to authenticated
  using (auth.uid() = user_id);
drop policy if exists "Senior Saathi users insert own quiz scores" on public.quiz_scores;
create policy "Senior Saathi users insert own quiz scores"
  on public.quiz_scores for insert to authenticated
  with check (auth.uid() = user_id);
