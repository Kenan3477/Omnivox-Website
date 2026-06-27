import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/Accordion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { Starfield } from "@/components/brand/Starfield";

export const metadata: Metadata = {
  title: "For Agencies",
  description:
    "Onboard clients in a day. Grant pilot credits. One telephony stack you control — OMNIVOX AI for agencies.",
};

const benefits = [
  { title: "Onboard clients in a day", description: "Provision org, load contacts, grant credits — agents dialling within hours." },
  { title: "One telephony stack", description: "No per-client Twilio accounts. Manage credits and orgs from one admin view." },
  { title: "Grant pilot credits", description: "Start clients without Stripe. Manual credit grants for every pilot." },
  { title: "Multi-org management", description: "Isolated data, campaigns, and compliance per client organisation." },
];

export default function AgenciesPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Starfield />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Agencies"
            title="One platform for all your clients"
            description="Stop setting up Twilio per client. Grant credits, onboard in a day, control one telephony stack."
            dark
            align="left"
          />
          <Button href="/contact" size="lg">Contact sales</Button>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 80}>
                <div className="glass-card-light p-8 h-full">
                  <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-3 text-slate-600">{b.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200}>
            <ul className="mt-12 grid gap-3 sm:grid-cols-2 max-w-2xl">
              {["£25/agent platform fee", "Per-client credit grants", "Manual invoicing available", "Dedicated onboarding"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckIcon className="h-4 w-4 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
