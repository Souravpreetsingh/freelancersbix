import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const AUDIENCES: { name: IconName; title: string; desc: string }[] = [
  {
    name: "storefront",
    title: "Small Businesses",
    desc: "Administrative, spreadsheet maintenance, customer contact list organization, and recurring operations support.",
  },
  {
    name: "rocket_launch",
    title: "Startups",
    desc: "Market research synthesis, investor pitch deck typography formatting, and early-stage operational task tracking.",
  },
  {
    name: "badge",
    title: "Professionals",
    desc: "Executive organization, personal business document management, and recurring administrative relief.",
  },
  {
    name: "school",
    title: "Researchers",
    desc: "Literature cataloging, secondary data entry, citation structuring, and publication-ready table formatting.",
  },
  {
    name: "psychology",
    title: "Consultants",
    desc: "Client deliverable formatting, industry research summaries, presentation assembly, and reference indexing.",
  },
  {
    name: "corporate_fare",
    title: "Organizations",
    desc: "Structured recurring administrative tasks, internal SOP formatting, and batch information verification.",
  },
];

export function DigitalAudience() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="mb-space-2xl max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            CLIENT PROFILES
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Who We Support
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Structured operational support configured to diverse professional and corporate contexts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {AUDIENCES.map((audience) => (
            <div key={audience.name} className="p-space-lg rounded-xl bg-surface-container-low">
              <div className="flex items-center gap-space-sm mb-space-sm">
                <MaterialIcon name={audience.name} className="text-signal-green text-2xl" />
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{audience.title}</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{audience.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
