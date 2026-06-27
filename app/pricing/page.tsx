import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/Accordion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { pricingTiers } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Omnivox — from £59/agent/month platform fee, prepaid call credits, and 500 inbound minutes included.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="One platform, one wallet"
            description="Platform fee per agent, prepaid call credits for telephony, and inbound minutes included. No hidden Twilio bill."
            dark
          />
        </div>
      </section>

      <section className="py-20 md:py-28 -mt-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <AnimateOnScroll key={tier.name} delay={i * 100}>
                <div
                  className={`relative rounded-2xl border p-8 h-full flex flex-col ${
                    tier.highlighted
                      ? "border-accent bg-white shadow-xl shadow-accent/10 ring-2 ring-accent"
                      : "border-navy-100 bg-white"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900">{tier.name}</h3>
                    <p className="mt-1 text-sm text-navy-500">{tier.description}</p>
                    <p className="mt-1 text-xs font-medium text-accent">{tier.agents}</p>
                  </div>

                  <div className="mt-6">
                    <span className="font-display text-4xl font-bold text-navy-900">{tier.price}</span>
                    <span className="ml-2 text-sm text-navy-500">{tier.priceNote}</span>
                  </div>

                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-navy-600">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-surface py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <AnimateOnScroll>
            <div className="rounded-2xl border border-navy-100 bg-white p-8 md:p-10">
              <h3 className="font-display text-xl font-bold text-navy-900">Worked example</h3>
              <blockquote className="mt-4 border-l-4 border-accent pl-6 text-navy-700 leading-relaxed">
                10 agents on Team (£59/agent) = £590/mo platform fee. A £100 call credit top-up
                gives you approximately 2,000 outbound minutes at 5p/min. 500 inbound minutes included
                per organisation.
              </blockquote>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl bg-navy-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Outbound</p>
                  <p className="mt-2 font-display text-2xl font-bold text-navy-900">~5p/min</p>
                  <p className="mt-1 text-xs text-navy-500">Connected time, 1-min minimum</p>
                </div>
                <div className="rounded-xl bg-navy-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Inbound</p>
                  <p className="mt-2 font-display text-2xl font-bold text-navy-900">500 min/mo</p>
                  <p className="mt-1 text-xs text-navy-500">Included, then ~4p/min from credits</p>
                </div>
                <div className="rounded-xl bg-navy-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Top-ups</p>
                  <p className="mt-2 font-display text-2xl font-bold text-navy-900">£50–£500</p>
                  <p className="mt-1 text-xs text-navy-500">Stripe packs, pilot grants available</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-navy-600">
            Pilot offer: first 5 organisations get £50 call credits + white-glove setup.
          </p>
          <Button href="/contact" className="mt-6" size="lg">
            Start pilot
          </Button>
        </div>
      </section>
    </>
  );
}
