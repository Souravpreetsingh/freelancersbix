import { Reveal } from "@/components/motion/Reveal";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/privacy-policy", undefined, {
  title: { absolute: "Privacy Policy — FreelancersBix" },
});

export default function PrivacyPolicyPage() {
  return (
    <Reveal>
      <RoutePlaceholder title="Privacy Policy" />
    </Reveal>
  );
}
