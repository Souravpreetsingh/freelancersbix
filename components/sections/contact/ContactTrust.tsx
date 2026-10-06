import { type IconName } from "@/lib/design/icons";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const GUARANTEES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "lock",
    title: "Responsible Handling",
    text: "Information submitted through this intake is restricted exclusively to authorized scoping leads and never commercialized.",
  },
  {
    icon: "forum",
    title: "Clear Communication",
    text: "Transparent milestone structures, unambiguous scope definitions, and continuous feedback loops before payment commitments.",
  },
  {
    icon: "verified",
    title: "Professional Quality Process",
    text: "Deliverables undergo systematic peer review and quality audits prior to client sign-off and final repository handoff.",
  },
];

export function ContactTrust() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="p-space-xl md:p-space-3xl rounded-xl bg-surface relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-signal-blue/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mb-space-2xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high text-signal-blue mb-space-md">
            <MaterialIcon name="verified_user" className="text-[16px]" />
            <span className="font-label-md text-label-md uppercase tracking-widest font-semibold">
              Confidentiality &amp; Governance
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout tracking-tight">
            Your requirement deserves rigorous confidentiality.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
            We operate with strict institutional standards across all engagements, ensuring your data, proprietary
            spreadsheets, and strategy documents remain safeguarded at every phase.
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {GUARANTEES.map((guarantee) => (
            <div key={guarantee.title} className="p-space-lg rounded-lg bg-surface-container-high">
              <div className="w-10 h-10 rounded-full bg-signal-blue/10 text-signal-blue flex items-center justify-center mb-space-md">
                <MaterialIcon name={guarantee.icon} className="text-[20px]" />
              </div>
              <h4 className="font-headline-sm text-[16px] text-whiteout font-bold mb-space-xs">{guarantee.title}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{guarantee.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
