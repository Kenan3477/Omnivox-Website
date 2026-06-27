import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";
import { dataCompliance, siteConfig } from "@/lib/constants";
import { Starfield } from "@/components/brand/Starfield";

export const metadata: Metadata = {
  title: "Trust & Security",
  description:
    "How OMNIVOX AI handles data under UK GDPR — controller/processor roles, DPA, DNC, audit logs, recording controls, and security practices.",
};

export default function TrustPage() {
  const { roles, controls, practices } = dataCompliance;

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden bg-slate-950">
        <Starfield />
        <div className="absolute inset-0 bg-mesh-dark" />
        <SectionContainer className="relative z-10">
          <SectionHeader
            eyebrow="Trust"
            title="Data protection built for outbound teams"
            description="UK GDPR-aligned processor practices, clear controller responsibilities, and compliance tools in the product — not buried in a PDF."
            dark
            align="left"
          />
        </SectionContainer>
      </section>

      <Section>
        <SectionContainer>
          <AnimateOnScroll>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="font-display text-xl font-bold text-slate-900">{roles.title}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">{roles.description}</p>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-cyan-200 bg-white p-6">
                  <p className="text-sm font-bold text-cyan-800">{roles.controller.label}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">{roles.controller.subtitle}</p>
                  <ul className="mt-4 space-y-3">
                    {roles.controller.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-slate-700">
                        <CheckIcon className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-violet-200 bg-white p-6">
                  <p className="text-sm font-bold text-violet-800">{roles.processor.label}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">{roles.processor.subtitle}</p>
                  <ul className="mt-4 space-y-3">
                    {roles.processor.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-slate-700">
                        <CheckIcon className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={80}>
            <div className="mt-12">
              <SectionHeader
                eyebrow="Platform controls"
                title="What OMNIVOX provides"
                description="Tools to help you meet your obligations as controller — available today, not on a roadmap slide."
                compact
                align="left"
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {controls.map((c) => (
                  <div key={c.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900">{c.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <div className="mt-12 space-y-8">
              <SectionHeader
                eyebrow="Practices"
                title="How we handle your data"
                compact
                align="left"
              />
              {practices.map((p) => (
                <div key={p.title} className="border-b border-slate-200 pb-8 last:border-0">
                  <h3 className="font-display text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed max-w-3xl">{p.content}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={160}>
            <div className="mt-12 rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-8">
              <h3 className="font-display text-lg font-bold text-slate-900">Need a DPA or security questionnaire?</h3>
              <p className="mt-2 text-slate-600 leading-relaxed max-w-2xl">
                We provide a Data Processing Agreement at onboarding. For procurement, pilots, or privacy questions, email{" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-cyan-700 font-medium hover:text-cyan-600">
                  {siteConfig.contactEmail}
                </a>
                . Read our{" "}
                <Link href="/privacy" className="text-cyan-700 font-medium hover:text-cyan-600">
                  Privacy Policy
                </Link>{" "}
                for how we handle website and account enquiries.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" size="md">Book a demo</Button>
                <Button href={`mailto:${siteConfig.contactEmail}?subject=DPA%20request`} variant="outline" size="md" external>
                  Request DPA
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </SectionContainer>
      </Section>

      <CTABand />
    </>
  );
}
