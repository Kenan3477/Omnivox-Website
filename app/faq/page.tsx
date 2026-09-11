import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { CTABand } from "@/components/home/CTABand";
import { faqItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Do I need a carrier? How are minutes billed? Is predictive live? Do you have wallboards? GDPR/DPA? Recording consent?",
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <p className="kicker">FAQ</p>
          <h1 className="display mt-3 max-w-3xl text-4xl text-paper md:text-5xl">
            Carrier, minutes, predictive, wallboards, GDPR.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-300">
            Short answers a floor manager can take back to procurement. The site helper in the corner uses the same
            facts.
          </p>
        </div>
      </section>
      <section className="bg-panel py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion items={[...faqItems]} />
        </div>
      </section>
      <CTABand />
    </>
  );
}
