import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { CTABand } from "@/components/home/CTABand";
import { CheckIcon } from "@/components/ui/Icons";
import {
  bundledPlanOptions,
  pricingAdvantages,
  pricingBreakdown,
  pricingIncludes,
  siteConfig,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "£25 per agent per month. Prepaid call credits at ~5p/min inbound and outbound. Wallboards and inbound included on every seat.",
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-site px-4 text-center sm:px-6 lg:px-8">
          <p className="kicker">Pricing</p>
          <h1 className="display mx-auto mt-3 max-w-3xl text-4xl text-paper md:text-5xl">
            Half the typical seat. Pay for the minutes you actually connect.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-300">
            £25 per agent for the platform. Telephony on prepaid credits at ~5p/min. Wallboards, inbound IVR and AMD
            included — not a premium SKU.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink md:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-stone-300 bg-white">
            <div className="border-b border-stone-200 bg-stone-50 px-6 py-8 md:px-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-amber-800">One platform fee</p>
              <p className="mt-2 font-mono text-4xl tabular md:text-5xl">
                £25<span className="text-xl text-ink-500"> / agent / month</span>
              </p>
              <p className="mt-2 text-ink-500">+ prepaid call credits at ~5p per connected minute</p>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50">
                  <th className="w-1/4 p-5 text-sm font-medium text-ink-500">Line item</th>
                  <th className="w-1/3 p-5 text-sm font-medium text-ink-500">Rate</th>
                  <th className="p-5 text-sm font-medium text-ink-500">Details</th>
                </tr>
              </thead>
              <tbody>
                {pricingBreakdown.map((row) => (
                  <tr key={row.label} className="border-b border-stone-100 last:border-0">
                    <td className="p-5 text-sm font-medium text-ink-500">{row.label}</td>
                    <td className="p-5 font-semibold text-ink">{row.value}</td>
                    <td className="p-5 text-sm text-ink-500">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-t border-stone-200 bg-stone-50 px-6 py-8 md:px-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">Included on every seat</p>
              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {pricingIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckIcon className="h-4 w-4 shrink-0 text-amber-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {pricingAdvantages.map((a) => (
              <article key={a.title} className="border border-stone-300 bg-white p-6">
                <h2 className="font-display text-lg font-bold">{a.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{a.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {bundledPlanOptions.map((p) => (
              <article key={p.name} className="border border-stone-300 p-6">
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-amber-800">{p.bestFor}</p>
                <p className="mt-3 text-sm text-ink-500">{p.detail}</p>
              </article>
            ))}
          </div>

          <blockquote className="mt-10 border border-amber-200 bg-amber-50 p-6 leading-relaxed">
            <strong>Worked example:</strong> 5 agents = <strong>£125/month</strong> platform. £100 credit top-up ≈{" "}
            <strong>2,000 minutes</strong> (inbound or outbound). No surprise telecom invoice.
          </blockquote>

          <div id="calculator" className="mt-12 grid scroll-mt-28 gap-8 lg:grid-cols-2">
            <PricingCalculator />
            <div className="flex flex-col justify-center border border-stone-300 bg-white p-8">
              <h3 className="font-display text-xl font-bold">Credit top-up packs</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {siteConfig.topUpPacks.map((pack) => (
                  <span key={pack} className="border border-ink bg-paper px-6 py-4 font-mono text-xl tabular">
                    £{pack}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-ink-500">
                Top up via Stripe in Admin → Call Credits. Pilots can receive manual credit grants. Admin can grant
                starter credits without Stripe.
              </p>
              <Button href="/contact" className="mt-8 w-fit" variant="paper">
                Start a pilot
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
