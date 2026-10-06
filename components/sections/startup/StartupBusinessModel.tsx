import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const CANVAS: {
  slot: string;
  icon: IconName;
  title: string;
  desc: string;
  chip: string;
}[] = [
  {
    slot: "Segments",
    icon: "group",
    title: "Customer Segments",
    desc: "Defined archetypes, demographics, and buyer personas.",
    chip: "Target Focus",
  },
  {
    slot: "Offering",
    icon: "local_offer",
    title: "Value Proposition",
    desc: "Measurable solutions solving customer pain points.",
    chip: "Core Asset",
  },
  {
    slot: "Pathways",
    icon: "alt_route",
    title: "Channels",
    desc: "Touchpoints for sales, distribution, and communications.",
    chip: "Route to Market",
  },
  {
    slot: "Retention",
    icon: "handshake",
    title: "Customer Relationships",
    desc: "Engagement models, onboarding, and lifecycle management.",
    chip: "Engagement",
  },
  {
    slot: "Yield",
    icon: "payments",
    title: "Revenue Streams",
    desc: "Pricing tiers, subscriptions, licensing, and transaction models.",
    chip: "Monetization",
  },
];

const MECHANICS: { title: string; desc: string }[] = [
  {
    title: "Key Activities",
    desc: "Crucial operational actions required to fulfill the value proposition.",
  },
  {
    title: "Key Resources",
    desc: "Physical, intellectual, human, or capital infrastructure indispensable to execution.",
  },
  {
    title: "Key Partners",
    desc: "Supplier alliances, technology providers, and strategic consortiums.",
  },
  {
    title: "Cost Considerations",
    desc: "Structural fixed expenses, variable operating overhead, and cost drivers.",
  },
];

export function StartupBusinessModel() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <ServiceSectionHeading
        eyebrow="Strategic Canvas"
        title="Structure the business model around what matters."
        lead="Mapping foundational linkages between value delivery mechanisms, operational overhead, and client relationships."
      />
      <div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col gap-space-md">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm">
          {CANVAS.map((cell) => (
            <div
              key={cell.slot}
              className="bg-surface-container rounded-lg p-space-md flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <div className="flex items-center justify-between text-twilight-blue mb-space-xs">
                  <span className="font-label-sm text-label-sm uppercase font-semibold">{cell.slot}</span>
                  <MaterialIcon name={cell.icon} className="text-[18px]" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1">{cell.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{cell.desc}</p>
              </div>
              <span className="font-label-sm text-label-sm text-signal-blue">{cell.chip}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-sm pt-space-xs">
          {MECHANICS.map((mech) => (
            <div key={mech.title} className="bg-surface-container-high rounded-lg p-space-md">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">{mech.title}</span>
              <p className="font-body-sm text-body-sm text-on-surface mt-1">{mech.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-space-sm text-on-surface-variant font-label-sm text-label-sm">
          <div className="flex items-center gap-space-xs">
            <MaterialIcon name="info" className="text-[16px] text-outline" />
            <span>
              Illustrative business-model framework. Actual structure depends on the business and project objectives.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
