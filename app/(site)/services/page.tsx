import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { AccountingDeepDive } from "@/components/sections/services/AccountingDeepDive";
import { HowToChoose } from "@/components/sections/services/HowToChoose";
import { ServiceCategories } from "@/components/sections/services/ServiceCategories";
import { ServicesApproach } from "@/components/sections/services/ServicesApproach";
import { ServicesCTA } from "@/components/sections/services/ServicesCTA";
import { ServicesFAQ } from "@/components/sections/services/ServicesFAQ";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesSubnav } from "@/components/sections/services/ServicesSubnav";
import { WhyServices } from "@/components/sections/services/WhyServices";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/services", "Services", {
  description:
    "From academic research and business consulting to foreign accounting, data analysis and digital support, FreelancersBix provides structured professional services designed around your exact operational goals.",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesSubnav />
      <Reveal>
        <ServiceCategories />
      </Reveal>
      <Reveal>
        <AccountingDeepDive />
      </Reveal>
      <Reveal>
        <HowToChoose />
      </Reveal>
      <Reveal>
        <ServicesApproach />
      </Reveal>
      <Reveal>
        <WhyServices />
      </Reveal>
      <Reveal>
        <ServicesFAQ />
      </Reveal>
      <Reveal>
        <ServicesCTA />
      </Reveal>
    </>
  );
}
