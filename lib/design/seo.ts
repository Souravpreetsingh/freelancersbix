import type { Metadata } from "next";

/**
 * Per-page metadata helper for the Phase 1 routes.
 * Every page gets an absolute-path canonical URL resolved against
 * `metadataBase`; titles fall back to the root title template.
 */
export function pageMetadata(pathname: string, title?: string, extra?: Metadata): Metadata {
  return {
    ...(title !== undefined ? { title } : {}),
    alternates: { canonical: pathname },
    ...extra,
  };
}
