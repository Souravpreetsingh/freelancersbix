import type { Metadata } from "next";
import { DataAcademic } from "@/components/sections/data/DataAcademic";
import { DataBusiness } from "@/components/sections/data/DataBusiness";
import { DataCleaning } from "@/components/sections/data/DataCleaning";
import { DataCTA } from "@/components/sections/data/DataCTA";
import { DataDeliverables } from "@/components/sections/data/DataDeliverables";
import { DataEngagement } from "@/components/sections/data/DataEngagement";
import { DataExcel } from "@/components/sections/data/DataExcel";
import { DataFAQ } from "@/components/sections/data/DataFAQ";
import { DataHero } from "@/components/sections/data/DataHero";
import { DataIntro } from "@/components/sections/data/DataIntro";
import { DataMethod } from "@/components/sections/data/DataMethod";
import { DataPillars } from "@/components/sections/data/DataPillars";
import { DataQuality } from "@/components/sections/data/DataQuality";
import { DataRelated } from "@/components/sections/data/DataRelated";
import { DataReportStructure } from "@/components/sections/data/DataReportStructure";
import { DataServices } from "@/components/sections/data/DataServices";
import { DataStatistics } from "@/components/sections/data/DataStatistics";
import { DataSurvey } from "@/components/sections/data/DataSurvey";
import { DataTopology } from "@/components/sections/data/DataTopology";
import { DataTrust } from "@/components/sections/data/DataTrust";
import { DataVisualizations } from "@/components/sections/data/DataVisualizations";
import { DataWorkflow } from "@/components/sections/data/DataWorkflow";
import { ServiceBreadcrumb } from "@/components/sections/service/ServiceBreadcrumb";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/services/data-and-research", "Data & Research", {
  description:
    "Data organization, research analysis, visualization, and analytical interpretation support for businesses, researchers, professionals, and demanding enterprise project requirements.",
});

export default function DataAndResearchPage() {
  return (
    <>
      <ServiceBreadcrumb
        current="Data & Research Services"
        variant="chevron"
        size="md"
        wrapperClassName="w-full px-margin-mobile md:px-margin pt-space-md pb-space-sm bg-surface-container-lowest/40 border-b border-whiteout/5"
        currentClassName="text-whiteout font-medium"
      />
      <DataHero />
      <DataTrust />
      <DataIntro />
      <DataServices />
      <DataWorkflow />
      <DataQuality />
      <DataCleaning />
      <DataExcel />
      <DataVisualizations />
      <DataMethod />
      <DataSurvey />
      <DataStatistics />
      <DataReportStructure />
      <DataBusiness />
      <DataAcademic />
      <DataDeliverables />
      <DataPillars />
      <DataTopology />
      <DataRelated />
      <DataEngagement />
      <DataFAQ />
      <DataCTA />
    </>
  );
}
