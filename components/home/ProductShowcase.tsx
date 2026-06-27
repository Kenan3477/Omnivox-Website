"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BrowserFrame, Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { AgentWorkspaceMockup, CreditsAdminMockup } from "@/components/product/WorkspaceMockups";

const tabs = [
  { id: "work", label: "Agent Work", component: AgentWorkspaceMockup },
  { id: "credits", label: "Call Credits", component: CreditsAdminMockup },
];

export function ProductShowcase() {
  const [active, setActive] = useState("work");
  const ActiveComponent = tabs.find((t) => t.id === active)?.component ?? AgentWorkspaceMockup;

  return (
    <Section className="bg-slate-50">
      <SectionContainer>
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Product"
            title="A workspace your agents open — not fight"
            description="Browser-based Work surface with preview dial, live queues, dispositions, and credit visibility. No softphone install."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === tab.id
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <BrowserFrame title={active === "work" ? "app.omnivox.ai/work" : "app.omnivox.ai/admin/credits"}>
            <ActiveComponent />
          </BrowserFrame>
        </AnimateOnScroll>
      </SectionContainer>
    </Section>
  );
}
