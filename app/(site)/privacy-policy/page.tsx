import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { pageMetadata } from "@/lib/design/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("/privacy-policy", undefined, {
  title: { absolute: "Privacy Policy — FreelancersBix" },
});

export default function PrivacyPolicyPage() {
  return <RoutePlaceholder title="Privacy Policy" />;
}
