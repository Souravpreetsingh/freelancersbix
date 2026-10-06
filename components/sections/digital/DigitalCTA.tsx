import Link from "next/link";

export function DigitalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-black-void py-space-3xl md:py-space-4xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-signal-blue/20 via-surface-container-lowest to-black-void pointer-events-none" />
      <div className="w-full px-margin-mobile md:px-margin relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-md mb-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            OPERATIONS DESK READY
          </span>
        </div>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-primary tracking-tight leading-none mb-space-md">
          Need help keeping the work organized?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-xl">
          Tell us which digital, research, or administrative tasks are taking time away from your core work. We&apos;ll
          help define a structured support requirement.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-space-2xl py-space-sm rounded-lg font-label-lg text-label-lg bg-signal-blue text-whiteout hover:opacity-90 transition-all shadow-xl shadow-signal-blue/25"
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg text-primary bg-surface-container hover:bg-surface-container-high transition-all"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
