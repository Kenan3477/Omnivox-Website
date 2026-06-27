import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";

const steps = [
  { n: "01", title: "Book a demo", desc: "Tell us your team size and use case. We provision your org same day for pilots." },
  { n: "02", title: "Load your data", desc: "Import contacts, create campaigns, assign preview or manual dial methods." },
  { n: "03", title: "Top up credits", desc: "Buy prepaid credits or get pilot grants. One wallet for all calls." },
  { n: "04", title: "Start calling", desc: "Agents log into Work and dial. Supervisors track outcomes in real time." },
];

export function HowItWorks() {
  return (
    <Section dark className="bg-slate-900">
      <SectionContainer>
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Get started"
            title="Live in hours, not weeks"
            description="Competitors quote weeks of implementation. We provision pilots the same day."
            dark
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.n} delay={i * 80}>
              <div className="relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 h-full hover:border-cyan-500/20 transition-colors">
                <span className="font-display text-4xl font-bold text-cyan-500/25">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}
