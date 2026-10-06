"use client";

import { useState } from "react";

interface TonePane {
  id: string;
  label: string;
  register: string;
  intent: string;
  title: string;
  quote: string;
  characteristics: string;
}

const panes: TonePane[] = [
  {
    id: "corporate",
    label: "Corporate Executive",
    register: "REGISTER: EXECUTIVE BRIEFING",
    intent: "INTENT: STRATEGIC ALIGNMENT",
    title: "Q3 Operating Strategy Realignment",
    quote:
      '"To preserve operating margin stability against supply volatility, we have accelerated local procurement pathways. This realignment protects cash-flow liquidity while insulating critical delivery timelines for tier-one institutional accounts."',
    characteristics: "Characteristics: Concise, authoritative, ROI-grounded, zero filler words.",
  },
  {
    id: "technical",
    label: "Technical & Systems",
    register: "REGISTER: TECHNICAL SPECIFICATION",
    intent: "INTENT: PROCEDURAL RIGOR",
    title: "Asynchronous Pipeline Fault-Tolerance Protocol",
    quote:
      '"Under transient network partition events, the ingest daemon queues events into encrypted local cache blocks. Idempotent retry handlers execute on a 500ms exponential backoff curve, avoiding database lock escalations while ensuring zero state loss."',
    characteristics: "Characteristics: Precise, unambiguous terminology, deterministic step logic.",
  },
  {
    id: "research",
    label: "Research & Analytical",
    register: "REGISTER: EMPIRICAL ANALYSIS",
    intent: "INTENT: EVIDENCE PRESENTATION",
    title: "Longitudinal Evaluation of Hybrid Workspace Models",
    quote:
      '"Empirical cross-sectional data (n=1,240) indicates a statistically significant correlation between asynchronous documentation practices and retention rates (p < 0.01). However, variance across distributed teams underscores the necessity of continuous feedback mechanisms."',
    characteristics: "Characteristics: Measured, cautious, empirical, strictly cited.",
  },
  {
    id: "general",
    label: "General Professional",
    register: "REGISTER: CLEAR PROFESSIONAL",
    intent: "INTENT: ACCESSIBLE CLARITY",
    title: "Getting Started with Our Client Services",
    quote:
      '"We partner closely with your team to review project goals, map out project timelines, and deliver clear, high-quality deliverables that help your business operate with confidence."',
    characteristics: "Characteristics: Accessible, welcoming, clean, easily scannable.",
  },
];

export function ContentTone() {
  const [activeId, setActiveId] = useState(panes[0].id);
  const active = panes.find((pane) => pane.id === activeId) ?? panes[0];

  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold">
            Precision Register
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-whiteout uppercase tracking-tight">
            The right tone for the right audience.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Toggle through illustrative registers to see how we recalibrate syntax and perspective according to reader
            intent.
          </p>
        </div>
        <div className="w-full rounded-2xl bg-surface-container border border-whiteout/10 p-space-lg">
          <div className="flex flex-wrap gap-space-xs border-b border-whiteout/10 pb-space-md mb-space-lg">
            {panes.map((pane) => (
              <button
                key={pane.id}
                type="button"
                onClick={() => setActiveId(pane.id)}
                className={`px-space-md py-space-xs rounded-full font-label-md text-label-md font-medium transition-all ${
                  active.id === pane.id ? "bg-whiteout text-ink" : "text-on-surface-variant hover:text-whiteout"
                }`}
              >
                {pane.label}
              </button>
            ))}
          </div>
          <div className="space-y-space-md">
            <div className="flex items-center justify-between text-twilight-blue font-label-sm text-label-sm">
              <span>{active.register}</span>
              <span>{active.intent}</span>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container-high border-l-4 border-signal-blue">
              <h4 className="font-headline-sm text-headline-sm text-whiteout mb-space-xs font-semibold">
                {active.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">{active.quote}</p>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{active.characteristics}</p>
          </div>
          <div className="mt-space-md text-[11px] text-on-surface-variant/50 italic text-right">
            Illustrative example — calibrated during intake.
          </div>
        </div>
      </div>
    </section>
  );
}
