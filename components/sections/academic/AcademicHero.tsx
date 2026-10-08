import Link from "next/link";
import type { CSSProperties } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function AcademicHero() {
  return (
    <section className="fbx-hero relative w-full bg-haze border-b border-outline-variant/60 py-space-3xl md:py-space-4xl px-margin-mobile md:px-margin overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-signal-green/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-[32rem] h-[32rem] rounded-full bg-deep-sage/15 blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
        <div className="lg:col-span-6 flex flex-col items-start">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
            className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high/60 backdrop-blur-md mb-space-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green">
              Academic &amp; Research Support
            </span>
          </div>
          <h1
            data-hero-item
            style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
            className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary uppercase tracking-tight mb-space-md"
          >
            Research with structure.
            <br />
            Analysis with purpose.
          </h1>
          <p
            data-hero-item
            style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
            className="font-body-lg text-body-lg text-on-surface-variant mb-space-xl max-w-xl"
          >
            Professional research and academic support designed to help organize complex requirements, strengthen
            research workflows, and transform vast academic data into clear, structured deliverables.
          </p>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
            className="flex flex-wrap items-center gap-space-md w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-md rounded-lg font-label-lg text-label-lg text-on-primary bg-primary hover:bg-[#08452F] shadow-md group"
            >
              <span>Get a Quote</span>
              <MaterialIcon
                name="arrow_forward"
                className="ml-space-xs text-[18px] group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <a
              href="#services-matrix"
              className="fbx-btn inline-flex items-center justify-center px-space-lg py-space-md rounded-lg font-label-lg text-label-lg text-primary bg-surface-container-high/40 hover:bg-surface-container-high backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
            className="relative bg-surface-container-low rounded-xl p-space-lg shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between pb-space-md mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                <span className="font-label-sm text-label-sm text-on-surface-variant ml-space-xs">
                  SYS_SPEC // WORKSPACE_CORE.SCHEMATIC
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-signal-green bg-secondary-container/40 px-2 py-0.5 rounded-full">
                INDEXING: VERIFIED
              </span>
            </div>
            <div className="grid grid-cols-2 gap-space-md mb-space-md">
              <div className="bg-surface-container rounded-lg p-space-md flex flex-col justify-between h-44 relative">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Methodology Graph
                  </span>
                  <MaterialIcon name="account_tree" className="text-signal-green text-[18px]" />
                </div>
                <svg aria-hidden="true" className="w-full h-20 text-on-surface-variant" viewBox="0 0 200 80">
                  <circle cx="20" cy="40" fill="#167A52" r="6" />
                  <circle cx="80" cy="20" fill="#B9DCC9" r="5" />
                  <circle cx="80" cy="60" fill="#B9DCC9" r="5" />
                  <circle cx="150" cy="30" fill="#B9DCC9" r="5" />
                  <circle cx="180" cy="50" fill="#0D5F40" r="6" />
                  <path
                    d="M26 40 L74 22 M26 40 L74 58 M86 20 L144 28 M86 60 L144 32 M156 30 L174 48"
                    stroke="rgba(13,95,64,0.2)"
                    strokeDasharray="2 2"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>Nodes: 38</span>
                  <span className="text-primary font-medium">Confidence: 99.4%</span>
                </div>
              </div>
              <div className="bg-surface-container rounded-lg p-space-md flex flex-col justify-between h-44">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Distribution Curve
                  </span>
                  <MaterialIcon name="show_chart" className="text-signal-green text-[18px]" />
                </div>
                <svg aria-hidden="true" className="w-full h-20" viewBox="0 0 200 80">
                  <defs>
                    <linearGradient id="curveGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#167A52" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#167A52" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 10 75 Q 60 70 80 40 T 110 15 T 140 45 T 190 75 Z" fill="url(#curveGrad)" />
                  <path
                    d="M 10 75 Q 60 70 80 40 T 110 15 T 140 45 T 190 75"
                    fill="none"
                    stroke="#167A52"
                    strokeWidth="2"
                  />
                  <line
                    stroke="rgba(13,95,64,0.3)"
                    strokeDasharray="2 2"
                    strokeWidth="1"
                    x1="110"
                    x2="110"
                    y1="15"
                    y2="75"
                  />
                </svg>
                <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>p-value: &lt; 0.001</span>
                  <span className="text-primary font-medium">Parametric Fit</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container rounded-lg p-space-md flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <div className="p-2 rounded bg-surface-container-high text-signal-green">
                  <MaterialIcon name="library_books" className="text-[20px]" />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary font-medium">Corpus Cross-Indexing</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Peer-reviewed, IEEE, Scopus &amp; Springer meta-verified
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">1,420+</span>
                <p className="font-label-sm text-label-sm text-signal-green">Citations Scanned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
