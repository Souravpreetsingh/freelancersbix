import { randomInt } from "node:crypto";
import { Pool } from "pg";
import type { QuoteRequest } from "@/lib/validation/quote";

/**
 * Quote-request persistence backed by PostgreSQL.
 *
 * The store is config-gated: without a valid `DATABASE_URL` it reports
 * `UNCONFIGURED` so the endpoint can fail gracefully instead of pretending
 * to persist. Apply `db/schema.sql` to provision the table.
 */

const REFERENCE_PREFIX = "FBX-";
const REFERENCE_DIGITS = 6;
const REFERENCE_MAX_ATTEMPTS = 5;

const PG_UNIQUE_VIOLATION = "23505";

export type CreateQuoteResult =
  { ok: true; reference: string } | { ok: false; code: "UNCONFIGURED" | "UNREACHABLE" | "COLLISION" };

let pool: Pool | null = null;
let poolFailed = false;

function getPool(): Pool | null {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString || connectionString.trim() === "") return null;
  if (!pool && !poolFailed) {
    try {
      pool = new Pool({ connectionString, max: 10, idleTimeoutMillis: 30_000 });
    } catch {
      poolFailed = true;
      pool = null;
    }
  }
  return pool;
}

export function isQuoteStoreConfigured(): boolean {
  return getPool() !== null;
}

export function newTrackerId(): string {
  return `${REFERENCE_PREFIX}${String(randomInt(0, 10 ** REFERENCE_DIGITS)).padStart(REFERENCE_DIGITS, "0")}`;
}

interface QuoteRowResult {
  reference: string;
}

async function runInsert(store: Pool, q: QuoteRequest, reference: string): Promise<QuoteRowResult | null> {
  const { rowCount, rows } = await store.query<QuoteRowResult>(
    `INSERT INTO quote_requests (
       reference, service, title, description, outcome,
       deadline, budget, currency, structure, files,
       contact_name, contact_org, contact_email, contact_phone, contact_country,
       preferred_channel, notes, consent, status
     ) VALUES (
       $1, $2, $3, $4, $5,
       $6, $7, $8, $9, $10,
       $11, $12, $13, $14, $15,
       $16, $17, $18, $19
     )
     ON CONFLICT (reference) DO NOTHING
     RETURNING reference`,
    [
      reference,
      q.service,
      q.title,
      q.description,
      q.outcome ?? null,
      q.deadline,
      q.budget,
      q.currency,
      q.structure,
      JSON.stringify(q.files),
      q.contactName,
      q.contactOrg ?? null,
      q.contactEmail,
      q.contactPhone ?? null,
      q.contactCountry ?? null,
      q.preferredChannel,
      q.notes ?? null,
      q.consent === true,
      "NEW",
    ],
  );
  return rowCount === 1 && rows[0] ? rows[0] : null;
}

/**
 * Persist a validated quote request and generate a collision-safe public
 * tracker ID. Database identifiers are never exposed — `reference` is the
 * only public token and is scoped to the `FBX-XXXXXX` format.
 */
export async function createQuoteRequest(q: QuoteRequest): Promise<CreateQuoteResult> {
  const store = getPool();
  if (!store) return { ok: false, code: "UNCONFIGURED" };

  try {
    for (let attempt = 0; attempt < REFERENCE_MAX_ATTEMPTS; attempt += 1) {
      const reference = newTrackerId();
      const inserted = await runInsert(store, q, reference);
      if (inserted) return { ok: true, reference: inserted.reference };
    }
    return { ok: false, code: "COLLISION" };
  } catch (err) {
    if (err && typeof err === "object" && "code" in err && err.code === PG_UNIQUE_VIOLATION) {
      return { ok: false, code: "COLLISION" };
    }
    return { ok: false, code: "UNREACHABLE" };
  }
}

export interface QuoteRecord {
  id: string;
  reference: string;
  service: string;
  title: string;
  description: string;
  outcome: string | null;
  deadline: string;
  budget: string;
  currency: string;
  structure: string;
  files: { name: string; size: string }[];
  contactName: string;
  contactOrg: string | null;
  contactEmail: string;
  contactPhone: string | null;
  contactCountry: string | null;
  preferredChannel: string;
  notes: string | null;
  consent: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}

type QuoteRow = Record<string, unknown>;

const QUOTE_SELECT = `
  SELECT id, reference, service, title, description, outcome,
         deadline, budget, currency, structure, files,
         contact_name, contact_org, contact_email, contact_phone, contact_country,
         preferred_channel, notes, consent, status, created_at, updated_at
  FROM quote_requests`;

function mapQuoteRow(row: QuoteRow): QuoteRecord {
  return {
    id: String(row.id),
    reference: String(row.reference),
    service: String(row.service),
    title: String(row.title),
    description: String(row.description),
    outcome: row.outcome == null ? null : String(row.outcome),
    deadline: String(row.deadline),
    budget: String(row.budget),
    currency: String(row.currency),
    structure: String(row.structure),
    files: Array.isArray(row.files) ? (row.files as { name: string; size: string }[]) : [],
    contactName: String(row.contact_name),
    contactOrg: row.contact_org == null ? null : String(row.contact_org),
    contactEmail: String(row.contact_email),
    contactPhone: row.contact_phone == null ? null : String(row.contact_phone),
    contactCountry: row.contact_country == null ? null : String(row.contact_country),
    preferredChannel: String(row.preferred_channel),
    notes: row.notes == null ? null : String(row.notes),
    consent: row.consent === true || row.consent === "t" || row.consent === "true",
    status: String(row.status),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

export async function listQuoteRequests(): Promise<QuoteRecord[]> {
  const store = getPool();
  if (!store) return [];
  const { rows } = await store.query<QuoteRow>(`${QUOTE_SELECT} ORDER BY created_at DESC`);
  return rows.map(mapQuoteRow);
}

export async function getQuoteRequest(id: string): Promise<QuoteRecord | null> {
  const store = getPool();
  if (!store) return null;
  const { rows } = await store.query<QuoteRow>(`${QUOTE_SELECT} WHERE id = $1 LIMIT 1`, [id]);
  return rows[0] ? mapQuoteRow(rows[0]) : null;
}

export async function updateQuoteStatus(id: string, status: string): Promise<boolean> {
  const store = getPool();
  if (!store) return false;
  const { rowCount } = await store.query(
    `UPDATE quote_requests SET status = $2, updated_at = now() WHERE id = $1`,
    [id, status],
  );
  return rowCount === 1;
}

/** Dashboard counts, keyed by status. Returns zero-object when unconfigured. */
export async function quoteStatusCounts(): Promise<Record<string, number>> {
  const store = getPool();
  if (!store) return {};
  const { rows } = await store.query<{ status: string; count: string }>(
    `SELECT status, count(*)::text AS count FROM quote_requests GROUP BY status`,
  );
  const counts: Record<string, number> = {};
  for (const row of rows) counts[row.status] = Number(row.count);
  return counts;
}
