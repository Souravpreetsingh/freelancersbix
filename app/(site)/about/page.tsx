import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutCohorts, AboutDisciplines } from "@/components/sections/about/AboutDisciplines";
import { AboutIntro, AboutMission, AboutVision } from "@/components/sections/about/AboutIntro";
import { AboutApproach, AboutPrinciples, AboutWhy } from "@/components/sections/about/AboutPrinciples";
import { AboutCTA, AboutPhilosophy, AboutQuality } from "@/components/sections/about/AboutTrust";
import { pageMetadata } from "@/lib/design/seo";
import { SITE } from "@/lib/design/site";

export const metadata: Metadata = pageMetadata("/about", "About FreelancersBix", {
  description: SITE.aboutExcerpt,
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Reveal>
        <AboutIntro />
      </Reveal>
      <Reveal>
        <AboutMission />
      </Reveal>
      <Reveal>
        <AboutVision />
      </Reveal>
      <Reveal>
        <AboutDisciplines />
      </Reveal>
      <Reveal>
        <AboutCohorts />
      </Reveal>
      <Reveal>
        <AboutPrinciples />
      </Reveal>
      <Reveal>
        <AboutApproach />
      </Reveal>
      <Reveal>
        <AboutWhy />
      </Reveal>
      <Reveal>
        <AboutQuality />
      </Reveal>
      <Reveal>
        <AboutPhilosophy />
      </Reveal>
      <Reveal>
        <AboutCTA />
      </Reveal>
    </>
  );
}
