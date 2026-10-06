import { ServiceFAQ } from "@/components/sections/service/ServiceFAQ";

const items = [
  {
    q: "What types of writing services do you provide?",
    a: "We specialize in business writing, website copy, long-form articles, technical documentation, research-based content, professional reports, pitch presentations, executive profiles, and substantive editing/proofreading.",
  },
  {
    q: "Can you write for technical or specialized topics?",
    a: "Yes. Our specialists frequently write for software, engineering, finance, legal technology, health sciences, and operational logistics. We ingest your source documentation, technical specifications, or interviews to preserve 100% domain accuracy.",
  },
  {
    q: "What is the difference between editing and proofreading?",
    a: "Proofreading is the final polish: correcting grammar, punctuation, typos, and minor formatting errors. Professional editing is substantive: addressing structural flow, paragraph organization, redundant text, clarity, and tone consistency.",
  },
  {
    q: "How do you approach tone for different audiences?",
    a: "During the initial intake step, we analyze the target recipient—investor, developer, peer researcher, or general consumer. We establish vocabulary boundaries, formality indices, and information density guidelines before drafting begins.",
  },
  {
    q: "Can you work from notes, outlines, or existing drafts?",
    a: "Absolutely. We routinely ingest recorded transcripts, bulleted notes, preliminary slide decks, or legacy documents, organizing and expanding them into structured, publication-grade materials.",
  },
  {
    q: "What formats do you deliver content in?",
    a: "We provide editable Microsoft Word (.docx) files with Track Changes enabled, clean PDFs formatted for distribution, Markdown files (.md) for web developers, Google Docs, or formatted slide deck decks.",
  },
  {
    q: "How does the revision process work?",
    a: "All project quotes include designated revision rounds. Clients review drafts and supply consolidated feedback. We implement updates rapidly to ensure phrasing, formatting, and messaging align completely with expectations.",
  },
  {
    q: "Who owns the copyright to the completed writing?",
    a: "Upon final settlement, 100% of intellectual property and copyright transfers entirely to the client. We make no residual claims on your copy, and work can be published under your name or brand.",
  },
  {
    q: "How do you maintain confidentiality for sensitive business documents?",
    a: "We execute non-disclosure agreements (NDAs) prior to receiving proprietary documents. All raw research, internal files, and drafts reside on encrypted infrastructure and are never shared or repurposed.",
  },
  {
    q: "What are your typical turnaround times?",
    a: "Turnaround depends on project scope and research intensity. Concise articles or web copy typically complete in 2–4 business days; extensive institutional reports or technical documentation can take 1–2 weeks with phased interim milestone deliveries.",
  },
  {
    q: "How do I start a writing or editing project with FreelancersBix?",
    a: 'Submit an inquiry through our "Get a Quote" portal with your project outline, target word count, timeline, and source materials. Our team will review the scope and return a transparent, fixed-price proposal within 24 business hours.',
  },
];

export function ContentFAQ() {
  return (
    <ServiceFAQ
      eyebrow="Common Queries"
      title="Frequently Asked Questions"
      lead="Details regarding turnaround times, editorial ownership, confidentiality, and our engagement terms."
      items={items}
      sectionClassName="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-whiteout/5"
      headingClassName="flex flex-col gap-space-xs mb-space-2xl text-center items-center"
    />
  );
}
