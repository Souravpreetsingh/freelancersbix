"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { services } from "@/data/services";
import { SITE } from "@/lib/design/site";
import { cn } from "@/lib/utils/cn";

interface ChatLink {
  label: string;
  href: string;
}

interface Reply {
  text: string;
  links?: ChatLink[];
}

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
  links?: ChatLink[];
}

interface Rule {
  patterns: RegExp[];
  reply: Reply;
}

const link = (label: string, href: string): ChatLink => ({ label, href });

const serviceLink = (slug: string): ChatLink => {
  const service = services.find((item) => item.slug === slug);
  return link(service ? service.title : slug, service ? service.href : "/services");
};

const ALL_SERVICES: ChatLink[] = services.map((item) => link(item.title, item.href));

/**
 * Deterministic keyword rules. No model, no network calls - every answer is
 * drawn from the approved site copy and routes to real pages.
 */
const RULES: Rule[] = [
  {
    patterns: [/\b(hello|hi|hey|hallo|good (morning|afternoon|evening))\b/],
    reply: {
      text: "Hello. I am the FreelancersBix virtual assistant. Ask me about our services, request a quote or find the right page.",
      links: [link("All services", "/services"), link("Contact page", "/contact")],
    },
  },
  {
    patterns: [/\b(thank|thanks|thx|appreciate)\b/],
    reply: { text: "You're welcome. Ask me anything else about the services or the team." },
  },
  {
    patterns: [/\b(bye|goodbye|see you)\b/],
    reply: { text: "Goodbye. Feel free to reopen the assistant whenever you have another question." },
  },
  {
    patterns: [/\b(quote|pricing|price|cost|budget|how much|payment|invoice me|engagement|hire|hiring us)\b/],
    reply: {
      text: "Every engagement is scoped individually, so pricing depends on the work involved. Share your requirements on the quote page and the team will respond - response time: under 24 hours.",
      links: [link("Get a Quote", "/contact")],
    },
  },
  {
    patterns: [/\b(contact|email|e-mail|phone|call|reach|office|address|whatsapp|hours|timing)\b/],
    reply: {
      text: `You can reach the team at ${SITE.email} or on ${SITE.phone}, or send the details through the contact page.`,
      links: [link("Contact page", "/contact"), link("FAQ", "/faq")],
    },
  },
  {
    patterns: [/\b(career|careers|job|jobs|vacancy|apply|work with you|join the)\b/],
    reply: {
      text: "Open positions, role profiles and the application process are listed on the careers page.",
      links: [link("Careers", "/careers")],
    },
  },
  {
    patterns: [/\b(about|about us|company|who are you|who is freelancersbix|your team|agency)\b/],
    reply: {
      text: "FreelancersBix is a professional research, business, accounting, data and digital support practice serving students, professionals, startups and businesses worldwide.",
      links: [link("About us", "/about"), link("Contact page", "/contact")],
    },
  },
  {
    patterns: [
      /\b(accounting|bookkeep|payroll|invoice|reconcil|accounts payable|accounts receivable|financial report)\b/,
    ],
    reply: {
      text: services.find((item) => item.slug === "foreign-accounting")?.description ?? "",
      links: [serviceLink("foreign-accounting"), link("Foreign Accounting division", "/foreign-accounting")],
    },
  },
  {
    patterns: [
      /\b(digital|virtual assist|data entry|administrative|admin support|lead research|document formatting|file management)\b/,
    ],
    reply: {
      text: services.find((item) => item.slug === "digital-support")?.description ?? "",
      links: [serviceLink("digital-support")],
    },
  },
  {
    patterns: [
      /\b(content|writing|writer|proofread|copyedit|editing|technical writing|website content|corporate report)\b/,
    ],
    reply: {
      text: services.find((item) => item.slug === "content-and-writing")?.description ?? "",
      links: [serviceLink("content-and-writing")],
    },
  },
  {
    patterns: [/\b(data|excel|survey|statistic|visuali[sz]ation|dataset|data cleansing|data collection)\b/],
    reply: {
      text: services.find((item) => item.slug === "data-and-research")?.description ?? "",
      links: [serviceLink("data-and-research")],
    },
  },
  {
    patterns: [/\b(startup|pitch deck|market entry|business model|roadmap|founder)\b/],
    reply: {
      text: services.find((item) => item.slug === "business-and-startup")?.description ?? "",
      links: [serviceLink("business-and-startup")],
    },
  },
  {
    patterns: [/\b(business plan|feasibility|swot|pestle|competitor|market research|consulting|business analysis)\b/],
    reply: {
      text: services.find((item) => item.slug === "business-and-consulting")?.description ?? "",
      links: [serviceLink("business-and-consulting")],
    },
  },
  {
    patterns: [/\b(academic|thesis|dissertation|research paper|literature review|assignment|proposal|research)\b/],
    reply: {
      text: services.find((item) => item.slug === "academic-and-research")?.description ?? "",
      links: [serviceLink("academic-and-research")],
    },
  },
  {
    patterns: [/\b(services?|what do you do|offer|offerings|help|support|practices)\b/],
    reply: {
      text: "We operate across seven core practices: Academic & Research Support, Business Research & Consulting, Foreign Accounting & Bookkeeping, Business & Startup Support, Content & Professional Writing, Data & Research Services, and Digital/Administrative Support.",
      links: ALL_SERVICES,
    },
  },
  {
    patterns: [/\b(insight|insights|blog|article|news)\b/],
    reply: {
      text: "Articles, insights and case studies from the practice are published on the site.",
      links: [link("Insights", "/insights"), link("Case studies", "/case-studies")],
    },
  },
  {
    patterns: [/\b(faq|frequently|common questions)\b/],
    reply: { text: "Frequently asked questions are collected on the FAQ page.", links: [link("FAQ", "/faq")] },
  },
  {
    patterns: [/\b(security|privacy|terms|gdpr|data protection)\b/],
    reply: {
      text: "The legal and trust pages cover privacy, terms of service and security.",
      links: [
        link("Privacy Policy", "/privacy-policy"),
        link("Terms of Service", "/terms-of-service"),
        link("Security", "/security"),
      ],
    },
  },
];

const FALLBACK: Reply = {
  text: "I could not match that to a topic yet. Pick one of the suggestions below, or reach the team directly through the contact page.",
  links: [link("Contact page", "/contact")],
};

const CHIPS = ["What services do you offer?", "Get a Quote", "Foreign Accounting", "Careers", "Contact us"];

function replyTo(input: string): Reply {
  const text = input.toLowerCase();
  for (const rule of RULES) {
    if (rule.patterns.some((pattern) => pattern.test(text))) return rule.reply;
  }
  return FALLBACK;
}

export function ChatBot() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      text: "Hello. I am the FreelancersBix virtual assistant. Ask me about services, quotes, careers or support - or pick a suggestion below.",
      links: [link("All services", "/services")],
    },
  ]);

  const nextId = useRef(2);
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setTyping(false);
    if (replyTimer.current) {
      clearTimeout(replyTimer.current);
      replyTimer.current = null;
    }
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (replyTimer.current) clearTimeout(replyTimer.current);
    };
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, typing]);

  const send = (raw: string) => {
    const value = raw.trim();
    if (!value || typing) return;
    setMessages((current) => [...current, { id: nextId.current++, role: "user", text: value }]);
    setDraft("");
    setTyping(true);
    replyTimer.current = setTimeout(() => {
      const reply = replyTo(value);
      setMessages((current) => [
        ...current,
        { id: nextId.current++, role: "bot", text: reply.text, links: reply.links },
      ]);
      setTyping(false);
      replyTimer.current = null;
    }, 480);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        aria-expanded={open}
        aria-controls="fbx-chat-panel"
        className="fixed bottom-5 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-whiteout shadow-[0_16px_34px_-14px_rgba(13,95,64,0.75)] transition-transform duration-200 hover:scale-105 hover:bg-[#08452F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span className="relative inline-grid h-[26px] w-[26px] place-items-center">
          <MaterialIcon name={open ? "close" : "chat"} className="text-[26px]" />
          {open ? null : (
            <span
              aria-hidden="true"
              className="fbx-typing-dots pointer-events-none absolute inset-0 flex items-center justify-center gap-[3px] pt-2"
            >
              <span className="h-1 w-1 rounded-full bg-whiteout" />
              <span className="h-1 w-1 rounded-full bg-whiteout" />
              <span className="h-1 w-1 rounded-full bg-whiteout" />
            </span>
          )}
        </span>
      </button>

      {open ? (
        <div
          id="fbx-chat-panel"
          role="dialog"
          aria-label="FreelancersBix virtual assistant"
          className="fbx-nav-in fixed bottom-24 right-4 z-40 flex w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-outline-variant/70 bg-whiteout shadow-[0_28px_64px_-24px_rgba(32,39,34,0.45)]"
        >
          <div className="relative flex items-center gap-3 overflow-hidden bg-brand-deep px-4 py-3 text-whiteout">
            <span
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-16 opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-24deg, transparent 0 8px, rgba(255,255,255,0.14) 8px 11px)",
              }}
            />
            <div className="relative flex min-w-0 flex-col">
              <span className="font-headline-sm text-[15px] font-bold tracking-tight">FreelancersBix Assistant</span>
              <span className="font-label-sm text-[11px] uppercase tracking-[0.16em] text-whiteout/70">
                Services &middot; Quotes &middot; Support
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="relative ml-auto rounded-md p-1 text-whiteout/80 transition-colors hover:bg-whiteout/10 hover:text-whiteout"
            >
              <MaterialIcon name="close" className="text-[18px]" />
            </button>
          </div>

          <div
            ref={listRef}
            className="flex max-h-[min(56vh,400px)] min-h-[220px] flex-col gap-3 overflow-y-auto bg-haze px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[86%] rounded-2xl px-3.5 py-2.5 font-body-sm text-body-sm leading-relaxed",
                  message.role === "bot"
                    ? "self-start rounded-bl-sm border border-outline-variant/70 bg-whiteout text-ink"
                    : "self-end rounded-br-sm bg-primary text-whiteout",
                )}
              >
                <p>{message.text}</p>
                {message.links?.length ? (
                  <ul className="mt-2.5 flex flex-col gap-1.5 border-t border-outline-variant/60 pt-2">
                    {message.links.map((item) => (
                      <li key={`${item.href}-${item.label}`}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group inline-flex items-center gap-1.5 font-label-sm text-[12px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-signal-green"
                        >
                          {item.label}
                          <MaterialIcon
                            name="arrow_forward"
                            className="text-[13px] transition-transform group-hover:translate-x-0.5"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            {typing ? (
              <div className="inline-flex items-center gap-1.5 self-start rounded-2xl rounded-bl-sm border border-outline-variant/70 bg-whiteout px-3.5 py-3">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-green"
                    style={{ animationDelay: `${dot * 150}ms` }}
                  />
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-outline-variant/60 bg-whiteout px-3 py-2">
            {CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => send(chip)}
                className="rounded-full border border-outline-variant/70 bg-haze px-2.5 py-1 font-label-sm text-[11px] font-bold text-primary transition-colors hover:border-signal-green/50 hover:bg-signal-green/10"
              >
                {chip}
              </button>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(draft);
            }}
            className="flex items-center gap-2 border-t border-outline-variant/60 bg-whiteout px-3 py-2.5"
          >
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type your question..."
              aria-label="Message the assistant"
              className="min-w-0 flex-1 bg-transparent px-1 py-1.5 font-body-sm text-body-sm text-ink placeholder:text-on-surface-variant/70 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!draft.trim() || typing}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-whiteout transition-colors hover:bg-[#08452F] disabled:opacity-40"
            >
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
