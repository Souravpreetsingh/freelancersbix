/** Career/talent application persistence. Config-gated like the quote store. */

import { getPool } from "@/lib/db/db";
import type { CareerApplication, CareerDiscipline } from "@/lib/validation/career";

export type CreateCareerResult = { ok: true; id: string } | { ok: false; code: "UNCONFIGURED" | "UNREACHABLE" };

export interface CareerRecord {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  discipline: CareerDiscipline;
  experience: string | null;
  role: string | null;
  portfolioUrl: string | null;
  resumeFilename: string | null;
  summary: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export async function createCareerApplication(application: CareerApplication): Promise<CreateCareerResult> {
  const pool = getPool();
  if (!pool) return { ok: false, code: "UNCONFIGURED" };
  try {
    const { rows } = await pool.query<{ id: string }>(
      `INSERT INTO career_applications (
         name, email, phone, discipline, experience, role, portfolio_url, resume_filename, summary, status
       ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'NEW')
       RETURNING id`,
      [
        application.name,
        application.email,
        application.phone ?? null,
        application.discipline,
        application.experience ?? null,
        application.role ?? null,
        application.portfolioUrl ?? null,
        application.resumeFilename ?? null,
        application.summary ?? null,
      ],
    );
    return { ok: true, id: rows[0].id };
  } catch {
    return { ok: false, code: "UNREACHABLE" };
  }
}

export async function listCareerApplications(): Promise<CareerRecord[]> {
  const pool = getPool();
  if (!pool) return [];
  const { rows } = await pool.query(
    `SELECT id, name, email, phone, discipline, experience, role, portfolio_url, resume_filename, summary, status, created_at, updated_at
     FROM career_applications
     ORDER BY created_at DESC`,
  );
  return rows.map(mapCareerRow);
}

export async function getCareerApplication(id: string): Promise<CareerRecord | null> {
  const pool = getPool();
  if (!pool) return null;
  const { rows } = await pool.query(
    `SELECT id, name, email, phone, discipline, experience, role, portfolio_url, resume_filename, summary, status, created_at, updated_at
     FROM career_applications
     WHERE id = $1`,
    [id],
  );
  return rows[0] ? mapCareerRow(rows[0]) : null;
}

export async function updateCareerStatus(id: string, status: string): Promise<boolean> {
  const pool = getPool();
  if (!pool) return false;
  const { rowCount } = await pool.query(
    `UPDATE career_applications SET status = $2, updated_at = now() WHERE id = $1`,
    [id, status],
  );
  return rowCount === 1;
}

export async function careerStatusCounts(): Promise<Record<string, number>> {
  const pool = getPool();
  if (!pool) return {};
  const { rows } = await pool.query<{ status: string; count: string }>(
    `SELECT status, count(*)::text AS count FROM career_applications GROUP BY status`,
  );
  const counts: Record<string, number> = {};
  for (const row of rows) counts[row.status] = Number(row.count);
  return counts;
}

function mapCareerRow(row: Record<string, unknown>): CareerRecord {
  return {
    id: String(row.id),
    name: String(row.name),
    email: String(row.email),
    phone: row.phone == null ? null : String(row.phone),
    discipline: row.discipline as CareerDiscipline,
    experience: row.experience == null ? null : String(row.experience),
    role: row.role == null ? null : String(row.role),
    portfolioUrl: row.portfolio_url == null ? null : String(row.portfolio_url),
    resumeFilename: row.resume_filename == null ? null : String(row.resume_filename),
    summary: row.summary == null ? null : String(row.summary),
    status: String(row.status),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}