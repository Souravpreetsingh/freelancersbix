const chips = [
  "Website Content",
  "Business Reports",
  "Research Reports",
  "Articles & Editorials",
  "Blog Posts",
  "Technical Documents",
  "Business Documents",
  "Professional Profiles",
  "Company Descriptions",
  "Service Descriptions",
  "Presentation Content",
  "Research Summaries",
  "Executive Summaries",
  "Standard Operating Procedures",
  "Editing & Proofreading",
];

export function ContentTypes() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-outline-variant">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs text-center items-center mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold">
            Diverse Outputs
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
            What we can help you create.
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-space-sm max-w-5xl mx-auto">
          {chips.map((chip) => (
            <span
              key={chip}
              className="px-space-md py-space-sm rounded-lg bg-surface-container border border-primary/40 text-primary font-label-md text-label-md hover:border-signal-green/50 transition-colors"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
