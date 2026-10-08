import { Reveal } from "@/components/motion/Reveal";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/security", "Security");

export default function SecurityPage() {
  return (
    <Reveal>
      <RoutePlaceholder title="Security" />
    </Reveal>
  );
}
