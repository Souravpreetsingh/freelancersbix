import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/contact", "Contact & Get a Quote");

export default function ContactPage() {
  return <RoutePlaceholder title="Contact & Get a Quote" />;
}
