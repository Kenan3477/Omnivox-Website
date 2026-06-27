import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/Accordion";

const steps = [
  { number: "01", title: "Sign up", description: "Book a demo or start a pilot. We provision your org, agents, and roles same day." },
  { number: "02", title: "Load contacts", description: "Import lists, create campaigns, assign dial methods and scripts." },
  { number: "03", title: "Top up credits", description: "Buy prepaid credits (£50–£500) or get pilot credits granted by admin." },
  { number: "04", title: "Start calling", description: "Agents log in and dial — manual or preview. Inbound uses the same wallet." },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-purple-950" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Onboarding in hours, not weeks"
          description="No Twilio account. No carrier setup. No surprise telecom invoice."
          dark
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 100}>
              <div className="glass-card p-6 h-full">
                <span className="font-bold text-4xl text-cyan-400/40">{step.number}</span>
                <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed text-sm">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
