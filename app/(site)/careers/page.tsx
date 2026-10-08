import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { CareerAreas } from "@/components/sections/careers/CareerAreas";
import { CareerBrand } from "@/components/sections/careers/CareerBrand";
import { CareerCTA } from "@/components/sections/careers/CareerCTA";
import { CareerFAQ } from "@/components/sections/careers/CareerFAQ";
import { CareerForm } from "@/components/sections/careers/CareerForm";
import { CareerHero } from "@/components/sections/careers/CareerHero";
import { CareerJourney } from "@/components/sections/careers/CareerJourney";
import { CareerOpportunities } from "@/components/sections/careers/CareerOpportunities";
import { CareerPrinciples } from "@/components/sections/careers/CareerPrinciples";
import { CareerProfiles } from "@/components/sections/careers/CareerProfiles";
import { CareerSpecimen } from "@/components/sections/careers/CareerSpecimen";
import { CareerWhy } from "@/components/sections/careers/CareerWhy";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/careers", "Careers", {
  description:
    "Careers at FreelancersBix: build meaningful work with a team that values expertise across research, business, accounting, data, content, digital and technical practice fields.",
});

export default function CareersPage() {
  return (
    <>
      <CareerHero />
      <Reveal>
        <CareerWhy />
      </Reveal>
      <Reveal>
        <CareerProfiles />
      </Reveal>
      <Reveal>
        <CareerOpportunities />
      </Reveal>
      <Reveal>
        <CareerSpecimen />
      </Reveal>
      <Reveal>
        <CareerAreas />
      </Reveal>
      <Reveal>
        <CareerPrinciples />
      </Reveal>
      <Reveal>
        <CareerJourney />
      </Reveal>
      <Reveal>
        <CareerFAQ />
      </Reveal>
      <Reveal>
        <CareerForm />
      </Reveal>
      <Reveal>
        <CareerBrand />
      </Reveal>
      <Reveal>
        <CareerCTA />
      </Reveal>
    </>
  );
}
