import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const PARTS: { title: string; sub: string }[] = [
  { title: "Market", sub: "Size & Trajectory" },
  { title: "Customer", sub: "Needs & Budgets" },
  { title: "Competition", sub: "Share & Defenses" },
  { title: "Regulatory / Ops", sub: "Compliance Bounds" },
  { title: "Business Capability", sub: "Capital & Talent" },
];

export function StartupMarketEntry() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <ServiceSectionHeading
        eyebrow="Strategic Expansion"
        title="Research the opportunity before entering the market."
      />
      <div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col gap-space-lg mb-space-md">
        <div className="flex flex-wrap items-center justify-center gap-space-sm text-center">
          {PARTS.map((part, index) => (
            <div key={part.title} className="flex flex-wrap items-center justify-center gap-space-sm">
              <div className="bg-surface-container px-space-md py-space-sm rounded-lg flex flex-col items-center">
                <span className="font-headline-sm text-headline-sm text-primary">{part.title}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{part.sub}</span>
              </div>
              <span className="font-headline-md text-headline-md text-signal-green">
                {index === PARTS.length - 1 ? "=" : "+"}
              </span>
            </div>
          ))}
          <div className="bg-signal-green text-whiteout px-space-lg py-space-sm rounded-lg flex flex-col items-center shadow-lg shadow-signal-green/20">
            <span className="font-headline-sm text-headline-sm uppercase font-bold">Market Entry Assessment</span>
            <span className="font-label-sm text-label-sm text-whiteout/85">Evidence-Backed Decision</span>
          </div>
        </div>
      </div>
      <div className="p-space-md bg-surface-container rounded-lg flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
        <MaterialIcon name="gavel" className="text-[16px] text-outline" />
        <span>
          Cautious note: Market-entry research can support evaluation but does not guarantee commercial success or
          replace licensed regulatory counsel.
        </span>
      </div>
    </section>
  );
}
