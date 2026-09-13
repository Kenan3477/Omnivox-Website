import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/constants";

export function FAQ() {
  return (
    <Section className="bg-slate-50">
      <SectionContainer>
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions"
              description="Straight answers — the same questions prospects ask us on every demo call."
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <Accordion items={faqItems} light />
          </AnimateOnScroll>
        </div>
      </SectionContainer>
    </Section>
  );
}
