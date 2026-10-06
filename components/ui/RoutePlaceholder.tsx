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
    <section className="w-full px-margin-mobile md:px-margin py-space-4xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-md">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">{title}</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          This route is part of the production foundation. Its approved content and sections are added in a later
          implementation phase.
        </p>
      </div>
    </section>
  );
}
