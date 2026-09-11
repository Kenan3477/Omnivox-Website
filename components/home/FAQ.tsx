import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FAQ() {
  return (
    <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="kicker">FAQ</p>
            <h2 className="display mt-3 text-3xl text-paper md:text-4xl">The questions a floor manager actually asks.</h2>
            <p className="mt-4 text-ink-300">Straight answers. Same ones we give on a demo.</p>
            <Button href="/faq" variant="outline" className="mt-6">
              Full FAQ
            </Button>
          </div>
          <Accordion items={[...faqItems.slice(0, 6)]} />
        </div>
      </div>
    </section>
  );
}
