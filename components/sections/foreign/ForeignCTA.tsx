import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function ForeignCTA() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-black-void relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-signal-blue/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-[1200px] mx-auto relative rounded-2xl bg-surface-container-high/60 border border-white/10 p-space-xl md:p-space-3xl text-center space-y-space-lg backdrop-blur-2xl shadow-2xl">
        <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-signal-blue/10 border border-signal-blue/20">
          <span className="w-2 h-2 rounded-full bg-signal-blue" />
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">Get Started</span>
        </div>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-whiteout tracking-tight">
          Looking For Reliable Accounting Support?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Tell us about your accounting requirements and we’ll help identify the right operational support structure for
          your business.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-space-xl py-space-md rounded-lg bg-whiteout text-ink font-label-lg text-label-lg font-bold shadow-xl hover:bg-whiteout/90 transition-all"
          >
            Get an Accounting Quote
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-space-lg py-space-md rounded-lg bg-surface-container-lowest/80 text-whiteout border border-white/15 font-label-lg text-label-lg font-medium hover:bg-white/10 transition-all"
          >
            Contact Us
          </Link>
        </div>
        <div className="pt-space-md border-t border-white/5 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-on-surface-variant font-label-sm">
          <span className="flex items-center gap-1.5">
            <MaterialIcon name="lock" className="text-signal-blue text-[16px]" />
            NDA Protected
          </span>
          <span className="text-outline-variant">•</span>
          <span className="flex items-center gap-1.5">
            <MaterialIcon name="calendar_today" className="text-signal-blue text-[16px]" />
            Flexible Monthly or Per-Cycle Engagements
          </span>
          <span className="text-outline-variant">•</span>
          <span className="flex items-center gap-1.5">
            <MaterialIcon name="verified" className="text-signal-blue text-[16px]" />
            No Obligation Initial Review
          </span>
        </div>
      </div>
    </section>
  );
}
