import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/services/academic-and-research", "Academic & Research");

export default function AcademicAndResearchPage() {
  return <RoutePlaceholder title="Academic & Research" />;
}
