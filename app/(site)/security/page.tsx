import { Reveal } from "@/components/motion/Reveal";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/security", "Security", {
  description:
    "How FreelancersBix protects client data and materials — confidentiality controls, secure handling and responsible information practices across every engagement.",
});

export default function SecurityPage() {
  return (
    <Reveal>
      <RoutePlaceholder title="Security" />
    </Reveal>
  );
}
