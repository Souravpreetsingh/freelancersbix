import { LinePattern } from "@/components/brand/Backdrop";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const VALUE_ITEMS: { icon: IconName; title: string; description: string }[] = [
  { icon: "menu_book", title: "Research-Driven", description: "Academic rigour & evidence" },
  { icon: "psychology", title: "Professional Expertise", description: "Specialized domain experts" },
  { icon: "lock", title: "Confidential & Reliable", description: "Strict NDA & data protection" },
  { icon: "flowsheet", title: "Structured Delivery", description: "Milestone-based execution" },
  { icon: "public", title: "Global Support", description: "Cross-timezone assistance" },
];

export function ValueStrip() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-highest py-space-xl px-margin-mobile md:px-margin border-y border-outline-variant/40">
      <LinePattern pattern="diagonal" className="opacity-40" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md relative z-10">
        {VALUE_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-bright border border-outline-variant/50 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center flex-shrink-0 text-signal-green">
              <MaterialIcon name={item.icon} className="text-[22px]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md text-primary font-bold truncate">{item.title}</span>
              <span className="font-body-sm text-[12px] text-on-surface-variant truncate">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
