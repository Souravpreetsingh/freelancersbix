import Link from "next/link";
import { getQuoteRequest } from "@/lib/db/quote-store";
import { QUOTE_STATUSES } from "@/lib/validation/quote";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { formatDateTime } from "@/lib/design/format";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-space-xs sm:grid-cols-[180px_1fr]">
      <dt className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-medium">
        {label}
      </dt>
      <dd className="font-body-md text-body-md text-on-surface break-words">{children}</dd>
    </div>
  );
}

export default async function AdminQuoteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quote = await getQuoteRequest(id);

  if (!quote) {
    return (
      <div className="rounded-xl bg-surface-container p-space-2xl">
        <p className="font-body-md text-body-md text-on-surface-variant">Quote request not found.</p>
        <Link
          href="/admin/quotes"
          className="mt-space-md inline-block font-label-md text-label-md text-signal-green font-semibold"
        >
          ← Back to quote requests
        </Link>
      </div>
    );
  }

  return (
    <section>
      <Link href="/admin/quotes" className="font-label-md text-label-md text-signal-green font-semibold">
        ← Back to quote requests
      </Link>
      <header className="mb-space-lg mt-space-sm flex flex-wrap items-center gap-space-md">
        <StatusBadge status={quote.status} />
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
          {quote.reference}
        </h1>
        <StatusSelect id={quote.id} status={quote.status} options={QUOTE_STATUSES} endpoint="/api/admin/quotes" />
      </header>

      <div className="space-y-space-xl rounded-xl bg-surface-container p-space-lg md:p-space-xl">
        <div className="space-y-space-md">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">{quote.title}</h2>
          <p className="font-body-md text-body-md text-on-surface whitespace-pre-wrap">{quote.description}</p>
        </div>

        <dl className="mt-space-lg space-y-space-md border-t border-[#E2D8C4] pt-space-lg">
          <Field label="Service">{quote.service}</Field>
          <Field label="Desired outcome">{quote.outcome ?? "—"}</Field>
          <Field label="Deadline">{quote.deadline}</Field>
          <Field label="Budget">{`${quote.currency} · ${quote.budget}`}</Field>
          <Field label="Structure">{quote.structure}</Field>
          <Field label="Preferred channel">{quote.preferredChannel}</Field>
          <Field label="Received">{formatDateTime(quote.createdAt)}</Field>
          <Field label="Updated">{formatDateTime(quote.updatedAt)}</Field>
        </dl>
      </div>

      <div className="mt-gutter space-y-gutter">
        <div className="rounded-xl bg-surface-container p-space-lg md:p-space-xl">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Contact details</h2>
          <dl className="mt-space-md space-y-space-md border-t border-[#E2D8C4] pt-space-md">
            <Field label="Name">{quote.contactName}</Field>
            <Field label="Organisation">{quote.contactOrg ?? "—"}</Field>
            <Field label="Email">
              <a href={`mailto:${quote.contactEmail}`} className="text-signal-green hover:text-on-primary-container">
                {quote.contactEmail}
              </a>
            </Field>
            <Field label="Phone">{quote.contactPhone ?? "—"}</Field>
            <Field label="Country">{quote.contactCountry ?? "—"}</Field>
          </dl>
        </div>

        <div className="rounded-xl bg-surface-container p-space-lg md:p-space-xl">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Attached files</h2>
          {quote.files.length === 0 ? (
            <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              No file metadata was provided with this request.
            </p>
          ) : (
            <ul className="mt-space-sm divide-y divide-[#E2D8C4]">
              {quote.files.map((file) => (
                <li key={file.name} className="flex items-center justify-between py-space-sm">
                  <span className="font-body-md text-body-md text-on-surface">{file.name}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{file.size}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl bg-surface-container p-space-lg md:p-space-xl">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Notes &amp; consent</h2>
          <dl className="mt-space-md space-y-space-md border-t border-[#E2D8C4] pt-space-md">
            <Field label="Notes">{quote.notes ?? "—"}</Field>
            <Field label="Privacy consent">{quote.consent ? "Explicitly accepted" : "Not accepted"}</Field>
          </dl>
        </div>
      </div>
    </section>
  );
}
