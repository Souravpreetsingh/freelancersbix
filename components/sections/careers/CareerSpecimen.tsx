import { MaterialIcon } from "@/components/icons/MaterialIcon";

const DELIVERABLES = [
  "Maintain organized records for Accounts Payable and Receivable across designated client ledgers.",
  "Execute monthly bank and credit card reconciliations with high analytical precision.",
  "Prepare neat, auditable financial statements (P&L, Balance Sheet, Cash Flow summaries).",
  "Collaborate with client senior finance leads to verify tax codes and cross-border adjustments.",
];

const QUALIFICATIONS = [
  "Demonstrated foundation in accounting principles (B.Com, ACCA in progress, CA inter, or equivalent practical background).",
  "Hands-on proficiency with cloud accounting suites (QuickBooks Online, Xero, or modern ERPs).",
  "Advanced spreadsheet literacy (VLOOKUP, INDEX/MATCH, Pivot tables, summary modeling).",
  "Reliable written communication and dedication to confidentiality standards.",
];

const PARAMETERS = [
  { label: "Work Arrangement", value: "100% Remote / Distributed" },
  { label: "Commitment", value: "Flexible or Dedicated Retainer" },
  { label: "Timezone", value: "Multi-Regional Handover" },
  { label: "Verification", value: "Skills Assessment Required" },
];

export function CareerSpecimen() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface" id="role-specimen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-xl p-space-xl md:p-space-2xl shadow-xl flex flex-col gap-space-xl">
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="px-space-sm py-1 rounded bg-signal-blue/20 text-signal-blue font-label-sm text-label-sm font-bold uppercase tracking-wider">
                Spotlight Opportunity Specimen
              </span>
              <span className="px-space-sm py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                Engagement ID: FBX-ACT-04
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Status: Open for Evaluation</span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight">
              Accounting &amp; Bookkeeping Associate
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              Support multinational client accounting operations, multi-entity reconciliation workflows, and
              comprehensive balance sheet preparation in accordance with global financial hygiene practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl pt-space-md">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs text-primary">
                <MaterialIcon name="checklist" className="text-signal-blue" />
                <h4 className="font-headline-sm text-headline-sm font-bold uppercase">Key Deliverables</h4>
              </div>
              <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                {DELIVERABLES.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-space-xs">
                    <span className="text-signal-blue font-bold">•</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs text-primary">
                <MaterialIcon name="verified" className="text-signal-blue" />
                <h4 className="font-headline-sm text-headline-sm font-bold uppercase">Qualifications</h4>
              </div>
              <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                {QUALIFICATIONS.map((qualification) => (
                  <li key={qualification} className="flex items-start gap-space-xs">
                    <span className="text-signal-blue font-bold">•</span>
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-space-md bg-surface-container p-space-lg rounded-xl">
              <h4 className="font-headline-sm text-headline-sm font-bold uppercase text-primary">
                Engagement Parameters
              </h4>
              <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                {PARAMETERS.map((parameter) => (
                  <div key={parameter.label} className="flex justify-between gap-space-sm">
                    <span className="text-outline">{parameter.label}</span>
                    <span className="text-primary font-medium text-right">{parameter.value}</span>
                  </div>
                ))}
              </div>
              <div className="pt-space-md">
                <a
                  className="w-full inline-flex items-center justify-center px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-ink bg-whiteout hover:bg-whiteout/90 font-medium transition-all"
                  href="#general-application"
                >
                  Apply for this Position
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
