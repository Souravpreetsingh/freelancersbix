import Link from "next/link";

export function DigitalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-deep py-space-3xl md:py-space-4xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-inverse-primary/30 via-signal-green/15 to-brand-deep pointer-events-none" />
      <div className="w-full px-margin-mobile md:px-margin relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-whiteout/10 border border-whiteout/20 backdrop-blur-md mb-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-inverse-primary font-bold">
            OPERATIONS DESK READY
          </span>
        </div>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-whiteout tracking-tight leading-none mb-space-md">
          Need help keeping the work organized?
        </h2>
        <p className="font-body-lg text-body-lg text-whiteout/75 mb-space-xl">
          Tell us which digital, research, or administrative tasks are taking time away from your core work. We&apos;ll
          help define a structured support requirement.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md">
          <Link
            href="/contact"
            className="fbx-btn inline-flex items-center justify-center px-space-2xl py-space-sm rounded-lg font-label-lg text-label-lg bg-whiteout text-ink hover:bg-haze transition-all shadow-xl"
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
            className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg text-whiteout bg-transparent border border-whiteout/30 hover:bg-whiteout/10 transition-all"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
