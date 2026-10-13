import { SITE } from "@/lib/design/site";

export interface BreadcrumbItem {
  /** Visible breadcrumb label, matching the on-page text exactly. */
  name: string;
  /** Absolute in-app path beginning with "/" (e.g. "/services"). */
  path: string;
}

/**
 * Reusable BreadcrumbList JSON-LD. Emits absolute canonical URLs resolved
 * against the site origin, in the order supplied. Only render this next to the
 * breadcrumb the visitor actually sees, using the same labels and order.
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).toString(),
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
