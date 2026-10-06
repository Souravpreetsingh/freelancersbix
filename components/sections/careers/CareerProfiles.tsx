import { type IconName } from "@/lib/design/icons";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const PROFILES: { icon: IconName; number: string; title: string; text: string; wide?: boolean }[] = [
  {
    icon: "menu_book",
    number: "01",
    title: "Researchers",
    text: "People who enjoy finding information, evaluating scholarly evidence, and creating structured, citation-grade insights.",
  },
  {
    icon: "receipt_long",
    number: "02",
    title: "Accounting Experts",
    text: "Professionals with rigorous bookkeeping, multi-currency ledger management, and international tax/financial compliance acumen.",
  },
  {
    icon: "query_stats",
    number: "03",
    title: "Strategy Pros",
    text: "Individuals who understand market dynamics, financial viability modeling, and executive-ready strategic presentations.",
  },
  {
    icon: "table_chart",
    number: "04",
    title: "Data Analysts",
    text: "Practitioners skilled in complex spreadsheet workflows, statistical processing, cleaning raw schemas, and dashboard design.",
  },
  {
    icon: "edit_note",
    number: "05",
    title: "Writers & Editors",
    text: "Craftspeople who synthesize complex subject matter into crisp, authoritative, clear, and publication-ready written copy.",
  },
  {
    icon: "dashboard_customize",
    number: "06",
    title: "Operations & Admin",
    text: "Reliable, organized team members proficient in digital productivity tools, scheduling systems, and administrative hygiene.",
  },
  {
    icon: "terminal",
    number: "07",
    title: "Technical Engineers",
    text: "Builders adept with web workflows, script automation, data pipelines, integrations, and modern digital platform infrastructure.",
    wide: true,
  },
];

export function CareerProfiles() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
              Who We Look For
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
              People who combine expertise with curiosity.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Our projects require analytical clarity, disciplined methodologies, and an uncompromising commitment to
            verified quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-space-md">
          {PROFILES.map((profile) => (
            <div
              key={profile.number}
              className={`bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-sm hover:bg-surface-container transition-all ${
                profile.wide ? "md:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <MaterialIcon name={profile.icon} className="text-signal-blue text-2xl" />
                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">{profile.number}</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold pt-space-xs">{profile.title}</h4>
              <p className={`font-body-sm text-body-sm text-on-surface-variant ${profile.wide ? "max-w-xl" : ""}`}>
                {profile.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
