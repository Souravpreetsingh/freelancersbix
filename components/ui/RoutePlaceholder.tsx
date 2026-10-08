import { HeroBackdrop } from "@/components/brand/Backdrop";
import { CornerAccent } from "@/components/brand/Geometry";

interface RoutePlaceholderProps {
  title: string;
}

/**
 * Phase 1 route placeholder: reserves the route, layout position, heading
 * level and canonical metadata until its approved content is implemented.
 * Carries no invented marketing copy.
 */
export function RoutePlaceholder({ title }: RoutePlaceholderProps) {
  return (
    <section className="relative w-full overflow-hidden bg-haze border-b border-outline-variant/60 px-margin-mobile md:px-margin py-space-4xl">
      <HeroBackdrop pattern="dots" block="right" diagonals="top-left" />
      <CornerAccent corner="top-right" tone="on-light" size="md" className="-top-6 right-0" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-md relative z-10">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">{title}</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          This route is part of the production foundation. Its approved content and sections are added in a later
          implementation phase.
        </p>
      </div>
    </section>
  );
}
