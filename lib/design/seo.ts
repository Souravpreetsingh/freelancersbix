import type { Metadata } from "next";
import { SITE, isNoIndexRoute } from "@/lib/design/site";

/**
 * Open Graph fields shared by every route, declared once so the root layout and
 * page-level metadata never drift apart. Next.js replaces the Open Graph object
 * at the route segment where it is declared (only `title`/`description` fall
 * back to the page's own values), so these must be re-applied on every page to
 * keep `og:type`, `og:site_name` and `og:locale` present.
 */
/**
 * Default social share card (1200x630) used site-wide until a page supplies its
 * own `openGraph.images`. Resolved against `metadataBase`, so the relative URL
 * becomes absolute in the rendered tags.
 */
export const openGraphImage = {
  url: "/images/og-default.png",
  width: 1200,
  height: 630,
  alt: "FreelancersBix — Research. Analyse. Create. Deliver.",
} as const;

export const baseOpenGraph = {
  type: "website",
  locale: "en_US",
  siteName: SITE.name,
  images: [openGraphImage],
} satisfies Metadata["openGraph"];

/** `robots` value applied to every route listed in `NOINDEX_ROUTES`. */
export const noindexRobots = {
  index: false,
  follow: true,
} satisfies Metadata["robots"];

/**
 * Per-page metadata helper for the Phase 1 routes.
 * Every page gets an absolute-path canonical and a matching Open Graph `url`,
 * both resolved against `metadataBase`; titles fall back to the root template.
 *
 * Routes in `NOINDEX_ROUTES` automatically receive `robots: noindex` so the
 * on-page directive and the sitemap stay driven by one shared list. A page can
 * still pass its own `robots` in `extra` to override this.
 */
export function pageMetadata(pathname: string, title?: string, extra?: Metadata): Metadata {
  const description = typeof extra?.description === "string" ? extra.description : SITE.description;

  return {
    ...(title !== undefined ? { title } : {}),
    alternates: { canonical: pathname },
    ...(isNoIndexRoute(pathname) ? { robots: noindexRobots } : {}),
    ...extra,
    openGraph: { ...baseOpenGraph, ...extra?.openGraph, url: pathname },
    twitter: {
      card: "summary_large_image",
      title: title ?? SITE.title,
      description,
      images: [openGraphImage.url],
      ...extra?.twitter,
    },
  };
}
