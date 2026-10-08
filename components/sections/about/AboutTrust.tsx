import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function AboutQuality() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          eyebrow="Integrity & Standards"
          title="Built on professionalism and trust."
          className="flex flex-col gap-space-xs text-center items-center"
          eyebrowBold={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          <div className="p-space-xl rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <MaterialIcon name="verified_user" className="text-signal-green text-4xl" />
                <span className="px-2 py-1 rounded bg-surface-container-high text-primary font-mono font-label-sm text-label-sm border border-outline-variant/30">
                  AUDITED WORKFLOW
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">Quality Standard</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Every project should be clear, organized and professionally presented. Our approach emphasizes research,
                review, accuracy and consistency. We enforce multi-stage review gates before any deliverable is deemed
                final.
              </p>
            </div>
            <div className="pt-space-lg mt-space-lg border-t border-outline-variant/20 flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
              <MaterialIcon name="check_circle" className="text-signal-green text-sm" />
              Rigorous Source Verification &amp; Accuracy Checks
            </div>
          </div>
          <div className="p-space-xl rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <MaterialIcon name="lock" className="text-primary text-4xl" />
                <span className="px-2 py-1 rounded bg-surface-container-high text-primary font-mono font-label-sm text-label-sm border border-outline-variant/30">
                  NDA PROTECTED
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">Confidentiality</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Professional support requires responsible handling of client information, documents and project
                requirements. We operate under strict data hygiene principles and non-disclosure standards across all
                project types.
              </p>
            </div>
            <div className="pt-space-lg mt-space-lg border-t border-outline-variant/20 flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
              <MaterialIcon name="shield" className="text-primary text-sm" />
              Zero Unauthorized Sharing &amp; Strict File Isolation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPhilosophy() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20 relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-signal-green/5 blur-[100px] pointer-events-none" />
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green mb-space-md">
          Our Philosophy
        </span>
        <span className="font-headline-xl text-headline-xl text-outline-variant/20 select-none leading-none -mb-6">
          “
        </span>
        <blockquote className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight max-w-4xl">
          Good work begins with understanding.
        </blockquote>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-lg max-w-3xl leading-relaxed">
          We believe the best results come from understanding the real requirement before beginning the work. That is
          why our process starts with research and analysis before moving toward creation and delivery.
        </p>
        <div className="w-16 h-1 bg-signal-green mt-space-xl rounded-full" />
      </div>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full rounded-2xl bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container border border-outline-variant/40 p-space-2xl md:p-space-3xl flex flex-col lg:flex-row items-center justify-between gap-space-xl overflow-hidden shadow-[0_24px_50px_rgba(32,39,34,0.19)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-signal-green/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="flex flex-col gap-space-sm max-w-2xl relative z-10">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green">
              Get Started Today
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
              Let’s work on your next requirement.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Whether you need research, accounting, business support, data analysis or digital assistance,
              FreelancersBix is ready to help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto relative z-10 shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-4 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(13,95,64,0.2)]"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-4 rounded-lg bg-transparent border border-outline-variant text-primary font-label-lg text-label-lg font-medium hover:bg-surface-container transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
