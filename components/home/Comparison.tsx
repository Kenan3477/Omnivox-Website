import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/Accordion";
import { CheckIcon, XIcon } from "@/components/ui/Icons";

const diyTwilio = {
  title: "vs DIY Twilio + CRM",
  items: [
    { text: "No carrier account for customer", positive: true },
    { text: "One credit wallet for all telephony", positive: true },
    { text: "Faster onboarding — hours, not weeks", positive: true },
    { text: "Platform handles CLI, webhooks, recording", positive: true },
    { text: "You manage Twilio, SIP, and webhooks", positive: false },
    { text: "Separate telecom bill every month", positive: false },
  ],
};

const legacyDialers = {
  title: "vs Legacy dialers",
  items: [
    { text: "Modern web UI — no desktop install", positive: true },
    { text: "Preview dial out of the box", positive: true },
    { text: "500 inbound minutes included", positive: true },
    { text: "Transparent per-minute pricing", positive: true },
    { text: "Clunky interfaces and long contracts", positive: false },
    { text: "Hidden fees and opaque billing", positive: false },
  ],
};

function ComparisonCard({ title, items }: { title: string; items: { text: string; positive: boolean }[] }) {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 md:p-8">
      <h3 className="font-display text-xl font-bold text-navy-900 mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.text} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                item.positive ? "bg-emerald-100 text-emerald-600" : "bg-red-50 text-red-400"
              }`}
            >
              {item.positive ? <CheckIcon className="h-3 w-3" /> : <XIcon className="h-3 w-3" />}
            </span>
            <span className={`text-sm ${item.positive ? "text-navy-700" : "text-navy-400"}`}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Comparison() {
  return (
    <section className="bg-slate-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compare"
          title="Why teams choose Omnivox"
          description="Honest positioning — we're built for manual and preview outbound today, with room to grow."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <AnimateOnScroll>
            <ComparisonCard {...diyTwilio} />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <ComparisonCard {...legacyDialers} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
