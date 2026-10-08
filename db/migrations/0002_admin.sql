-- 0002 — admin system: admins, sessions, contact messages, career applications.
--
-- Sessions store only a SHA-256 hash of the random bearer token; the raw
-- token is issued to the browser cookie and never persisted.

-- Admin users. Passwords are stored as scrypt hash/salt strings produced by
-- `npm run admin:create` (lib/auth/password.ts).
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

-- Contact messages (general "send us a message" form on /contact).
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

-- Career / talent applications from the public careers form.
-- File uploads are NOT transmitted; only the selected file name is stored.
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