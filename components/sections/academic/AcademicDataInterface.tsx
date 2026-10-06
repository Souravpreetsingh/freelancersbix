import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const checks = [
  "Statistical modeling in SPSS, R, Python & STATA",
  "Thematic qualitative coding via NVivo",
  "Clear graphical rendering formatted for dissertation appendices",
];

const metrics = [
  { label: "R-Squared", value: "0.842" },
  { label: "Std Error", value: "0.031" },
  { label: "F-Stat", value: "142.6" },
];

const bars = [
  { key: "b1", x: 50, y: 70, h: 30, color: "#426188" },
  { key: "b2", x: 90, y: 55, h: 45, color: "#2b7fff" },
  { key: "b3", x: 130, y: 40, h: 60, color: "#ffffff" },
  { key: "b4", x: 170, y: 25, h: 75, color: "#426188" },
  { key: "b5", x: 210, y: 15, h: 85, color: "#2b7fff" },
  { key: "b6", x: 250, y: 20, h: 80, color: "#ffffff" },
  { key: "b7", x: 290, y: 38, h: 62, color: "#426188" },
  { key: "b8", x: 330, y: 60, h: 40, color: "#2b7fff" },
  { key: "b9", x: 370, y: 75, h: 25, color: "#ffffff" },
  { key: "b10", x: 410, y: 85, h: 15, color: "#2b7fff" },
] as const;

export function AcademicDataInterface() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-5">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue mb-space-xs block">
            Quantitative &amp; Qualitative
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-space-md">
            From raw information to useful insight.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            Raw survey pools, experimental outputs, and complex databases require careful structural preparation. We
            assist with data cleaning, coding, exploratory modeling, hypothesis testing, and narrative interpretation.
          </p>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
            {checks.map((item) => (
              <li key={item} className="flex items-center gap-space-xs">
                <MaterialIcon name="check_circle" className="text-signal-blue text-[18px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-secondary-fixed transition-colors"
          >
            <span>Discuss Data Modeling Scope</span>
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
        <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-xl shadow-xl">
          <div className="flex items-center justify-between pb-space-md mb-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-md text-label-md font-bold text-primary">Regression Variance Matrix</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-highest text-on-surface-variant">
                Illustrative Data
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-signal-blue">N = 1,248</span>
          </div>
          <div className="grid grid-cols-3 gap-space-sm mb-space-md">
            {metrics.map((item) => (
              <div key={item.label} className="bg-surface-container p-space-sm rounded-lg">
                <span className="font-label-sm text-label-sm text-on-surface-variant block">{item.label}</span>
                <span className="font-headline-sm text-headline-sm text-whiteout font-bold">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-surface-container p-space-md rounded-lg mb-space-md">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2 block">
              Multivariate Residual Distribution
            </span>
            <svg aria-hidden="true" className="w-full" viewBox="0 0 500 120">
              <line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="20" x2="480" y1="8" y2="8" />
              <line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="20" x2="480" y1="104" y2="104" />
              {bars.map((bar) => (
                <rect key={bar.key} fill={bar.color} height={bar.h} rx="2" width="18" x={bar.x} y={bar.y} />
              ))}
            </svg>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
            <span>Variables: Demographics, Retention, Latency</span>
            <span className="text-whiteout font-medium">Confidence Interval: 95%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
