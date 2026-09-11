import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { CTABand } from "@/components/home/CTABand";
import { dataCompliance, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Trust",
  description:
    "How OMNIVOX handles data under UK GDPR — controller/processor roles, DPA, DNC, audit logs, recording controls. No SOC 2 theatre.",
};

export default function TrustPage() {
  const { roles, controls, practices } = dataCompliance;

  return (
    <>
      <section className="border-b border-ink-600 bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <p className="kicker">Trust</p>
          <h1 className="display mt-3 max-w-3xl text-4xl text-paper md:text-5xl">
            You stay the controller. We process. The DPA is not a brochure footnote.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">
            UK/EU GDPR processor practices, DNC before dial, recording per org or campaign. We do not claim SOC 2, ISO
            27001, PCI-DSS, SSO/SAML, or enforced company-wide 2FA.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink md:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="border border-stone-300 bg-white p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold">{roles.title}</h2>
            <p className="mt-3 max-w-3xl text-ink-500">{roles.description}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border border-stone-300 p-6">
                <p className="font-semibold">{roles.controller.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-signal-800">{roles.controller.subtitle}</p>
                <ul className="mt-4 space-y-3">
                  {roles.controller.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink-500">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-700" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-ink bg-ink p-6 text-paper">
                <p className="font-semibold">{roles.processor.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-signal-400">{roles.processor.subtitle}</p>
                <ul className="mt-4 space-y-3">
                  {roles.processor.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink-200">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <h2 className="display mt-14 text-2xl">What the platform provides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((c) => (
              <article key={c.title} className="border border-stone-300 bg-white p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 space-y-8">
            {practices.map((p) => (
              <div key={p.title} className="border-b border-stone-300 pb-8 last:border-0">
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-ink-500">{p.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-stone-300 bg-white p-8">
            <h3 className="font-display text-lg font-bold">Need a DPA or security questionnaire?</h3>
            <p className="mt-2 max-w-2xl text-ink-500">
              We provide a Data Processing Agreement at onboarding. For procurement, pilots, or privacy questions, email{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-signal-800">
                {siteConfig.contactEmail}
              </a>
              . Read our <Link href="/privacy" className="font-medium text-signal-800">Privacy Policy</Link> for website
              enquiries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="paper">
                Book a demo
              </Button>
              <Button href={`mailto:${siteConfig.contactEmail}?subject=DPA%20request`} variant="outline" external>
                Request DPA
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
