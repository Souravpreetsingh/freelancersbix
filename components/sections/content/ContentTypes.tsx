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
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-whiteout/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs text-center items-center mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold">
            Diverse Outputs
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-whiteout uppercase tracking-tight">
            What we can help you create.
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-space-sm max-w-5xl mx-auto">
          {chips.map((chip) => (
            <span
              key={chip}
              className="px-space-md py-space-sm rounded-lg bg-surface-container border border-whiteout/10 text-whiteout font-label-md text-label-md hover:border-signal-blue/50 transition-colors"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
