import Link from "next/link";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icons";
import { dataCompliance } from "@/lib/constants";

export function ComplianceSection() {
  const { roles, controls } = dataCompliance;

  return (
    <Section className="bg-white border-y border-slate-200">
      <SectionContainer>
        <SectionHeader
          eyebrow="Data & compliance"
          title="UK GDPR-ready dialer operations"
          description="You stay the data controller. We process on your behalf with a DPA, org isolation, and built-in compliance controls."
          compact
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Controller vs processor */}
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{roles.title}</p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{roles.description}</p>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs font-bold text-cyan-700">{roles.controller.label}</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">{roles.controller.subtitle}</p>
                <ul className="mt-3 space-y-2">
                  {roles.controller.points.map((p) => (
                    <li key={p} className="flex gap-2 text-xs text-slate-700">
                      <CheckIcon className="h-3 w-3 text-cyan-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs font-bold text-violet-700">{roles.processor.label}</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">{roles.processor.subtitle}</p>
                <ul className="mt-3 space-y-2">
                  {roles.processor.points.map((p) => (
                    <li key={p} className="flex gap-2 text-xs text-slate-700">
                      <CheckIcon className="h-3 w-3 text-violet-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Platform controls */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">Built into the platform</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {controls.map((c) => (
                <div key={c.title} className="rounded-md border border-slate-100 bg-slate-50/80 p-3">
                  <p className="text-xs font-semibold text-slate-900">{c.title}</p>
                  <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-xs font-semibold">
              <Link href="/trust" className="text-cyan-600 hover:text-cyan-500">
                Full trust &amp; security →
              </Link>
              <Link href="/privacy" className="text-slate-600 hover:text-slate-800">
                Privacy policy →
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
