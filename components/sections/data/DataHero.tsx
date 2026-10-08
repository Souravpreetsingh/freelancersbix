import Link from "next/link";
import type { CSSProperties } from "react";
import { HeroBackdrop } from "@/components/brand/Backdrop";
import { CornerAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const markers = [
  { icon: "search", label: "Research" },
  { icon: "analytics", label: "Analyse" },
  { icon: "candlestick_chart", label: "Create" },
  { icon: "verified", label: "Deliver" },
] as const;

export function DataHero() {
  return (
    <section className="fbx-hero relative w-full px-margin-mobile md:px-margin py-space-3xl md:py-space-4xl overflow-hidden bg-haze border-b border-outline-variant/60">
      <HeroBackdrop pattern="grid" block="right" diagonals="top-left" />
      <CornerAccent corner="top-right" tone="on-light" size="lg" className="-top-6 right-0" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-green/10 border border-signal-green/30 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              Data &amp; Research Services
            </span>
          </div>
          <h1
            data-hero-item
            style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
            className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-wider text-primary"
          >
            TURN COMPLEX
            <br />
            INFORMATION INTO
            <br />
            <span className="text-secondary drop-shadow-[0_0_24px_rgba(22,122,82,0.35)]">CLEAR INSIGHTS.</span>
          </h1>
          <p
            data-hero-item
            style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
          >
            Data organization, research analysis, visualization, and analytical interpretation support for businesses,
            researchers, professionals, and demanding enterprise project requirements.
          </p>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
            className="flex flex-wrap items-center gap-space-md pt-space-xs"
          >
            <Link
              href="/contact"
              className="fbx-btn inline-flex items-center justify-center bg-signal-green hover:bg-signal-green/90 text-whiteout font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-[0_0_28px_rgba(22,122,82,0.4)]"
            >
              <span>Get a Quote</span>
              <MaterialIcon name="arrow_forward" className="ml-2 text-[18px]" />
            </Link>
            <a
              href="#services-catalog"
              className="fbx-btn inline-flex items-center justify-center bg-surface-container/60 hover:bg-surface-container-high border border-primary/40 text-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg backdrop-blur-md"
            >
              Explore Services
            </a>
          </div>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "360ms" } as CSSProperties}
            className="flex flex-wrap items-center gap-space-lg pt-space-sm text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase"
          >
            {markers.map((marker, index) => (
              <span key={marker.label} className="flex items-center gap-space-lg">
                {index > 0 ? <span className="text-outline">/</span> : null}
                <span className="flex items-center gap-1.5">
                  <MaterialIcon name={marker.icon} className="text-signal-green text-[16px]" />
                  <span>{marker.label}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
            className="rounded-xl p-space-lg bg-surface-container-low/70 border border-outline-variant backdrop-blur-xl shadow-[0_20px_50px_rgba(32,39,34,0.14)] relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant mb-space-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-signal-green" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                  Illustrative Analytics Framework &bull; v4.2
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-deep-sage uppercase">Synthesized</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-space-md">
              {[
                { label: "Records Cleaned", value: "12,480", highlighted: false },
                { label: "Null Integrity", value: "99.8%", highlighted: true },
                { label: "Variance Ratio", value: "0.14", highlighted: false },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant flex flex-col"
                >
                  <span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">{chip.label}</span>
                  <span
                    className={`font-headline-sm text-headline-sm font-bold ${
                      chip.highlighted ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {chip.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-lg p-3 bg-surface-container-lowest/80 border border-outline-variant mb-space-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-sm text-label-sm text-primary">Multi-Variant Convergence Track</span>
                <span className="font-label-sm text-label-sm text-secondary">R&sup2; = 0.942</span>
              </div>
              <svg aria-hidden="true" className="w-full h-32 overflow-visible" fill="none" viewBox="0 0 340 120">
                <defs>
                  <linearGradient id="heroGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#167A52" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#167A52" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line stroke="rgba(13,95,64,0.05)" strokeDasharray="3 3" x1="0" x2="340" y1="20" y2="20" />
                <line stroke="rgba(13,95,64,0.05)" strokeDasharray="3 3" x1="0" x2="340" y1="60" y2="60" />
                <line stroke="rgba(13,95,64,0.05)" strokeDasharray="3 3" x1="0" x2="340" y1="100" y2="100" />
                <path
                  d="M 0 105 Q 40 95 80 82 T 160 55 T 240 38 T 340 12 L 340 120 L 0 120 Z"
                  fill="url(#heroGradient)"
                />
                <path
                  d="M 0 105 Q 40 95 80 82 T 160 55 T 240 38 T 340 12"
                  stroke="#167A52"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <circle cx="80" cy="82" fill="#B9DCC9" r="3.5" stroke="#0D5F40" strokeWidth="1.5" />
                <circle cx="160" cy="55" fill="#B9DCC9" r="3.5" stroke="#0D5F40" strokeWidth="1.5" />
                <circle cx="240" cy="38" fill="#167A52" r="3.5" stroke="#08452F" strokeWidth="1.5" />
                <circle cx="340" cy="12" fill="#0D5F40" r="4.5" stroke="#167A52" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>Cohort Stratification</span>
                <span className="text-primary font-mono">Confidence Level 95%</span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 flex overflow-hidden">
                <div className="bg-signal-green h-full w-[45%]" />
                <div className="bg-secondary h-full w-[30%]" />
                <div className="bg-deep-sage h-full w-[18%]" />
                <div className="bg-outline-variant/80 h-full w-[7%]" />
              </div>
            </div>
            <p className="font-label-sm text-label-sm text-[10px] text-outline mt-space-md text-right tracking-tight">
              Illustrative example — not live client data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
