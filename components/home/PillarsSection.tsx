import Link from "next/link";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icons";
import { pillars } from "@/lib/constants";

export function PillarsSection() {
  return (
    <Section className="bg-slate-50 border-b border-slate-200">
      <SectionContainer>
        <SectionHeader
          eyebrow="Platform"
          title="Outbound, telephony, compliance — in one stack"
          compact
        />
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.id}
              id={pillar.id}
              className="rounded-lg border border-slate-200 bg-white p-5 flex flex-col h-full hover:border-slate-300 transition-colors"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-600">{pillar.eyebrow}</p>
              <h3 className="mt-2 font-display text-base font-bold text-slate-900 leading-snug">{pillar.title}</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed flex-1">{pillar.description}</p>
              <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                {pillar.bullets.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckIcon className="h-3 w-3 text-cyan-500 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link href={pillar.href} className="mt-4 text-xs font-semibold text-cyan-600 hover:text-cyan-500">
                {pillar.cta} →
              </Link>
            </article>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}
