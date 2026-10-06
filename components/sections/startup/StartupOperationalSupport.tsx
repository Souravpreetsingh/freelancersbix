import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const ITEMS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "manage_search",
    title: "Research Assistance",
    desc: "Ad-hoc inquiries, industry reading, and source compilation.",
  },
  {
    icon: "draft",
    title: "Documentation",
    desc: "Standardized templates, policy drafts, and briefing packets.",
  },
  {
    icon: "dataset",
    title: "Data Organization",
    desc: "Spreadsheet cleanups, cataloguing, and directory management.",
  },
  {
    icon: "support",
    title: "Administrative Support",
    desc: "Coordination assistance, record-keeping, and document distribution.",
  },
  {
    icon: "present_to_all",
    title: "Presentation Support",
    desc: "Slide clean-ups, deck formatting, and executive visual harmonization.",
  },
  {
    icon: "folder_managed",
    title: "Information Management",
    desc: "Repository structure, file tagging systems, and archive maintenance.",
  },
];

export function StartupOperationalSupport() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <ServiceSectionHeading
        eyebrow="Behind The Scenes"
        title="Support the work behind the business."
        lead="Free up leadership bandwidth through reliable execution across research and administrative workflows."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {ITEMS.map((item) => (
          <div key={item.title} className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-xs">
            <MaterialIcon name={item.icon} className="text-signal-blue text-[24px]" />
            <h3 className="font-headline-sm text-headline-sm text-primary">{item.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
