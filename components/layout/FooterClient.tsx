"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerColumns } from "@/data/navigation";
import { cn } from "@/lib/utils/cn";

const inactiveFooterLink =
  "fbx-underline font-body-sm text-body-sm text-whiteout/75 hover:text-whiteout transition-colors";
const activeFooterLink = "font-body-sm text-body-sm text-whiteout font-bold transition-colors";

/**
 * Client island: only the active-route highlighting needs `usePathname`.
 * The rest of the footer stays server-rendered so every navigation ships
 * less hydration JavaScript.
 */
export function FooterColumnNav({ links }: { links: (typeof footerColumns)[number]["links"] }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-space-xs">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(active ? activeFooterLink : inactiveFooterLink)}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

/** Client island: keeps the copyright year current without hydrating the footer. */
export function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}
