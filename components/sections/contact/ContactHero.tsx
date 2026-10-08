import type { CSSProperties } from "react";
import { HeroBackdrop } from "@/components/brand/Backdrop";
import { CornerAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function ContactHero() {
  return (
    <section className="fbx-hero relative w-full px-margin-mobile md:px-margin pt-space-2xl pb-space-3xl md:pt-space-3xl md:pb-space-4xl overflow-hidden bg-haze border-b border-outline-variant/60">
      <HeroBackdrop pattern="grid" block="right" diagonals="top-left" />
      <CornerAccent corner="top-right" tone="on-light" size="lg" className="-top-8 -right-10" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
            className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high/70 backdrop-blur-md mb-space-lg shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
            <span className="font-label-md text-label-md text-signal-green uppercase tracking-widest font-semibold">
              LET&apos;S TALK
            </span>
            <span className="text-on-surface-variant font-label-sm text-label-sm">· INTAKE OPEN</span>
          </div>
          <h1
            data-hero-item
            style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
            className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-primary tracking-tight leading-[0.95] mb-space-lg"
          >
            Tell Us What
            <br />
            <span className="text-secondary">You Need.</span>
          </h1>
          <p
            data-hero-item
            style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-2xl leading-relaxed"
          >
            Whether you need research, business support, foreign accounting, data services, content or digital
            assistance, share your requirement and our multidisciplinary team will map out the exact path forward.
          </p>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
            className="flex flex-wrap items-center gap-space-md"
          >
            <a
              className="fbx-btn inline-flex items-center gap-space-sm px-space-xl py-space-md bg-primary hover:bg-[#08452F] text-on-primary rounded-lg font-label-lg text-label-lg font-medium shadow-md group"
              href="#quote-engine"
            >
              <span>Start a Request</span>
              <MaterialIcon
                name="arrow_downward"
                className="text-[18px] group-hover:translate-y-0.5 transition-transform"
              />
            </a>
            <a
              className="fbx-btn inline-flex items-center gap-space-sm px-space-lg py-space-md bg-transparent hover:bg-surface-container-high/60 text-primary rounded-lg font-label-lg text-label-lg font-medium"
              href="/services"
            >
              <span>Explore Services</span>
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "360ms" } as CSSProperties}
            className="grid grid-cols-3 gap-space-lg mt-space-3xl pt-space-xl border-t border-outline-variant w-full max-w-lg"
          >
            <div>
              <div className="font-headline-md text-headline-md font-bold text-primary">24h</div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Initial Scope Review
              </div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md font-bold text-primary">7</div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Specialized Tracks
              </div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md font-bold text-primary">100%</div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Confidential Briefs
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative mt-space-xl lg:mt-0">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
            className="relative w-full aspect-square max-w-[480px] mx-auto bg-surface-container-lowest/80 backdrop-blur-xl rounded-xl p-space-xl shadow-xl overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern height="36" id="grid-pattern" patternUnits="userSpaceOnUse" width="36">
                    <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#167A52" strokeDasharray="2 3" strokeWidth="0.75" />
                  </pattern>
                </defs>
                <rect fill="url(#grid-pattern)" height="100%" width="100%" />
              </svg>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-signal-green animate-ping" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                  Session :: Intake_Protocol
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant px-space-xs py-0.5 rounded bg-surface-container">
                System Idle
              </span>
            </div>
            <div className="relative z-10 my-auto flex flex-col gap-space-md">
              <div className="p-space-md rounded-lg bg-surface-container/90 backdrop-blur-md shadow-sm hover:-translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-sm text-label-sm text-signal-green font-bold">REQ // 01</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">SPECIFICATION READY</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-primary font-medium">
                  Research Scope &amp; Methodology
                </div>
                <div className="flex items-center gap-space-xs mt-space-xs">
                  <span className="px-space-xs py-0.5 rounded text-[10px] uppercase font-mono bg-surface-container-high text-on-surface-variant">
                    Qual / Quant
                  </span>
                  <span className="px-space-xs py-0.5 rounded text-[10px] uppercase font-mono bg-surface-container-high text-on-surface-variant">
                    Peer Review
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-6 w-0.5 bg-gradient-to-b from-signal-green to-outline-variant" />
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-high/90 backdrop-blur-md shadow-sm hover:-translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-bold">LEDGER // 02</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">US GAAP / IFRS</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-primary font-medium">
                  Foreign Accounting Matrix
                </div>
                <div className="flex items-center gap-space-xs mt-space-xs">
                  <span className="px-space-xs py-0.5 rounded text-[10px] uppercase font-mono bg-surface-container-highest text-on-surface-variant">
                    QuickBooks Online
                  </span>
                  <span className="px-space-xs py-0.5 rounded text-[10px] uppercase font-mono bg-surface-container-highest text-on-surface-variant">
                    Multi-Currency
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-6 w-0.5 bg-gradient-to-b from-secondary to-signal-green" />
              </div>
              <div className="p-space-md rounded-lg bg-surface-container/90 backdrop-blur-md shadow-sm hover:-translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-sm text-label-sm text-signal-green font-bold">OUTPUT // 03</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">FINAL DISPATCH</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-primary font-medium">
                  Deliverable Matrix &amp; Handover
                </div>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-between pt-space-sm border-t border-outline-variant">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">LATENCY: &lt; 0.4s</span>
              <span className="font-label-sm text-label-sm text-signal-green font-mono font-medium">
                AES-256 VAULT ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
