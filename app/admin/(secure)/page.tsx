import Link from "next/link";
import type { ReactNode } from "react";
import { careerStatusCounts } from "@/lib/db/career-store";
import { contactStatusCounts } from "@/lib/db/contact-store";
import { listCareerApplications } from "@/lib/db/career-store";
import { listContacts } from "@/lib/db/contact-store";
import { listQuoteRequests, quoteStatusCounts } from "@/lib/db/quote-store";
import { QUOTE_STATUSES } from "@/lib/validation/quote";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { formatDateTime } from "@/lib/design/format";

function StatCard({
  label,
  total,
  highlightLabel,
  href,
}: {
  label: string;
  total: number;
  highlightLabel: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="fbx-card flex flex-col gap-space-xs rounded-xl bg-surface-container p-space-lg transition-colors hover:bg-surface-container-high"
    >
      <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant font-semibold">
        {label}
      </span>
      <span className="font-headline-md text-headline-md font-bold text-primary">{total}</span>
      <span className="font-body-sm text-body-sm text-signal-green font-medium">{highlightLabel}</span>
    </Link>
  );
}

function Recent<T>({ items, render, emptyLabel }: { items: T[]; render: (item: T) => ReactNode; emptyLabel: string }) {
  if (items.length === 0) return <p className="font-body-sm text-body-sm text-on-surface-variant">{emptyLabel}</p>;
  return <ul className="divide-y divide-[#E2D8C4]">{items.map(render)}</ul>;
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function AdminDashboardPage() {
  const [quoteCounts, contactCounts, careerCounts, quotes, contacts, applications] = await Promise.all([
    quoteStatusCounts(),
    contactStatusCounts(),
    careerStatusCounts(),
    listQuoteRequests(),
    listContacts(),
    listCareerApplications(),
  ]);

  const quoteTotal = Object.values(quoteCounts).reduce((sum, count) => sum + count, 0);
  const contactTotal = Object.values(contactCounts).reduce((sum, count) => sum + count, 0);
  const careerTotal = Object.values(careerCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="flex flex-col gap-space-2xl">
      <header>
        <span className="font-label-md text-label-md uppercase tracking-widest text-signal-green font-semibold">
          Overview
        </span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
          Dashboard
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Live state of every inquiry, quote and application received through the public site.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-gutter sm:grid-cols-3">
        <StatCard
          href="/admin/quotes"
          label="Quote Requests"
          total={quoteTotal}
          highlightLabel={`${quoteCounts.NEW ?? 0} awaiting review`}
        />
        <StatCard
          href="/admin/contacts"
          label="Contact Messages"
          total={contactTotal}
          highlightLabel={`${contactCounts.NEW ?? 0} awaiting review`}
        />
        <StatCard
          href="/admin/careers"
          label="Career Applications"
          total={careerTotal}
          highlightLabel={`${careerCounts.NEW ?? 0} awaiting review`}
        />
      </div>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-3">
        <section className="rounded-xl bg-surface-container p-space-lg">
          <div className="mb-space-md">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Recent quote requests</h2>
            <Link href="/admin/quotes" className="font-label-sm text-label-sm text-signal-green font-medium">
              View all →
            </Link>
          </div>
          <Recent
            items={quotes.slice(0, 5)}
            emptyLabel="No quote requests yet."
            render={(quote) => (
              <li key={quote.id} className="py-space-sm">
                <Link href={`/admin/quotes/${quote.id}`} className="block hover:text-on-primary-container">
                  <span className="font-label-sm text-label-sm text-signal-green font-semibold">{quote.reference}</span>
                  <p className="truncate font-body-md text-body-md font-semibold text-primary">{quote.title}</p>
                  <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
                    {quote.contactName} · {formatDateTime(quote.createdAt)}
                  </p>
                </Link>
              </li>
            )}
          />
        </section>

        <section className="rounded-xl bg-surface-container p-space-lg">
          <div className="mb-space-md">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Recent contact messages</h2>
            <Link href="/admin/contacts" className="font-label-sm text-label-sm text-signal-green font-medium">
              View all →
            </Link>
          </div>
          <Recent
            items={contacts.slice(0, 5)}
            emptyLabel="No contact messages yet."
            render={(contact) => (
              <li key={contact.id} className="py-space-sm">
                <Link href={`/admin/contacts/${contact.id}`} className="block hover:text-on-primary-container">
                  <p className="truncate font-body-md text-body-md font-semibold text-primary">{contact.name}</p>
                  <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
                    {contact.subject ?? "No subject"} · {formatDateTime(contact.createdAt)}
                  </p>
                </Link>
              </li>
            )}
          />
        </section>

        <section className="rounded-xl bg-surface-container p-space-lg">
          <div className="mb-space-md">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Recent career applications</h2>
            <Link href="/admin/careers" className="font-label-sm text-label-sm text-signal-green font-medium">
              View all →
            </Link>
          </div>
          <Recent
            items={applications.slice(0, 5)}
            emptyLabel="No career applications yet."
            render={(application) => (
              <li key={application.id} className="py-space-sm">
                <Link href={`/admin/careers/${application.id}`} className="block hover:text-on-primary-container">
                  <p className="truncate font-body-md text-body-md font-semibold text-primary">{application.name}</p>
                  <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
                    {application.discipline} · {formatDateTime(application.createdAt)}
                  </p>
                </Link>
              </li>
            )}
          />
        </section>
      </div>

      <section className="rounded-xl bg-surface-container p-space-lg">
        <div className="mb-space-md">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Latest quote request</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Quick status update on the newest inquiry.
          </p>
        </div>
        {quotes[0] ? (
          <div className="flex flex-wrap items-center gap-space-md">
            <Link
              href={`/admin/quotes/${quotes[0].id}`}
              className="font-label-md text-label-md text-primary font-semibold hover:text-signal-green"
            >
              {quotes[0].reference} — {quotes[0].title}
            </Link>
            <StatusBadge status={quotes[0].status} />
            <StatusSelect
              id={quotes[0].id}
              status={quotes[0].status}
              options={QUOTE_STATUSES}
              endpoint="/api/admin/quotes"
            />
          </div>
        ) : (
          <p className="font-body-sm text-body-sm text-on-surface-variant">No quote requests yet.</p>
        )}
      </section>
    </div>
  );
}
