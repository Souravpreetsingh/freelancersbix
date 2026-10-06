import { type IconName } from "@/lib/design/icons";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const AREAS: { icon: IconName; title: string; subtitle: string }[] = [
  { icon: "school", title: "Academic & Research", subtitle: "Scholarly rigor & papers" },
  { icon: "analytics", title: "Business Consulting", subtitle: "Strategy & Feasibility" },
  { icon: "account_balance", title: "Foreign Accounting", subtitle: "Multi-currency books" },
  { icon: "insights", title: "Data & Analytics", subtitle: "Models & Visualizations" },
  { icon: "stylus_note", title: "Content & Writing", subtitle: "Editorial & Whitepapers" },
  { icon: "devices", title: "Digital Operations", subtitle: "Executive assistance" },
  { icon: "code", title: "Technology", subtitle: "Web & Automation" },
  { icon: "shield_person", title: "Administration", subtitle: "Compliance & Support" },
];

export function CareerAreas() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col gap-space-xs max-w-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            Practice Domains
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
            Explore your area of expertise.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
          {AREAS.map((area) => (
            <a
              key={area.title}
              className="p-space-lg bg-surface-container rounded-xl flex flex-col justify-between h-44 hover:bg-surface-container-high transition-all group"
              href="#opportunities"
            >
              <MaterialIcon name={area.icon} className="text-3xl text-signal-blue" />
              <div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-primary group-hover:text-signal-blue transition-colors">
                  {area.title}
                </h4>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{area.subtitle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
