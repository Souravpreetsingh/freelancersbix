const HEADERS = ["Company", "Industry", "Location", "Website", "Category", "Public Verified Contact", "Key Notes"];

const ROWS = [
  {
    company: "Aura Systems GmbH",
    industry: "Logistics Tech",
    location: "Munich, DE",
    website: "aurasystems.eu",
    category: "B2B SaaS",
    contact: "info@aurasystems.eu",
    notes: "Series B, 150+ staff",
  },
  {
    company: "Vanguard Retail Ltd",
    industry: "Consumer Goods",
    location: "London, UK",
    website: "vanguardretail.co.uk",
    category: "Omnichannel",
    contact: "contact@vanguard.co.uk",
    notes: "Multi-site operator",
  },
  {
    company: "Nordic Clean Energy",
    industry: "Renewables",
    location: "Stockholm, SE",
    website: "nordicclean.se",
    category: "Infrastructure",
    contact: "press@nordicclean.se",
    notes: "Public tender participant",
  },
];

export function DigitalLeadResearch() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="max-w-3xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            TARGET DISCOVERY
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Structured research for business development.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Compiling prospective target accounts requires disciplined adherence to defined criteria: industry taxonomy,
            corporate headcounts, verified geographic jurisdictions, and publicly available directory points.
          </p>
        </div>
        <div className="p-space-md md:p-space-lg rounded-xl bg-surface-container-low overflow-x-auto">
          <table className="w-full text-left font-mono text-label-sm text-on-surface min-w-[700px]">
            <thead>
              <tr className="text-on-surface-variant bg-surface-container/60">
                {HEADERS.map((header) => (
                  <th key={header} className="p-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-highest/40 text-[12px]">
              {ROWS.map((row) => (
                <tr key={row.company} className="hover:bg-surface-container transition-colors">
                  <td className="p-3 font-bold text-primary">{row.company}</td>
                  <td className="p-3 text-on-surface-variant">{row.industry}</td>
                  <td className="p-3 text-on-surface-variant">{row.location}</td>
                  <td className="p-3 text-signal-blue">{row.website}</td>
                  <td className="p-3 text-on-surface-variant">{row.category}</td>
                  <td className="p-3 text-primary">{row.contact}</td>
                  <td className="p-3 text-on-surface-variant">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-space-md p-space-sm bg-surface-container rounded-lg">
            <p className="text-[11px] text-on-surface-variant italic">
              <strong>Disclaimer:</strong> Illustrative lead-research structure. FreelancersBix focuses strictly on
              compiling publicly accessible, verified business information in compliance with ethical search standards
              and applicable privacy frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
