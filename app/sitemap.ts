import type { MetadataRoute } from "next";
import { SITE, NOINDEX_ROUTES, allRoutes } from "@/lib/design/site";

/**
 * Canonical, indexable public routes only. Routes in `NOINDEX_ROUTES` are
 * filtered out so the sitemap never advertises a page that declares
 * `robots: noindex`. `allRoutes` lists page routes only, so `/robots.txt` and
 * `/sitemap.xml` are never part of this filtering.
 */
const sitemapRoutes = allRoutes.filter((route) => !(NOINDEX_ROUTES as readonly string[]).includes(route));

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: new URL(route, SITE.url).toString(),
  }));
}
