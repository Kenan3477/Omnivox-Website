import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CheckIcon, XIcon } from "@/components/ui/Icons";
import { testimonials } from "@/lib/constants";

const omnivox = [
  "From £25/agent/month",
  "Preview dial built in",
  "One prepaid credit wallet",
  "~5p/min transparent",
  "Same-day pilot onboarding",
];

const typical = [
  "Often £50–90+ per seat",
  "Preview dial add-on or missing",
  "Opaque bundled telephony",
  "Hidden per-minute tiers",
  "Weeks to go live",
];

const steps = [
  { n: "1", t: "Book a demo", d: "We provision your org same day." },
  { n: "2", t: "Load data", d: "Contacts, campaigns, dial methods." },
  { n: "3", t: "Top up credits", d: "£50–£500 packs or pilot grant." },
  { n: "4", t: "Start calling", d: "Agents dial from the browser." },
];

export function PlatformGrid() {
  return (
    <Section className="bg-slate-50 border-y border-slate-200">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* How it works — compact */}
          <div>
            <SectionHeader eyebrow="Get started" title="Live in hours" compact />
            <ol className="grid sm:grid-cols-2 gap-3">
              {steps.map((s) => (
                <li key={s.n} className="rounded-lg border border-slate-200 bg-white p-4">
                  <span className="text-xs font-bold text-cyan-600">{s.n}</span>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{s.t}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Compare — compact */}
          <div>
            <SectionHeader eyebrow="Compare" title="vs typical cloud dialers" compact />
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-cyan-200 bg-white p-4">
                <p className="font-bold text-slate-900 mb-3">OMNIVOX AI</p>
                <ul className="space-y-2">
                  {omnivox.map((item) => (
                    <li key={item} className="flex gap-2 text-slate-700">
                      <CheckIcon className="h-3.5 w-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="font-bold text-slate-500 mb-3">Typical dialers</p>
                <ul className="space-y-2">
                  {typical.map((item) => (
                    <li key={item} className="flex gap-2 text-slate-500">
                      <XIcon className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials — single row */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">From pilot teams</p>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <blockquote key={t.role} className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs text-slate-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{t.role}</p>
                    <p className="text-[10px] text-slate-400">{t.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-cyan-600">{t.metric}</p>
                    <p className="text-[10px] text-slate-400">{t.metricLabel}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
