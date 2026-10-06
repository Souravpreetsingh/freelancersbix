import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const markers = [
  { icon: "search", label: "Research" },
  { icon: "analytics", label: "Analyse" },
  { icon: "candlestick_chart", label: "Create" },
  { icon: "verified", label: "Deliver" },
] as const;

export function DataHero() {
  return (
    <section className="relative w-full px-margin-mobile md:px-margin py-space-2xl md:py-space-3xl overflow-hidden bg-gradient-to-b from-surface-container-lowest via-background to-background">
      <div className="absolute -top-40 right-10 w-[520px] h-[520px] bg-signal-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[380px] h-[380px] bg-twilight-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-blue/10 border border-signal-blue/30 w-fit">
            <span className="w-2 h-2 rounded-full bg-signal-blue animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              Data &amp; Research Services
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-wider text-whiteout">
            TURN COMPLEX
            <br />
            INFORMATION INTO
            <br />
            <span className="text-secondary drop-shadow-[0_0_24px_rgba(43,127,255,0.35)]">CLEAR INSIGHTS.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Data organization, research analysis, visualization, and analytical interpretation support for businesses,
            researchers, professionals, and demanding enterprise project requirements.
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-signal-blue hover:bg-signal-blue/90 text-whiteout font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-[0_0_28px_rgba(43,127,255,0.4)] transition-all"
            >
              <span>Get a Quote</span>
              <MaterialIcon name="arrow_forward" className="ml-2 text-[18px]" />
            </Link>
            <a
              href="#services-catalog"
              className="inline-flex items-center justify-center bg-surface-container/60 hover:bg-surface-container-high border border-whiteout/15 text-whiteout font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg backdrop-blur-md transition-all"
            >
              Explore Services
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-space-lg pt-space-sm text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
            {markers.map((marker, index) => (
              <span key={marker.label} className="flex items-center gap-space-lg">
                {index > 0 ? <span className="text-outline">/</span> : null}
                <span className="flex items-center gap-1.5">
                  <MaterialIcon name={marker.icon} className="text-signal-blue text-[16px]" />
                  <span>{marker.label}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="rounded-xl p-space-lg bg-surface-container-low/70 border border-whiteout/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="flex items-center justify-between pb-space-sm border-b border-whiteout/10 mb-space-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-signal-blue" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-whiteout font-semibold">
                  Illustrative Analytics Framework &bull; v4.2
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-twilight-blue uppercase">Synthesized</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-space-md">
              {[
                { label: "Records Cleaned", value: "12,480", highlighted: false },
                { label: "Null Integrity", value: "99.8%", highlighted: true },
                { label: "Variance Ratio", value: "0.14", highlighted: false },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="p-2.5 rounded-lg bg-surface-container/60 border border-whiteout/5 flex flex-col"
                >
                  <span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">{chip.label}</span>
                  <span
                    className={`font-headline-sm text-headline-sm font-bold ${
                      chip.highlighted ? "text-secondary" : "text-whiteout"
                    }`}
                  >
                    {chip.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-lg p-3 bg-surface-container-lowest/80 border border-whiteout/5 mb-space-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-sm text-label-sm text-whiteout">Multi-Variant Convergence Track</span>
                <span className="font-label-sm text-label-sm text-secondary">R&sup2; = 0.942</span>
              </div>
              <svg aria-hidden="true" className="w-full h-32 overflow-visible" fill="none" viewBox="0 0 340 120">
                <defs>
                  <linearGradient id="heroGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2b7fff" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#2b7fff" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" x1="0" x2="340" y1="20" y2="20" />
                <line stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" x1="0" x2="340" y1="60" y2="60" />
                <line stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" x1="0" x2="340" y1="100" y2="100" />
                <path
                  d="M 0 105 Q 40 95 80 82 T 160 55 T 240 38 T 340 12 L 340 120 L 0 120 Z"
                  fill="url(#heroGradient)"
                />
                <path
                  d="M 0 105 Q 40 95 80 82 T 160 55 T 240 38 T 340 12"
                  stroke="#2b7fff"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <circle cx="80" cy="82" fill="#a9c9f5" r="3.5" stroke="#000" strokeWidth="1.5" />
                <circle cx="160" cy="55" fill="#a9c9f5" r="3.5" stroke="#000" strokeWidth="1.5" />
                <circle cx="240" cy="38" fill="#2b7fff" r="3.5" stroke="#fff" strokeWidth="1.5" />
                <circle cx="340" cy="12" fill="#ffffff" r="4.5" stroke="#2b7fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>Cohort Stratification</span>
                <span className="text-whiteout font-mono">Confidence Level 95%</span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 flex overflow-hidden">
                <div className="bg-signal-blue h-full w-[45%]" />
                <div className="bg-secondary h-full w-[30%]" />
                <div className="bg-twilight-blue h-full w-[18%]" />
                <div className="bg-whiteout/20 h-full w-[7%]" />
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
