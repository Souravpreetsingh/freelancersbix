import type { Metadata } from "next";
import { SITE } from "@/lib/design/site";

/**
 * Open Graph fields shared by every route, declared once so the root layout and
 * page-level metadata never drift apart. Next.js replaces the Open Graph object
 * at the route segment where it is declared (only `title`/`description` fall
 * back to the page's own values), so these must be re-applied on every page to
 * keep `og:type`, `og:site_name` and `og:locale` present.
 */
export const baseOpenGraph = {
  type: "website",
  locale: "en_US",
  siteName: SITE.name,
} as const;

/**
 * Per-page metadata helper for the Phase 1 routes.
 * Every page gets an absolute-path canonical and a matching Open Graph `url`,
 * both resolved against `metadataBase`; titles fall back to the root template.
 */
export function pageMetadata(pathname: string, title?: string, extra?: Metadata): Metadata {
  return {
    ...(title !== undefined ? { title } : {}),
    alternates: { canonical: pathname },
    ...extra,
    openGraph: { ...baseOpenGraph, ...extra?.openGraph, url: pathname },
  };
}
