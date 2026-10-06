import { MaterialIcon } from "@/components/icons/MaterialIcon";

const beforeIssues = [
  "Overly lengthy, run-on sentences obscuring key metrics",
  "Inconsistent and missing section hierarchies",
  "Jargon redundancy and lack of logical progression",
  "Abrupt paragraph transitions causing cognitive friction",
];

const afterFixes = [
  "Punchy, high-impact phrasing with clear data attribution",
  "Logical heading structure with scannable milestones",
  "Uniform institutional terminology across all sections",
  "Impeccable formatting ready for board presentation",
];

export function ContentProofread() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs max-w-2xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold">
            Substantive Editorial
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-whiteout uppercase tracking-tight">
            Refine what you already have.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We transform existing rough drafts, fragmented notes, and internal documents into crisp, publication-ready
            corporate assets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          <div className="p-space-lg rounded-2xl bg-surface-container-low border border-whiteout/5 relative">
            <div className="flex items-center justify-between mb-space-md">
              <span className="px-space-xs py-[2px] rounded bg-error-container/40 text-error font-mono text-[11px] font-bold tracking-wider uppercase">
                Before Editorial Pass
              </span>
              <MaterialIcon name="close" className="text-error text-[18px]" />
            </div>
            <div className="space-y-space-md text-on-surface-variant font-body-sm text-body-sm opacity-80">
              <div className="p-space-sm rounded bg-surface-container/40 border-l-2 border-error/50">
                <p className="italic">
                  &quot;We are trying to leverage multi-faceted methodologies to facilitate our customer pipeline
                  growth, which is really important because our previous system had many long sentences and repeated
                  concepts over multiple paragraphs without clear headings.&quot;
                </p>
              </div>
              <ul className="space-y-2 text-[13px]">
                {beforeIssues.map((issue) => (
                  <li key={issue} className="flex items-center gap-2">
                    <span className="text-error">•</span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container border border-signal-blue/30 shadow-[0_0_24px_rgba(43,127,255,0.08)] relative">
            <div className="flex items-center justify-between mb-space-md">
              <span className="px-space-xs py-[2px] rounded bg-secondary-container/60 text-secondary font-mono text-[11px] font-bold tracking-wider uppercase">
                After Professional Refinement
              </span>
              <MaterialIcon name="check" className="text-signal-blue text-[18px]" />
            </div>
            <div className="space-y-space-md text-whiteout font-body-sm text-body-sm">
              <div className="p-space-sm rounded bg-surface-container-high border-l-2 border-signal-blue">
                <p className="font-medium text-whiteout">
                  &quot;Our revamped framework accelerates pipeline acquisition by 28%. By streamlining core
                  communication channels, the revised workflow delivers clear, actionable guidance to team leaders at
                  every touchpoint.&quot;
                </p>
              </div>
              <ul className="space-y-2 text-[13px] text-on-surface">
                {afterFixes.map((fix) => (
                  <li key={fix} className="flex items-center gap-2">
                    <span className="text-signal-blue">•</span>
                    <span>{fix}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant/50 italic mt-space-sm text-center">
          Illustrative example — actual editing depth varies based on project parameters and baseline draft quality.
        </p>
      </div>
    </section>
  );
}
