import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/Accordion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Trust & Security",
  description:
    "Omnivox security practices, UK/EU data posture, role-based access, audit trails, and compliance controls for sales teams.",
};

const sections = [
  {
    title: "UK & EU data posture",
    content:
      "Omnivox is designed for UK and European sales teams. We process call data, contact records, and interaction history in line with applicable data protection requirements. Specific hosting regions and data processing agreements are provided during onboarding.",
  },
  {
    title: "Recording consent",
    content:
      "Call recording is configurable per organisation and campaign. Omnivox provides the recording capability — obtaining and documenting consent from call participants remains your responsibility as the data controller.",
  },
  {
    title: "Role-based access",
    content:
      "Three roles — Admin, Supervisor, and Agent — with permissions scoped to each role's needs. Admins manage organisations, credits, and compliance settings. Supervisors oversee team activity. Agents access their workspace and assigned contacts.",
  },
  {
    title: "Audit trail",
    content:
      "Platform activity is logged for accountability. Audit logs capture administrative actions, configuration changes, and security-relevant events to support your compliance and internal review processes.",
  },
  {
    title: "IP allowlisting",
    content:
      "Restrict platform access to approved IP addresses. Useful for teams with fixed office locations or VPN requirements who want an additional layer of access control.",
  },
  {
    title: "DNC & compliance tools",
    content:
      "Do-not-call registry management is built into the platform. Combined with recording policies, disposition tracking, and role-based access, Omnivox helps you maintain accountable outbound practices.",
  },
];

export default function TrustPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trust & Security"
            title="Built for accountable outbound"
            description="Security controls, audit trails, and compliance tools — without the enterprise CCaaS complexity."
            dark
            align="left"
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <AnimateOnScroll key={section.title} delay={i * 80}>
                <div className="border-b border-navy-100 pb-12 last:border-0">
                  <h2 className="font-display text-xl font-bold text-navy-900 md:text-2xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-navy-600 leading-relaxed">{section.content}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-surface py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm text-navy-500">
            For detailed security documentation, data processing agreements, or compliance questions,
            contact us during onboarding or via{" "}
            <a href="mailto:hello@omnivox.co.uk" className="text-accent hover:text-accent-dark">
              hello@omnivox.co.uk
            </a>
          </p>
          <Button href="/contact" className="mt-8" size="lg">
            Book a demo
          </Button>
        </div>
      </section>
    </>
  );
}
