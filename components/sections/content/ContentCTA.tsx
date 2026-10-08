import Link from "next/link";
import { LinePattern } from "@/components/brand/Backdrop";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const trust = [
  { icon: "lock", label: "Strict NDA & Confidentiality" },
  { icon: "verified", label: "100% Client IP Ownership" },
  { icon: "schedule", label: "Rapid Turnaround Capability" },
] as const;

export function ContentCTA() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-4xl">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full rounded-3xl bg-surface-container-low border border-outline-variant p-space-2xl md:p-space-4xl overflow-hidden shadow-2xl">
          <LinePattern pattern="dots" className="opacity-60" />
          <div className="relative z-10 max-w-3xl flex flex-col gap-space-lg">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-[4px] rounded-full bg-surface-container-high border border-outline-variant w-fit">
              <span className="w-2 h-2 rounded-full bg-signal-green" />
              <span className="font-label-sm text-label-sm tracking-widest uppercase text-signal-green">
                Initiate An Engagement
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary uppercase tracking-tight leading-[0.95]">
              Have something important to communicate?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Tell us what you need written, structured, edited or refined, and we&apos;ll help turn the information
              into clear, high-impact professional content.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <Link
                href="/contact"
                className="fbx-btn inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg font-medium px-space-2xl py-space-md rounded-lg hover:opacity-90 transition-all shadow-[0_12px_28px_rgba(13,95,64,0.15)]"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="fbx-btn inline-flex items-center justify-center bg-surface-container-high border border-primary/40 text-primary font-label-lg text-label-lg font-medium px-space-xl py-space-md rounded-lg hover:bg-surface-container-highest transition-all"
              >
                Explore All Services
              </Link>
            </div>
            <div className="pt-space-md flex flex-wrap items-center gap-space-lg font-label-sm text-label-sm text-on-surface-variant/60">
              {trust.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <MaterialIcon name={item.icon} className="text-signal-green text-[16px]" />
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
