import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";
import { CheckIcon } from "@/components/ui/Icons";
import { pricingBreakdown, pricingIncludes, siteConfig } from "@/lib/constants";
import { Starfield } from "@/components/brand/Starfield";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "£25 per agent per month. Prepaid call credits at ~5p/min. One wallet for inbound and outbound. OMNIVOX AI pricing.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950">
        <Starfield />
        <div className="absolute inset-0 bg-mesh-dark" />
        <SectionContainer className="relative z-10 text-center">
          <SectionHeader
            eyebrow="Pricing"
            title="Half the seat price. Full transparency on calls."
            description="One plan for everyone — £25 per agent for the platform, prepaid credits for telephony. No Starter vs Team upsell."
            dark
          />
        </SectionContainer>
      </section>

      <Section className="-mt-8">
        <SectionContainer>
          <AnimateOnScroll>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
              <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-cyan-50/40 px-6 py-8 md:px-8">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-700">One plan</p>
                <p className="mt-2 font-display text-4xl md:text-5xl font-bold text-slate-900">
                  £25<span className="text-xl md:text-2xl font-semibold text-slate-500"> / agent / month</span>
                </p>
                <p className="mt-2 text-slate-600">+ prepaid call credits at ~5p per connected minute</p>
              </div>

              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-5 md:p-6 w-1/4 text-sm font-semibold text-slate-500">Line item</th>
                    <th className="p-5 md:p-6 w-1/3 text-sm font-semibold text-slate-500">Rate</th>
                    <th className="p-5 md:p-6 text-sm font-semibold text-slate-500">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingBreakdown.map((row) => (
                    <tr key={row.label} className="border-b border-slate-50 last:border-0">
                      <td className="p-5 md:p-6 text-sm font-semibold text-slate-500">{row.label}</td>
                      <td className="p-5 md:p-6 font-semibold text-slate-900">{row.value}</td>
                      <td className="p-5 md:p-6 text-sm text-slate-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-8 md:px-8">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">Included on every seat</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {pricingIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckIcon className="h-4 w-4 shrink-0 text-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <blockquote className="mt-10 rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-8 text-slate-800 leading-relaxed">
              <strong>Worked example:</strong> 5 agents = <strong>£125/month</strong> platform.{" "}
              £100 credit top-up ≈ <strong>2,000 minutes</strong> (inbound or outbound).{" "}
              No surprise telecom invoice.
            </blockquote>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <PricingCalculator />
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col justify-center">
                <h3 className="font-display text-xl font-bold text-slate-900">Credit top-up packs</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {siteConfig.topUpPacks.map((pack) => (
                    <span key={pack} className="rounded-2xl border border-cyan-200 bg-white px-6 py-4 text-xl font-bold text-cyan-800 shadow-sm">
                      £{pack}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-600">
                  Top up via Stripe in Admin → Call Credits. Pilots can receive manual credit grants.
                </p>
                <Button href="/contact" className="mt-8 w-fit">Start pilot</Button>
              </div>
            </div>
          </AnimateOnScroll>
        </SectionContainer>
      </Section>

      <CTABand />
    </>
  );
}
