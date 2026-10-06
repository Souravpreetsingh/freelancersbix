import Link from "next/link";
import { Fragment } from "react";

export interface CTASectionProps {
  eyebrow: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  notes: string[];
}

export function CTASection({ eyebrow, title, description, primary, secondary, notes }: CTASectionProps) {
  return (
    <section className="w-full bg-black-void py-space-4xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-b from-surface-container-high to-surface-container p-space-2xl md:p-space-4xl border border-outline-variant/30 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-signal-blue/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-space-lg max-w-3xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-0.5 rounded-full bg-surface-container-highest border border-outline-variant/30">
            <span className="font-label-sm text-label-sm tracking-wider uppercase text-signal-blue font-bold">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout tracking-tight">
            {title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-md w-full sm:w-auto">
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center px-space-2xl py-space-md rounded-lg font-label-lg text-label-lg bg-whiteout text-ink font-semibold hover:bg-haze transition-all duration-200 shadow-lg"
            >
              {primary.label}
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center px-space-2xl py-space-md rounded-lg font-label-lg text-label-lg bg-transparent text-whiteout font-medium hover:bg-whiteout/10 transition-all duration-200 border border-whiteout/25"
            >
              {secondary.label}
            </Link>
          </div>
          <div className="flex items-center gap-space-lg pt-space-lg text-on-surface-variant/80 text-[12px] font-mono">
            {notes.map((note, index) => (
              <Fragment key={note}>
                {index > 0 ? <span>•</span> : null}
                <span>{note}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
