"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { type IconName } from "@/lib/design/icons";

const LINKS: { href: string; label: string; icon: IconName }[] = [
  { href: "/admin", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/quotes", label: "Quote Requests", icon: "description" },
  { href: "/admin/contacts", label: "Contact Messages", icon: "mail" },
  { href: "/admin/careers", label: "Career Applications", icon: "person" },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Admin navigation"
      className="flex md:flex-col gap-space-xs overflow-x-auto md:overflow-visible rounded-xl bg-surface-container p-space-xs"
    >
      {LINKS.map((link) => {
        const isActive = link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex shrink-0 items-center gap-space-sm rounded-lg px-space-md py-space-sm font-label-md text-label-md whitespace-nowrap transition-colors ${
              isActive
                ? "bg-primary text-on-primary font-semibold"
                : "text-on-surface-variant hover:bg-surface-container-high hover:text-primary"
            }`}
          >
            <MaterialIcon name={link.icon} className="text-[18px]" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
