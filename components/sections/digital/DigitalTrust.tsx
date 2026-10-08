import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const TRUST_ITEMS: { name: IconName; label: string; wide?: boolean }[] = [
  { name: "account_tree", label: "Organized Workflows" },
  { name: "support_agent", label: "Professional Support" },
  { name: "local_shipping", label: "Structured Delivery" },
  { name: "forum", label: "Clear Communication" },
  { name: "shield_lock", label: "Confidentiality-Conscious", wide: true },
];

export function DigitalTrust() {
  return (
    <section className="w-full bg-surface-container-highest py-space-md border-y border-outline-variant/40">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-space-md items-center">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-space-sm justify-center md:justify-start ${
                item.wide ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <MaterialIcon name={item.name} className="text-signal-green text-2xl" />
              <span className="font-label-lg text-label-lg text-on-surface">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
