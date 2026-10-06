const STATS: { value: string; label: string; detail: string; accent?: boolean }[] = [
  { value: "100+", label: "Projects Supported", detail: "Validated deliverables" },
  { value: "7", label: "Core Service Areas", detail: "Comprehensive capability", accent: true },
  { value: "Global", label: "Client Support", detail: "Cross-timezone alignment" },
  { value: "24/7", label: "Digital Accessibility", detail: "Structured responsiveness" },
];

export function StatsSection() {
  return (
    <section className="w-full bg-black-void py-space-4xl px-margin-mobile md:px-margin border-b border-outline-variant/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-signal-blue/5 via-transparent to-twilight-blue/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xl">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-space-xs p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/20"
            >
              <span
                className={`font-headline-xl text-headline-xl-mobile md:text-headline-xl font-mono font-bold ${
                  stat.accent ? "text-signal-blue" : "text-whiteout"
                }`}
              >
                {stat.value}
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-medium">{stat.label}</span>
              <span className="font-body-sm text-[12px] text-on-surface-variant">{stat.detail}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-on-surface-variant/70 text-label-sm font-mono pt-space-md border-t border-outline-variant/20">
          <span>* Live operational benchmarks</span>
          <span>Standardized Quality Protocol</span>
        </div>
      </div>
    </section>
  );
}
