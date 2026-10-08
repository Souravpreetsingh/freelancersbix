import { MaterialIcon } from "@/components/icons/MaterialIcon";

const methods = [
  {
    name: "Descriptive Stats",
    body: "Mean, median, mode, IQR, and distribution profiling.",
  },
  {
    name: "Frequency Analysis",
    body: "Distribution counts, percentages, and histogram density.",
  },
  {
    name: "Variance & Dispersion",
    body: "Standard deviation, standard error, and variance ratios.",
  },
  {
    name: "Correlation Analysis",
    body: "Pearson, Spearman, and Kendall rank associations.",
  },
  {
    name: "Regression Models",
    body: "Linear, multivariable, and logistic regression fits.",
  },
  {
    name: "Hypothesis Testing",
    body: "t-Tests, ANOVA, Chi-square, and p-value validation.",
  },
  {
    name: "Comparative Study",
    body: "Cross-cohort, A/B variance, and longitudinal shifts.",
  },
  {
    name: "Factor Synthesis",
    body: "Dimensional reduction and latent variable organization.",
  },
];

export function DataStatistics() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Quantitative Modeling
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
            Analytical support aligned with the research objective.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            A focused quantitative toolkit applied strictly according to your dataset and research design — never
            retrofitted to a predetermined result.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
          {methods.map((method) => (
            <div key={method.name} className="p-space-md rounded-xl bg-surface-container border border-outline-variant">
              <span className="font-headline-sm text-headline-sm text-primary block mb-1">{method.name}</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{method.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low border border-outline-variant flex items-start gap-space-md">
          <MaterialIcon name="info" className="text-secondary text-[24px] shrink-0" />
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            <strong className="text-primary font-semibold">Methodological Notice:</strong> Deployed quantitative methods
            are always matched to the disciplinary norms of your field, the structure of your variables, and the express
            purpose of the inquiry.
          </p>
        </div>
      </div>
    </section>
  );
}
