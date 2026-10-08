import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const audiences: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "domain",
    title: "Established Businesses",
    body: "Corporate communication, thought leadership, customer-facing content, and operational playbooks.",
  },
  {
    icon: "rocket_launch",
    title: "Startups & Founders",
    body: "Investor pitch materials, value propositions, product documentation, and website copy.",
  },
  {
    icon: "badge",
    title: "Executives & Leaders",
    body: "Executive bios, LinkedIn thought leadership, speaking remarks, and board memorandums.",
  },
  {
    icon: "science",
    title: "Research Investigators",
    body: "Research paper structuring, literature synthesis, citation formatting, and grant proposal editing.",
  },
  {
    icon: "public",
    title: "NGOs & Institutions",
    body: "Policy briefs, white papers, annual reports, donor communication, and program evaluations.",
  },
  {
    icon: "school",
    title: "Scholars & Students",
    body: "Strict proofreading, thesis formatting, structural review, and stylistic editing (compliant with strict academic-integrity ethics).",
  },
];

export function ContentAudience() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold">
            Tailored Delivery
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
            Who we write for.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant"
            >
              <MaterialIcon name={audience.icon} className="text-signal-green text-[24px] mb-space-sm" />
              <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-semibold">
                {audience.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{audience.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
