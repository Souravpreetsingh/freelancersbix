import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const PROFILES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "person",
    title: "Founders",
    desc: "Support with preliminary research, concept structuring, planning and business documentation before initial capital commitments.",
  },
  {
    icon: "rocket_launch",
    title: "Startups",
    desc: "In-depth market research, formal business plans, structured pitch materials and strategic documentation for stakeholder reviews.",
  },
  {
    icon: "storefront",
    title: "Small Businesses",
    desc: "Practical business research, operational documentation, workflow standardization and administrative support for daily efficiency.",
  },
  {
    icon: "trending_up",
    title: "Growing Businesses",
    desc: "Market expansion analysis, deeper competitor intelligence, scaling process maps and refreshed strategic business planning.",
  },
  {
    icon: "badge",
    title: "Professionals",
    desc: "Executive business reports, boardroom presentations, data synthesis and specialized domain research assistance.",
  },
  {
    icon: "corporate_fare",
    title: "Organizations",
    desc: "Structured research initiatives, recurring documentation management, standard operating procedure design and operational assistance.",
  },
];

export function StartupWhoWeSupport() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <ServiceSectionHeading
        eyebrow="Client Profiles"
        title="Who We Support"
        lead="Tailored support frameworks across different operational scales and growth tiers."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {PROFILES.map((profile) => (
          <div
            key={profile.title}
            className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-sm hover:bg-surface-container transition-colors"
          >
            <div className="flex items-center gap-space-xs text-signal-blue">
              <MaterialIcon name={profile.icon} className="text-[20px]" />
              <h3 className="font-headline-sm text-headline-sm text-primary">{profile.title}</h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{profile.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
