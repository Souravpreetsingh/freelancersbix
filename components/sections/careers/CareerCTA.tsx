export function CareerCTA() {
  return (
    <section className="w-full px-margin-mobile md:px-margin pb-space-4xl bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-space-2xl md:p-space-3xl flex flex-col md:flex-row items-center justify-between gap-space-xl shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-signal-green/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="flex flex-col gap-space-xs max-w-xl z-10">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
              Ready to Begin?
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
              Ready to build your next chapter?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Explore current opportunities or introduce yourself to the FreelancersBix team today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-md z-10 shrink-0">
            <a
              className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary/90 font-medium transition-all"
              href="#opportunities"
            >
              View Opportunities
            </a>
            <a
              className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg text-primary bg-surface-container-high hover:bg-surface-variant font-medium transition-all"
              href="#general-application"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
