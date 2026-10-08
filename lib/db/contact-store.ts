/** Contact-message persistence. Config-gated like the quote store. */

import { getPool } from "@/lib/db/db";
import type { ContactMessage, ContactStatus } from "@/lib/validation/contact";

export type CreateContactResult = { ok: true; id: string } | { ok: false; code: "UNCONFIGURED" | "UNREACHABLE" };

export interface ContactRecord {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: ContactStatus;
  createdAt: string;
  updatedAt: string;
}

export async function createContactMessage(message: ContactMessage): Promise<CreateContactResult> {
  const pool = getPool();
  if (!pool) return { ok: false, code: "UNCONFIGURED" };
  try {
    const { rows } = await pool.query<{ id: string }>(
      `INSERT INTO contacts (name, email, phone, subject, message, status)
       VALUES ($1, $2, $3, $4, $5, 'NEW')
       RETURNING id`,
      [message.name, message.email, message.phone ?? null, message.subject ?? null, message.message],
    );
    return { ok: true, id: rows[0].id };
  } catch {
    return { ok: false, code: "UNREACHABLE" };
  }
}

export async function listContacts(): Promise<ContactRecord[]> {
  const pool = getPool();
  if (!pool) return [];
  const { rows } = await pool.query(
    `SELECT id, name, email, phone, subject, message, status, created_at, updated_at
     FROM contacts
     ORDER BY created_at DESC`,
  );
  return rows.map(mapContactRow);
}

export async function getContact(id: string): Promise<ContactRecord | null> {
  const pool = getPool();
  if (!pool) return null;
  const { rows } = await pool.query(
    `SELECT id, name, email, phone, subject, message, status, created_at, updated_at
     FROM contacts
     WHERE id = $1`,
    [id],
  );
  return rows[0] ? mapContactRow(rows[0]) : null;
}

export async function updateContactStatus(id: string, status: ContactStatus): Promise<boolean> {
  const pool = getPool();
  if (!pool) return false;
  const { rowCount } = await pool.query(
    `UPDATE contacts SET status = $2, updated_at = now() WHERE id = $1`,
    [id, status],
  );
  return rowCount === 1;
}

export async function contactStatusCounts(): Promise<Record<string, number>> {
  const pool = getPool();
  if (!pool) return {};
  const { rows } = await pool.query<{ status: string; count: string }>(
    `SELECT status, count(*)::text AS count FROM contacts GROUP BY status`,
  );
  const counts: Record<string, number> = {};
  for (const row of rows) counts[row.status] = Number(row.count);
  return counts;
}

function mapContactRow(row: Record<string, unknown>): ContactRecord {
  return {
    id: String(row.id),
    name: String(row.name),
    email: String(row.email),
    phone: row.phone == null ? null : String(row.phone),
    subject: row.subject == null ? null : String(row.subject),
    message: String(row.message),
    status: row.status as ContactStatus,
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}