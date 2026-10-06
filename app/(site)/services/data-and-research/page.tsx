import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/services/data-and-research", "Data & Research");

export default function DataAndResearchPage() {
  return <RoutePlaceholder title="Data & Research" />;
}
