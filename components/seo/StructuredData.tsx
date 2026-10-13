import { SITE } from "@/lib/design/site";

/**
 * Site-wide JSON-LD for search engines.
 *
 * Only details already published on the site are declared (brand name, URL,
 * logo, the official email and phone, and the approved one-line description).
 * No ratings, reviews, awards, address or social profiles are invented.
 */
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: new URL("/images/freelancersbix-logo.png", SITE.url).toString(),
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.email,
      telephone: SITE.phone,
      availableLanguage: ["English"],
    },
  ],
} as const;

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  publisher: { "@type": "Organization", name: SITE.name },
} as const;

export function StructuredData() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organization, website]) }} />
  );
}
