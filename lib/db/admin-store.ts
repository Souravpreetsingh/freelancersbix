/** Admin-user persistence used by the login flow. */

import { getPool } from "@/lib/db/db";

export interface AdminRecord {
  id: string;
  name: string;
  email: string;
  role: string;
  passwordHash: string;
  createdAt: string;
}

export async function findAdminByEmail(email: string): Promise<AdminRecord | null> {
  const pool = getPool();
  if (!pool) return null;
  const { rows } = await pool.query(
    `SELECT id, name, email, role, password_hash, created_at
     FROM admins
     WHERE email = $1
     LIMIT 1`,
    [email.toLowerCase()],
  );
  const row = rows[0];
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
    passwordHash: row.password_hash,
    createdAt: row.created_at,
  };
}

export async function countAdmins(): Promise<number> {
  const pool = getPool();
  if (!pool) return 0;
  const { rows } = await pool.query<{ count: string }>("SELECT count(*)::text AS count FROM admins");
  return Number(rows[0]?.count ?? 0);
}