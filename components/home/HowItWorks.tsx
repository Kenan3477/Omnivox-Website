import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/Accordion";

const steps = [
  {
    number: "01",
    title: "Sign up",
    description: "Book a 30-minute onboarding call. We provision your organisation, agents, and roles — same day for pilots.",
  },
  {
    number: "02",
    title: "Load contacts",
    description: "Import your contact lists, create campaigns, and assign dial methods. Templates and talk tracks ready to go.",
  },
  {
    number: "03",
    title: "Top up credits",
    description: "Buy prepaid call credits via Stripe (£50 / £100 / £250 / £500) or get pilot credits granted by admin.",
  },
  {
    number: "04",
    title: "Start dialing",
    description: "Agents log into the browser workspace and start manual or preview dialing. No softphone install required.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Onboarding in hours, not weeks"
          description="From first call to first dial — without configuring Twilio, webhooks, or carrier accounts."
          dark
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 100}>
              <div className="relative">
                <span className="font-display text-5xl font-bold text-accent/30">{step.number}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-navy-300 leading-relaxed">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
