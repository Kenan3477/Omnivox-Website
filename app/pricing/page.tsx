import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/Accordion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { pricingComparison, siteConfig } from "@/lib/constants";
import { Starfield } from "@/components/brand/Starfield";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "£25 per agent per month platform fee. Prepaid call credits at ~5p/min for inbound and outbound. One wallet, no Twilio.",
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
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Starfield />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Dead simple. Credits-first."
            description="£25 per agent for the platform. One prepaid wallet for all telephony — inbound and outbound."
            dark
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24 -mt-8">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <AnimateOnScroll>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="p-4 md:p-6 text-sm font-semibold text-slate-500" />
                    <th className="p-4 md:p-6 text-lg font-bold text-slate-900">Starter</th>
                    <th className="p-4 md:p-6 text-lg font-bold text-cyan-700">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.key} className="border-b border-slate-50 last:border-0">
                      <td className="p-4 md:p-6 text-sm font-medium text-slate-500">{row.label}</td>
                      <td className="p-4 md:p-6 text-slate-800">{pricingComparison.starter[row.key]}</td>
                      <td className="p-4 md:p-6 text-slate-800 bg-cyan-50/50">{pricingComparison.team[row.key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <blockquote className="mt-10 rounded-2xl border border-cyan-200 bg-cyan-50 p-6 md:p-8 text-slate-800 leading-relaxed">
              <strong>Worked example:</strong> 5 agents = <strong>£125/month</strong> platform.{" "}
              £100 credit top-up ≈ <strong>~2,000 minutes</strong> of calling (inbound or outbound).{" "}
              No surprise Twilio invoice. No carrier setup.
            </blockquote>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-12">
              <PricingCalculator />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <h3 className="font-bold text-slate-900">Credit top-up packs</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {siteConfig.topUpPacks.map((pack) => (
                  <span
                    key={pack}
                    className="rounded-xl border border-cyan-200 bg-cyan-50 px-5 py-3 text-lg font-bold text-cyan-800"
                  >
                    £{pack}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Top up via Stripe in Admin → Call Credits. Pilots can receive manual credit grants.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 text-center">
        <p className="text-slate-400 mb-6">Start with £50 free call credits + white-glove setup</p>
        <Button href="/contact" size="lg">Start pilot</Button>
      </section>
    </>
  );
}
