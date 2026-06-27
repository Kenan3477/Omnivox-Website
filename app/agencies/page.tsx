import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";
import { Starfield } from "@/components/brand/Starfield";

export const metadata: Metadata = {
  title: "For Agencies",
  description: "Onboard clients in a day. Grant pilot credits. One telephony stack — OMNIVOX AI for agencies.",
};

const benefits = [
  { title: "Onboard clients in a day", description: "Provision org, load contacts, grant credits — agents dialling within hours, not weeks." },
  { title: "One telephony stack", description: "No per-client carrier setup. Manage credits and orgs from a single admin view." },
  { title: "Grant pilot credits", description: "Start clients without payment friction. Manual credit grants for every pilot." },
  { title: "Multi-org management", description: "Isolated data, campaigns, and compliance per client organisation." },
];

export default function AgenciesPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950">
        <Starfield />
        <div className="absolute inset-0 bg-mesh-dark" />
        <SectionContainer className="relative z-10">
          <SectionHeader
            eyebrow="Agencies"
            title="One platform for every client you onboard"
            description="Compete with Connex and CloudTalk on capability — win on £25/seat pricing and transparent credits per client."
            dark
            align="left"
          />
          <Button href="/contact" size="lg">Contact sales</Button>
        </SectionContainer>
      </section>

      <Section>
        <SectionContainer>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 80}>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                  <h3 className="font-display text-xl font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{b.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={200}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {["£25/agent per client", "Per-org credit grants", "Manual invoicing", "White-glove onboarding"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckIcon className="h-4 w-4 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </SectionContainer>
      </Section>

      <CTABand />
    </>
  );
}
