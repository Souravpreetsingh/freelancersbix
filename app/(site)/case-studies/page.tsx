import { Reveal } from "@/components/motion/Reveal";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/case-studies", "Case Studies", {
  description:
    "FreelancersBix case studies are being prepared. Documented engagements across research, business, accounting and data will be published here once available.",
});

export default function CaseStudiesPage() {
  return (
    <Reveal>
      <RoutePlaceholder title="Case Studies" />
    </Reveal>
  );
}
