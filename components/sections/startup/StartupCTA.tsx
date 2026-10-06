import Link from "next/link";

export function StartupCTA() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="relative bg-secondary-container rounded-2xl p-space-xl md:p-space-3xl overflow-hidden shadow-2xl">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-signal-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/50 text-secondary w-fit font-label-sm text-label-sm uppercase tracking-widest">
            Initiate Engagement
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary uppercase leading-tight">
            Have a business idea that needs structure?
          </h2>
          <p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl">
            Tell us what you are building, researching or trying to solve. We&apos;ll help organize the requirement into
            a clear professional project scope.
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-whiteout text-ink font-label-lg text-label-lg font-medium px-space-xl py-space-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-surface-container-lowest/60 hover:bg-surface-container-lowest text-primary font-label-lg text-label-lg font-medium px-space-xl py-space-sm rounded-lg transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
