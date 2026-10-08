import Link from "next/link";
import type { CSSProperties } from "react";
import { CornerAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function DigitalHero() {
  return (
    <section className="fbx-hero relative w-full overflow-hidden bg-haze border-b border-outline-variant/60 py-space-3xl md:py-space-4xl">
      <CornerAccent corner="top-right" tone="on-light" size="lg" className="-top-6 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-signal-green/20 via-surface-container to-transparent pointer-events-none" />
      <div className="w-full px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            <div
              data-hero-item
              style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
              className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-green" />
              </span>
              <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary">
                Digital &amp; Administrative Support
              </span>
            </div>
            <h1
              data-hero-item
              style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
              className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-primary tracking-tight leading-none mt-space-xs"
            >
              KEEP THE WORK ORGANIZED.
              <br />
              <span className="text-on-surface-variant">KEEP THE BUSINESS MOVING.</span>
            </h1>
            <p
              data-hero-item
              style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs"
            >
              Reliable digital, administrative, and virtual support for research, documentation, data organization, and
              recurring business tasks.
            </p>
            <div
              data-hero-item
              style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
              className="flex flex-wrap items-center gap-space-md pt-space-sm w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg bg-signal-green text-whiteout hover:opacity-90 shadow-md shadow-signal-green/20"
              >
                Get a Quote
              </Link>
              <a
                href="#services-grid"
                className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg text-primary bg-surface-container hover:bg-surface-container-high"
              >
                Explore Services
              </a>
            </div>
            <div
              data-hero-item
              style={{ "--fbx-hero-delay": "360ms" } as CSSProperties}
              className="pt-space-md flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase"
            >
              <span className="text-signal-green font-bold">Research</span>
              <span className="text-outline-variant">•</span>
              <span className="text-primary font-bold">Analyse</span>
              <span className="text-outline-variant">•</span>
              <span className="text-signal-green font-bold">Create</span>
              <span className="text-outline-variant">•</span>
              <span className="text-primary font-bold">Deliver</span>
            </div>
          </div>
          <div className="lg:col-span-5 w-full">
            <div
              data-hero-item
              style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
              className="relative rounded-xl bg-surface-container-low p-space-md shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-lowest/50 px-space-sm py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-signal-green/60" />
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                    Illustrative Operations Architecture • v3.4
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-signal-green/20 text-secondary">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1 text-center py-2 mb-space-sm bg-surface-container rounded-lg font-label-sm text-label-sm font-mono">
                <div className="text-primary">Task</div>
                <div className="text-on-surface-variant">→ Org</div>
                <div className="text-signal-green">→ Proc</div>
                <div className="text-on-surface-variant">→ Rev</div>
                <div className="text-secondary">→ Del</div>
              </div>
              <div className="space-y-space-xs font-mono text-label-sm">
                <div className="p-space-sm bg-surface-container rounded-lg">
                  <div className="flex items-center justify-between text-on-surface mb-1">
                    <span className="flex items-center gap-1.5 text-primary">
                      <MaterialIcon name="folder_open" className="text-[16px] text-signal-green" />
                      /Corporate_Ops/FY26/Data_Vault
                    </span>
                    <span className="text-secondary text-[10px]">SYNCED</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant pl-5 space-y-0.5">
                    <div>├── [VALIDATED] Master_Records_v4.2.xlsx</div>
                    <div>├── [PROCESSED] Executive_Summary_Final.docx</div>
                    <div>└── [ORGANIZED] Public_Lead_Dataset_EU_US.csv</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-space-xs">
                  <div className="p-space-sm bg-surface-container rounded-lg flex flex-col justify-between">
                    <span className="text-on-surface-variant text-[11px]">Active Batch Processing</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-md text-headline-md text-primary font-bold">1,842</span>
                      <span className="text-[10px] text-signal-green">items/day</span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1 mt-2">
                      <div className="bg-signal-green h-1 rounded-full w-4/5" />
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg flex flex-col justify-between">
                    <span className="text-on-surface-variant text-[11px]">Format Consistency QA</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-md text-headline-md text-primary font-bold">99.8%</span>
                      <span className="text-[10px] text-secondary">verified</span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1 mt-2">
                      <div className="bg-secondary h-1 rounded-full w-[99%]" />
                    </div>
                  </div>
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="verified" className="text-signal-green text-[18px]" />
                    <span className="text-[12px] text-on-surface">Data Verification Protocol</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-surface-container-high text-primary">
                    Standard Ops Applied
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
