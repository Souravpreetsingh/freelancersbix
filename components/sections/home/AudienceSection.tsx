import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { IconName } from "@/lib/design/icons";

const AUDIENCES: { icon: IconName; title: string; description: string; tag: string }[] = [
  {
    icon: "school",
    title: "Students",
    description: "Academic research, projects, comprehensive reports and professional academic writing support.",
    tag: "Academic Rigor",
  },
  {
    icon: "badge",
    title: "Professionals",
    description: "Domain research, technical documentation, high-impact content and executive productivity support.",
    tag: "Executive Leverage",
  },
  {
    icon: "hub",
    title: "Startups",
    description: "Business planning, competitor market research, investor pitch decks and operational scaffolding.",
    tag: "Venture Ready",
  },
  {
    icon: "domain",
    title: "Businesses",
    description:
      "Research, specialized foreign accounting, data pipelines, administrative workflows and ongoing operations.",
    tag: "Scale & Precision",
  },
];

export function AudienceSection() {
  return (
    <section className="w-full bg-surface py-space-4xl px-margin-mobile md:px-margin border-b border-outline-variant/15">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
        <SectionHeading eyebrow="Target Cohorts" title="Built for people and businesses that need expertise." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {AUDIENCES.map((item) => (
            <div
              key={item.title}
              className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between group hover:bg-surface-container transition-all"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-bright flex items-center justify-center text-primary group-hover:text-signal-blue transition-colors">
                  <MaterialIcon name={item.icon} className="text-[26px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-space-lg mt-space-lg border-t border-outline-variant/15">
                <span className="font-label-sm text-label-sm text-secondary font-medium">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
