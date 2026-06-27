import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CheckIcon, XIcon } from "@/components/ui/Icons";

const omnivox = [
  { label: "Platform fee", value: "From £25/agent/month" },
  { label: "Telephony", value: "One prepaid credit wallet" },
  { label: "Preview dial", value: "Built in — pilot-proven" },
  { label: "Per-minute pricing", value: "~5p/min, transparent ledger" },
  { label: "Agent workspace", value: "Browser-based, no softphone" },
  { label: "Onboarding", value: "Same-day pilots available" },
];

const typicalDialers = [
  { label: "Platform fee", value: "Often £50–90+ per seat/month" },
  { label: "Telephony", value: "Bundled into opaque monthly bills" },
  { label: "Preview dial", value: "Add-on, missing, or manual-only" },
  { label: "Per-minute pricing", value: "Hidden in plan tiers or overage" },
  { label: "Agent workspace", value: "Desktop apps, legacy UI" },
  { label: "Onboarding", value: "Weeks of setup and training" },
];

export function Comparison() {
  return (
    <Section>
      <SectionContainer>
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Compare"
            title="How we stack up against other dialers"
            description="You're choosing between paid platforms — CloudTalk, Connex, legacy diallers. Here's where OMNIVOX AI wins on price and transparency."
          />
        </AnimateOnScroll>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimateOnScroll>
            <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-200/60 bg-white p-8 md:p-10 shadow-card-hover h-full">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                OMNIVOX AI
              </div>
              <ul className="mt-8 space-y-5">
                {omnivox.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 border-b border-slate-100 pb-5 last:border-0">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{row.label}</p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">{row.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10 h-full">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Typical cloud dialers</p>
              <ul className="mt-8 space-y-5">
                {typicalDialers.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 border-b border-slate-200/60 pb-5 last:border-0">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                      <XIcon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{row.label}</p>
                      <p className="text-sm text-slate-600 mt-0.5">{row.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionContainer>
    </Section>
  );
}
