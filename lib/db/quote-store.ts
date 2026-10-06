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
