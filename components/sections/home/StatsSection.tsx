import { DiagonalLines, GreenStrip, LinePattern } from "@/components/brand/Backdrop";

const STATS: { value: string; label: string; detail: string; accent?: boolean }[] = [
  { value: "100+", label: "Projects Supported", detail: "Validated deliverables" },
  { value: "7", label: "Core Service Areas", detail: "Comprehensive capability", accent: true },
  { value: "Global", label: "Client Support", detail: "Cross-timezone alignment" },
  { value: "24/7", label: "Digital Accessibility", detail: "Structured responsiveness" },
];

export function StatsSection() {
  return (
    <section className="w-full bg-brand-deep py-space-4xl px-margin-mobile md:px-margin border-b border-whiteout/10 relative overflow-hidden">
      <LinePattern pattern="grid" tone="on-dark" className="opacity-50" />
      <DiagonalLines tone="on-dark" className="-bottom-8 -right-8 h-44 w-44 opacity-60 md:h-60 md:w-60" />
      <GreenStrip orientation="horizontal" tone="on-dark" className="left-0 top-0" />
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xl">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-space-xs p-space-lg rounded-xl bg-surface-container-lowest border border-whiteout/10"
            >
              <span
                className={`font-headline-xl text-headline-xl-mobile md:text-headline-xl font-mono font-bold ${
                  stat.accent ? "text-signal-green" : "text-primary"
                }`}
              >
                {stat.value}
              </span>
              <span className="font-headline-sm text-headline-sm text-ink font-medium">{stat.label}</span>
              <span className="font-body-sm text-[12px] text-on-surface-variant">{stat.detail}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-whiteout/60 text-label-sm font-mono pt-space-md border-t border-whiteout/20">
          <span>* Live operational benchmarks</span>
          <span>Standardized Quality Protocol</span>
        </div>
      </div>
    </section>
  );
}
