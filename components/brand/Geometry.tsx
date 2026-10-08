import { cn } from "@/lib/utils/cn";

/**
 * FreelancersBix geometric brand language — angular corner compositions,
 * beige outline frames and angular dividers derived from the corporate
 * letterhead identity (deep green x cream x beige).
 *
 * All elements are decorative, static and pointer-transparent.
 */

type Corner = "top-right" | "top-left" | "bottom-right" | "bottom-left";
type Tone = "on-light" | "on-dark";

const MIRROR: Record<Corner, string> = {
  "top-right": "",
  "top-left": "-scale-x-100",
  "bottom-right": "-scale-y-100",
  "bottom-left": "-scale-x-100 -scale-y-100",
};

function toneFills(tone: Tone) {
  return tone === "on-dark"
    ? { solid: "rgba(251,248,241,0.10)", band: "#7EB99E", line: "rgba(220,206,180,0.55)" }
    : { solid: "#0D5F40", band: "#167A52", line: "#DCCEB4" };
}

interface CornerAccentProps {
  corner?: Corner;
  tone?: Tone;
  /** Display size of the composition. */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZES: Record<NonNullable<CornerAccentProps["size"]>, string> = {
  sm: "w-28 h-28 md:w-36 md:h-36",
  md: "w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72",
  lg: "w-56 h-56 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]",
};

/** Angular green corner composition: solid wedge, diagonal band, beige rule and offset frame. */
export function CornerAccent({ corner = "top-right", tone = "on-light", size = "md", className }: CornerAccentProps) {
  const fill = toneFills(tone);
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 260 260"
      className={cn(
        "fbx-geo-drift pointer-events-none absolute select-none",
        SIZES[size],
        MIRROR[corner],
        tone === "on-dark" ? "opacity-90" : "opacity-95",
        className,
      )}
    >
      <path d="M186 0 H260 V74 Z" fill={fill.solid} />
      <path d="M166 0 L260 94 L260 132 L128 0 Z" fill={fill.band} opacity={tone === "on-dark" ? 0.65 : 0.9} />
      <path d="M96 0 L260 164" fill="none" stroke={fill.line} strokeWidth="2.5" />
      <path d="M40 0 L260 220" fill="none" stroke={fill.line} strokeWidth="1.5" opacity="0.7" />
      <rect x="112" y="96" width="46" height="46" fill="none" stroke={fill.line} strokeWidth="2" />
      <rect x="150" y="182" width="18" height="18" fill={fill.band} opacity={tone === "on-dark" ? 0.5 : 0.85} />
    </svg>
  );
}

interface OutlineAccentProps {
  tone?: Tone;
  className?: string;
}

/** Thin beige offset frame — a quiet structured outline for cards and sections. */
export function OutlineAccent({ tone = "on-light", className }: OutlineAccentProps) {
  const stroke = tone === "on-dark" ? "rgba(220,206,180,0.45)" : "#DCCEB4";
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 200 200"
      className={cn("fbx-geo-drift pointer-events-none absolute select-none", className)}
    >
      <rect x="8" y="8" width="184" height="184" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="26" y="26" width="148" height="148" fill="none" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <path d="M8 60 L60 8" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M192 140 L140 192" fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

interface AngularDividerProps {
  tone?: Tone;
  className?: string;
}

/** Angular green / cream section divider. */
export function AngularDivider({ tone = "on-light", className }: AngularDividerProps) {
  const bar = tone === "on-dark" ? "bg-[#7EB99E]" : "bg-signal-green";
  const rule = tone === "on-dark" ? "bg-[rgba(220,206,180,0.45)]" : "bg-outline-variant";
  const diamond = tone === "on-dark" ? "border-[#7EB99E] bg-brand-deep" : "border-signal-green bg-surface";
  return (
    <div aria-hidden="true" className={cn("relative flex w-full items-center gap-space-sm", className)}>
      <span className={cn("h-[2px] w-16 shrink-0 sm:w-24", bar)} />
      <span className={cn("h-3 w-3 shrink-0 rotate-45 border-2", diamond)} />
      <span className={cn("h-px flex-1", rule)} />
    </div>
  );
}

interface CtaAccentProps {
  tone?: Tone;
  className?: string;
}

/** Diagonal composition for deep-green call-to-action panels. */
export function CtaAccent({ tone = "on-dark", className }: CtaAccentProps) {
  const fill = toneFills(tone);
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 320 320"
      className={cn("fbx-geo-drift pointer-events-none absolute select-none", className)}
    >
      <path
        d="M0 320 L0 240 L240 0 L320 0 L320 80 L80 320 Z"
        fill={fill.solid}
        opacity={tone === "on-dark" ? 1 : 0.9}
      />
      <path d="M120 0 L320 200 L320 260 L60 0 Z" fill={fill.band} opacity={tone === "on-dark" ? 0.45 : 0.85} />
      <path d="M0 160 L160 0" fill="none" stroke={fill.line} strokeWidth="2.5" />
      <rect x="196" y="36" width="58" height="58" fill="none" stroke={fill.line} strokeWidth="2" />
      <rect x="24" y="196" width="26" height="26" fill={fill.band} opacity={tone === "on-dark" ? 0.5 : 0.85} />
    </svg>
  );
}

interface FooterAccentProps {
  className?: string;
}

/** Strong geometric treatment for the dark-green footer corner. */
export function FooterAccent({ className }: FooterAccentProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 320 320"
      className={cn("fbx-geo-drift pointer-events-none absolute select-none", className)}
    >
      <path d="M0 320 L0 208 L208 0 L320 0 L320 112 L112 320 Z" fill="rgba(251,248,241,0.07)" />
      <path d="M60 320 L320 60 L320 140 L140 320 Z" fill="#167A52" opacity="0.55" />
      <path d="M0 240 L240 0" fill="none" stroke="rgba(220,206,180,0.4)" strokeWidth="2.5" />
      <path d="M0 160 L160 0" fill="none" stroke="rgba(220,206,180,0.25)" strokeWidth="1.5" />
      <rect x="40" y="72" width="52" height="52" fill="none" stroke="rgba(220,206,180,0.4)" strokeWidth="2" />
      <rect x="228" y="238" width="22" height="22" fill="#7EB99E" opacity="0.7" />
    </svg>
  );
}
