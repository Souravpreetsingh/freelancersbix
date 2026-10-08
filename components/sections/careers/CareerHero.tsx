import type { CSSProperties } from "react";
import { HeroBackdrop } from "@/components/brand/Backdrop";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function CareerHero() {
  return (
    <section className="fbx-hero relative w-full px-margin-mobile md:px-margin py-space-3xl md:py-space-4xl overflow-hidden bg-haze border-b border-outline-variant/60">
      <HeroBackdrop pattern="grid" block="right" diagonals="top-left" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
            className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-signal-green font-label-md text-label-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse" />
            <span>CAREERS AT FREELANCERSBIX</span>
          </div>
          <h1
            data-hero-item
            style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
            className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-tight text-primary max-w-2xl"
          >
            Build Meaningful Work With A Team That Values Expertise.
          </h1>
          <p
            data-hero-item
            style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          >
            We’re building a professional services environment where research, business thinking, accounting expertise,
            data skills and digital capabilities come together to deliver analytical depth and global execution.
          </p>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
            className="flex flex-wrap items-center gap-space-md pt-space-md"
          >
            <a
              href="#opportunities"
              className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary/90 font-medium"
            >
              View Opportunities
              <MaterialIcon name="arrow_forward" className="ml-1.5 text-[18px]" />
            </a>
            <a
              href="#general-application"
              className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg text-primary bg-surface-container-high hover:bg-surface-variant font-medium"
            >
              Send Your Resume
            </a>
          </div>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "360ms" } as CSSProperties}
            className="grid grid-cols-3 gap-space-lg pt-space-xl mt-space-md w-full max-w-lg bg-surface-container-lowest/60 p-space-md rounded-xl"
          >
            <div>
              <div className="font-headline-md text-headline-md text-primary font-bold">5+</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Practice Fields
              </div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary font-bold">100%</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Remote / Flex
              </div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary font-bold">Rigorous</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Standards
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
            className="relative w-full aspect-square max-w-md bg-surface-container-lowest rounded-xl p-space-lg flex items-center justify-center overflow-hidden shadow-2xl"
          >
            <svg
              className="absolute inset-0 w-full h-full text-deep-sage/25"
              fill="none"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="200" cy="200" r="170" stroke="currentColor" strokeDasharray="4 6" />
              <circle cx="200" cy="200" r="110" stroke="currentColor" strokeOpacity="0.4" />
              <circle cx="200" cy="200" r="50" stroke="currentColor" strokeOpacity="0.6" />
              <line
                stroke="currentColor"
                strokeDasharray="2 4"
                strokeOpacity="0.3"
                x1="200"
                x2="200"
                y1="30"
                y2="370"
              />
              <line
                stroke="currentColor"
                strokeDasharray="2 4"
                strokeOpacity="0.3"
                x1="30"
                x2="370"
                y1="200"
                y2="200"
              />
              <line stroke="currentColor" strokeDasharray="2 8" strokeOpacity="0.2" x1="80" x2="320" y1="80" y2="320" />
              <line stroke="currentColor" strokeDasharray="2 8" strokeOpacity="0.2" x1="80" x2="320" y1="320" y2="80" />
            </svg>
            <div className="absolute inset-0 flex flex-col justify-between p-space-md z-10 pointer-events-none">
              <div className="self-center bg-surface-container-high px-space-md py-space-xs rounded-full shadow-lg flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-signal-green" />
                <span className="font-label-sm text-label-sm text-primary font-medium">Research &amp; Analysis</span>
              </div>
              <div className="flex justify-between items-center w-full px-space-xs">
                <div className="bg-surface-container-high px-space-md py-space-xs rounded-full shadow-lg flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-label-sm text-label-sm text-primary font-medium">Foreign Accounting</span>
                </div>
                <div className="bg-surface-container-high px-space-md py-space-xs rounded-full shadow-lg flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-label-sm text-label-sm text-primary font-medium">Strategic Consulting</span>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="bg-surface-container-high px-space-md py-space-xs rounded-full shadow-lg flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-signal-green" />
                  <span className="font-label-sm text-label-sm text-primary font-medium">Data Modeling</span>
                </div>
                <div className="bg-surface-container-high px-space-md py-space-xs rounded-full shadow-lg flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-signal-green" />
                  <span className="font-label-sm text-label-sm text-primary font-medium">Digital Ops</span>
                </div>
              </div>
            </div>
            <div className="relative z-20 w-24 h-24 rounded-full bg-surface-container-highest flex flex-col items-center justify-center shadow-xl">
              <MaterialIcon name="hub" className="text-signal-green text-3xl" />
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase mt-0.5">CORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
