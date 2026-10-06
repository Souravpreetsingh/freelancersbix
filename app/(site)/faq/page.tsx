import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/faq", "FAQ & Client Information Hub");

export default function FaqPage() {
  return <RoutePlaceholder title="FAQ & Client Information Hub" />;
}
