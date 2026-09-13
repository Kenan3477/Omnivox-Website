import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { proofPoints } from "@/lib/product";

export function Testimonials() {
  return (
    <Section className="bg-slate-950">
      <SectionContainer>
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Proof"
            title="Operating facts — not invented quotes"
            description="We do not publish fake logos or testimonials. These are how OMNIVOX actually ships."
            dark
          />
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {proofPoints.map((t, i) => (
            <AnimateOnScroll key={t.label} delay={i * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm">
                <p className="font-display text-3xl font-bold text-blue-400">{t.metric}</p>
                <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">{t.label}</p>
                <p className="mt-6 text-slate-300 leading-relaxed">{t.detail}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}
