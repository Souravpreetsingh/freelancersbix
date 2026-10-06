import type { MetadataRoute } from "next";
import { SITE, allRoutes } from "@/lib/design/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return allRoutes.map((route) => ({
    url: new URL(route, SITE.url).toString(),
    lastModified,
  }));
}
