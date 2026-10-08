/**
 * Create (or update) an admin user for the FreelancersBix admin system.
 *
 * Usage:
 *   node scripts/create-admin.mjs --email admin@example.com --password '<long password>' [--name "Name"] [--role admin|super_admin]
 *
 * The password is required (min 12 chars) and is stored only as a scrypt
 * hash. It is never echoed or committed. If no --name is given the email
 * prefix is used.
 */
import pg from "pg";
import { loadEnv } from "./lib/env.mjs";
import { hashPasswordForCli, isStrongPasswordForCli } from "./lib/password.mjs";

loadEnv();

const { Client } = pg;

function flag(name, required = false) {
  const index = process.argv.indexOf(`--${name}`);
  const value = index !== -1 ? process.argv[index + 1] : undefined;
  if (required && (!value || value.startsWith("--"))) throw new Error(`--${name} is required.`);
  return value ?? null;
}

async function main() {
  const email = flag("email", true).trim().toLowerCase();
  const password = flag("password", true);
  const name = flag("name")?.trim() ?? email.split("@")[0];
  const role = flag("role") ?? "admin";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Invalid email address.");
  if (!["admin", "super_admin"].includes(role)) throw new Error("role must be 'admin' or 'super_admin'.");
  if (!isStrongPasswordForCli(password)) {
    throw new Error("Password must be at least 12 characters long.");
  }

  const passwordHash = await hashPasswordForCli(password);

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL is not set (see .env.example).");
  const client = new Client({ connectionString });
  await client.connect();
  try {
    const { rows } = await client.query(
      `INSERT INTO admins (name, email, password_hash, role)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (email) DO UPDATE
         SET name = EXCLUDED.name,
             password_hash = EXCLUDED.password_hash,
             role = EXCLUDED.role,
             updated_at = now()
       RETURNING id, email, role`,
      [name, email, passwordHash, role],
    );
    console.log(`[admin:create] admin ready: ${rows[0].email} (${rows[0].role}, id=${rows[0].id})`);
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(`[admin:create] ${error.message}`);
  process.exit(1);
});
