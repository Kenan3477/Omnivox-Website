import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section className="bg-slate-950">
      <SectionContainer>
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Results"
            title="What teams see after switching"
            description="Anonymised feedback from pilot customers. No fake logos — real outcomes from outbound teams like yours."
            dark
          />
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.role} delay={i * 100}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm">
                <div className="mb-6">
                  <p className="font-display text-3xl font-bold text-cyan-400">{t.metric}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">{t.metricLabel}</p>
                </div>
                <p className="flex-1 text-slate-300 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 pt-6 border-t border-white/8">
                  <p className="text-sm font-semibold text-white">{t.role}</p>
                  <p className="text-sm text-slate-500">{t.company}</p>
                </footer>
              </blockquote>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}
