/**
 * Minimal SQL migration runner for FreelancersBix.
 *
 * Applies `db/migrations/*.sql` in filename order against the database in
 * `DATABASE_URL`. Each file runs inside its own transaction and is recorded
 * in `schema_migrations` (filename + sha256) so apply is idempotent.
 *
 * Usage:
 *   DATABASE_URL=postgres://... node scripts/migrate.mjs
 *   node scripts/migrate.mjs --status   # list applied vs pending
 */
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";
import { loadEnv } from "./lib/env.mjs";

loadEnv();

const { Client } = pg;

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MIGRATIONS_DIR = join(ROOT, "db", "migrations");
const SHOW_STATUS = process.argv.includes("--status");

function sha256(text) {
  return createHash("sha256").update(text).digest("hex");
}

async function connect() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString || connectionString.trim() === "") {
    throw new Error("DATABASE_URL is not set. Point it at the target database first (see .env.example).");
  }
  const client = new Client({ connectionString });
  await client.connect();
  return client;
}

async function main() {
  const files = readdirSync(MIGRATIONS_DIR)
    .filter((name) => /^\d+_[a-z0-9_]+\.sql$/.test(name))
    .sort();

  if (files.length === 0) {
    console.log("[migrate] no migration files in db/migrations/");
    return;
  }

  const client = await connect();
  try {
    await client.query(`CREATE TABLE IF NOT EXISTS schema_migrations (
      filename   TEXT PRIMARY KEY,
      checksum   TEXT NOT NULL,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`);

    const { rows } = await client.query("SELECT filename FROM schema_migrations");
    const applied = new Set(rows.map((row) => row.filename));

    if (SHOW_STATUS) {
      for (const file of files) {
        console.log(`${applied.has(file) ? "applied " : "pending "} ${file}`);
      }
      console.log(`[migrate] ${applied.size} applied, ${files.length - applied.size} pending`);
      return;
    }

    let ran = 0;
    for (const file of files) {
      if (applied.has(file)) {
        console.log(`[migrate] skip ${file} (already applied)`);
        continue;
      }
      const sql = readFileSync(join(MIGRATIONS_DIR, file), "utf8");
      const checksum = sha256(sql);
      await client.query("BEGIN");
      try {
        await client.query(sql);
        await client.query("INSERT INTO schema_migrations (filename, checksum) VALUES ($1, $2)", [file, checksum]);
        await client.query("COMMIT");
        ran += 1;
        console.log(`[migrate] applied ${file}`);
      } catch (error) {
        await client.query("ROLLBACK");
        throw new Error(`migration ${file} failed: ${error.message}`);
      }
    }

    console.log(`[migrate] done (${ran} applied, ${files.length - ran} already applied)`);
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(`[migrate] ${error.message}`);
  process.exit(1);
});
