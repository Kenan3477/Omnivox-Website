import Link from "next/link";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icons";
import { pillars } from "@/lib/constants";

export function PillarsSection() {
  return (
    <Section className="bg-white">
      <SectionContainer>
        <SectionHeader
          eyebrow="Platform"
          title="Outbound, inbox, floor — in one stack"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <article
              key={pillar.id}
              id={pillar.id}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-7 flex flex-col h-full"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-700">{pillar.eyebrow}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-slate-900 leading-snug">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{pillar.description}</p>
              <ul className="mt-6 space-y-2 border-t border-slate-200/80 pt-5">
                {pillar.bullets.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckIcon className="h-3.5 w-3.5 text-blue-600 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link href={pillar.href} className="mt-6 text-sm font-medium text-blue-700 hover:text-blue-600">
                {pillar.cta} →
              </Link>
            </article>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}
