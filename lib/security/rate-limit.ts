/**
 * Minimal in-memory sliding-window rate limiter for the quote endpoint.
 *
 * Scoped to a single server instance (suitable for a single Next/Vercel
 * function). Production multi-instance or serverless fleets should back this
 * with shared state (e.g. Redis/Upstash) — the API surface below is kept
 * small so the swap is contained.
 */

interface Window {
  hits: number[];
  max: number;
  windowMs: number;
}

const buckets = new Map<string, Window>();

const DEFAULT_MAX = 10;
const DEFAULT_WINDOW_MS = 60 * 60 * 1000;

export function rateLimit(input: { key: string; max?: number; windowMs?: number }): boolean {
  const now = Date.now();
  const max = input.max ?? DEFAULT_MAX;
  const windowMs = input.windowMs ?? DEFAULT_WINDOW_MS;

  const bucket = buckets.get(input.key) ?? { hits: [], max, windowMs };
  bucket.hits = bucket.hits.filter((ts) => now - ts < bucket.windowMs);

  if (bucket.hits.length >= bucket.max) {
    buckets.set(input.key, bucket);
    return false;
  }

  bucket.hits.push(now);
  buckets.set(input.key, bucket);
  return true;
}

/** Best-effort client endpoint using forwarding headers set by a proxy. */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** Opportunistic prune so the map cannot grow unbounded. */
export function pruneRateLimitBuckets(): void {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    bucket.hits = bucket.hits.filter((ts) => now - ts < bucket.windowMs);
    if (bucket.hits.length === 0) buckets.delete(key);
  }
}
