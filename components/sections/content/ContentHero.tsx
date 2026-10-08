import Link from "next/link";
import type { CSSProperties } from "react";
import { CornerAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const markers = ["Research", "Analyse", "Create", "Deliver"];

export function ContentHero() {
  return (
    <section className="fbx-hero relative w-full px-margin-mobile md:px-margin py-space-3xl md:py-space-4xl overflow-hidden bg-haze border-b border-outline-variant/60">
      <CornerAccent corner="top-right" tone="on-light" size="lg" className="-top-6 right-0" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-signal-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-deep-sage/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "80ms" } as CSSProperties}
            className="inline-flex items-center gap-space-xs px-space-sm py-[4px] rounded-full bg-surface-container-high/90 border border-outline-variant w-fit backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
            <span className="font-label-sm text-label-sm tracking-widest uppercase text-signal-green font-medium">
              Content &amp; Professional Writing
            </span>
          </div>
          <h1
            data-hero-item
            style={{ "--fbx-hero-delay": "140ms" } as CSSProperties}
            className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary uppercase tracking-tight leading-[0.95] max-w-2xl"
          >
            Words that make complex ideas easier to understand.
          </h1>
          <p
            data-hero-item
            style={{ "--fbx-hero-delay": "200ms" } as CSSProperties}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-normal leading-relaxed"
          >
            Research-driven writing, professional documentation, and polished content engineered for forward-thinking
            enterprises, researchers, and global organizations.
          </p>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "280ms" } as CSSProperties}
            className="flex flex-wrap items-center gap-space-md pt-space-xs"
          >
            <Link
              href="/contact"
              className="fbx-btn inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg font-medium px-space-xl py-space-md rounded-lg hover:opacity-90 shadow-[0_12px_28px_rgba(13,95,64,0.12)]"
            >
              Get a Quote
            </Link>
            <a
              href="#services-inventory"
              className="fbx-btn inline-flex items-center justify-center bg-surface-container-high/60 border border-primary/40 text-primary font-label-lg text-label-lg font-medium px-space-xl py-space-md rounded-lg hover:bg-surface-container-highest backdrop-blur-md"
            >
              Explore Services
            </a>
          </div>
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "360ms" } as CSSProperties}
            className="pt-space-md flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant/60 tracking-widest uppercase"
          >
            {markers.map((marker, index) => (
              <span key={marker} className="flex items-center gap-space-sm">
                {index > 0 ? <span className="w-1 h-1 rounded-full bg-signal-green" /> : null}
                <span>{marker}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div
            data-hero-item
            style={{ "--fbx-hero-delay": "120ms" } as CSSProperties}
            className="relative w-full rounded-2xl bg-surface-container-lowest/90 border border-outline-variant p-space-lg shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            <div className="flex items-center justify-between pb-space-md border-b border-outline-variant mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded-full bg-surface-variant" />
                <span className="w-3 h-3 rounded-full bg-surface-variant" />
                <span className="w-3 h-3 rounded-full bg-surface-variant" />
                <span className="ml-space-xs font-label-sm text-label-sm text-on-surface-variant/70">
                  workspace_terminal.doc
                </span>
              </div>
              <span className="font-label-sm text-label-sm px-space-xs py-[2px] bg-secondary-container/40 text-secondary rounded">
                Illustrative Architecture &bull; v2.6
              </span>
            </div>
            <div className="space-y-space-sm">
              <div className="p-space-sm rounded-lg bg-surface-container/60 border border-outline-variant">
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
                  <span className="flex items-center gap-1 text-signal-green">
                    <MaterialIcon name="database" className="text-[15px]" />
                    <span> Research Synthesis</span>
                  </span>
                  <span className="text-[10px] text-on-surface-variant/50">STAGE 01</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface leading-tight">
                  Synthesized 14 institutional papers into structured evidence matrix with full bibliographic rigor.
                </p>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-high/80 border border-outline-variant relative">
                <div className="absolute -left-1 top-3 bottom-3 w-1 bg-signal-green rounded-full" />
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1 pl-space-xs">
                  <span className="flex items-center gap-1 text-primary">
                    <MaterialIcon name="view_quilt" className="text-[15px]" />
                    <span> Structured Layout &amp; Tone</span>
                  </span>
                  <span className="text-[10px] text-signal-green font-semibold">VALIDATED</span>
                </div>
                <div className="space-y-1 pl-space-xs pt-1">
                  <div className="h-2 w-3/4 bg-outline-variant/80 rounded" />
                  <div className="h-2 w-11/12 bg-outline-variant/80 rounded" />
                  <div className="h-2 w-1/2 bg-outline-variant/80 rounded" />
                </div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-space-xs">
                  Content Flow Execution
                </span>
                <svg className="w-full h-12 text-on-surface-variant" fill="none" viewBox="0 0 380 40">
                  <path
                    d="M 35 20 L 105 20 M 125 20 L 195 20 M 215 20 L 285 20 M 305 20 L 365 20"
                    opacity="0.4"
                    stroke="currentColor"
                    strokeDasharray="2 3"
                    strokeWidth="1.5"
                  />
                  <circle cx="20" cy="20" fill="#0D5F40" r="10" stroke="#167A52" strokeWidth="1.5" />
                  <text
                    fill="#ffffff"
                    fontFamily="Inter"
                    fontSize="7"
                    fontWeight="600"
                    textAnchor="middle"
                    x="20"
                    y="23"
                  >
                    R
                  </text>
                  <circle cx="115" cy="20" fill="#0D5F40" r="10" stroke="#167A52" strokeWidth="1.5" />
                  <text
                    fill="#ffffff"
                    fontFamily="Inter"
                    fontSize="7"
                    fontWeight="600"
                    textAnchor="middle"
                    x="115"
                    y="23"
                  >
                    S
                  </text>
                  <circle cx="205" cy="20" fill="#0D5F40" r="10" stroke="#167A52" strokeWidth="1.5" />
                  <text
                    fill="#ffffff"
                    fontFamily="Inter"
                    fontSize="7"
                    fontWeight="600"
                    textAnchor="middle"
                    x="205"
                    y="23"
                  >
                    W
                  </text>
                  <circle cx="295" cy="20" fill="#0D5F40" r="10" stroke="#167A52" strokeWidth="1.5" />
                  <text
                    fill="#ffffff"
                    fontFamily="Inter"
                    fontSize="7"
                    fontWeight="600"
                    textAnchor="middle"
                    x="295"
                    y="23"
                  >
                    E
                  </text>
                  <circle cx="370" cy="20" fill="#167A52" r="7" />
                </svg>
                <div className="flex justify-between text-[10px] text-on-surface-variant/70 font-mono uppercase px-1">
                  <span>Research</span>
                  <span>Structure</span>
                  <span>Write</span>
                  <span>Refine</span>
                  <span>Deliver</span>
                </div>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between text-[11px] font-mono text-on-surface-variant/60 border-t border-outline-variant">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
                <span> Active Editorial Engine</span>
              </span>
              <span>Latency: 0ms &bull; Fidelity 100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
