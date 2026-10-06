import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const MODULES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "dataset",
    title: "Data Collection",
    desc: "Secondary extraction, survey aggregation, and structured data hygiene.",
  },
  {
    icon: "calculate",
    title: "Data Analysis",
    desc: "Statistical correlation, unit modeling, and quantitative scenario testing.",
  },
  {
    icon: "bar_chart",
    title: "Visualization",
    desc: "Clear charting, matrix plots, and presentation-ready graphic exhibits.",
  },
];

export function BusinessDataIntegration() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="bg-surface-container-low rounded-xl p-space-xl md:p-space-2xl shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold">
              Quantitative Power
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
              When business questions require data.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Many strategic questions cannot be answered by qualitative summaries alone. They require numerical
              consolidation, spreadsheet modeling, survey data cleaning, or custom dashboard visual representations.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our teams smoothly combine narrative business consulting with dedicated data engineering, ensuring every
              conclusion is supported by clean data and transparent calculations.
            </p>
            <div className="pt-space-xs">
              <Link
                href="/services/data-and-research"
                className="inline-flex items-center gap-2 text-signal-blue hover:text-secondary transition-colors font-label-lg text-label-lg font-medium"
              >
                <span>Explore Data &amp; Research Services</span>
                <MaterialIcon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-space-md">
            {MODULES.map((item) => (
              <div key={item.title} className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
                <MaterialIcon name={item.icon} className="text-signal-blue text-[24px]" />
                <h3 className="font-headline-sm text-body-lg text-primary font-semibold">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
