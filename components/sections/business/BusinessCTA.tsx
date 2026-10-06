import Link from "next/link";

export function BusinessCTA() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-4xl relative overflow-hidden">
      <div className="bg-surface-container-low rounded-2xl p-space-2xl md:p-space-4xl shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-signal-blue/10 via-transparent to-twilight-blue/10 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-space-md max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
            Initiate an Engagement
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-primary tracking-tight leading-tight">
            Have a business question that needs deeper research?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Tell us what you are trying to understand, evaluate, or build. We can help structure the research and
            deliver it in a clear, professional format.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-md">
            <Link
              href="/contact"
              className="bg-whiteout text-ink font-label-lg text-label-lg px-space-xl py-space-sm rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="bg-transparent text-primary font-label-lg text-label-lg px-space-xl py-space-sm rounded-lg hover:bg-surface-container transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
