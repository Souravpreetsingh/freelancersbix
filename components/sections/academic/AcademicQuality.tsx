const quadrants = [
  { label: "RELEVANCE", body: "Directly addresses the formulated problem statement." },
  { label: "STRUCTURE", body: "Logical, traceable transitions between arguments." },
  { label: "EVIDENCE", body: "All statements verified through high-impact citations." },
  { label: "CLARITY", body: "Unambiguous academic discourse without fluff." },
];

const stream = [
  { num: "01", title: "Question Formulation", body: "Defining measurable, defensible research objectives." },
  { num: "02", title: "Evidence Gathering", body: "Curating high-confidence empirical databases and literature." },
  { num: "03", title: "Rigorous Analysis", body: "Quantitative modeling or qualitative thematic triangulation." },
  { num: "04", title: "Insight Generation", body: "Translating raw patterns into conceptual solutions." },
  { num: "05", title: "Documented Output", body: "Delivering organized, submission-compliant manuscripts." },
];

export function AcademicQuality() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-5">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue mb-space-xs block">
            Quality Protocol
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-space-md">
            How we think about research quality
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
            High quality research is not merely grammatically correct copy; it represents coherent logic, empirical
            validity, and defensible interpretations grounded in verified literature.
          </p>
          <div className="grid grid-cols-2 gap-space-md">
            {quadrants.map((item) => (
              <div key={item.label} className="p-space-md bg-surface-container-low rounded-lg">
                <span className="font-label-sm text-label-sm text-secondary block font-bold">{item.label}</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 bg-surface-container-low p-space-xl rounded-xl shadow-lg">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-space-lg block">
            Analytical Value Stream
          </span>
          <div className="space-y-space-md">
            {stream.map((item, index) => (
              <div
                key={item.num}
                className={`flex items-center gap-space-md p-space-md rounded-lg ${
                  index === stream.length - 1 ? "bg-surface-container-high" : "bg-surface-container"
                }`}
              >
                <span
                  className={`font-headline-sm text-headline-sm font-bold ${
                    index === stream.length - 1 ? "text-secondary" : "text-signal-blue"
                  }`}
                >
                  {item.num}
                </span>
                <div>
                  <p className="font-label-lg text-label-lg text-primary font-bold">{item.title}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
