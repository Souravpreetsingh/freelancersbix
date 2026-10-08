import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { StartupBusinessModel } from "@/components/sections/startup/StartupBusinessModel";
import { StartupBusinessPlan } from "@/components/sections/startup/StartupBusinessPlan";
import { StartupConnections } from "@/components/sections/startup/StartupConnections";
import { StartupCTA } from "@/components/sections/startup/StartupCTA";
import { StartupDeliverables } from "@/components/sections/startup/StartupDeliverables";
import { StartupFAQ } from "@/components/sections/startup/StartupFAQ";
import { StartupHero } from "@/components/sections/startup/StartupHero";
import { StartupIntro } from "@/components/sections/startup/StartupIntro";
import { StartupJourney } from "@/components/sections/startup/StartupJourney";
import { StartupMarketEntry } from "@/components/sections/startup/StartupMarketEntry";
import { StartupOperationalSupport } from "@/components/sections/startup/StartupOperationalSupport";
import { StartupPitchDeck } from "@/components/sections/startup/StartupPitchDeck";
import { StartupProcessDocs } from "@/components/sections/startup/StartupProcessDocs";
import { StartupQuality } from "@/components/sections/startup/StartupQuality";
import { StartupRelated } from "@/components/sections/startup/StartupRelated";
import { StartupResearch } from "@/components/sections/startup/StartupResearch";
import { StartupServices } from "@/components/sections/startup/StartupServices";
import { StartupTrust } from "@/components/sections/startup/StartupTrust";
import { StartupWhoWeSupport } from "@/components/sections/startup/StartupWhoWeSupport";
import { StartupWorkflow } from "@/components/sections/startup/StartupWorkflow";
import { ServiceBreadcrumb } from "@/components/sections/service/ServiceBreadcrumb";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/services/business-and-startup", "Business & Startup Support", {
  description:
    "Practical research, planning and professional business support for founders, startups, small businesses and growing organizations.",
});

export default function BusinessAndStartupPage() {
  return (
    <>
      <ServiceBreadcrumb current="Business & Startup Support" />
      <StartupHero />
      <Reveal>
        <StartupTrust />
      </Reveal>
      <Reveal>
        <StartupIntro />
      </Reveal>
      <Reveal>
        <StartupServices />
      </Reveal>
      <Reveal>
        <StartupJourney />
      </Reveal>
      <Reveal>
        <StartupBusinessModel />
      </Reveal>
      <Reveal>
        <StartupResearch />
      </Reveal>
      <Reveal>
        <StartupBusinessPlan />
      </Reveal>
      <Reveal>
        <StartupPitchDeck />
      </Reveal>
      <Reveal>
        <StartupMarketEntry />
      </Reveal>
      <Reveal>
        <StartupWhoWeSupport />
      </Reveal>
      <Reveal>
        <StartupDeliverables />
      </Reveal>
      <Reveal>
        <StartupQuality />
      </Reveal>
      <Reveal>
        <StartupProcessDocs />
      </Reveal>
      <Reveal>
        <StartupOperationalSupport />
      </Reveal>
      <Reveal>
        <StartupConnections />
      </Reveal>
      <Reveal>
        <StartupWorkflow />
      </Reveal>
      <Reveal>
        <StartupFAQ />
      </Reveal>
      <Reveal>
        <StartupRelated />
      </Reveal>
      <Reveal>
        <StartupCTA />
      </Reveal>
    </>
  );
}
