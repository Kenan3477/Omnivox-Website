import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading, Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FAQ() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Straight answers about telephony, pricing, and what's ready today."
          light
        />

        <AnimateOnScroll>
          <Accordion items={faqItems} light />
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 p-8 text-center md:p-12 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white">Ready to see OMNIVOX AI in action?</h3>
            <p className="mt-3 text-slate-400">
              Book a demo or start a pilot — we&apos;ll provision your org and grant starter credits.
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
