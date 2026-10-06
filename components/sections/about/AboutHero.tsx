import Link from "next/link";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-space-3xl px-margin-mobile md:px-margin">
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-signal-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-twilight-blue/10 blur-[100px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-space-lg">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high/80 border border-outline-variant/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-signal-blue animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              About FreelancersBix
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl tracking-tight text-whiteout uppercase">
            Professional expertise,
            <br />
            <span className="text-secondary">built around your goals.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            FreelancersBix provides structured research, business, accounting, data and digital support to help
            individuals and organizations work smarter and move forward with confidence.
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-space-xl py-3.5 rounded-lg bg-whiteout text-ink font-label-lg text-label-lg font-medium hover:opacity-90 transition-opacity shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-space-xl py-3.5 rounded-lg bg-transparent border border-outline-variant/60 text-whiteout font-label-lg text-label-lg font-medium hover:bg-surface-container transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative w-full">
          <div className="relative w-full aspect-square max-w-md mx-auto bg-gradient-to-b from-surface-container to-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 shadow-[0_16px_40px_rgba(0,0,0,0.65)] flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#2b7fff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
            <div className="relative z-10 flex items-center justify-between pb-space-md border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-signal-blue" />
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-mono">
                SYS // CORE.MATRIX
              </span>
            </div>
            <div className="relative z-10 my-auto py-space-md flex flex-col items-center justify-center">
              <svg
                className="w-full h-44 text-twilight-blue/40"
                fill="none"
                viewBox="0 0 320 180"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="160" cy="90" r="70" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1" />
                <circle cx="160" cy="90" r="40" stroke="currentColor" strokeWidth="1" />
                <line stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" x1="60" x2="260" y1="90" y2="90" />
                <line stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" x1="160" x2="160" y1="20" y2="160" />
                <path d="M 60 120 Q 110 50 160 85 T 260 40" fill="none" stroke="#2b7fff" strokeWidth="2" />
                <circle
                  className="animate-ping"
                  cx="160"
                  cy="85"
                  fill="#ffffff"
                  r="4"
                  style={{ animationDuration: "3s" }}
                />
                <circle cx="160" cy="85" fill="#2b7fff" r="3" />
                <circle cx="260" cy="40" fill="#ffffff" r="3" />
                <circle cx="60" cy="120" fill="#a9c9f5" r="3" />
              </svg>
              <div className="grid grid-cols-2 gap-space-sm w-full mt-space-sm">
                <div className="flex items-center justify-between p-space-sm rounded bg-surface-container-high/60 border border-outline-variant/30">
                  <span className="font-label-sm text-label-sm text-on-surface">Research</span>
                  <span className="font-label-sm text-label-sm text-signal-blue font-mono">99.4%</span>
                </div>
                <div className="flex items-center justify-between p-space-sm rounded bg-surface-container-high/60 border border-outline-variant/30">
                  <span className="font-label-sm text-label-sm text-on-surface">Analysis</span>
                  <span className="font-label-sm text-label-sm text-signal-blue font-mono">Active</span>
                </div>
                <div className="flex items-center justify-between p-space-sm rounded bg-surface-container-high/60 border border-outline-variant/30">
                  <span className="font-label-sm text-label-sm text-on-surface">Strategy</span>
                  <span className="font-label-sm text-label-sm text-secondary font-mono">Mapped</span>
                </div>
                <div className="flex items-center justify-between p-space-sm rounded bg-surface-container-high/60 border border-outline-variant/30">
                  <span className="font-label-sm text-label-sm text-on-surface">Execution</span>
                  <span className="font-label-sm text-label-sm text-whiteout font-mono">Sync</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 pt-space-sm flex items-center justify-between border-t border-outline-variant/20 text-on-surface-variant font-label-sm text-label-sm">
              <span>METHODOLOGY INTEGRATED</span>
              <span className="text-secondary font-medium">100% DISCIPLINED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
