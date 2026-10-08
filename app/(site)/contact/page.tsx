import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { ContactChannels } from "@/components/sections/contact/ContactChannels";
import { ContactCTA } from "@/components/sections/contact/ContactCTA";
import { ContactFAQ } from "@/components/sections/contact/ContactFAQ";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactMessage } from "@/components/sections/contact/ContactMessage";
import { ContactTips } from "@/components/sections/contact/ContactTips";
import { ContactTrust } from "@/components/sections/contact/ContactTrust";
import { ContactWizard } from "@/components/sections/contact/ContactWizard";
import { pageMetadata } from "@/lib/design/seo";

export const metadata: Metadata = pageMetadata("/contact", "Contact", {
  description:
    "Contact FreelancersBix for research, business support, foreign accounting, data services, content and digital assistance. Share your requirement and our multidisciplinary team will map out the exact path forward.",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Reveal>
        <ContactInfo />
      </Reveal>
      <Reveal>
        <ContactWizard />
      </Reveal>
      <Reveal>
        <ContactMessage />
      </Reveal>
      <Reveal>
        <ContactChannels />
      </Reveal>
      <Reveal>
        <ContactTips />
      </Reveal>
      <Reveal>
        <ContactFAQ />
      </Reveal>
      <Reveal>
        <ContactTrust />
      </Reveal>
      <Reveal>
        <ContactCTA />
      </Reveal>
    </>
  );
}
