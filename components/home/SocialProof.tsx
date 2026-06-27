import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    quote:
      "We were live with preview dial the same afternoon. No Twilio account, no developer needed — just load contacts and go.",
    role: "Sales Director",
    company: "B2B services agency, 8 agents",
  },
  {
    quote:
      "The credit wallet is exactly what we needed. One bill, transparent per-minute pricing, and our team always knows what calls cost.",
    role: "Operations Manager",
    company: "Outbound sales team, 12 agents",
  },
  {
    quote:
      "Preview dial changed how our agents work. They review every contact, skip bad fits, and disposition properly — no more spray and pray.",
    role: "Team Lead",
    company: "SaaS sales team, 5 agents",
  },
];

const placeholders = [
  "Sales teams",
  "B2B agencies",
  "Lead gen firms",
  "Renewal teams",
  "Outbound SDRs",
];

export function SocialProof() {
  return (
    <section className="border-y border-navy-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-navy-400 mb-8">
            Trusted by teams like yours
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {placeholders.map((name) => (
              <div
                key={name}
                className="flex h-12 items-center rounded-lg border border-dashed border-navy-200 px-6 text-sm font-medium text-navy-400"
              >
                {name}
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.role} delay={i * 100}>
              <blockquote className="rounded-2xl border border-navy-100 bg-slate-surface p-6 md:p-8 h-full flex flex-col">
                <p className="text-navy-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-navy-100 pt-4">
                  <p className="text-sm font-semibold text-navy-900">{t.role}</p>
                  <p className="text-sm text-navy-500">{t.company}</p>
                </footer>
              </blockquote>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
