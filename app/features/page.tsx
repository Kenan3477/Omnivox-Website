import { Badge } from "@/components/ui/Badge";
import { FeatureIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { featureGroups } from "@/lib/constants";
import { breadcrumbJsonLd, pageMetadata, pageSeo, webPageJsonLd } from "@/lib/seo";
import { Starfield } from "@/components/brand/Starfield";

export const metadata = pageMetadata({
  title: pageSeo.features.title,
  description: pageSeo.features.description,
  path: "/features",
  keywords: ["preview dial", "manual dial", "cloud dialer features", "call credits", "DNC registry"],
});

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/features", name: pageSeo.features.title, description: pageSeo.features.description }),
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
          <Breadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Features", href: "/features" },
            ]}
          />
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
          <p className="mb-12 max-w-3xl text-slate-600 leading-relaxed">
            OMNIVOX is a browser cloud dialer for UK and EU outbound teams. Manual and preview dial are live today.
            Progressive and predictive auto-dial is on the roadmap. Compare this list with{" "}
            <a href="/pricing" className="font-medium text-blue-700 hover:text-blue-600">
              pricing
            </a>{" "}
            and our{" "}
            <a href="/trust" className="font-medium text-blue-700 hover:text-blue-600">
              trust controls
            </a>{" "}
            before you pilot.
          </p>
          <div className="space-y-20">
            {featureGroups.map((group) => (
              <section key={group.title} id={group.id} aria-labelledby={`${group.id}-heading`}>
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 text-blue-600 border border-blue-100">
                    <FeatureIcon name={group.icon as "phone"} className="h-7 w-7" />
                  </div>
                  <h2 id={`${group.id}-heading`} className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
                    {group.title}
                  </h2>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.features.map((feature) => (
                    <article
                      key={feature.name}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:shadow-card-hover hover:border-blue-200/60"
                    >
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">{feature.name}</h3>
                        <Badge variant={feature.status} />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </SectionContainer>
      </Section>

      <CTABand />
    </>
  );
}
