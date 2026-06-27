"use client";

import { useState } from "react";
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
    <Section>
      <SectionContainer>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
          <SectionHeader
            eyebrow="Product"
            title="Agent workspace"
            description="Preview dial, queues, dispositions — browser-based, no softphone."
            compact
          />
          <div className="flex gap-1 shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active === tab.id
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <BrowserFrame title={active === "work" ? "app.omnivox.ai/work" : "app.omnivox.ai/admin/credits"}>
          <ActiveComponent />
        </BrowserFrame>
      </SectionContainer>
    </Section>
  );
}
