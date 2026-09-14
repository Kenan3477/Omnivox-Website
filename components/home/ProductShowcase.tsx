import { BrowserFrame, Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { AgentWorkspaceMockup } from "@/components/product/WorkspaceMockups";
import { siteConfig } from "@/lib/constants";

export function ProductShowcase() {
  return (
    <Section>
      <SectionContainer>
        <SectionHeader
          eyebrow="Product"
          title="Agent workspace"
          description="Preview, progressive, and power from the browser. Agents review each contact, skip or call, and disposition in one flow."
        />
        <figure>
          <BrowserFrame title={siteConfig.appWorkHost}>
            <AgentWorkspaceMockup />
          </BrowserFrame>
          <figcaption className="mt-3 text-sm text-slate-500">
            Illustrative workspace chrome — not a live production screenshot. See{" "}
            <a href="/features" className="font-medium text-blue-700 hover:text-blue-600">
              all features
            </a>
            .
          </figcaption>
        </figure>
      </SectionContainer>
    </Section>
  );
}
