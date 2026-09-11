import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { CTABand } from "@/components/home/CTABand";
import { PageSeo } from "@/components/seo/PageSeo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata, pageSeo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: pageSeo.agencies.title,
  description: pageSeo.agencies.description,
  path: "/agencies",
});

const benefits = [
  {
    title: "Multi-org, properly isolated",
    description:
      "Separate users, contacts, campaigns, call data and credit wallets per client. A wallboard can sit on each client floor without mixing numbers.",
  },
  {
    title: "Onboard a client in a day",
    description: "Provision the org, load lists, set dial method, grant pilot credits. Agents dialling the same afternoon.",
  },
  {
    title: "Per-client prepaid wallets",
    description: "Each client burns their own minutes. Stripe top-ups or manual grants. Manual invoicing is possible.",
  },
  {
    title: "£25/seat per client agent",
    description: "Same platform fee as everyone else. No agency surcharge for isolation.",
  },
];

export default function AgenciesPage() {
  return (
    <>
      <PageSeo page="agencies" />
      <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Agencies", href: "/agencies" }]} />
          <p className="kicker">Agencies</p>
          <h1 className="display mt-3 max-w-3xl text-4xl text-paper md:text-5xl">
            One stack. Many client floors. Credits that never mix.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">
            Outbound agencies running preview and power, plus per-client DIDs and inboxes. Same-day onboard. Wallboards
            per client ops room. Per-client channels = that org’s numbers and tokens, not a reseller channel pack.
          </p>
          <Button href="/contact" size="lg" className="mt-8">
            Talk to us
          </Button>
        </div>
      </section>
      <section className="bg-panel py-16">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((b) => (
              <article key={b.title} className="border border-ink-600 bg-ink p-8">
                <h2 className="font-display text-xl font-bold text-paper">{b.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-300">{b.description}</p>
              </article>
            ))}
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {["£25/agent per client", "Per-org credit grants", "Manual invoicing", "White-glove onboarding"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-ink-200">
                <CheckIcon className="h-4 w-4 text-signal-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTABand />
    </>
  );
}
