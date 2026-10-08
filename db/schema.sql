-- FreelancersBix — full canonical schema (PostgreSQL).
--
-- Apply against the database referenced by `DATABASE_URL`:
--   psql "$DATABASE_URL" -f db/schema.sql
--
-- Migrations live in db/migrations/ and are applied incrementally with:
--   node scripts/migrate.mjs
-- `db/schema.sql` is the concatenated, current-state equivalent used to
-- provision brand-new databases. Store does not create these tables;
-- provisioning is explicit so accidental "fake production persistence"
-- is impossible.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ---------------------------------------------------------------------------
-- Quote requests (public /contact quote wizard)
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS quote_requests (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Public tracker ID (FBX-XXXXXX). Exposed to clients; DB `id` is not.
  reference        TEXT NOT NULL UNIQUE,
  service          TEXT NOT NULL,
  title            TEXT NOT NULL,
  description      TEXT NOT NULL,
  outcome          TEXT,
  deadline         TEXT NOT NULL,
  budget           TEXT NOT NULL,
  currency         TEXT NOT NULL,
  structure        TEXT NOT NULL,
  -- File metadata only (name/size). No file bytes are accepted or stored.
  files            JSONB NOT NULL DEFAULT '[]'::jsonb,
  contact_name     TEXT NOT NULL,
  contact_org      TEXT,
  contact_email    TEXT NOT NULL,
  contact_phone    TEXT,
  contact_country  TEXT,
  preferred_channel TEXT NOT NULL,
  notes            TEXT,
  consent          BOOLEAN NOT NULL DEFAULT TRUE,
  status           TEXT NOT NULL DEFAULT 'NEW',
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT quote_requests_status_check
    CHECK (status IN ('NEW', 'IN_REVIEW', 'CONTACTED', 'COMPLETED', 'CANCELLED'))
);

CREATE INDEX IF NOT EXISTS quote_requests_created_at_idx
  ON quote_requests (created_at DESC);

CREATE INDEX IF NOT EXISTS quote_requests_status_idx
  ON quote_requests (status);

-- ---------------------------------------------------------------------------
-- Admin system
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS admins (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role          TEXT NOT NULL DEFAULT 'admin'
                CHECK (role IN ('admin', 'super_admin')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Server-side session store. `token_hash` = SHA-256 of the raw cookie value.
CREATE TABLE IF NOT EXISTS sessions (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id     UUID NOT NULL REFERENCES admins(id) ON DELETE CASCADE,
  token_hash   TEXT NOT NULL UNIQUE,
  ip           TEXT,
  user_agent   TEXT,
  expires_at   TIMESTAMPTZ NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS sessions_admin_id_idx ON sessions (admin_id);
CREATE INDEX IF NOT EXISTS sessions_expires_at_idx ON sessions (expires_at);

-- ---------------------------------------------------------------------------
-- Contact messages (public /contact "send us a message" form)
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS contacts (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT,
  subject    TEXT,
  message    TEXT NOT NULL,
  status     TEXT NOT NULL DEFAULT 'NEW'
             CHECK (status IN ('NEW', 'RESPONDED', 'ARCHIVED')),
  source     TEXT NOT NULL DEFAULT 'contact_form',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS contacts_status_idx ON contacts (status);

-- ---------------------------------------------------------------------------
-- Career / talent applications (public /careers general application)
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS career_applications (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  email           TEXT NOT NULL,
  phone           TEXT,
  discipline      TEXT NOT NULL,
  experience      TEXT,
  role            TEXT,
  portfolio_url   TEXT,
  resume_filename TEXT,
  summary         TEXT,
  status          TEXT NOT NULL DEFAULT 'NEW'
                  CHECK (status IN ('NEW', 'IN_REVIEW', 'CONTACTED', 'COMPLETED', 'CANCELLED')),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS career_applications_created_at_idx
  ON career_applications (created_at DESC);

CREATE INDEX IF NOT EXISTS career_applications_status_idx
  ON career_applications (status);