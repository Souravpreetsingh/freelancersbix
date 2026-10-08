import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { ForeignAudience } from "@/components/sections/foreign/ForeignAudience";
import { ForeignBenefits } from "@/components/sections/foreign/ForeignBenefits";
import { ForeignCTA } from "@/components/sections/foreign/ForeignCTA";
import { ForeignDashboard } from "@/components/sections/foreign/ForeignDashboard";
import { ForeignFAQ } from "@/components/sections/foreign/ForeignFAQ";
import { ForeignHero } from "@/components/sections/foreign/ForeignHero";
import { ForeignIntro } from "@/components/sections/foreign/ForeignIntro";
import { ForeignQuality } from "@/components/sections/foreign/ForeignQuality";
import { ForeignServices } from "@/components/sections/foreign/ForeignServices";
import { ForeignTools } from "@/components/sections/foreign/ForeignTools";
import { ForeignWorkflow } from "@/components/sections/foreign/ForeignWorkflow";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/services/foreign-accounting", "Foreign Accounting", {
  description:
    "Structured bookkeeping, financial administration, and reporting support designed to help businesses keep their multi-entity and international accounting operations impeccably organized.",
});

export default function ForeignAccountingPage() {
  return (
    <>
      <ForeignHero />
      <Reveal>
        <ForeignIntro />
      </Reveal>
      <Reveal>
        <ForeignServices />
      </Reveal>
      <Reveal>
        <ForeignWorkflow />
      </Reveal>
      <Reveal>
        <ForeignDashboard />
      </Reveal>
      <Reveal>
        <ForeignAudience />
      </Reveal>
      <Reveal>
        <ForeignBenefits />
      </Reveal>
      <Reveal>
        <ForeignTools />
      </Reveal>
      <Reveal>
        <ForeignQuality />
      </Reveal>
      <Reveal>
        <ForeignFAQ />
      </Reveal>
      <Reveal>
        <ForeignCTA />
      </Reveal>
    </>
  );
}
