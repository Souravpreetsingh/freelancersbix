import Link from "next/link";
import { CtaAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function ForeignCTA() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-brand-deep relative overflow-hidden">
      <CtaAccent className="-bottom-10 -right-10 h-64 w-64 md:h-80 md:w-80 rotate-180" />
      <div className="max-w-[1200px] mx-auto relative rounded-2xl bg-whiteout/5 border border-whiteout/15 p-space-xl md:p-space-3xl text-center space-y-space-lg backdrop-blur-2xl shadow-2xl">
        <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-whiteout/10 border border-whiteout/20">
          <span className="w-2 h-2 rounded-full bg-inverse-primary" />
          <span className="font-label-sm text-label-sm text-inverse-primary tracking-widest uppercase">
            Get Started
          </span>
        </div>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-whiteout tracking-tight">
          Looking For Reliable Accounting Support?
        </h2>
        <p className="font-body-lg text-body-lg text-whiteout/75 max-w-2xl mx-auto">
          Tell us about your accounting requirements and we’ll help identify the right operational support structure for
          your business.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
          <Link
            href="/contact"
            className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-md rounded-lg bg-whiteout text-ink font-label-lg text-label-lg font-bold shadow-xl hover:bg-haze transition-all"
          >
            Get an Accounting Quote
          </Link>
          <Link
            href="/contact"
            className="fbx-btn inline-flex items-center justify-center px-space-lg py-space-md rounded-lg bg-transparent text-whiteout border border-whiteout/30 font-label-lg text-label-lg font-medium hover:bg-whiteout/10 transition-all"
          >
            Contact Us
          </Link>
        </div>
        <div className="pt-space-md border-t border-whiteout/20 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-whiteout/70 font-label-sm">
          <span className="flex items-center gap-1.5">
            <MaterialIcon name="lock" className="text-inverse-primary text-[16px]" />
            NDA Protected
          </span>
          <span className="text-[rgba(220,206,180,0.6)]">•</span>
          <span className="flex items-center gap-1.5">
            <MaterialIcon name="calendar_today" className="text-inverse-primary text-[16px]" />
            Flexible Monthly or Per-Cycle Engagements
          </span>
          <span className="text-[rgba(220,206,180,0.6)]">•</span>
          <span className="flex items-center gap-1.5">
            <MaterialIcon name="verified" className="text-inverse-primary text-[16px]" />
            No Obligation Initial Review
          </span>
        </div>
      </div>
    </section>
  );
}
