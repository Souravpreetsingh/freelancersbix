/** Shared PostgreSQL connection pool for store modules. */

import { Pool } from "pg";

let pool: Pool | null = null;
let poolFailed = false;

export function getPool(): Pool | null {
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

export function isDbConfigured(): boolean {
  return getPool() !== null;
}