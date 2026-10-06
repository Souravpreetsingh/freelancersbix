import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/services/digital-support", "Digital Support");

export default function DigitalSupportPage() {
  return <RoutePlaceholder title="Digital Support" />;
}
