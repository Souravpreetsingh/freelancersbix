import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function DataCTA() {
  return (
    <section className="relative w-full px-margin-mobile md:px-margin py-space-3xl md:py-space-4xl bg-surface-container-lowest overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-signal-blue/15 via-background to-surface-container-lowest pointer-events-none" />
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-space-md relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-blue/10 border border-signal-blue/30 w-fit">
          <span className="w-2 h-2 rounded-full bg-signal-blue" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Immediate Project Ingest
          </span>
        </div>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-wider text-whiteout">
          HAVE DATA THAT NEEDS TO MAKE SENSE?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Tell us what you are trying to understand, analyze, or present. We can help structure the data and research
          into a clearer professional output.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-md">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-signal-blue hover:bg-signal-blue/90 text-whiteout font-label-lg text-label-lg px-space-2xl py-3.5 rounded-lg shadow-[0_0_32px_rgba(43,127,255,0.45)] transition-all"
          >
            Get a Quote
            <MaterialIcon name="arrow_forward" className="ml-2 text-[18px]" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high border border-whiteout/15 text-whiteout font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg transition-all"
          >
            Explore All Services
          </Link>
        </div>
        <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase mt-space-md">
          FreelancersBix • Global Professional Services • Confidential &amp; Verified
        </span>
      </div>
    </section>
  );
}
