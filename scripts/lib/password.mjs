/**
 * CLI copy of the runtime scrypt password format (lib/auth/password.ts).
 * Both must emit/accept the same 6-field `scrypt$N$r$p$salt$hash` string.
 */
import { randomBytes, scrypt } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);

export async function hashPasswordForCli(password) {
  const salt = randomBytes(16);
  const derived = await scryptAsync(password, salt, 64, {
    N: 16384,
    r: 8,
    p: 1,
    maxmem: 128 * 1024 * 1024,
  });
  return ["scrypt", 16384, 8, 1, salt.toString("base64url"), derived.toString("base64url")].join("$");
}

export function isStrongPasswordForCli(password) {
  return typeof password === "string" && password.length >= 12;
}
