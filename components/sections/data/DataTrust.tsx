import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const items: { icon: IconName; label: string; sub: string }[] = [
  { icon: "dataset", label: "Structured Data", sub: "Standardized models" },
  { icon: "science", label: "Research-Driven", sub: "Methodological rigor" },
  { icon: "calculate", label: "Analytical Support", sub: "Statistical synthesis" },
  { icon: "bar_chart_4_bars", label: "Clear Visualization", sub: "Instant executive read" },
  { icon: "task_alt", label: "Professional Delivery", sub: "Decision-ready assets" },
];

export function DataTrust() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-lg bg-surface-container-lowest border-y border-outline-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 items-center gap-space-md">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`group flex flex-col md:flex-row gap-space-sm items-start md:items-center ${index === items.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
              <MaterialIcon name={item.icon} className="text-[20px]" />
            </span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-primary font-semibold">{item.label}</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
