import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icons";
import { pillars } from "@/lib/constants";

const accentMap = {
  cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20",
  violet: "from-violet-500/20 to-violet-500/5 border-violet-500/20",
  emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20",
};

export function PillarsSection() {
  return (
    <Section>
      <SectionContainer>
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Platform"
            title="The pillars of modern outbound"
            description="Everything a sales team needs to dial, track spend, and stay compliant — without enterprise CCaaS bloat."
          />
        </AnimateOnScroll>

        <div className="space-y-8 lg:space-y-12">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={pillar.id} delay={i * 80}>
              <article
                id={pillar.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`rounded-3xl border bg-gradient-to-br p-8 md:p-10 lg:min-h-[320px] flex flex-col justify-center ${accentMap[pillar.accent as keyof typeof accentMap]}`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">{pillar.eyebrow}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 text-balance">{pillar.title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">{pillar.description}</p>
                  <ul className="mt-6 space-y-3">
                    {pillar.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={pillar.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-500">
                    {pillar.cta} <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="relative">
                  <PillarVisual type={pillar.id} />
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}

function PillarVisual({ type }: { type: string }) {
  if (type === "dialing") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <div className="space-y-3">
          {["Preview dial", "Manual dial", "Campaign queue"].map((mode, i) => (
            <div key={mode} className={`flex items-center justify-between rounded-xl p-4 ${i === 0 ? "bg-cyan-50 border border-cyan-100" : "bg-slate-50"}`}>
              <span className={`font-medium text-sm ${i === 0 ? "text-cyan-800" : "text-slate-600"}`}>{mode}</span>
              {i === 0 && <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Live</span>}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500 text-center">Progressive / predictive — waitlist open</p>
      </div>
    );
  }
  if (type === "wallet") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 p-6 text-white">
          <p className="text-xs opacity-80">Credit balance</p>
          <p className="text-4xl font-bold mt-1">£247.50</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-center text-sm">
          <div className="rounded-lg bg-slate-50 py-3"><p className="text-slate-500 text-xs">Outbound</p><p className="font-semibold">~5p/min</p></div>
          <div className="rounded-lg bg-slate-50 py-3"><p className="text-slate-500 text-xs">Inbound</p><p className="font-semibold">~5p/min</p></div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card space-y-3">
      {["DNC registry", "Audit logs", "Recording policy", "Role-based access"].map((item) => (
        <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
            <CheckIcon className="h-4 w-4" />
          </span>
          <span className="text-sm font-medium text-slate-700">{item}</span>
        </div>
      ))}
    </div>
  );
}
