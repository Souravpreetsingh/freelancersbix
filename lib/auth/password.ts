/**
 * Password hashing for admin credentials — Node `scrypt`, zero dependencies.
 *
 * Stored string format (kept in sync with `scripts/lib/password.mjs` so the
 * `admin:create` CLI produces hashes this module can verify):
 *
 *   scrypt$N$r$p$<salt base64url>$<hash base64url>
 *
 * Runtime memory for scrypt is capped explicitly.
 */
import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const SCRYPT_N = 16384;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const KEY_LENGTH = 64;
const MAX_MEM = 128 * 1024 * 1024;

const scryptAsync = promisify(scrypt) as (
  password: string,
  salt: Buffer,
  keylen: number,
  options: { N: number; r: number; p: number; maxmem: number },
) => Promise<Buffer>;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const derived = await scryptAsync(password, salt, KEY_LENGTH, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
    maxmem: MAX_MEM,
  });
  return ["scrypt", SCRYPT_N, SCRYPT_R, SCRYPT_P, salt.toString("base64url"), derived.toString("base64url")].join("$");
}

function parseStored(
  stored: string,
): { salt: Buffer; hash: Buffer; options: { N: number; r: number; p: number } } | null {
  const parts = stored.split("$");
  if (parts[0] !== "scrypt" || parts.length !== 6) return null;
  const N = Number(parts[1]);
  const r = Number(parts[2]);
  const p = Number(parts[3]);
  if (!Number.isInteger(N) || !Number.isInteger(r) || !Number.isInteger(p)) return null;
  return {
    salt: Buffer.from(parts[4], "base64url"),
    hash: Buffer.from(parts[5], "base64url"),
    options: { N, r, p },
  };
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parsed = parseStored(stored);
  if (!parsed) return false;
  try {
    const derived = await scryptAsync(password, parsed.salt, parsed.hash.length, {
      ...parsed.options,
      maxmem: MAX_MEM,
    });
    return derived.length === parsed.hash.length && timingSafeEqual(derived, parsed.hash);
  } catch {
    return false;
  }
}

/** Enforce a sane minimum so the CLI and runtime agree on acceptable input. */
export function isStrongPassword(password: string): boolean {
  return typeof password === "string" && password.length >= 12;
}
