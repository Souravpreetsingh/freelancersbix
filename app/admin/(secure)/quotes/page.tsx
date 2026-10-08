import Link from "next/link";
import { listQuoteRequests } from "@/lib/db/quote-store";
import { QUOTE_STATUSES } from "@/lib/validation/quote";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { formatDateTime } from "@/lib/design/format";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function AdminQuotesPage() {
  const quotes = await listQuoteRequests();

  return (
    <section>
      <header className="mb-space-lg">
        <span className="font-label-md text-label-md uppercase tracking-widest text-signal-green font-semibold">
          Inbox
        </span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
          Quote requests
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {quotes.length} quote request{quotes.length === 1 ? "" : "s"} from the public quote wizard.
        </p>
      </header>

      {quotes.length === 0 ? (
        <div className="rounded-xl bg-surface-container p-space-2xl text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            No quote requests yet. Requests submitted through the /contact quote wizard will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl bg-surface-container">
          <div className="divide-y divide-[#E2D8C4]">
            {quotes.map((quote) => (
              <div key={quote.id} className="flex flex-wrap items-center gap-space-md px-space-lg py-space-md">
                <Link href={`/admin/quotes/${quote.id}`} className="min-w-0 flex-1">
                  <p className="font-label-sm text-label-sm text-signal-green font-semibold">{quote.reference}</p>
                  <h2 className="truncate font-body-md text-body-md font-semibold text-primary hover:text-on-primary-container">
                    {quote.title}
                  </h2>
                  <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
                    {quote.contactName} · {quote.contactEmail} · {formatDateTime(quote.createdAt)}
                  </p>
                </Link>
                <StatusBadge status={quote.status} />
                <StatusSelect
                  id={quote.id}
                  status={quote.status}
                  options={QUOTE_STATUSES}
                  endpoint="/api/admin/quotes"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
