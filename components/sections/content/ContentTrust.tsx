import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

interface TrustItem {
  icon: IconName;
  label: string;
  wide?: boolean;
}

const items: TrustItem[] = [
  { icon: "menu_book", label: "Research-Driven" },
  { icon: "verified", label: "Professional Tone" },
  { icon: "schema", label: "Clear Structure" },
  { icon: "groups", label: "Audience-Focused" },
  { icon: "lock", label: "Confidentiality-First", wide: true },
];

export function ContentTrust() {
  return (
    <section className="w-full px-margin-mobile md:px-margin pb-space-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="w-full p-space-md rounded-xl bg-surface-container-low/70 border border-outline-variant backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-space-md text-center items-center divide-y md:divide-y-0 md:divide-x divide-outline-variant">
            {items.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-center gap-space-xs pt-space-xs md:pt-0 ${
                  item.wide ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <MaterialIcon name={item.icon} className="text-signal-green text-[18px]" />
                <span className="font-label-md text-label-md text-primary font-medium tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
