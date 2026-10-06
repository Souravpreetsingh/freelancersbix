import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/services/foreign-accounting", "Foreign Accounting");

export default function ForeignAccountingPage() {
  return <RoutePlaceholder title="Foreign Accounting" />;
}
