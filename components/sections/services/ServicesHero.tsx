import Link from "next/link";
import type { CSSProperties } from "react";
import { CornerAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function ServicesHero() {
  return (
    <section className="fbx-hero relative w-full overflow-hidden bg-haze border-b border-outline-variant/60 py-space-3xl md:py-space-4xl">
      <CornerAccent corner="top-right" tone="on-light" size="lg" className="-top-6 right-0" />
      <div className="absolute -top-32 right-0 w-[580px] h-[580px] bg-deep-sage/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-signal-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="w-full px-margin-mobile md:px-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md z-10">
            <div
              data-hero-item
              style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 border border-outline-variant backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold">
                Our Services
              </span>
            </div>
            <h1
              data-hero-item
              style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
              className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight uppercase"
            >
              Professional Expertise For Complex Requirements.
            </h1>
            <p
              data-hero-item
              style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs"
            >
              From academic research and business consulting to foreign accounting, data analysis and digital support,
              FreelancersBix provides structured professional services designed around your exact operational goals.
            </p>
            <div
              data-hero-item
              style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
              className="flex flex-wrap items-center gap-space-md mt-space-md"
            >
              <Link
                href="#quote-cta"
                className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg bg-primary text-on-primary hover:bg-[#08452F] font-medium shadow-lg"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="fbx-btn inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg bg-transparent text-primary hover:bg-surface-container-high border border-outline-variant font-medium"
              >
                Contact Us
              </Link>
            </div>
            <div
              data-hero-item
              style={{ "--fbx-hero-delay": "360ms" } as CSSProperties}
              className="flex flex-wrap items-center gap-space-lg pt-space-lg text-on-surface-variant"
            >
              <div className="flex items-center gap-2">
                <MaterialIcon name="verified" className="text-signal-green text-[18px]" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider">Methodical Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon name="lock" className="text-signal-green text-[18px]" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider">Strict Confidentiality</span>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon name="hub" className="text-signal-green text-[18px]" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider">Global Protocols</span>
              </div>
            </div>
          </div>

          {/* Abstract Connected Node Visual */}
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-[460px] rounded-2xl bg-surface-container-lowest/80 border border-outline-variant p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0D5F40_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="flex justify-between items-center z-10">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface-container-high/90 text-primary border border-outline-variant shadow-sm">
                  Academic
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-signal-green/20 text-secondary border border-signal-green/30 shadow-sm">
                  GAAP / IFRS
                </span>
              </div>
              <div className="relative w-full h-52 flex items-center justify-center z-10">
                <svg
                  className="w-full h-full text-on-surface-variant/40"
                  fill="none"
                  viewBox="0 0 320 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 40 100 C 100 40, 160 40, 220 100 C 250 130, 280 130, 300 100"
                    stroke="currentColor"
                    strokeDasharray="3 3"
                    strokeWidth="1.5"
                  />
                  <path d="M 40 140 C 110 140, 150 70, 260 70" opacity="0.6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M 90 30 L 160 100 L 230 160" opacity="0.5" stroke="#0D5F40" strokeWidth="1.5" />
                  <circle cx="160" cy="100" fill="#202722" r="28" stroke="#0D5F40" strokeWidth="1.5" />
                  <circle cx="160" cy="100" fill="#167A52" r="6" />
                  <circle cx="70" cy="65" fill="#202722" r="14" stroke="currentColor" strokeWidth="1" />
                  <circle cx="250" cy="70" fill="#202722" r="16" stroke="#167A52" strokeWidth="1" />
                  <circle cx="100" cy="140" fill="#202722" r="12" stroke="currentColor" strokeWidth="1" />
                  <circle cx="230" cy="150" fill="#202722" r="14" stroke="currentColor" strokeWidth="1" />
                  <path d="M 154 100 L 166 100 M 160 94 L 160 106" stroke="#ffffff" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex justify-between items-center z-10 pt-2 border-t border-outline-variant">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface-container-high/90 text-on-surface-variant border border-outline-variant">
                  Consulting
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface-container-high/90 text-primary border border-outline-variant">
                  Data Synthesis
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface-container-high/90 text-on-surface-variant border border-outline-variant">
                  Digital Ops
                </span>
              </div>
              <div className="absolute bottom-2 right-4 flex items-center gap-1.5 opacity-60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] tracking-widest uppercase font-mono text-on-surface-variant">
                  Pipeline Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
