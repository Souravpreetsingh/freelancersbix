"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils/cn";

const inactiveNavLink = "font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors";
const activeNavLink = "transition-colors text-primary font-bold";

const headerCta =
  "hidden sm:inline-flex items-center justify-center px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-primary bg-transparent hover:bg-surface-container-high hover:text-on-surface transition-all border border-primary/20";

const drawerCta =
  "inline-flex w-full items-center justify-center px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-primary bg-surface-container hover:bg-surface-container-high hover:text-on-surface transition-all border border-primary/20";

const toggleButton =
  "lg:hidden flex items-center justify-center p-space-xs rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors";

function isActivePath(pathname: string, href: string): boolean {
  return pathname === href;
}

interface NavItemsProps {
  pathname: string;
  onNavigate?: () => void;
}

function NavItems({ pathname, onNavigate }: NavItemsProps) {
  return (
    <>
      {primaryNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={active ? activeNavLink : inactiveNavLink}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-void/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
      <div className="w-full px-margin-mobile md:px-margin h-20 flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <Link href="/" className="flex items-center gap-space-sm">
            <img
              alt="FreelancersBix Logo"
              className="h-8 w-auto object-contain"
              src="/images/freelancersbix-logo.png"
            />
            <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary">
              FreelancersBix
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-space-lg">
          <NavItems pathname={pathname} />
        </nav>

        <div className="flex items-center gap-space-md">
          <Link href="/contact" className={headerCta}>
            Get a Quote
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <MaterialIcon name="person" className="text-on-primary text-[18px]" />
          </div>
          <button
            type="button"
            aria-label="Toggle Menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            className={toggleButton}
            onClick={() => setDrawerOpen((open) => !open)}
          >
            <MaterialIcon name={drawerOpen ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        id="mobile-drawer"
        className={cn(
          "lg:hidden w-full bg-black-void/95 backdrop-blur-2xl border-t border-outline-variant/20 px-margin-mobile py-space-lg",
          !drawerOpen && "hidden",
        )}
      >
        <nav className="flex flex-col gap-space-md">
          <NavItems pathname={pathname} onNavigate={() => setDrawerOpen(false)} />
          <div className="pt-space-sm">
            <Link href="/contact" className={drawerCta}>
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
