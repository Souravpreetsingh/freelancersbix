import type { ReactNode } from "react";
import type { AdminIdentity } from "@/lib/auth/session";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { SideNav } from "@/components/admin/SideNav";

/** Authorized admin shell: brand header, navigation sidebar, content area. */
export function AdminShell({ admin, children }: { admin: AdminIdentity; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin py-space-lg">
        <header className="mb-space-lg flex flex-wrap items-center justify-between gap-space-md border-b border-outline-variant pb-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-md text-headline-md font-bold text-primary">FreelancersBix</span>
            <span className="rounded-full bg-secondary-container px-space-sm py-1 font-label-sm text-label-sm font-semibold uppercase tracking-widest text-on-secondary-container">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="text-right">
              <p className="font-label-md text-label-md text-on-surface">{admin.name}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{admin.email}</p>
            </div>
            <LogoutButton />
          </div>
        </header>
        <div className="flex flex-col gap-space-lg md:flex-row">
          <aside className="md:w-56 md:shrink-0">
            <SideNav />
          </aside>
          <main className="min-w-0 flex-1 pb-space-3xl">{children}</main>
        </div>
      </div>
    </div>
  );
}
