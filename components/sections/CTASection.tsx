import Link from "next/link";
import { Fragment } from "react";
import { LinePattern } from "@/components/brand/Backdrop";
import { AngularDivider, CtaAccent } from "@/components/brand/Geometry";

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
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto rounded-2xl bg-brand-deep py-space-3xl md:py-space-4xl px-space-xl md:px-space-2xl relative overflow-hidden flex flex-col items-center text-center">
        <CtaAccent className="-bottom-8 -left-8 h-56 w-56 md:h-80 md:w-80" />
        <LinePattern pattern="grid" tone="on-dark" className="opacity-60" />
        <div className="relative z-10 flex flex-col items-center gap-space-lg max-w-3xl">
          <div className="w-40 sm:w-56">
            <AngularDivider tone="on-dark" />
          </div>
          <div className="inline-flex items-center gap-space-xs px-space-md py-0.5 rounded-full bg-whiteout/10 border border-whiteout/20">
            <span className="font-label-sm text-label-sm tracking-wider uppercase text-inverse-primary font-bold">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout tracking-tight">
            {title}
          </h2>
          <p className="font-body-lg text-body-lg text-whiteout/75 max-w-xl">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-md w-full sm:w-auto">
            <Link
              href={primary.href}
              className="fbx-btn inline-flex items-center justify-center px-space-2xl py-space-md rounded-lg font-label-lg text-label-lg bg-whiteout text-ink font-semibold hover:bg-haze transition-all duration-200 shadow-lg"
            >
              {primary.label}
            </Link>
            <Link
              href={secondary.href}
              className="fbx-btn inline-flex items-center justify-center px-space-2xl py-space-md rounded-lg font-label-lg text-label-lg bg-transparent text-whiteout font-medium hover:bg-whiteout/10 transition-all duration-200 border border-whiteout/30"
            >
              {secondary.label}
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-space-lg pt-space-lg text-whiteout/60 text-[12px] font-mono">
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
