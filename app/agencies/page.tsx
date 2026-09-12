import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { breadcrumbJsonLd, pageMetadata, pageSeo, webPageJsonLd } from "@/lib/seo";
import { Starfield } from "@/components/brand/Starfield";

export const metadata = pageMetadata({
  title: pageSeo.agencies.title,
  description: pageSeo.agencies.description,
  path: "/agencies",
  keywords: ["outbound dialer for agencies", "multi-org dialer", "agency contact centre"],
});

const benefits = [
  { title: "Onboard clients in a day", description: "Provision org, load contacts, grant credits — agents dialling within hours, not weeks." },
  { title: "One telephony stack", description: "No per-client carrier setup. Manage credits and orgs from a single admin view." },
  { title: "Grant pilot credits", description: "Start clients without payment friction. Manual credit grants for every pilot." },
  { title: "Multi-org management", description: "Isolated data, campaigns, and compliance per client organisation." },
];

export default function AgenciesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/agencies", name: pageSeo.agencies.title, description: pageSeo.agencies.description }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Agencies", path: "/agencies" },
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
              { name: "Agencies", href: "/agencies" },
            ]}
          />
          <SectionHeader
            as="h1"
            eyebrow="Agencies"
            title="One platform for every client you onboard"
            description="Compete with Connex and CloudTalk on capability — win on £25/seat pricing and transparent credits per client."
            dark
            align="left"
          />
          <Button href="/contact" size="lg">Contact sales</Button>
        </SectionContainer>
      </section>

      <Section>
        <SectionContainer>
          <article className="mb-12 max-w-3xl space-y-4 text-slate-600 leading-relaxed">
            <p>
              Agencies lose days setting up a new dialer for each client: carrier accounts, seat licences, and fair-use
              minute pools that do not match part-time or seasonal teams. OMNIVOX is built for that workflow. We
              provision a separate organisation, load contacts, set preview or manual dial, and grant pilot credits so
              agents can call the same day.
            </p>
            <p>
              Each client keeps isolated users, campaigns, recordings, and DNC lists. You still work from one
              telephony stack and one admin view. Pricing stays{" "}
              <a href="/pricing" className="font-medium text-blue-700 hover:text-blue-600">
                £25 per agent per month
              </a>{" "}
              plus prepaid credits — useful when a client runs five seats this month and two the next. Compliance tools
              on the{" "}
              <a href="/trust" className="font-medium text-blue-700 hover:text-blue-600">
                Trust page
              </a>{" "}
              stay available in every org.
            </p>
          </article>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((b) => (
              <article key={b.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                <h2 className="font-display text-xl font-bold text-slate-900">{b.title}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{b.description}</p>
              </article>
            ))}
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {["£25/agent per client", "Per-org credit grants", "Manual invoicing", "White-glove onboarding"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckIcon className="h-4 w-4 text-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>
      </Section>

      <CTABand />
    </>
  );
}
