import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/careers", "Careers");

export default function CareersPage() {
  return <RoutePlaceholder title="Careers" />;
}
