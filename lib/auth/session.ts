/**
 * Server-side admin sessions.
 *
 * The browser holds a random 256-bit bearer token in an httpOnly cookie; the
 * database stores only its SHA-256 hash. Validation is always DB-backed, so a
 * revoked/expired session cannot be replayed.
 */
import { createHash, randomBytes } from "node:crypto";
import { getPool } from "@/lib/db/db";
import { SESSION_COOKIE } from "@/lib/auth/constants";

export const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const LAST_SEEN_REFRESH_MS = 10 * 60 * 1000;

export interface AdminIdentity {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function newSessionToken(): string {
  return randomBytes(32).toString("base64url");
}

export function hashSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export function sessionCookieOptions(): {
  httpOnly: boolean;
  sameSite: "lax";
  secure: boolean;
  path: string;
  maxAge: number;
} {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  };
}

export async function createSession(input: {
  adminId: string;
  token: string;
  ip?: string | null;
  userAgent?: string | null;
}): Promise<void> {
  const pool = getPool();
  if (!pool) throw new Error("Database is not configured.");
  await pool.query(
    `INSERT INTO sessions (admin_id, token_hash, ip, user_agent, expires_at)
     VALUES ($1, $2, $3, $4, now() + ($5 || ' milliseconds')::interval)`,
    [input.adminId, hashSessionToken(input.token), input.ip ?? null, input.userAgent ?? null, SESSION_TTL_MS],
  );
}

export async function getAdminByToken(token: string | null | undefined): Promise<AdminIdentity | null> {
  if (!token) return null;
  const pool = getPool();
  if (!pool) return null;

  const tokenHash = hashSessionToken(token);
  const { rows } = await pool.query<{
    id: string;
    name: string;
    email: string;
    role: string;
    last_seen_at: Date;
  }>(
    `SELECT admins.id, admins.name, admins.email, admins.role, sessions.last_seen_at
     FROM sessions
     JOIN admins ON admins.id = sessions.admin_id
     WHERE sessions.token_hash = $1`,
    [tokenHash],
  );

  const row = rows[0];
  if (!row) return null;

  if (row.last_seen_at.getTime() + SESSION_TTL_MS < Date.now()) {
    await deleteSessionByToken(token);
    return null;
  }

  if (Date.now() - row.last_seen_at.getTime() > LAST_SEEN_REFRESH_MS) {
    void pool
      .query("UPDATE sessions SET last_seen_at = now() WHERE token_hash = $1", [tokenHash])
      .catch(() => undefined);
  }

  return { id: row.id, name: row.name, email: row.email, role: row.role };
}

export async function deleteSessionByToken(token: string): Promise<void> {
  const pool = getPool();
  if (!pool) return;
  await pool.query("DELETE FROM sessions WHERE token_hash = $1", [hashSessionToken(token)]);
}

export { SESSION_COOKIE };
