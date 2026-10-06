import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const TRUST: { icon: IconName; title: string; sub: string }[] = [
  { icon: "verified", title: "Research-Driven", sub: "Validated methodologies" },
  { icon: "schema", title: "Structured Analysis", sub: "Framework-aligned" },
  { icon: "business_center", title: "Business-Focused", sub: "Commercial viability" },
  { icon: "description", title: "Clear Deliverables", sub: "Executive-ready briefs" },
  { icon: "lock", title: "Confidential", sub: "Strict NDA protocols" },
];

export function BusinessTrust() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-md">
      <div className="bg-surface-container-low/70 backdrop-blur-md rounded-xl p-space-md shadow-md">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
          {TRUST.map((item, index) => (
            <div
              key={item.title}
              className={
                index === TRUST.length - 1
                  ? "flex items-center gap-space-sm col-span-2 sm:col-span-1 lg:col-span-1"
                  : "flex items-center gap-space-sm"
              }
            >
              <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                <MaterialIcon name={item.icon} className="text-signal-blue text-[18px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary font-medium">{item.title}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
