import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/services/content-and-writing", "Content & Writing");

export default function ContentAndWritingPage() {
  return <RoutePlaceholder title="Content & Writing" />;
}
