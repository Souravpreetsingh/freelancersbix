import Link from "next/link";
import { DiagonalLines, GreenStrip, LinePattern } from "@/components/brand/Backdrop";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function DataCTA() {
  return (
    <section className="relative w-full px-margin-mobile md:px-margin py-space-3xl md:py-space-4xl bg-surface-container-lowest overflow-hidden text-center">
      <LinePattern pattern="grid" className="opacity-50" />
      <DiagonalLines className="-bottom-6 -left-6 h-40 w-40 opacity-70 md:h-52 md:w-52" />
      <GreenStrip orientation="horizontal" className="right-0 top-0" />
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-space-md relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-green/10 border border-signal-green/30 w-fit">
          <span className="w-2 h-2 rounded-full bg-signal-green" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Immediate Project Ingest
          </span>
        </div>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-wider text-primary">
          HAVE DATA THAT NEEDS TO MAKE SENSE?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Tell us what you are trying to understand, analyze, or present. We can help structure the data and research
          into a clearer professional output.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-md">
          <Link
            href="/contact"
            className="fbx-btn inline-flex items-center justify-center bg-signal-green hover:bg-signal-green/90 text-whiteout font-label-lg text-label-lg px-space-2xl py-3.5 rounded-lg shadow-[0_0_32px_rgba(22,122,82,0.45)] transition-all"
          >
            Get a Quote
            <MaterialIcon name="arrow_forward" className="ml-2 text-[18px]" />
          </Link>
          <Link
            href="/services"
            className="fbx-btn inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high border border-primary/40 text-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg transition-all"
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
