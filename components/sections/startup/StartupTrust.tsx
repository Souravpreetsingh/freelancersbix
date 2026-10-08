import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const TRUST_ITEMS: { icon: IconName; label: string; wide?: boolean }[] = [
  { icon: "architecture", label: "Structured Planning" },
  { icon: "biotech", label: "Research-Driven" },
  { icon: "business_center", label: "Business-Focused" },
  { icon: "description", label: "Professional Documentation" },
  { icon: "lock", label: "Confidentiality-Conscious", wide: true },
];

export function StartupTrust() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-md">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-space-md items-center">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-space-xs text-on-surface ${item.wide ? "col-span-2 md:col-span-1" : ""}`}
            >
              <MaterialIcon name={item.icon} className="text-signal-green text-[20px]" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
