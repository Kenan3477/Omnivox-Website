import { Badge } from "@/components/ui/Badge";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FeatureIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { featureGroups } from "@/lib/constants";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";
import { Starfield } from "@/components/brand/Starfield";

const description =
  "Preview dial, manual dial, prepaid credits, campaigns, inbound routing, and compliance — OMNIVOX AI features for outbound sales teams.";

export const metadata = pageMetadata({
  title: "Features",
  description,
  path: "/features",
  keywords: ["preview dial", "manual dial", "cloud dialer features", "call credits", "DNC registry"],
});

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/features", name: "OMNIVOX AI features", description }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
          ]),
        ]}
      />
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950">
        <Starfield />
        <div className="absolute inset-0 bg-mesh-dark" />
        <SectionContainer className="relative z-10">
          <SectionHeader
            as="h1"
            eyebrow="Features"
            title="Everything outbound teams need — nothing they don't"
            description="Preview dial, credit wallet, campaigns, inbound, compliance. Honest availability labels on every feature."
            dark
            align="left"
          />
          <Button href="/contact" size="lg">Book a demo</Button>
        </SectionContainer>
      </section>

      <Section>
        <SectionContainer>
          <div className="space-y-20">
            {featureGroups.map((group, gi) => (
              <AnimateOnScroll key={group.title} delay={gi * 40}>
                <div id={group.id}>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 text-cyan-600 border border-cyan-100">
                      <FeatureIcon name={group.icon as "phone"} className="h-7 w-7" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">{group.title}</h2>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {group.features.map((feature) => (
                      <article
                        key={feature.name}
                        className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:shadow-card-hover hover:border-cyan-200/60"
                      >
                        <div className="mb-3 flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">{feature.name}</h3>
                          <Badge variant={feature.status} />
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionContainer>
      </Section>

      <CTABand />
    </>
  );
}
