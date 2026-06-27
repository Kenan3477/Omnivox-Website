import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FeatureIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { featureGroups } from "@/lib/constants";
import { Starfield } from "@/components/brand/Starfield";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Preview dial, manual dial, prepaid credit wallet, campaigns, inbound routing, and compliance — ready for onboarding on OMNIVOX AI.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Starfield />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Features"
            title="Preview dial + one credit wallet"
            description="Manual and preview outbound ready now. Platform-managed telephony. No customer Twilio account."
            dark
            align="left"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="space-y-16">
            {featureGroups.map((group, gi) => (
              <AnimateOnScroll key={group.title} delay={gi * 50}>
                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                      <FeatureIcon name={group.icon as "phone"} className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{group.title}</h2>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-cyan-300 hover:shadow-md transition-all"
                      >
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <h3 className="font-semibold text-slate-900">{feature.name}</h3>
                          <Badge variant={feature.status} />
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-white">
        <Button href="/contact" size="lg">Book a demo</Button>
      </section>
    </>
  );
}
