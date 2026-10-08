import Link from "next/link";
import type { CSSProperties } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function StartupHero() {
  return (
    <section className="fbx-hero relative w-full px-margin-mobile md:px-margin py-space-3xl md:py-space-4xl overflow-hidden bg-haze border-b border-outline-variant/60">
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-signal-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-80 h-80 bg-deep-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-green/10 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Business &amp; Startup Support
            </span>
          </div>
          <h1
            data-hero-item
            style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
            className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary uppercase tracking-tight leading-none"
          >
            Turn business ideas into structured plans.
          </h1>
          <p
            data-hero-item
            style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          >
            Practical research, planning and professional business support for founders, startups, small businesses and
            growing organizations.
          </p>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
            className="flex flex-wrap items-center gap-space-md pt-space-sm"
          >
            <Link
              href="/contact"
              className="fbx-btn inline-flex items-center justify-center bg-signal-green text-whiteout font-label-lg text-label-lg font-medium px-space-lg py-space-sm rounded-lg hover:opacity-90 shadow-lg shadow-signal-green/20"
            >
              Get a Quote
            </Link>
            <a
              href="#services-directory"
              className="fbx-btn inline-flex items-center justify-center bg-surface-container-high hover:bg-surface-variant text-primary font-label-lg text-label-lg font-medium px-space-lg py-space-sm rounded-lg"
            >
              Explore Services
            </a>
          </div>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "360ms" } as CSSProperties}
            className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm tracking-wide pt-space-xs"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-signal-green" />
            <span>Research</span>
            <span className="text-deep-sage">•</span>
            <span>Analyse</span>
            <span className="text-deep-sage">•</span>
            <span>Create</span>
            <span className="text-deep-sage">•</span>
            <span>Deliver</span>
          </div>
        </div>
        <div className="lg:col-span-6 relative mt-space-lg lg:mt-0">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
            className="relative bg-surface-container-lowest rounded-xl p-space-lg overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-low px-space-md py-space-xs rounded-lg">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-signal-green" />
                <span className="font-label-sm text-label-sm text-on-surface tracking-wider uppercase font-semibold">
                  Illustrative Planning Framework
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary bg-signal-green/10 px-2 py-0.5 rounded">
                v3.8 Scope Architecture
              </span>
            </div>
            <div className="grid grid-cols-3 gap-space-sm mb-space-md">
              <div className="bg-surface-container rounded-lg p-space-sm flex flex-col justify-between h-28 group hover:bg-surface-container-high transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-deep-sage font-semibold uppercase">
                    01 • Problem
                  </span>
                  <MaterialIcon name="troubleshoot" className="text-[16px] text-signal-green" />
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Unmet market friction &amp; operational pain points
                </p>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-signal-green w-4/5" />
                </div>
              </div>
              <div className="bg-surface-container rounded-lg p-space-sm flex flex-col justify-between h-28 group hover:bg-surface-container-high transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-deep-sage font-semibold uppercase">
                    02 • Value Prop
                  </span>
                  <MaterialIcon name="diamond" className="text-[16px] text-signal-green" />
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Core differentiated business offering
                </p>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-signal-green w-full" />
                </div>
              </div>
              <div className="bg-surface-container rounded-lg p-space-sm flex flex-col justify-between h-28 group hover:bg-surface-container-high transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-deep-sage font-semibold uppercase">
                    03 • Market
                  </span>
                  <MaterialIcon name="analytics" className="text-[16px] text-signal-green" />
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Addressable target segments &amp; scale
                </p>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-signal-green w-3/5" />
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-lg p-space-md mb-space-md">
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                  Phased Milestone Trajectory
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Phase 01 through Scale</span>
              </div>
              <div className="w-full h-24 relative flex items-center">
                <svg className="w-full h-full text-signal-green" fill="none" viewBox="0 0 400 90">
                  <path
                    d="M 0 75 Q 100 70, 180 50 T 320 25 T 400 10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={2.5}
                  />
                  <path
                    d="M 0 75 Q 100 70, 180 50 T 320 25 T 400 10 L 400 90 L 0 90 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                  <circle className="fill-primary" cx="80" cy="72" r="4" />
                  <circle className="fill-signal-green" cx="180" cy="50" r="4" />
                  <circle className="fill-primary" cx="320" cy="25" r="4" />
                  <circle className="fill-secondary" cx="395" cy="10" r="4" />
                </svg>
              </div>
              <div className="grid grid-cols-4 gap-space-xs pt-space-xs text-center font-label-sm text-label-sm">
                <div className="text-on-surface-variant">Discovery</div>
                <div className="text-on-surface-variant">Validation</div>
                <div className="text-on-surface-variant">Model Build</div>
                <div className="text-signal-green font-medium">Readiness</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-space-sm">
              <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-2 rounded-lg">
                <MaterialIcon name="verified_user" className="text-[18px] text-signal-green" />
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-primary font-medium">Standardized Review</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Multi-tier check</span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-2 rounded-lg">
                <MaterialIcon name="inventory_2" className="text-[18px] text-secondary" />
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-primary font-medium">Asset Ready</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Executive packs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
