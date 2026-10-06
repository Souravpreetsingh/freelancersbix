import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/services/business-and-startup", "Business & Startup");

export default function BusinessAndStartupPage() {
  return <RoutePlaceholder title="Business & Startup" />;
}
