import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { proofPoints } from "@/lib/product";

const steps = [
  { n: "1", t: "Book a demo", d: "We provision your org same day." },
  { n: "2", t: "Load data", d: "Contacts, campaigns, dial methods." },
  { n: "3", t: "Configure channels", d: "Voice is live. Digital when you enable it." },
  { n: "4", t: "Start working", d: "Agents dial and inbox from the browser." },
];

export function PlatformGrid() {
  return (
    <Section className="bg-white">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader eyebrow="Get started" title="Live in hours, not weeks" />
            <ol className="grid sm:grid-cols-2 gap-4">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="text-xs font-bold text-blue-600">{s.n}</span>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{s.t}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeader
              eyebrow="Proof, not quotes"
              title="How the product actually ships"
              description="No invented testimonials. These are operating facts from how OMNIVOX ships."
            />
            <div className="space-y-3">
              {proofPoints.map((p) => (
                <article key={p.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-display text-xl font-bold text-blue-700">{p.metric}</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-400">{p.label}</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
