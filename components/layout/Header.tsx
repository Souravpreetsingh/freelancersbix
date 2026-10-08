"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CornerAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { primaryNav } from "@/data/navigation";
import { services } from "@/data/services";
import { cn } from "@/lib/utils/cn";

/** Three thin diagonal brand bars — the letterhead geometry translated to UI. */
function DiagonalBars({ className, tone = "green" }: { className?: string; tone?: "green" | "cream" }) {
  return (
    <span aria-hidden="true" className={cn("flex flex-col gap-[3px]", className)}>
      <span className={cn("fbx-geo-bar block h-[3px] w-4", tone === "green" ? "bg-signal-green" : "bg-whiteout/85")} />
      <span className={cn("fbx-geo-bar block h-[3px] w-3", tone === "green" ? "bg-primary/70" : "bg-whiteout/55")} />
      <span
        className={cn("fbx-geo-bar block h-[3px] w-2", tone === "green" ? "bg-outline-variant" : "bg-whiteout/30")}
      />
    </span>
  );
}

/** Tiny rotated square marking the current page. */
function ActiveDiamond() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rotate-45 bg-signal-green"
    />
  );
}

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navItem =
  "relative flex items-center gap-1 py-2 font-label-lg text-label-lg text-on-surface transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-signal-green after:transition-all after:duration-300 after:ease-out hover:text-primary hover:after:w-6 focus-visible:text-primary focus-visible:after:w-6";

const navItemActive = cn(navItem, "text-primary font-semibold after:w-5");

const quoteCta =
  "group inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-label-lg text-label-lg font-semibold text-whiteout transition-all duration-200 hover:bg-[#08452F] hover:shadow-[0_10px_22px_-10px_rgba(13,95,64,0.55)]";

const mobileRow =
  "flex w-full items-center gap-3 border-b border-outline-variant/50 py-4 text-left font-label-lg text-[16px] text-ink transition-colors duration-200 hover:text-primary";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openServices = () => {
    clearCloseTimer();
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };
  const closeMobile = () => {
    clearCloseTimer();
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    clearCloseTimer();
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (servicesOpen) {
        setServicesOpen(false);
        servicesTriggerRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
        mobileToggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest("header")) setServicesOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [servicesOpen, mobileOpen]);

  useEffect(() => clearCloseTimer, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <div
        className={cn(
          "relative mx-auto w-full max-w-[1600px] rounded-2xl border backdrop-blur-md transition-all duration-300 ease-out",
          scrolled || mobileOpen
            ? "border-outline-variant/80 bg-surface-container-low shadow-[0_2px_6px_rgba(32,39,34,0.07),0_20px_44px_-18px_rgba(32,39,34,0.35)]"
            : "border-outline-variant/50 bg-surface-container-low/95 shadow-[0_2px_4px_rgba(32,39,34,0.05),0_12px_28px_-16px_rgba(32,39,34,0.28)]",
        )}
      >
        {/* Brand edge accent */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-1/2 hidden h-8 w-[3px] -translate-y-1/2 rounded-r-full bg-signal-green md:block"
        />

        <div
          className={cn(
            "grid grid-cols-[auto_1fr_auto] items-center gap-space-md px-4 transition-all duration-300 ease-out md:px-6",
            scrolled ? "h-16" : "h-20",
          )}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-space-sm" aria-label="FreelancersBix — home">
            <DiagonalBars className="hidden sm:flex" />
            <Image
              alt="FreelancersBix Logo"
              className="h-8 w-auto object-contain md:h-9"
              height={512}
              priority
              sizes="36px"
              src="/images/freelancersbix-logo.png"
              width={512}
            />
            <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary">
              FreelancersBix
            </span>
          </Link>

          {/* Primary navigation */}
          <nav aria-label="Primary" className="hidden items-center justify-center gap-space-md lg:flex xl:gap-space-lg">
            {primaryNav.map((item) => {
              const active = isActivePath(pathname, item.href);

              if (item.href === "/services") {
                return (
                  <div key={item.href} className="flex" onMouseEnter={openServices} onMouseLeave={scheduleClose}>
                    <button
                      type="button"
                      ref={servicesTriggerRef}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls="services-menu"
                      aria-current={active ? "page" : undefined}
                      className={cn(servicesOpen ? navItemActive : active ? navItemActive : navItem)}
                      onClick={() => setServicesOpen((open) => !open)}
                      onKeyDown={(event) => {
                        if (event.key === "Tab" && servicesOpen && !event.shiftKey) {
                          event.preventDefault();
                          const first = document.querySelector<HTMLAnchorElement>("#services-menu a");
                          first?.focus();
                        }
                      }}
                    >
                      <span>Services</span>
                      <MaterialIcon
                        name="expand_more"
                        className={cn(
                          "text-[18px] transition-transform duration-200",
                          servicesOpen ? "rotate-180 text-primary" : "text-on-surface-variant",
                        )}
                      />
                      {active && !servicesOpen ? <ActiveDiamond /> : null}
                    </button>

                    {servicesOpen ? (
                      <div
                        id="services-menu"
                        className="fbx-menu-in absolute left-1/2 top-full z-50 mt-1.5 w-[min(920px,calc(100vw-48px))] -translate-x-1/2 rounded-2xl border border-outline-variant/70 bg-whiteout p-5 shadow-[0_24px_60px_-28px_rgba(32,39,34,0.45)] md:p-6"
                      >
                        <div className="grid gap-6 md:grid-cols-[minmax(240px,290px)_1fr]">
                          {/* Introduction + featured service */}
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                              <Link
                                href="/services"
                                onClick={() => setServicesOpen(false)}
                                className="group inline-flex w-fit items-center gap-2"
                              >
                                <DiagonalBars />
                                <span className="font-label-sm text-label-sm font-bold uppercase tracking-[0.18em] text-signal-green transition-colors group-hover:text-primary">
                                  Services
                                </span>
                                <MaterialIcon
                                  name="arrow_forward"
                                  className="text-[13px] text-signal-green transition-transform duration-200 group-hover:translate-x-0.5"
                                />
                              </Link>
                              <p className="font-headline-sm text-[18px] font-semibold leading-snug text-primary">
                                Professional expertise for complex requirements.
                              </p>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                Explore our research, business, accounting, data, content and digital support services.
                              </p>
                            </div>

                            <div className="relative overflow-hidden rounded-xl bg-brand-deep p-4 text-whiteout">
                              <DiagonalBars tone="cream" className="absolute right-3 top-3 opacity-70" />
                              <span className="font-label-sm text-label-sm font-bold uppercase tracking-[0.18em] text-inverse-primary">
                                Featured Service
                              </span>
                              <p className="mt-1.5 pr-10 font-headline-sm text-[17px] font-semibold leading-snug">
                                Foreign Accounting
                              </p>
                              <p className="mt-1 font-body-sm text-[12px] leading-relaxed text-whiteout/75">
                                Reliable accounting support for modern businesses.
                              </p>
                              <Link
                                href="/services/foreign-accounting"
                                onClick={() => setServicesOpen(false)}
                                className="group mt-3 inline-flex items-center gap-1.5 font-label-sm text-label-sm font-bold uppercase tracking-wider text-whiteout"
                              >
                                Explore Foreign Accounting
                                <MaterialIcon
                                  name="arrow_forward"
                                  className="text-[14px] transition-transform duration-200 group-hover:translate-x-1"
                                />
                              </Link>
                            </div>
                          </div>

                          {/* Service links */}
                          <ul className="grid gap-1 sm:grid-cols-2">
                            {services.map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="group flex items-start gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-outline-variant/60 hover:bg-haze"
                                >
                                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border border-signal-green/25 bg-signal-green/10 text-signal-green">
                                    <MaterialIcon name={service.icon} className="text-[15px]" />
                                  </span>
                                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                    <span className="font-label-lg text-label-lg font-semibold text-ink transition-colors group-hover:text-primary">
                                      {service.title}
                                    </span>
                                    <span className="line-clamp-2 font-body-sm text-[12px] leading-snug text-on-surface-variant">
                                      {service.description}
                                    </span>
                                  </span>
                                  <MaterialIcon
                                    name="arrow_forward"
                                    className="mt-1 text-[15px] text-signal-green opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={active ? navItemActive : navItem}
                >
                  {item.label}
                  {active ? <ActiveDiamond /> : null}
                </Link>
              );
            })}
          </nav>

          {/* Primary action */}
          <div className="flex items-center justify-end gap-space-sm">
            <Link href="/contact" className={cn(quoteCta, "hidden sm:inline-flex")}>
              <span
                aria-hidden="true"
                className="fbx-geo-bar h-3 w-[3px] bg-whiteout/60 transition-colors group-hover:bg-whiteout"
              />
              Get a Quote
              <MaterialIcon
                name="arrow_forward"
                className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <button
              type="button"
              ref={mobileToggleRef}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex items-center justify-center rounded-lg p-space-xs text-on-surface transition-colors hover:text-primary lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <MaterialIcon name={mobileOpen ? "close" : "menu"} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileOpen ? (
        <div id="mobile-menu" className="fixed inset-0 z-40 overflow-y-auto bg-haze lg:hidden">
          <div className="relative mx-auto flex min-h-full w-full max-w-md flex-col px-5 pb-10 pt-28">
            <nav aria-label="Mobile" className="flex flex-col">
              {primaryNav.map((item, index) => {
                const active = isActivePath(pathname, item.href);
                const delay = { animationDelay: `${index * 45}ms` };

                if (item.href === "/services") {
                  return (
                    <div key={item.href} className="fbx-nav-in border-b border-outline-variant/50" style={delay}>
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services"
                        onClick={() => setMobileServicesOpen((open) => !open)}
                        className={cn(mobileRow, active ? "font-semibold text-primary" : null)}
                      >
                        Services
                        <MaterialIcon
                          name="expand_more"
                          className={cn(
                            "ml-auto text-[20px] transition-transform duration-200",
                            mobileServicesOpen ? "rotate-180 text-primary" : "text-on-surface-variant",
                          )}
                        />
                      </button>
                      <div className="fbx-accordion" data-open={mobileServicesOpen || undefined}>
                        <div className="fbx-accordion-inner">
                          <ul id="mobile-services" className="pb-2">
                            {services.map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  onClick={closeMobile}
                                  className="flex items-center gap-3 py-2.5 pl-4 text-[15px] text-on-surface-variant transition-colors hover:text-primary"
                                >
                                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-signal-green" aria-hidden="true" />
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                            <li>
                              <Link
                                href="/services"
                                onClick={closeMobile}
                                className="group flex items-center gap-1.5 py-2.5 pl-4 font-label-sm text-label-sm font-bold uppercase tracking-[0.18em] text-signal-green"
                              >
                                View all services
                                <MaterialIcon
                                  name="arrow_forward"
                                  className="text-[13px] transition-transform duration-200 group-hover:translate-x-0.5"
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMobile}
                    style={delay}
                    className={cn(mobileRow, "fbx-nav-in", active ? "font-semibold text-primary" : null)}
                  >
                    {item.label}
                    {active ? (
                      <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 rotate-45 bg-signal-green" />
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            <div className="fbx-nav-in mt-7" style={{ animationDelay: `${primaryNav.length * 45}ms` }}>
              <Link
                href="/contact"
                onClick={closeMobile}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 font-label-lg text-[15px] font-semibold text-whiteout transition-colors duration-200 hover:bg-[#08452F]"
              >
                Get a Quote
                <MaterialIcon
                  name="arrow_forward"
                  className="text-[16px] transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <CornerAccent corner="bottom-right" tone="on-light" size="md" className="-bottom-4 -right-10" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
