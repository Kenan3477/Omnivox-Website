import { StatusLabel } from "@/components/ui/StatusLabel";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/home/CTABand";
import { comingSoon, featureGroups } from "@/lib/constants";
import { PageSeo } from "@/components/seo/PageSeo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata, pageSeo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: pageSeo.features.title,
  description: pageSeo.features.description,
  path: "/features",
  keywords: ["preview dial", "power dial", "AMD", "wallboards", "inbound IVR", "DNC"],
});

export default function FeaturesPage() {
  return (
    <>
      <PageSeo page="features" />
      <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Features", href: "/features" }]} />
          <p className="kicker">Features</p>
          <h1 className="display mt-3 max-w-3xl text-4xl text-paper md:text-5xl">
            Everything a voice floor runs. Labelled honestly.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-300">
            Dialer, inbound, wallboards, data, compliance, credits. Progressive is live. Predictive is waitlist. If a
            card is not labelled Live, do not buy it as if it were.
          </p>
          <Button href="/contact" size="lg" className="mt-8">
            Book a demo
          </Button>
        </div>
      </section>

      <section className="bg-panel py-16 md:py-20">
        <div className="mx-auto max-w-site space-y-20 px-4 sm:px-6 lg:px-8">
          {featureGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <p className="kicker">{group.title}</p>
              <h2 className="display mt-2 text-2xl text-paper md:text-3xl">{group.summary}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.features.map((feature) => (
                  <article key={feature.name} className="border border-ink-600 bg-ink p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-paper">{feature.name}</h3>
                      <StatusLabel status={feature.status} />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-300">{feature.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className="kicker">Waitlist / coming</p>
            <h2 className="display mt-2 text-2xl text-paper">Never in the H1. Listed so procurement is not surprised.</h2>
            <ul className="mt-6 divide-y divide-ink-700 border border-ink-600">
              {comingSoon.map((item) => (
                <li key={item.name} className="grid gap-1 px-5 py-4 md:grid-cols-[220px_1fr]">
                  <span className="font-medium text-paper">{item.name}</span>
                  <span className="text-sm text-ink-300">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
