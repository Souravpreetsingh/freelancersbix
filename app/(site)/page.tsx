import { Reveal } from "@/components/motion/Reveal";
import { AngularDivider } from "@/components/brand/Geometry";
import { CTASection } from "@/components/sections/CTASection";
import { ApproachSection } from "@/components/sections/home/ApproachSection";
import { AudienceSection } from "@/components/sections/home/AudienceSection";
import { FeaturedAccounting } from "@/components/sections/home/FeaturedAccounting";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { ServicesMatrix } from "@/components/sections/home/ServicesMatrix";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { ValueStrip } from "@/components/sections/home/ValueStrip";
import { WhySection } from "@/components/sections/home/WhySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Reveal>
        <ValueStrip />
      </Reveal>
      <Reveal>
        <IntroSection />
      </Reveal>
      <Reveal>
        <AngularDivider className="max-w-7xl mx-auto px-margin-mobile md:px-margin mb-space-2xl" />
      </Reveal>
      <Reveal>
        <ServicesMatrix />
      </Reveal>
      <Reveal>
        <FeaturedAccounting />
      </Reveal>
      <Reveal>
        <WhySection />
      </Reveal>
      <Reveal>
        <ApproachSection />
      </Reveal>
      <Reveal>
        <AudienceSection />
      </Reveal>
      <Reveal>
        <StatsSection />
      </Reveal>
      <Reveal>
        <TestimonialsSection />
      </Reveal>
      <Reveal>
        <CTASection
          eyebrow="Initiate Engagement"
          title="Have a project in mind?"
          description="Tell us what you need. Our team will help you identify the right service, configure clear milestones and chart next steps."
          primary={{ label: "Get a Free Consultation", href: "/contact" }}
          secondary={{ label: "Contact Us", href: "/contact" }}
          notes={["Standard NDA Protected", "Response within 24 Hours", "Global Compliance"]}
        />
      </Reveal>
    </>
  );
}
