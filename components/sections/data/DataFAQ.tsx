import { ServiceFAQ } from "@/components/sections/service/ServiceFAQ";

const faqs = [
  {
    q: "What types of data work do you provide?",
    a: "We cover data collection, data cleaning, spreadsheet architecture (Excel/Google Sheets), survey data analysis, descriptive and inferential statistical modeling, data visualization, and custom research report synthesis.",
  },
  {
    q: "Can you clean Excel data?",
    a: "Yes. We resolve duplicate rows, split combined text fields, standardize mixed date conventions, identify empty nulls, and ensure the dataset conforms to a clean, usable schema.",
  },
  {
    q: "Can you analyze survey data?",
    a: "Yes. We structure raw survey exports (from platforms like Qualtrics, SurveyMonkey, or Google Forms), code open-text entries where applicable, calculate response distributions, perform cross-tabulations, and build visual charts.",
  },
  {
    q: "Can you create charts and graphs?",
    a: "Yes. We develop presentation-ready visualizations including time-series line graphs, comparative bar charts, distribution scatterplots, correlation matrices, and executive dashboard summaries.",
  },
  {
    q: "Do you provide statistical analysis?",
    a: "Yes. We support appropriate quantitative methods — such as central tendency summaries, ANOVA, t-tests, Pearson/Spearman correlations, and regression models — strictly guided by your dataset parameters.",
  },
  {
    q: "Can you analyze my research dataset?",
    a: "Yes. We handle datasets from academic, commercial, and institutional research projects, structuring variables and executing statistical tests aligned with your predefined research hypotheses.",
  },
  {
    q: "Can you work with Excel files?",
    a: "Extensively. We work with all versions of Microsoft Excel (.xlsx, .csv) as well as Google Sheets, architecting complex nested formulas, dynamic range models, and pivot tables.",
  },
  {
    q: "Do you provide research interpretation?",
    a: "Yes. Numbers alone rarely tell a whole story. We explain statistical outputs clearly in plain language within the context of your specific inquiry or business challenge.",
  },
  {
    q: "Can you guarantee the results of statistical analysis?",
    a: "No. Statistical analysis must reflect empirical reality. We guarantee accurate and rigorous methodological execution, but we never alter data to achieve predetermined statistical significance or specific desired outcomes.",
  },
  {
    q: "Do you provide financial advice?",
    a: "No. We provide mathematical data structuring, calculation formulas, and spreadsheet visualization. We do not provide licensed investment advisory, tax strategy, or statutory audit verification.",
  },
  {
    q: "Can you work with confidential datasets?",
    a: "Yes. We execute mutual Non-Disclosure Agreements (NDAs) prior to data ingest and practice strict data hygiene, anonymization, and secure post-delivery repository purging.",
  },
  {
    q: "How do I start?",
    a: 'Simply click "Get a Quote" or contact our team with a summary of your data format, analytical objectives, and deadline. We will review the parameters and provide a tailored scope of work.',
  },
];

export function DataFAQ() {
  return (
    <ServiceFAQ
      title="Frequently Asked Questions"
      eyebrow="Inquiries & Clarifications"
      items={faqs}
      sectionClassName="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-outline-variant"
    />
  );
}
