import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading, Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Straight answers about telephony, pricing, and what's ready today."
        />

        <AnimateOnScroll>
          <Accordion items={faqItems} />
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-12 rounded-2xl bg-navy p-8 text-center md:p-12">
            <h3 className="font-display text-2xl font-bold text-white">Ready to see Omnivox in action?</h3>
            <p className="mt-3 text-navy-300">
              Book a 30-minute demo or start a pilot — we&apos;ll provision your org and credits.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Book a demo
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See pricing
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
