import { CornerAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { SITE } from "@/lib/design/site";

export function ContactCTA() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-4xl bg-brand-deep relative overflow-hidden text-center">
      <CornerAccent corner="bottom-left" tone="on-dark" size="md" className="-bottom-6 -left-6" />
      <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
        <span className="font-label-md text-label-md text-inverse-primary uppercase tracking-widest font-semibold mb-space-sm">
          Get Started Today
        </span>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-whiteout tracking-tight leading-none mb-space-lg">
          Ready to Discuss
          <br />
          Your Requirement?
        </h2>
        <p className="font-body-lg text-body-lg text-whiteout/75 mb-space-2xl max-w-lg">
          Start with a structured conversation. Detail what you need and our multidisciplinary teams will prepare your
          deliverable roadmap.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md">
          <a
            className="fbx-btn inline-flex items-center gap-space-sm px-space-2xl py-space-md bg-whiteout hover:opacity-90 text-ink rounded-lg font-label-lg text-label-lg font-bold transition-all shadow-xl"
            href="#quote-engine"
          >
            <span>Get a Quote</span>
            <MaterialIcon name="arrow_upward" className="text-[18px]" />
          </a>
          <a
            className="fbx-btn inline-flex items-center gap-space-sm px-space-xl py-space-md bg-transparent border border-whiteout/30 text-whiteout hover:bg-whiteout/10 rounded-lg font-label-lg text-label-lg font-medium transition-all"
            href={`mailto:${SITE.email}`}
          >
            <span>Contact General Desk</span>
            <MaterialIcon name="mail" className="text-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
