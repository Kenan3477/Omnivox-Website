import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icons";

export function PricingTeaser() {
  return (
    <Section className="bg-white border-t border-slate-100">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <AnimateOnScroll>
            <SectionHeader
              eyebrow="Pricing"
              title="Credits-first pricing that&apos;s easy to sell"
              description="£25 per agent for the platform. Telephony on prepaid credits — one wallet, ~5p per minute, no hidden line items."
              align="left"
            />
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-slate-900">£25</span>
                <span className="text-slate-500">/ agent / month</span>
              </div>
              <p className="text-slate-600">
                Plus prepaid credits from <strong className="text-slate-800">£50 top-ups</strong>. A 5-agent team = £125/mo platform. £100 credits ≈ 2,000 minutes.
              </p>
              <Link href="/pricing" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-500">
                Full pricing &amp; calculator <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-card">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">What&apos;s included</p>
              <ul className="space-y-4">
                {[
                  "Manual & preview dial",
                  "Browser agent workspace",
                  "Campaigns & contact lists",
                  "Platform-managed telephony",
                  "DNC, audit logs, recording",
                  "Inbound DIDs & routing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionContainer>
    </Section>
  );
}
