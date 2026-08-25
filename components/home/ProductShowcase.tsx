import { BrowserFrame, Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { AgentWorkspaceMockup } from "@/components/product/WorkspaceMockups";

export function ProductShowcase() {
  return (
    <Section>
      <SectionContainer>
        <SectionHeader
          eyebrow="Product"
          title="Agent workspace"
          description="Preview dial, queues, dispositions — browser-based, no softphone. Agents review each contact, skip or call, and disposition in one flow."
          compact
        />
        <figure>
          <BrowserFrame title="app.omnivox.ai/work">
            <AgentWorkspaceMockup />
          </BrowserFrame>
          <figcaption className="mt-3 text-sm text-slate-500">
            The browser workspace used for preview dial: live queue, contact card, and dispositions. See{" "}
            <a href="/features" className="font-medium text-cyan-700 hover:text-cyan-600">
              all dialing features
            </a>
            .
          </figcaption>
        </figure>
      </SectionContainer>
    </Section>
  );
}
