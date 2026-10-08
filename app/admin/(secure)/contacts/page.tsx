import Link from "next/link";
import { listContacts } from "@/lib/db/contact-store";
import { CONTACT_STATUSES } from "@/lib/validation/contact";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { formatDateTime } from "@/lib/design/format";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function AdminContactsPage() {
  const contacts = await listContacts();

  return (
    <section>
      <header className="mb-space-lg">
        <span className="font-label-md text-label-md uppercase tracking-widest text-signal-green font-semibold">
          Inbox
        </span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
          Contact messages
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {contacts.length} message{contacts.length === 1 ? "" : "s"} from the /contact direct-message form.
        </p>
      </header>

      {contacts.length === 0 ? (
        <div className="rounded-xl bg-surface-container p-space-2xl text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            No contact messages yet. Messages sent through the /contact form will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl bg-surface-container">
          <div className="divide-y divide-[#E2D8C4]">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex flex-wrap items-center gap-space-md px-space-lg py-space-md">
                <Link href={`/admin/contacts/${contact.id}`} className="min-w-0 flex-1">
                  <h2 className="truncate font-body-md text-body-md font-semibold text-primary hover:text-on-primary-container">
                    {contact.name}
                  </h2>
                  <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
                    {contact.subject ?? "No subject"} · {contact.email} · {formatDateTime(contact.createdAt)}
                  </p>
                </Link>
                <StatusBadge status={contact.status} />
                <StatusSelect
                  id={contact.id}
                  status={contact.status}
                  options={CONTACT_STATUSES}
                  endpoint="/api/admin/contacts"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
