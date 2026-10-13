import type { Metadata } from "next";
import { HeroBackdrop } from "@/components/brand/Backdrop";
import { CornerAccent } from "@/components/brand/Geometry";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceFAQ } from "@/components/sections/service/ServiceFAQ";
import { SERVICE_FAQS } from "@/components/sections/services/ServicesFAQ";
import { pageMetadata } from "@/lib/design/seo";
import { SITE } from "@/lib/design/site";

export const metadata: Metadata = pageMetadata("/faq", "FAQ & Client Information Hub", {
  description:
    "Answers to common questions about FreelancersBix services, how engagements are scoped, data handling and how to get in touch with the team.",
});

const GENERAL_FAQS: { q: string; a: string }[] = [
  {
    q: "What is FreelancersBix?",
    a: SITE.about,
  },
  {
    q: "Who does FreelancersBix work with?",
    a: `${SITE.description} We support clients worldwide across research, business, accounting, data and digital operations.`,
  },
  {
    q: "How can I contact FreelancersBix?",
    a: `You can email us at ${SITE.email} or call ${SITE.phone}. You can also share your project objectives through the contact form or the Get a Quote flow, and our team will respond with the next steps.`,
  },
];

const faqs: { q: string; a: string }[] = [
  ...GENERAL_FAQS,
  ...SERVICE_FAQS.map(({ question, answer }) => ({ q: question, a: answer })),
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-haze border-b border-outline-variant/60 px-margin-mobile md:px-margin py-space-4xl">
        <HeroBackdrop pattern="dots" block="right" diagonals="top-left" />
        <CornerAccent corner="top-right" tone="on-light" size="md" className="-top-6 right-0" />
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-md relative z-10">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            FAQ &amp; Client Information Hub
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Clear answers about our services, how engagements are scoped, and how to get in touch.
          </p>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Reveal>
        <ServiceFAQ
          eyebrow="Client Information"
          title="Frequently Asked Questions"
          lead="Direct answers about scope, services, data handling, and contacting the team."
          items={faqs}
          headingClassName="flex flex-col gap-space-xs mb-space-2xl text-center items-center"
        />
      </Reveal>
    </>
  );
}
