import type { Metadata } from "next";
import { ContentAudience } from "@/components/sections/content/ContentAudience";
import { ContentBusiness } from "@/components/sections/content/ContentBusiness";
import { ContentChecklist } from "@/components/sections/content/ContentChecklist";
import { ContentConnections } from "@/components/sections/content/ContentConnections";
import { ContentCTA } from "@/components/sections/content/ContentCTA";
import { ContentDeliverables } from "@/components/sections/content/ContentDeliverables";
import { ContentEngagement } from "@/components/sections/content/ContentEngagement";
import { ContentFAQ } from "@/components/sections/content/ContentFAQ";
import { ContentHero } from "@/components/sections/content/ContentHero";
import { ContentIntro } from "@/components/sections/content/ContentIntro";
import { ContentPipeline } from "@/components/sections/content/ContentPipeline";
import { ContentProofread } from "@/components/sections/content/ContentProofread";
import { ContentQuality } from "@/components/sections/content/ContentQuality";
import { ContentServices } from "@/components/sections/content/ContentServices";
import { ContentStructure } from "@/components/sections/content/ContentStructure";
import { ContentTechnical } from "@/components/sections/content/ContentTechnical";
import { ContentTone } from "@/components/sections/content/ContentTone";
import { ContentTrust } from "@/components/sections/content/ContentTrust";
import { ContentTypes } from "@/components/sections/content/ContentTypes";
import { ContentWorkflow } from "@/components/sections/content/ContentWorkflow";
import { ServiceBreadcrumb } from "@/components/sections/service/ServiceBreadcrumb";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/services/content-and-writing", "Content & Professional Writing", {
  description:
    "Research-driven writing, professional documentation, and polished content engineered for forward-thinking enterprises, researchers, and global organizations.",
});

export default function ContentAndWritingPage() {
  return (
    <>
      <ServiceBreadcrumb
        current="Content & Professional Writing"
        variant="slash"
        size="md"
        wrapperClassName="w-full px-margin-mobile md:px-margin pt-space-md pb-space-sm"
        currentClassName="text-whiteout font-medium"
      />
      <ContentHero />
      <ContentTrust />
      <ContentIntro />
      <ContentServices />
      <ContentWorkflow />
      <ContentQuality />
      <ContentBusiness />
      <ContentPipeline />
      <ContentTechnical />
      <ContentProofread />
      <ContentTypes />
      <ContentAudience />
      <ContentStructure />
      <ContentTone />
      <ContentChecklist />
      <ContentDeliverables />
      <ContentConnections />
      <ContentEngagement />
      <ContentFAQ />
      <ContentCTA />
    </>
  );
}
