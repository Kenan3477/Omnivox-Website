import Link from "next/link";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { bundledPlanOptions, pricingAdvantages } from "@/lib/constants";

interface UsagePricingSectionProps {
  variant?: "section" | "embedded";
}

export function UsagePricingSection({ variant = "section" }: UsagePricingSectionProps) {
  const inner = (
    <>
      <SectionHeader
        eyebrow="Why metered pricing"
        title="Pay for usage, not empty seats"
        description="Low platform fee + prepaid credits. No “unlimited” fine print."
        compact
        align={variant === "embedded" ? "left" : undefined}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricingAdvantages.map((item) => (
          <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-4 h-full">
            <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">Optional bundled plans</p>
        <p className="mt-1 text-sm text-slate-600">Best of both worlds — pick the model that fits your team.</p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {bundledPlanOptions.map((plan) => (
            <div key={plan.name} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">{plan.name}</p>
              <p className="text-[10px] uppercase tracking-wider text-cyan-700 mt-1">{plan.bestFor}</p>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">{plan.detail}</p>
            </div>
          ))}
        </div>
        {variant === "section" && (
          <Link href="/pricing#calculator" className="mt-4 inline-flex text-xs font-semibold text-cyan-600 hover:text-cyan-500">
            Open cost calculator →
          </Link>
        )}
      </div>
    </>
  );

  if (variant === "embedded") {
    return <div className="mt-10">{inner}</div>;
  }

  return (
    <Section className="bg-slate-50 border-y border-slate-200">
      <SectionContainer>{inner}</SectionContainer>
    </Section>
  );
}
