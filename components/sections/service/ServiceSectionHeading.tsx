interface ServiceSectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  eyebrowClassName?: string;
  containerClassName?: string;
}

export function ServiceSectionHeading({
  eyebrow,
  title,
  lead,
  eyebrowClassName,
  containerClassName,
}: ServiceSectionHeadingProps) {
  return (
    <div className={containerClassName ?? "flex flex-col gap-space-xs max-w-2xl mb-space-2xl"}>
      <span
        className={
          eyebrowClassName ?? "font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold"
        }
      >
        {eyebrow}
      </span>
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">{title}</h2>
      {lead ? <p className="font-body-md text-body-md text-on-surface-variant">{lead}</p> : null}
    </div>
  );
}
