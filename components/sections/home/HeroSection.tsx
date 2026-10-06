import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black-void text-primary py-space-3xl px-margin-mobile md:px-margin border-b border-outline-variant/15">
      {/* Subtle ambient backdrop glow & grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-signal-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-twilight-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-space-lg">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-signal-blue animate-pulse" />
            <span className="font-label-md text-label-md tracking-widest text-on-surface uppercase font-medium">
              Professional Services
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-whiteout tracking-tight leading-[0.95]">
            Research.
            <br />
            Analyse.
            <br />
            Create.
            <br />
            <span className="text-secondary italic font-light tracking-normal">Deliver.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Professional research, business, accounting, data and digital support for students, professionals, startups
            and businesses worldwide.
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-space-xl py-space-md rounded-lg font-label-lg text-label-lg bg-whiteout text-ink font-semibold hover:bg-haze transition-all duration-200 shadow-md"
            >
              Get a Free Consultation
            </Link>
            <a
              href="#services-matrix"
              className="inline-flex items-center justify-center px-space-xl py-space-md rounded-lg font-label-lg text-label-lg bg-transparent text-whiteout font-medium hover:bg-whiteout/10 transition-all duration-200 border border-whiteout/25"
            >
              Explore Services
            </a>
          </div>
          <div className="flex items-center gap-space-sm pt-space-md text-on-surface-variant/80 border-t border-outline-variant/20 w-full max-w-lg">
            <MaterialIcon name="verified" className="text-signal-blue text-[18px]" />
            <span className="font-label-sm text-label-sm tracking-wide">
              Structured expertise. Reliable delivery. Global support.
            </span>
          </div>
        </div>

        {/* Right Column: Abstract Ecosystem Visual Matrix */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[480px] rounded-xl p-space-lg bg-gradient-to-b from-surface-container-high/60 to-surface-container-lowest/80 backdrop-blur-xl border border-outline-variant/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden">
            {/* Geometric Top Status Bar */}
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-signal-blue" />
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface font-semibold">
                  Bix Operations Engine
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">NODE v4.8</span>
            </div>

            {/* Central Data Network Visualization */}
            <div className="relative my-space-md flex flex-col items-center justify-center">
              <svg className="w-full h-36" fill="none" viewBox="0 0 320 120">
                <path d="M 10 90 Q 80 10, 160 55 T 310 30" stroke="#426188" strokeDasharray="4 4" strokeWidth="2" />
                <path d="M 10 60 C 90 120, 200 10, 310 75" stroke="#2b7fff" strokeWidth="2.5" />
                <circle cx="80" cy="42" fill="#ffffff" r="4" />
                <circle cx="160" cy="55" fill="#2b7fff" r="5" />
                <circle cx="240" cy="38" fill="#ffffff" r="4" />
              </svg>

              {/* Floating service badges inside visual */}
              <div className="grid grid-cols-2 gap-space-sm w-full mt-space-sm">
                <div className="p-space-sm rounded-lg bg-surface-container/90 border border-outline-variant/30 flex items-center gap-space-xs">
                  <MaterialIcon name="account_balance" className="text-signal-blue text-[18px]" />
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
              <span className="px-space-sm py-space-xs rounded-full bg-whiteout/10 text-on-surface font-label-sm text-label-sm">
                #Research
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-whiteout/10 text-on-surface font-label-sm text-label-sm">
                #Consulting
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-signal-blue/20 text-signal-blue font-label-sm text-label-sm font-semibold">
                #AccountingCore
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-whiteout/10 text-on-surface font-label-sm text-label-sm">
                #DigitalSupport
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
