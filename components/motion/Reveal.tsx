"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Entrance style applied to the box. Defaults to a soft rise. */
  variant?: "up" | "scale";
  /** Seconds of delay before the reveal transition starts (0–1). */
  delay?: number;
  /** Cascade direct children one-by-one (60ms steps). */
  stagger?: boolean;
}

let fbxObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === "undefined") return null;
  if (fbxObserver) return fbxObserver;
  fbxObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        fbxObserver?.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  return fbxObserver;
}

/**
 * Scroll-reveal wrapper. Hides nothing on the server (no-JS safe): the
 * hidden classes are added client-side right before first paint, so
 * pre-hydration markup is always fully readable. Every element — including
 * ones already in the viewport on load — animates once: the observer's
 * callback fires asynchronously after the hidden state has painted, so the
 * transition is always visible rather than resolving instantly.
 *
 * Reduced motion: the same classes are applied, but the reduced-motion
 * stylesheet converts the reveal into a short opacity-only fade (no
 * translate/scale, no stagger waits), so content is still gentle and
 * accessible.
 */
export function Reveal({ children, className, variant = "up", delay = 0, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getObserver();
    if (!observer) return;

    el.classList.add("fbx-reveal");
    if (variant === "scale") el.classList.add("fbx-reveal-scale");
    if (delay > 0) el.style.setProperty("--fbx-delay", `${delay}s`);
    if (stagger) el.setAttribute("data-fbx-stagger", variant === "scale" ? "scale" : "true");

    observer.observe(el);
    return () => {
      observer.unobserve(el);
      el.classList.remove("fbx-reveal", "fbx-reveal-scale", "is-visible");
      el.removeAttribute("data-fbx-stagger");
    };
  }, [variant, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
