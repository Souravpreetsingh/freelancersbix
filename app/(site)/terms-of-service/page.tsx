import { Reveal } from "@/components/motion/Reveal";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/terms-of-service", "Terms of Service", {
  description:
    "The terms governing use of the FreelancersBix website and professional services, including scope, client responsibilities, payment and liability.",
});

export default function TermsOfServicePage() {
  return (
    <Reveal>
      <RoutePlaceholder title="Terms of Service" />
    </Reveal>
  );
}
