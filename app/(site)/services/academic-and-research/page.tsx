import type { Metadata } from "next";
import { AcademicCTA } from "@/components/sections/academic/AcademicCTA";
import { AcademicDataInterface } from "@/components/sections/academic/AcademicDataInterface";
import { AcademicDeliverables } from "@/components/sections/academic/AcademicDeliverables";
import { AcademicExpectations } from "@/components/sections/academic/AcademicExpectations";
import { AcademicFAQ } from "@/components/sections/academic/AcademicFAQ";
import { AcademicFramework } from "@/components/sections/academic/AcademicFramework";
import { AcademicHero } from "@/components/sections/academic/AcademicHero";
import { AcademicIntegrity } from "@/components/sections/academic/AcademicIntegrity";
import { AcademicIntro } from "@/components/sections/academic/AcademicIntro";
import { AcademicLifecycle } from "@/components/sections/academic/AcademicLifecycle";
import { AcademicQuality } from "@/components/sections/academic/AcademicQuality";
import { AcademicRelated } from "@/components/sections/academic/AcademicRelated";
import { AcademicServices } from "@/components/sections/academic/AcademicServices";
import { AcademicTrust } from "@/components/sections/academic/AcademicTrust";
import { AcademicWhoWeSupport } from "@/components/sections/academic/AcademicWhoWeSupport";
import { AcademicWorkflow } from "@/components/sections/academic/AcademicWorkflow";
import { ServiceBreadcrumb } from "@/components/sections/service/ServiceBreadcrumb";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/services/academic-and-research", "Academic & Research Support", {
  description:
    "Professional research and academic support designed to help organize complex requirements, strengthen research workflows, and transform vast academic data into clear, structured deliverables.",
});

export default function AcademicAndResearchPage() {
  return (
    <>
      <ServiceBreadcrumb
        current="Academic & Research Support"
        variant="chevron"
        size="md"
        currentClassName="text-primary font-medium tracking-wide"
      />
      <AcademicHero />
      <AcademicTrust />
      <AcademicIntro />
      <AcademicServices />
      <AcademicLifecycle />
      <AcademicFramework />
      <AcademicWhoWeSupport />
      <AcademicExpectations />
      <AcademicDeliverables />
      <AcademicQuality />
      <AcademicIntegrity />
      <AcademicDataInterface />
      <AcademicWorkflow />
      <AcademicFAQ />
      <AcademicRelated />
      <AcademicCTA />
    </>
  );
}
