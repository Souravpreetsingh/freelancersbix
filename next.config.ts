import path from "node:path";
import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

/**
 * Content Security Policy.
 *
 * The application is self-contained: fonts are self-hosted via `next/font`
 * and all fetches are same-origin. The one deliberate relaxation is
 * `'unsafe-inline'` for scripts/styles, which Next.js requires for its
 * hydration bootstrap scripts and inline styles unless a per-request nonce is
 * threaded through middleware. When `NEXT_PUBLIC_GA_ID` is set the Google
 * Analytics / Tag Manager origins are additionally allowed (see `gaEnabled`
 * below); otherwise the policy stays free of any third-party origin.
 *
 * A strict nonce + `'strict-dynamic'` policy is deferred: it forces every route
 * to render dynamically (opting out of static generation) and needs the nonce
 * propagated through `proxy.ts` and the root layout. Until then this policy
 * still blocks external script/style origins, objects, framing, `<base>`
 * hijacking, and cross-origin form submissions.
 */
/**
 * Google Analytics 4 origins, added only when NEXT_PUBLIC_GA_ID is configured.
 * gtag.js loads from googletagmanager.com and its beacons post to the Google
 * Analytics collect endpoints, so both `script-src` and the connect/img sources
 * must include them. When GA is unset the policy is untouched.
 */
const gaEnabled = Boolean(process.env.NEXT_PUBLIC_GA_ID);
const gaScriptOrigin = "https://www.googletagmanager.com";
const gaCollectOrigins =
  "https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `img-src 'self' data: blob:${gaEnabled ? ` ${gaCollectOrigins}` : ""}`,
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  (isProduction ? "script-src 'self' 'unsafe-inline'" : "script-src 'self' 'unsafe-inline' 'unsafe-eval'") +
    (gaEnabled ? ` ${gaScriptOrigin}` : ""),
  // Next.js dev server (Fast Refresh) uses a WebSocket back to the origin.
  (isProduction ? "connect-src 'self'" : "connect-src 'self' ws: wss:") + (gaEnabled ? ` ${gaCollectOrigins}` : ""),
  "worker-src 'self' blob:",
].join("; ");

/**
 * Baseline response headers. If the hosting platform already injects any of
 * these, remove the duplicate here rather than shipping two conflicting values.
 * HSTS is emitted only in production (the platform terminates TLS); never set
 * it for local HTTP development.
 */
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  ...(isProduction ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }] : []),
];

const nextConfig: NextConfig = {
  /**
   * A stray `package-lock.json` exists in the parent user directory, which
   * makes Next infer the wrong workspace root on this machine. Pin the
   * tracing root to this project instead.
   */
  outputFileTracingRoot: path.join(__dirname),
  /** Hide the local Next.js dev overlay badge. */
  devIndicators: false,
  /** Apply the security headers above to every response. */
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
