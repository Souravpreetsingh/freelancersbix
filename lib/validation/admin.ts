import { z } from "zod";
import { optionalText } from "@/lib/validation/quote";

export const adminLoginSchema = z.object({
  email: z.email().trim().max(254).toLowerCase(),
  password: z.string().min(1).max(200),
  /** Honeypot field. Never rendered by the login form. */
  website: optionalText(200),
});

export function statusUpdateSchema<const T extends readonly string[]>(statuses: T) {
  return z.object({
    id: z.uuid(),
    status: z.enum(statuses),
  });
}
