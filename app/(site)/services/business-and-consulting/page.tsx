import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/services/business-and-consulting", "Business & Consulting");

export default function BusinessAndConsultingPage() {
  return <RoutePlaceholder title="Business & Consulting" />;
}
