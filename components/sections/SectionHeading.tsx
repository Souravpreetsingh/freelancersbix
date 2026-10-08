import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  /**
   * Home/services/foreign exports render eyebrows at font-bold; the about
   * export renders them at the label default weight.
   */
  eyebrowBold?: boolean;
}

const DEFAULT_WRAPPER = "flex flex-col gap-space-xs max-w-3xl";
const DEFAULT_TITLE =
  "font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight";
const DEFAULT_DESCRIPTION = "font-body-md text-body-md text-on-surface-variant mt-space-xs";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  eyebrowBold = true,
}: SectionHeadingProps) {
  return (
    <div className={className ?? DEFAULT_WRAPPER}>
      <span aria-hidden="true" className="block h-[3px] w-12 bg-signal-green" />
      <span
        className={cn(
          "font-label-sm text-label-sm tracking-widest text-signal-green uppercase",
          eyebrowBold && "font-bold",
        )}
      >
        {eyebrow}
      </span>
      <h2 className={cn(DEFAULT_TITLE, titleClassName)}>{title}</h2>
      {description ? <p className={cn(DEFAULT_DESCRIPTION, descriptionClassName)}>{description}</p> : null}
    </div>
  );
}
