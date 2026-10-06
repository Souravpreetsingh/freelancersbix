import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/terms-of-service", "Terms of Service");

export default function TermsOfServicePage() {
  return <RoutePlaceholder title="Terms of Service" />;
}
