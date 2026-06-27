import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FeatureIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { featureGroups } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Manual dial, preview dial, prepaid call credits, inbound routing, DNC compliance, and more — everything Omnivox offers for UK/EU sales teams.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Features"
            title="Built for outbound teams who want control"
            description="Manual and preview dialing ready now. Inbound, compliance, and telephony wallet included. Progressive auto-dial coming soon."
            dark
            align="left"
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="space-y-20">
            {featureGroups.map((group, gi) => (
              <AnimateOnScroll key={group.title} delay={gi * 50}>
                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <FeatureIcon name={group.icon as "phone"} className="h-6 w-6" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
                      {group.title}
                    </h2>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="rounded-2xl border border-navy-100 bg-white p-6 transition-all hover:border-accent/20 hover:shadow-md"
                      >
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <h3 className="font-semibold text-navy-900">{feature.name}</h3>
                          <Badge variant={feature.status} />
                        </div>
                        <p className="text-sm text-navy-600 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-surface py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
            See it in action
          </h2>
          <p className="mt-4 text-navy-600">
            Book a demo to walk through manual dial, preview dial, and the agent workspace with your use case in mind.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Book a demo
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              See pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
