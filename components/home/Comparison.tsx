import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/Accordion";
import { CheckIcon, XIcon } from "@/components/ui/Icons";

const omnivox = [
  { label: "Platform fee", value: "From £25/agent/month" },
  { label: "Telephony", value: "One prepaid credit wallet" },
  { label: "Preview dial", value: "Built in — pilot-proven" },
  { label: "Per-minute pricing", value: "~5p/min, transparent ledger" },
  { label: "Agent workspace", value: "Browser-based, no softphone install" },
  { label: "Onboarding", value: "Same-day pilots available" },
];

const typicalDialers = [
  { label: "Platform fee", value: "Often £50–90+ per seat/month" },
  { label: "Telephony", value: "Bundled into opaque monthly bills" },
  { label: "Preview dial", value: "Add-on, missing, or manual-only" },
  { label: "Per-minute pricing", value: "Hidden in plan tiers or overage" },
  { label: "Agent workspace", value: "Desktop apps, clunky legacy UI" },
  { label: "Onboarding", value: "Weeks of setup and training" },
];

export function Comparison() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compare"
          title="Why teams choose OMNIVOX AI"
          description="You're not choosing between us and building software. You're choosing a dialer that fits outbound sales — against every other platform on the market."
          light
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimateOnScroll>
            <div className="relative overflow-hidden rounded-2xl border border-cyan-200/60 bg-white p-8 shadow-xl shadow-cyan-500/5 h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-2">Our platform</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">OMNIVOX AI</h3>
              <ul className="space-y-4">
                {omnivox.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-500">{row.label}</p>
                      <p className="text-sm font-semibold text-slate-800">{row.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">The market norm</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Typical cloud dialers</h3>
              <ul className="space-y-4">
                {typicalDialers.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <XIcon className="h-3 w-3" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-400">{row.label}</p>
                      <p className="text-sm text-slate-600">{row.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={200}>
          <p className="mt-10 text-center text-sm text-slate-500 max-w-2xl mx-auto">
            Honest wedge: we&apos;re the best fit if you want <strong className="text-slate-700">manual and preview outbound</strong> today,
            with credits-first pricing — not enterprise CCaaS complexity or legacy per-seat bloat.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
