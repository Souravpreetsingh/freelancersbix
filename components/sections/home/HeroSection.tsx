import Link from "next/link";
import type { CSSProperties } from "react";
import { HeroBackdrop } from "@/components/brand/Backdrop";
import { CornerAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function HeroSection() {
  return (
    <section className="fbx-hero relative w-full overflow-hidden bg-haze text-primary pt-space-2xl pb-space-3xl md:pt-space-3xl md:pb-space-4xl px-margin-mobile md:px-margin border-b border-outline-variant/60">
      {/* Structured background: line pattern, diagonal rules & angled green block */}
      <HeroBackdrop pattern="grid" block="right" diagonals="top-left" />
      <CornerAccent corner="top-right" tone="on-light" size="lg" className="-top-8 -right-10" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 order-last lg:order-none flex flex-col items-start gap-space-lg">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
            className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/30"
          >
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
            <span className="font-label-md text-label-md tracking-widest text-on-surface uppercase font-medium">
              Professional Services
            </span>
          </div>
          <h1
            data-hero-item
            style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
            className="font-headline-xl text-[clamp(3rem,7.5vw,7rem)] font-extrabold uppercase text-primary tracking-tight leading-[0.92]"
          >
            Research.
            <br />
            Analyse.
            <br />
            Create.
            <br />
            <span className="text-secondary italic font-light tracking-normal">Deliver.</span>
          </h1>
          <p
            data-hero-item
            style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          >
            Professional research, business, accounting, data and digital support for students, professionals, startups
            and businesses worldwide.
          </p>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
            className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-md rounded-lg font-label-lg text-label-lg bg-primary text-on-primary font-semibold hover:bg-[#08452F] shadow-md"
            >
              Get a Free Consultation
            </Link>
            <a
              href="#services-matrix"
              className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-md rounded-lg font-label-lg text-label-lg bg-transparent text-primary font-medium hover:bg-primary/10 border border-primary/40"
            >
              Explore Services
            </a>
          </div>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "360ms" } as CSSProperties}
            className="flex items-center gap-space-sm pt-space-md text-on-surface-variant/80 border-t border-outline-variant/20 w-full max-w-lg"
          >
            <MaterialIcon name="verified" className="text-signal-green text-[18px]" />
            <span className="font-label-sm text-label-sm tracking-wide">
              Structured expertise. Reliable delivery. Global support.
            </span>
          </div>
        </div>

        {/* Right Column: Abstract Ecosystem Visual Matrix */}
        <div className="lg:col-span-5 order-first lg:order-none relative w-full flex items-center justify-center">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
            className="relative w-full aspect-square max-w-[480px] rounded-xl p-space-lg bg-gradient-to-b from-surface-container-high/60 to-surface-container backdrop-blur-xl border border-outline-variant/50 shadow-[0_20px_50px_rgba(32,39,34,0.10)] flex flex-col justify-between overflow-hidden"
          >
            {/* Geometric Top Status Bar */}
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-signal-green" />
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface font-semibold">
                  Bix Operations Engine
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">NODE v4.8</span>
            </div>

            {/* Central Data Network Visualization */}
            <div className="relative my-space-md flex flex-col items-center justify-center">
              <svg className="w-full h-36" fill="none" viewBox="0 0 320 120">
                <path d="M 10 90 Q 80 10, 160 55 T 310 30" stroke="#0D5F40" strokeDasharray="4 4" strokeWidth="2" />
                <path d="M 10 60 C 90 120, 200 10, 310 75" stroke="#167A52" strokeWidth="2.5" />
                <circle cx="80" cy="42" fill="#0D5F40" r="4" />
                <circle cx="160" cy="55" fill="#167A52" r="5" />
                <circle cx="240" cy="38" fill="#167A52" r="4" />
              </svg>

              {/* Floating service badges inside visual */}
              <div className="grid grid-cols-2 gap-space-sm w-full mt-space-sm">
                <div className="p-space-sm rounded-lg bg-surface-container/90 border border-outline-variant/30 flex items-center gap-space-xs">
                  <MaterialIcon name="account_balance" className="text-signal-green text-[18px]" />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-primary font-bold">Foreign Accounting</span>
                    <span className="text-[10px] text-on-surface-variant leading-none">Multi-currency reconciled</span>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container/90 border border-outline-variant/30 flex items-center gap-space-xs">
                  <MaterialIcon name="analytics" className="text-secondary text-[18px]" />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-primary font-bold">Data &amp; Synthesis</span>
                    <span className="text-[10px] text-on-surface-variant leading-none">Predictive insights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Live Ecosystem Badges */}
            <div className="flex flex-wrap gap-space-xs pt-space-sm border-t border-outline-variant/20">
              <span className="px-space-sm py-space-xs rounded-full bg-outline-variant/80 text-on-surface font-label-sm text-label-sm">
                #Research
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-outline-variant/80 text-on-surface font-label-sm text-label-sm">
                #Consulting
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-signal-green/20 text-signal-green font-label-sm text-label-sm font-semibold">
                #AccountingCore
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-outline-variant/80 text-on-surface font-label-sm text-label-sm">
                #DigitalSupport
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
