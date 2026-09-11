import { pricingIncludes, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

export function PricingTeaser() {
  return (
    <section className="border-b border-ink-600 bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-signal-700">Pricing</p>
        <h2 className="display mt-3 text-3xl md:text-4xl">£25 a seat. Prepaid minutes. Wallboards included.</h2>
        <p className="mt-4 max-w-2xl text-ink-500">
          Platform fee and telephony are separate line items. One wallet for inbound and outbound at ~5p a connected
          minute. Optional seat + credit bundles if you want a monthly budget.
        </p>
        <p className="mt-8 font-mono text-5xl tabular text-ink">
          £{siteConfig.platformFeePerAgent}
          <span className="text-xl text-ink-500"> / agent / month</span>
        </p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {pricingIncludes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-700" />
              {item}
            </li>
          ))}
        </ul>
        <Button href="/pricing" variant="paper" className="mt-8">
          Open the calculator
        </Button>
      </div>
    </section>
  );
}
