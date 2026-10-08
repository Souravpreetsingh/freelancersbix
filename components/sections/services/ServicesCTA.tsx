import Link from "next/link";

export function ServicesCTA() {
  return (
    <section
      id="quote-cta"
      className="w-full bg-surface py-space-4xl border-t border-outline-variant relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-signal-green/5 via-transparent to-deep-sage/5 pointer-events-none" />
      <div className="w-full px-margin-mobile md:px-margin max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center gap-space-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold">
            Immediate Scoping Assistance
          </span>
        </div>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight uppercase max-w-3xl">
          Have A Requirement? Let’s Find The Right Solution.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Share your requirement with FreelancersBix and our multidisciplinary team can help identify the appropriate
          service, define scope boundaries, and orchestrate next steps.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-md">
          <Link
            href="/contact"
            className="fbx-btn inline-flex items-center justify-center px-space-2xl py-space-sm rounded-lg font-label-lg text-label-lg bg-primary text-on-primary hover:bg-[#08452F] transition-all font-medium shadow-xl"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact"
            className="fbx-btn inline-flex items-center justify-center px-space-2xl py-space-sm rounded-lg font-label-lg text-label-lg bg-transparent text-primary hover:bg-surface-container-high border border-outline-variant transition-all font-medium"
          >
            Contact Us
          </Link>
        </div>
        <div className="pt-space-lg flex flex-wrap items-center justify-center gap-space-lg text-xs font-mono text-on-surface-variant">
          <span>RESPONSE TIME: &lt; 24 HOURS</span>
          <span>•</span>
          <span>CONFIDENTIALITY GUARANTEED</span>
          <span>•</span>
          <span>NO CONTRACTUAL OBLIGATION</span>
        </div>
      </div>
    </section>
  );
}
