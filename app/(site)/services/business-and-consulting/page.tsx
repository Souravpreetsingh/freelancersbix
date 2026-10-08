import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { BusinessCompetitorAnalysis } from "@/components/sections/business/BusinessCompetitorAnalysis";
import { BusinessCTA } from "@/components/sections/business/BusinessCTA";
import { BusinessDataIntegration } from "@/components/sections/business/BusinessDataIntegration";
import { BusinessDeliverables } from "@/components/sections/business/BusinessDeliverables";
import { BusinessFAQ } from "@/components/sections/business/BusinessFAQ";
import { BusinessFramework } from "@/components/sections/business/BusinessFramework";
import { BusinessHero } from "@/components/sections/business/BusinessHero";
import { BusinessIntro } from "@/components/sections/business/BusinessIntro";
import { BusinessJourney } from "@/components/sections/business/BusinessJourney";
import { BusinessMarketIntelligence } from "@/components/sections/business/BusinessMarketIntelligence";
import { BusinessMethodology } from "@/components/sections/business/BusinessMethodology";
import { BusinessPlanning } from "@/components/sections/business/BusinessPlanning";
import { BusinessQuality } from "@/components/sections/business/BusinessQuality";
import { BusinessRelated } from "@/components/sections/business/BusinessRelated";
import { BusinessServices } from "@/components/sections/business/BusinessServices";
import { BusinessTrust } from "@/components/sections/business/BusinessTrust";
import { BusinessUseCases } from "@/components/sections/business/BusinessUseCases";
import { BusinessWhoWeSupport } from "@/components/sections/business/BusinessWhoWeSupport";
import { ServiceBreadcrumb } from "@/components/sections/service/ServiceBreadcrumb";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata(
  "/services/business-and-consulting",
  "Business Research & Consulting Support",
  {
    description:
      "Structured business research, market analysis, and consulting support designed to help startups, founders, and enterprises evaluate complex markets, quantify opportunities, and execute decisive strategic steps.",
  },
);

export default function BusinessAndConsultingPage() {
  return (
    <>
      <ServiceBreadcrumb
        current="Business Research & Consulting Support"
        size="md"
        wrapperClassName="w-full px-margin-mobile md:px-margin pt-space-lg pb-space-xs"
        currentClassName="text-primary font-medium tracking-wide"
      />
      <BusinessHero />
      <Reveal>
        <BusinessTrust />
      </Reveal>
      <Reveal>
        <BusinessIntro />
      </Reveal>
      <Reveal>
        <BusinessServices />
      </Reveal>
      <Reveal>
        <BusinessFramework />
      </Reveal>
      <Reveal>
        <BusinessMarketIntelligence />
      </Reveal>
      <Reveal>
        <BusinessCompetitorAnalysis />
      </Reveal>
      <Reveal>
        <BusinessPlanning />
      </Reveal>
      <Reveal>
        <BusinessWhoWeSupport />
      </Reveal>
      <Reveal>
        <BusinessDeliverables />
      </Reveal>
      <Reveal>
        <BusinessQuality />
      </Reveal>
      <Reveal>
        <BusinessJourney />
      </Reveal>
      <Reveal>
        <BusinessUseCases />
      </Reveal>
      <Reveal>
        <BusinessMethodology />
      </Reveal>
      <Reveal>
        <BusinessDataIntegration />
      </Reveal>
      <Reveal>
        <BusinessRelated />
      </Reveal>
      <Reveal>
        <BusinessFAQ />
      </Reveal>
      <Reveal>
        <BusinessCTA />
      </Reveal>
    </>
  );
}
