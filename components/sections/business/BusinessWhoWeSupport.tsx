import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const ARCHETYPES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "lightbulb",
    title: "Startups",
    desc: "TAM/SAM quantification, rapid competitive sweeps, and investor-focused strategic summaries for seed and early rounds.",
  },
  {
    icon: "store",
    title: "Small Businesses",
    desc: "Local market studies, customer feedback interpretation, pricing optimization, and expansion feasibility briefs.",
  },
  {
    icon: "trending_up",
    title: "Growing Businesses",
    desc: "Adjacent vertical evaluations, competitive intelligence monitoring, and structured M&A target screening support.",
  },
  {
    icon: "badge",
    title: "Professionals",
    desc: "Rigorous research backing for executive proposals, industry keynote presentations, and whitepapers.",
  },
  {
    icon: "military_tech",
    title: "Founders",
    desc: "High-conviction market evaluation, business modeling stress tests, and pitch-ready investment thesis papers.",
  },
  {
    icon: "corporate_fare",
    title: "Organizations",
    desc: "Ongoing business intelligence retainers, structured board dossiers, and department-level research outsourcing.",
  },
];

export function BusinessWhoWeSupport() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <ServiceSectionHeading
        eyebrow="Client Archetypes"
        title="Business Research for Different Stages of Growth"
        lead="Whether validating an initial concept or managing cross-border commercial expansions, our research capabilities align to your maturity phase."
        eyebrowClassName="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold"
        containerClassName="flex flex-col gap-space-xs mb-space-2xl text-center items-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {ARCHETYPES.map((item) => (
          <div
            key={item.title}
            className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-sm shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-signal-blue">
              <MaterialIcon name={item.icon} className="text-[20px]" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">{item.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
