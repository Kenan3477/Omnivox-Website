import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/Accordion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { Starfield } from "@/components/brand/Starfield";

export const metadata: Metadata = {
  title: "Trust & Security",
  description: "OMNIVOX AI security, compliance, DNC tools, audit logs, and recording controls.",
};

const sections = [
  { title: "UK & EU data posture", content: "Designed for UK and European teams. Data processing agreements provided during onboarding." },
  { title: "Recording consent", content: "Recording is configurable per org/campaign. Consent remains your responsibility as data controller." },
  { title: "Role-based access", content: "Admin, Supervisor, and Agent roles with scoped permissions." },
  { title: "Audit trail", content: "Administrative actions and configuration changes are logged." },
  { title: "DNC & compliance", content: "Do-not-call registry, recording policies, and disposition tracking built in." },
];

export default function TrustPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Starfield />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading eyebrow="Trust" title="Built for accountable outbound" dark align="left" />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          {sections.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 80}>
              <div className="border-b border-slate-200 pb-10 mb-10 last:border-0">
                <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
                <p className="mt-3 text-slate-600">{s.content}</p>
              </div>
            </AnimateOnScroll>
          ))}
          <Button href="/contact" size="lg">Book a demo</Button>
        </div>
      </section>
    </>
  );
}
