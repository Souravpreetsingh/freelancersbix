-- 0001 — baseline: quote request persistence (mirrors db/schema.sql).

CREATE EXTENSION IF NOT EXISTS pgcrypto;

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