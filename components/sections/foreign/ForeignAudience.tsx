const AUDIENCES: { monogram: string; title: string; description: string; tags: string[] }[] = [
  {
    monogram: "SB",
    title: "Small Businesses",
    description:
      "Support with recurring bookkeeping, invoices, vendor disbursements, expense logs, and routine financial administration.",
    tags: ["Bookkeeping", "Bills & Invoices"],
  },
  {
    monogram: "SU",
    title: "Startups",
    description:
      "Structured accounting support as your financial operations, multi-currency gateways, and documentation develop rapidly.",
    tags: ["Runway Tracking", "Cloud Ledgers"],
  },
  {
    monogram: "GB",
    title: "Growing Businesses",
    description:
      "Scalable support for complex recurring accounting workflows, balance reconciliations, and structured reporting packs.",
    tags: ["AP/AR Scale", "Multi-Entity"],
  },
  {
    monogram: "PB",
    title: "Professional Services",
    description:
      "Organized accounting assistance for agencies and consultancies managing client retainers, pass-through expenses, and billable logs.",
    tags: ["Retainers", "Client Invoicing"],
  },
];

export function ForeignAudience() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-white/5">
      <div className="max-w-[1400px] mx-auto space-y-space-2xl">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            Who We Support
          </span>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Accounting Support For Different Business Needs.
          </h2>
          <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Whether you are launching your first cross-border venture or scaling operations, our administration
            structure adjusts to your requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.monogram}
              className="p-space-xl rounded-xl bg-surface-container-low border border-white/5 flex flex-col justify-between hover:bg-surface-container transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center font-mono font-bold text-signal-blue text-lg mb-space-md">
                  {audience.monogram}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-whiteout font-bold">{audience.title}</h3>
                <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">{audience.description}</p>
              </div>
              <div className="mt-space-xl pt-space-sm border-t border-white/5 flex flex-wrap gap-1.5">
                {audience.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
