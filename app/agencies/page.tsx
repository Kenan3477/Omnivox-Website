import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/Accordion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "For Agencies",
  description:
    "Onboard clients onto Omnivox in a day. Multi-org management, pilot credits, and one telephony stack you control.",
};

const benefits = [
  {
    title: "Onboard clients in a day",
    description:
      "Provision a new organisation, load contacts, grant pilot credits, and have agents dialling — all within hours, not weeks of telecom setup.",
  },
  {
    title: "One telephony stack you control",
    description:
      "No per-client Twilio accounts. You manage organisations, credits, and inbound allowances from a single admin view.",
  },
  {
    title: "Grant pilot credits per client",
    description:
      "Start clients on a pilot without Stripe. Admin can grant call credits manually and scale to paid top-ups when they're ready.",
  },
  {
    title: "White-label-ready positioning",
    description:
      "Light white-label today with a clear path to deeper branding. Your clients see a professional dialer — you control the relationship.",
  },
  {
    title: "Custom inbound allowances",
    description:
      "Set inbound minute allowances per organisation. 500 minutes included on the platform fee, with fair-use overage from credits.",
  },
  {
    title: "Manual invoicing available",
    description:
      "Agency and custom plans support manual invoicing for clients who prefer consolidated billing over self-serve Stripe top-ups.",
  },
];

const agencyFeatures = [
  "Multi-tenant organisation management",
  "Per-client campaign and contact setup",
  "Supervisor tools across organisations",
  "Audit logs and compliance per org",
  "Dedicated onboarding support",
  "Volume pricing for growing portfolios",
];

export default function AgenciesPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="For Agencies"
              title="One platform for all your clients"
              description="Stop setting up Twilio accounts per client. Omnivox gives agencies a shared telephony stack with per-organisation control."
              dark
              align="left"
            />
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Book a demo
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <AnimateOnScroll key={benefit.title} delay={i * 80}>
                <div className="rounded-2xl border border-navy-100 bg-white p-6 md:p-8 h-full">
                  <h3 className="font-display text-lg font-bold text-navy-900">{benefit.title}</h3>
                  <p className="mt-3 text-sm text-navy-600 leading-relaxed">{benefit.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimateOnScroll>
              <h2 className="font-display text-3xl font-bold text-navy-900">
                How agencies use Omnivox
              </h2>
              <p className="mt-4 text-navy-600 leading-relaxed">
                Whether you run outbound campaigns for multiple clients or onboard sales teams onto
                a shared platform, Omnivox keeps telephony simple. Each client gets their own
                organisation with isolated data, credits, and compliance controls.
              </p>
              <ul className="mt-8 space-y-3">
                {agencyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-navy-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 md:p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400 mb-4">
                  Agency dashboard (illustration)
                </p>
                {[
                  { name: "Client A — Renewal Campaign", agents: 6, credits: "£180.00", status: "Active" },
                  { name: "Client B — New Business", agents: 4, credits: "£52.40", status: "Active" },
                  { name: "Client C — Pilot", agents: 2, credits: "£50.00", status: "Pilot" },
                ].map((client) => (
                  <div key={client.name} className="flex items-center justify-between border-b border-navy-50 py-4 last:border-0">
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{client.name}</p>
                      <p className="text-xs text-navy-500">{client.agents} agents · {client.credits} credits</p>
                    </div>
                    <span className={`text-xs font-medium rounded-full px-2.5 py-1 ${
                      client.status === "Pilot" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"
                    }`}>
                      {client.status}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-900">
            Ready to simplify client onboarding?
          </h2>
          <p className="mt-4 text-navy-600">
            Book a call to discuss multi-org setup, pilot credits, and agency pricing.
          </p>
          <Button href="/contact" className="mt-8" size="lg">
            Contact sales
          </Button>
        </div>
      </section>
    </>
  );
}
