import Link from "next/link";
import { getContact } from "@/lib/db/contact-store";
import { CONTACT_STATUSES } from "@/lib/validation/contact";
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

export default async function AdminContactDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const contact = await getContact(id);

  if (!contact) {
    return (
      <div className="rounded-xl bg-surface-container p-space-2xl">
        <p className="font-body-md text-body-md text-on-surface-variant">Contact message not found.</p>
        <Link
          href="/admin/contacts"
          className="mt-space-md inline-block font-label-md text-label-md text-signal-green font-semibold"
        >
          ← Back to contact messages
        </Link>
      </div>
    );
  }

  return (
    <section>
      <Link href="/admin/contacts" className="font-label-md text-label-md text-signal-green font-semibold">
        ← Back to contact messages
      </Link>
      <header className="mb-space-lg mt-space-sm flex flex-wrap items-center gap-space-md">
        <StatusBadge status={contact.status} />
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
          {contact.name}
        </h1>
        <StatusSelect
          id={contact.id}
          status={contact.status}
          options={CONTACT_STATUSES}
          endpoint="/api/admin/contacts"
        />
      </header>

      <div className="rounded-xl bg-surface-container p-space-lg md:p-space-xl">
        <h2 className="font-headline-sm text-headline-sm font-bold text-primary">{contact.subject ?? "No subject"}</h2>
        <p className="mt-space-md font-body-md text-body-md text-on-surface whitespace-pre-wrap">{contact.message}</p>
        <dl className="mt-space-lg space-y-space-md border-t border-[#E2D8C4] pt-space-lg">
          <Field label="Name">{contact.name}</Field>
          <Field label="Email">
            <a href={`mailto:${contact.email}`} className="text-signal-green hover:text-on-primary-container">
              {contact.email}
            </a>
          </Field>
          <Field label="Phone">{contact.phone ?? "—"}</Field>
          <Field label="Received">{formatDateTime(contact.createdAt)}</Field>
          <Field label="Updated">{formatDateTime(contact.updatedAt)}</Field>
        </dl>
      </div>
    </section>
  );
}
