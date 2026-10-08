import { Reveal } from "@/components/motion/Reveal";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/insights", "Insights Knowledge Hub");

export default function InsightsPage() {
  return (
    <Reveal>
      <RoutePlaceholder title="Insights Knowledge Hub" />
    </Reveal>
  );
}
