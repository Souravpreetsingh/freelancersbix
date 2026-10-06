import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function ContactCTA() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-4xl bg-black-void relative text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <span className="font-label-md text-label-md text-signal-blue uppercase tracking-widest font-semibold mb-space-sm">
          Get Started Today
        </span>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-whiteout tracking-tight leading-none mb-space-lg">
          Ready to Discuss
          <br />
          Your Requirement?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-2xl max-w-lg">
          Start with a structured conversation. Detail what you need and our multidisciplinary teams will prepare your
          deliverable roadmap.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md">
          <a
            className="inline-flex items-center gap-space-sm px-space-2xl py-space-md bg-whiteout hover:opacity-90 text-ink rounded-lg font-label-lg text-label-lg font-bold transition-all shadow-xl"
            href="#quote-engine"
          >
            <span>Get a Quote</span>
            <MaterialIcon name="arrow_upward" className="text-[18px]" />
          </a>
          <a
            className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-surface-container hover:bg-surface-container-high text-whiteout rounded-lg font-label-lg text-label-lg font-medium transition-all"
            href="mailto:hello@freelancersbix.com"
          >
            <span>Contact General Desk</span>
            <MaterialIcon name="mail" className="text-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
