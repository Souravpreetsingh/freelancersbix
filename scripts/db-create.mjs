/**
 * Creates the project database if it does not exist yet.
 *
 * Connects to the maintenance `postgres` database (host/port/credentials come
 * from `DATABASE_URL`) and issues `CREATE DATABASE` for its database name.
 * Safe to run repeatedly.
 *
 * Usage: node scripts/db-create.mjs
 */
import pg from "pg";
import { loadEnv } from "./lib/env.mjs";

loadEnv();

const { Client } = pg;

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL is not set (see .env.example).");

  const url = new URL(connectionString);
  const dbName = url.pathname.replace(/^\/+/, "");
  if (!dbName) throw new Error("DATABASE_URL does not include a database name.");

  const maintenance = new URL(connectionString);
  maintenance.pathname = "/postgres";

  const client = new Client({ connectionString: maintenance.toString() });
  await client.connect();
  try {
    const { rowCount } = await client.query("SELECT 1 FROM pg_database WHERE datname = $1", [dbName]);
    if (rowCount === 0) {
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`[db-create] created database "${dbName}"`);
    } else {
      console.log(`[db-create] database "${dbName}" already exists`);
    }
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(`[db-create] ${error.message}`);
  process.exit(1);
});
