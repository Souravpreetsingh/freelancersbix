import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/case-studies", "Case Studies");

export default function CaseStudiesPage() {
  return <RoutePlaceholder title="Case Studies" />;
}
