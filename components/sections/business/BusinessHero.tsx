import Link from "next/link";
import type { CSSProperties } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function BusinessHero() {
  return (
    <section className="fbx-hero w-full bg-haze border-b border-outline-variant/60 px-margin-mobile md:px-margin py-space-3xl md:py-space-4xl relative overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-deep-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-signal-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
            className="inline-flex items-center gap-space-xs w-max bg-surface-container-high/80 px-space-md py-1.5 rounded-full shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-green" />
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green">
              Business Research &amp; Consulting
            </span>
          </div>
          <h1
            data-hero-item
            style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
            className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-primary tracking-tight leading-none"
          >
            Research that turns business questions into clearer decisions.
          </h1>
          <p
            data-hero-item
            style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
          >
            Structured business research, market analysis, and consulting support designed to help startups, founders,
            and enterprises evaluate complex markets, quantify opportunities, and execute decisive strategic steps.
          </p>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
            className="flex flex-wrap items-center gap-space-md pt-space-xs"
          >
            <Link
              href="/contact"
              className="fbx-btn bg-primary text-on-primary font-label-lg text-label-lg px-space-xl py-space-sm rounded-lg hover:opacity-90 shadow-lg"
            >
              Get a Quote
            </Link>
            <a
              href="#services-grid"
              className="fbx-btn bg-transparent text-primary font-label-lg text-label-lg px-space-xl py-space-sm rounded-lg hover:bg-surface-container-high"
            >
              Explore Services
            </a>
          </div>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "360ms" } as CSSProperties}
            className="flex items-center gap-3 pt-space-xs text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase"
          >
            <span className="text-primary font-medium">Research</span>
            <span className="text-deep-sage text-[8px]">•</span>
            <span className="text-primary font-medium">Analyse</span>
            <span className="text-deep-sage text-[8px]">•</span>
            <span className="text-primary font-medium">Create</span>
            <span className="text-deep-sage text-[8px]">•</span>
            <span className="text-primary font-medium">Deliver</span>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
            className="bg-surface-container-low rounded-xl p-space-lg shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-space-sm mb-space-md">
              <div className="flex items-center gap-2">
                <MaterialIcon name="query_stats" className="text-signal-green text-[18px]" />
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                  Strategic Matrix Telemetry
                </span>
              </div>
              <span className="bg-surface-container px-2 py-0.5 rounded text-[10px] font-label-sm text-on-surface-variant uppercase tracking-widest">
                Illustrative Strategy Model • v4.2
              </span>
            </div>
            <div className="grid grid-cols-2 gap-space-sm mb-space-md">
              <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Market Opportunity Index</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-md text-headline-md text-primary">87.4</span>
                  <span className="font-label-sm text-label-sm text-signal-green">Class A High Potential</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-signal-green h-full w-[87%]" />
                </div>
              </div>
              <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Competitive Position Density
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-md text-headline-md text-primary">3.8x</span>
                  <span className="font-label-sm text-label-sm text-deep-sage">Expansion Gap</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-deep-sage h-full w-[64%]" />
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-space-md rounded-lg mb-space-md relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Market Trend Trajectory &amp; Milestone Nodes
                </span>
                <span className="font-label-sm text-label-sm text-signal-green font-mono">Q1 → Q4</span>
              </div>
              <svg className="w-full h-28 text-signal-green overflow-visible" fill="none" viewBox="0 0 360 100">
                <defs>
                  <linearGradient id="busHudGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#167A52" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#167A52" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 Q45,65 90,70 T180,35 T270,45 T360,15 L360,100 L0,100 Z" fill="url(#busHudGrad)" />
                <path
                  d="M0,80 Q45,65 90,70 T180,35 T270,45 T360,15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                />
                <circle cx="90" cy="70" fill="#0D5F40" r="4" stroke="#167A52" strokeWidth="2" />
                <circle cx="180" cy="35" fill="#0D5F40" r="4" stroke="#167A52" strokeWidth="2" />
                <circle cx="270" cy="45" fill="#0D5F40" r="4" stroke="#167A52" strokeWidth="2" />
                <circle cx="360" cy="15" fill="#167A52" r="5" stroke="#0D5F40" strokeWidth="1.5" />
              </svg>
              <div className="flex justify-between items-center text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">
                <span>Diagnostic Phase</span>
                <span>Validation Node</span>
                <span>Target Launch</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-2 bg-surface-container rounded flex items-center justify-between text-body-sm font-body-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
                  <span className="text-on-surface">Market Opportunity Matrix</span>
                </div>
                <span className="text-deep-sage font-mono text-label-sm">SYNCHRONIZED</span>
              </div>
              <div className="p-2 bg-surface-container rounded flex items-center justify-between text-body-sm font-body-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-on-surface">Competitive Positioning Index</span>
                </div>
                <span className="text-deep-sage font-mono text-label-sm">COMPILED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
