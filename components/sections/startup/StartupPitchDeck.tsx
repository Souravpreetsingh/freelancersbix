import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const SLIDES: { num: string; title: string; desc: string; highlight?: boolean }[] = [
  { num: "Slide 01", title: "Problem", desc: "Friction & pain" },
  { num: "Slide 02", title: "Solution", desc: "Core proposition" },
  { num: "Slide 03", title: "Market", desc: "Size & segment" },
  { num: "Slide 04", title: "Model", desc: "Revenue logic" },
  { num: "Slide 05", title: "Competition", desc: "Moat matrix" },
  { num: "Slide 06", title: "Strategy", desc: "Go-to-market" },
  { num: "Slide 07", title: "Team & Ops", desc: "Key talent" },
  { num: "Slide 08", title: "Financials", desc: "Unit drivers" },
  { num: "Slide 09", title: "Next Steps", desc: "The call to action", highlight: true },
];

export function StartupPitchDeck() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <ServiceSectionHeading
        eyebrow="Pitch & Presentation Support"
        title="Make the business idea easier to understand."
        lead="Linear, high-signal slide architectures designed to deliver complex business models to strategic partners and advisory audiences."
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-space-xs mb-space-md">
        {SLIDES.map((slide) => (
          <div
            key={slide.num}
            className="bg-surface-container-low p-space-sm rounded-lg flex flex-col items-center text-center gap-1 group hover:bg-surface-container transition-colors"
          >
            <span
              className={`font-label-sm text-label-sm font-bold ${slide.highlight ? "text-signal-green" : "text-deep-sage"}`}
            >
              {slide.num}
            </span>
            <span className="font-label-md text-label-md text-primary font-medium">{slide.title}</span>
            <span className="text-on-surface-variant text-[11px] leading-tight">{slide.desc}</span>
          </div>
        ))}
      </div>
      <div className="p-space-md bg-surface-container-low rounded-lg flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
        <MaterialIcon name="info" className="text-[16px] text-outline" />
        <span>Illustrative pitch-deck structure. No guaranteed funding or valuation claims.</span>
      </div>
    </section>
  );
}
