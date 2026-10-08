import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { DigitalAdmin } from "@/components/sections/digital/DigitalAdmin";
import { DigitalAudience } from "@/components/sections/digital/DigitalAudience";
import { DigitalBreadcrumb } from "@/components/sections/digital/DigitalBreadcrumb";
import { DigitalCompanion } from "@/components/sections/digital/DigitalCompanion";
import { DigitalCTA } from "@/components/sections/digital/DigitalCTA";
import { DigitalDataEntry } from "@/components/sections/digital/DigitalDataEntry";
import { DigitalDeliverables } from "@/components/sections/digital/DigitalDeliverables";
import { DigitalFAQ } from "@/components/sections/digital/DigitalFAQ";
import { DigitalFileManagement } from "@/components/sections/digital/DigitalFileManagement";
import { DigitalHero } from "@/components/sections/digital/DigitalHero";
import { DigitalIntro } from "@/components/sections/digital/DigitalIntro";
import { DigitalLeadResearch } from "@/components/sections/digital/DigitalLeadResearch";
import { DigitalOpsFramework } from "@/components/sections/digital/DigitalOpsFramework";
import { DigitalQuality } from "@/components/sections/digital/DigitalQuality";
import { DigitalResearch } from "@/components/sections/digital/DigitalResearch";
import { DigitalServices } from "@/components/sections/digital/DigitalServices";
import { DigitalSpreadsheets } from "@/components/sections/digital/DigitalSpreadsheets";
import { DigitalTimeline } from "@/components/sections/digital/DigitalTimeline";
import { DigitalTrust } from "@/components/sections/digital/DigitalTrust";
import { DigitalVirtualAssistance } from "@/components/sections/digital/DigitalVirtualAssistance";
import { DigitalWorkflow } from "@/components/sections/digital/DigitalWorkflow";
import { DigitalWorkflowIntegration } from "@/components/sections/digital/DigitalWorkflowIntegration";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/services/digital-support", "Digital & Administrative Support", {
  description:
    "Reliable digital, administrative, and virtual support for research, documentation, data organization, and recurring business tasks.",
});

export default function DigitalSupportPage() {
  return (
    <>
      <DigitalBreadcrumb />
      <DigitalHero />
      <Reveal>
        <DigitalTrust />
      </Reveal>
      <Reveal>
        <DigitalIntro />
      </Reveal>
      <Reveal>
        <DigitalServices />
      </Reveal>
      <Reveal>
        <DigitalWorkflow />
      </Reveal>
      <Reveal>
        <DigitalVirtualAssistance />
      </Reveal>
      <Reveal>
        <DigitalDataEntry />
      </Reveal>
      <Reveal>
        <DigitalFileManagement />
      </Reveal>
      <Reveal>
        <DigitalSpreadsheets />
      </Reveal>
      <Reveal>
        <DigitalResearch />
      </Reveal>
      <Reveal>
        <DigitalLeadResearch />
      </Reveal>
      <Reveal>
        <DigitalAdmin />
      </Reveal>
      <Reveal>
        <DigitalOpsFramework />
      </Reveal>
      <Reveal>
        <DigitalQuality />
      </Reveal>
      <Reveal>
        <DigitalAudience />
      </Reveal>
      <Reveal>
        <DigitalDeliverables />
      </Reveal>
      <Reveal>
        <DigitalWorkflowIntegration />
      </Reveal>
      <Reveal>
        <DigitalCompanion />
      </Reveal>
      <Reveal>
        <DigitalTimeline />
      </Reveal>
      <Reveal>
        <DigitalFAQ />
      </Reveal>
      <Reveal>
        <DigitalCTA />
      </Reveal>
    </>
  );
}
