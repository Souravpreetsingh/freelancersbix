import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/services", "Services");

export default function ServicesPage() {
  return <RoutePlaceholder title="Services" />;
}
