import Link from "next/link";
import { Section, SectionContainer } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { faqItems } from "@/lib/constants";

const includes = [
  "Manual & preview dial",
  "Campaigns & contacts",
  "Prepaid credit wallet",
  "Inbound DIDs & routing",
  "DNC, audit, recording",
];

export function PricingFAQ() {
  return (
    <Section>
      <SectionContainer>
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Pricing strip */}
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 h-fit lg:sticky lg:top-24">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">Pricing</p>
            <p className="mt-2 font-display text-3xl font-bold text-slate-900">
              £25<span className="text-base font-normal text-slate-500">/agent/mo</span>
            </p>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              + prepaid credits ~5p/min. 5 agents = £125/mo + top-ups.
            </p>
            <ul className="mt-4 space-y-1.5">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckIcon className="h-3 w-3 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-2">
              <Button href="/contact" size="sm" className="w-full">Book a demo</Button>
              <Link href="/pricing" className="text-center text-xs font-semibold text-cyan-600 hover:text-cyan-500">
                Calculator &amp; details →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-4">FAQ</p>
            <Accordion items={faqItems} light />
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
