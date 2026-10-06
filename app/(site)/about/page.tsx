import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/about", "About Us");

export default function AboutPage() {
  return <RoutePlaceholder title="About Us" />;
}
