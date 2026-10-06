import type { QuoteRequest } from "@/lib/validation/quote";

/**
 * Notification hook for new quote requests.
 *
 * Currently a no-op: no email provider is configured in this repository, so
 * no email is fabricated or silently simulated. When a provider is added
 * (e.g. Resend via `RESEND_API_KEY`), implement `notifyNewQuote` here and it
 * will run automatically after a request is persisted.
 */
export async function notifyNewQuote(input: { reference: string; request: QuoteRequest }): Promise<void> {
  void input;

  console.log(`[quote.notify] notification skipped - no email provider configured (reference=${input.reference})`);
}
