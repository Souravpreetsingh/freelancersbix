"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Subtle page entrance run with the Web Animations API. Runs inside a
 * layout effect so the very first paint already shows the eased-in state
 * (no post-paint flash). Under reduced motion this becomes a short
 * opacity-only fade (no movement).
 */
export function PageTransition({ children }: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof el.animate !== "function") return;

    const isFirst = first.current;
    first.current = false;
    const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      el.animate([{ opacity: 0.4 }, { opacity: 1 }], {
        duration: 200,
        easing: "ease-out",
      });
      return;
    }

    el.animate(
      [
        { opacity: 0.3, transform: "translateY(16px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: isFirst ? 400 : 280,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
