const charts = [
  {
    title: "Trajectory Growth",
    badge: "+32.4%",
    sub: "Longitudinal trend over 6 intervals",
    footer: "Time-Series Regression",
    type: "line" as const,
  },
  {
    title: "Comparative Volume",
    badge: "5 Cohorts",
    sub: "Cross-category performance",
    footer: "Segment Volume Matrix",
    type: "bar" as const,
  },
  {
    title: "Share Allocation",
    badge: "Total 100%",
    sub: "Categorical distribution split",
    footer: "55% Prime • 30% Aux • 15% Other",
    type: "donut" as const,
  },
  {
    title: "Correlation Scatter",
    badge: "r = 0.81",
    sub: "Variable X vs Variable Y",
    footer: "Bivariate Density Mapping",
    type: "scatter" as const,
  },
];

function LineChart() {
  return (
    <svg aria-hidden="true" className="h-32 w-full" fill="none" viewBox="0 0 200 90">
      <path d="M 10 75 Q 50 65 90 40 T 170 20 T 195 10" stroke="#2b7fff" strokeLinecap="round" strokeWidth="2.5" />
      <circle cx="10" cy="75" fill="#a9c9f5" r="3" stroke="#000" strokeWidth="1.5" />
      <circle cx="90" cy="40" fill="#a9c9f5" r="3" stroke="#000" strokeWidth="1.5" />
      <circle cx="170" cy="20" fill="#a9c9f5" r="3" stroke="#000" strokeWidth="1.5" />
      <circle cx="195" cy="10" fill="#ffffff" r="4" stroke="#2b7fff" strokeWidth="2" />
    </svg>
  );
}

function BarChart() {
  return (
    <div className="h-32 flex items-end justify-between gap-2 px-2 pb-2">
      <div className="w-6 rounded-t h-[40%] bg-surface-container-high" />
      <div className="w-6 rounded-t h-[65%] bg-surface-container-high" />
      <div className="w-6 rounded-t h-[85%] bg-secondary" />
      <div className="w-6 rounded-t h-full bg-signal-blue shadow-[0_0_12px_rgba(43,127,255,0.6)]" />
      <div className="w-6 rounded-t h-[55%] bg-surface-container-high" />
    </div>
  );
}

function DonutChart() {
  return (
    <div className="flex justify-center py-1">
      <svg aria-hidden="true" className="w-28 h-28 -rotate-90" viewBox="0 0 36 36">
        <circle cx="18" cy="18" fill="none" r="15.9155" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
        <circle
          cx="18"
          cy="18"
          fill="none"
          r="15.9155"
          stroke="#2b7fff"
          strokeDasharray="55 100"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <circle
          cx="18"
          cy="18"
          fill="none"
          r="15.9155"
          stroke="#a9c9f5"
          strokeDasharray="30 100"
          strokeDashoffset="-55"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}

function ScatterChart() {
  return (
    <svg aria-hidden="true" className="h-32 w-full" fill="none" viewBox="0 0 180 90">
      <path d="M 12 85 L 170 12" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" strokeWidth="1.5" />
      {[
        [20, 80],
        [55, 72],
        [70, 60],
        [95, 55],
        [115, 45],
        [130, 35],
        [150, 28],
        [163, 20],
        [172, 14],
      ].map(([x, y], index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          fill={index === 8 ? "#ffffff" : "#a9c9f5"}
          r={index === 8 ? 4 : 3}
          stroke={index === 8 ? "#2b7fff" : "rgba(43,127,255,0.6)"}
          strokeWidth={index === 8 ? 2 : 1.2}
        />
      ))}
    </svg>
  );
}

export function DataVisualizations() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-whiteout/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Data Visualization
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout">
            Show the pattern, not just the numbers.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Purpose-built charts translate dense tables into the clean visual summaries your audience can read at a
            glance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {charts.map((chart) => (
            <div
              key={chart.title}
              className="p-space-md rounded-xl bg-surface-container-low border border-whiteout/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-label-lg text-label-lg text-whiteout font-semibold">{chart.title}</span>
                  <span className="font-label-sm text-label-sm text-secondary font-mono">{chart.badge}</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block">{chart.sub}</span>
                <div className="mt-3">
                  {chart.type === "line" ? <LineChart /> : null}
                  {chart.type === "bar" ? <BarChart /> : null}
                  {chart.type === "donut" ? <DonutChart /> : null}
                  {chart.type === "scatter" ? <ScatterChart /> : null}
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-twilight-blue mt-3">{chart.footer}</span>
            </div>
          ))}
        </div>
        <p className="font-label-sm text-label-sm text-[11px] text-outline text-center mt-space-lg">
          Illustrative visualizations — not actual FreelancersBix client data
        </p>
      </div>
    </section>
  );
}
