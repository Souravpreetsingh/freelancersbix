import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutCohorts, AboutDisciplines } from "@/components/sections/about/AboutDisciplines";
import { AboutIntro, AboutMission, AboutVision } from "@/components/sections/about/AboutIntro";
import { AboutApproach, AboutPrinciples, AboutWhy } from "@/components/sections/about/AboutPrinciples";
import { AboutCTA, AboutPhilosophy, AboutQuality } from "@/components/sections/about/AboutTrust";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/about", "About FreelancersBix", {
  description:
    "FreelancersBix provides structured research, business, accounting, data and digital support to help individuals and organizations work smarter and move forward with confidence.",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutMission />
      <AboutVision />
      <AboutDisciplines />
      <AboutCohorts />
      <AboutPrinciples />
      <AboutApproach />
      <AboutWhy />
      <AboutQuality />
      <AboutPhilosophy />
      <AboutCTA />
    </>
  );
}
