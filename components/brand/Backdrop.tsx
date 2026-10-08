import type { CSSProperties } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * FreelancersBix background architecture system — structured line patterns,
 * diagonal line groups, green edge strips and angled green blocks derived
 * from the corporate letterhead identity (deep green x cream x beige).
 *
 * Every element here is decorative, static, aria-hidden and pointer
 * transparent. Compose them behind `relative z-10` content.
 */

type Tone = "on-light" | "on-dark";

/* ------------------------------------------------------------------ */
/* Level 3 — subtle line / grid patterns                              */
/* ------------------------------------------------------------------ */

interface LinePatternProps {
  pattern?: "grid" | "diagonal" | "dots" | "horizontal";
  tone?: Tone;
  /** Overall pattern strength. */
  className?: string;
  style?: CSSProperties;
}

const PATTERN_SIZE: Record<NonNullable<LinePatternProps["pattern"]>, string> = {
  grid: "56px 56px",
  diagonal: "auto",
  dots: "32px 32px",
  horizontal: "auto",
};

/** Background line/grid pattern. Pure CSS — no images, no extra DOM. */
export function LinePattern({ pattern = "grid", tone = "on-light", className, style }: LinePatternProps) {
  const line = tone === "on-light" ? "rgba(197,179,146,0.55)" : "rgba(251,248,241,0.10)";
  const dot = tone === "on-light" ? "rgba(13,95,64,0.18)" : "rgba(251,248,241,0.16)";

  const backgroundImage =
    pattern === "grid"
      ? `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`
      : pattern === "diagonal"
        ? `repeating-linear-gradient(45deg, ${line} 0 1px, transparent 1px 18px)`
        : pattern === "horizontal"
          ? `repeating-linear-gradient(to bottom, ${line} 0 1px, transparent 1px 44px)`
          : `radial-gradient(circle at 1px 1px, ${dot} 1px, transparent 0)`;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 select-none", className)}
      style={{ backgroundImage, backgroundSize: PATTERN_SIZE[pattern], ...style }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Level 2 — diagonal line groups                                     */
/* ------------------------------------------------------------------ */

interface DiagonalLinesProps {
  tone?: Tone;
  /** Number of parallel strokes in the group. */
  count?: number;
  className?: string;
}

/** Group of parallel 45° strokes — the letter's angular rule language. */
export function DiagonalLines({ tone = "on-light", count = 6, className }: DiagonalLinesProps) {
  const stroke = tone === "on-light" ? "#C5B392" : "rgba(251,248,241,0.35)";
  const steps = Array.from({ length: count }, (_, i) => i * 30);
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 200 200"
      className={cn("pointer-events-none absolute select-none", className)}
    >
      {steps.map((offset) => (
        <line
          key={offset}
          x1={offset}
          y1="0"
          x2="0"
          y2={offset}
          stroke={stroke}
          strokeWidth={offset === 0 ? 2.5 : 1.25}
          opacity={offset === 0 ? 0.9 : 0.5}
        />
      ))}
      <rect x="120" y="118" width="26" height="26" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Level 2 — angled green block                                       */
/* ------------------------------------------------------------------ */

interface GreenBlockProps {
  side?: "left" | "right";
  className?: string;
}

/** Angled deep-green wedge anchored to the bottom edge of a hero. */
export function GreenBlock({ side = "right", className }: GreenBlockProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 600 140"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute bottom-0 h-14 w-[78%] max-w-[780px] select-none md:h-20",
        side === "right" ? "right-0" : "left-0 -scale-x-100",
        className,
      )}
    >
      <path d="M0 140 L600 34 L600 140 Z" fill="#0D5F40" />
      <path d="M92 140 L600 52" fill="none" stroke="#167A52" strokeWidth="14" opacity="0.95" />
      <path d="M0 140 L600 34" fill="none" stroke="#DCCEB4" strokeWidth="2" opacity="0.8" />
      <rect x="516" y="86" width="34" height="34" fill="none" stroke="rgba(220,206,180,0.7)" strokeWidth="2" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Level 2 — green strips                                             */
/* ------------------------------------------------------------------ */

interface GreenStripProps {
  orientation?: "horizontal" | "vertical";
  tone?: Tone;
  className?: string;
}

/** Architectural green edge strip. Position it with the className prop. */
export function GreenStrip({ orientation = "horizontal", tone = "on-light", className }: GreenStripProps) {
  const fill = tone === "on-light" ? "bg-signal-green" : "bg-[#7EB99E]";
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none",
        orientation === "horizontal" ? "h-[3px] w-24 md:w-44" : "h-16 w-[3px] md:h-24",
        fill,
        className,
      )}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Composition — hero backdrop                                        */
/* ------------------------------------------------------------------ */

interface HeroBackdropProps {
  pattern?: LinePatternProps["pattern"];
  block?: GreenBlockProps["side"] | "none";
  /** Corner for the diagonal line group. */
  diagonals?: "top-left" | "top-right" | "none";
  className?: string;
}

/**
 * Composed hero background: line pattern (level 3) + diagonal line group
 * and angled green block (level 2). Render before hero content and keep
 * content in a `relative z-10` wrapper.
 */
export function HeroBackdrop({
  pattern = "grid",
  block = "right",
  diagonals = "top-left",
  className,
}: HeroBackdropProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <LinePattern pattern={pattern} className="opacity-80" />
      {diagonals !== "none" && (
        <DiagonalLines
          className={cn(
            "-top-6 h-36 w-36 opacity-70 md:h-52 md:w-52",
            diagonals === "top-left" ? "-left-4" : "-right-4 -scale-x-100",
          )}
        />
      )}
      {block !== "none" && <GreenBlock side={block} />}
    </div>
  );
}
