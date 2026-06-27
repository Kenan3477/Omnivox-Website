import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";
import { pricingComparison, siteConfig } from "@/lib/constants";
import { Starfield } from "@/components/brand/Starfield";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "£25 per agent per month. Prepaid call credits at ~5p/min. One wallet for inbound and outbound. OMNIVOX AI pricing.",
};

const rows = [
  { label: "Platform", key: "platform" as const },
  { label: "Telephony", key: "telephony" as const },
  { label: "Outbound", key: "outbound" as const },
  { label: "Inbound", key: "inbound" as const },
  { label: "Min top-up", key: "minTopUp" as const },
  { label: "Best for", key: "bestFor" as const },
];

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
            description="Legacy dialers charge £50–90+ per seat and hide telephony in the bill. We separate platform (£25) from credits (~5p/min)."
            dark
          />
        </SectionContainer>
      </section>

      <Section className="-mt-8">
        <SectionContainer>
          <AnimateOnScroll>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-5 md:p-6 w-1/3" />
                    <th className="p-5 md:p-6 font-display text-xl font-bold">Starter</th>
                    <th className="p-5 md:p-6 font-display text-xl font-bold text-cyan-700 bg-cyan-50/50">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.key} className="border-b border-slate-50 last:border-0">
                      <td className="p-5 md:p-6 text-sm font-semibold text-slate-500">{row.label}</td>
                      <td className="p-5 md:p-6 text-slate-800">{pricingComparison.starter[row.key]}</td>
                      <td className="p-5 md:p-6 text-slate-800 bg-cyan-50/30">{pricingComparison.team[row.key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
