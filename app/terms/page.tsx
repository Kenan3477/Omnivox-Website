import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { breadcrumbJsonLd, pageMetadata, pageSeo, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: pageSeo.terms.title,
  description: pageSeo.terms.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="py-20 md:py-28">
      <JsonLd
        data={[
          webPageJsonLd({ path: "/terms", name: pageSeo.terms.title, description: pageSeo.terms.description }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Terms of Service", path: "/terms" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <Breadcrumbs
          light
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Terms of Service", href: "/terms" },
          ]}
        />
        <h1 className="font-display text-4xl font-bold text-navy-900">Terms of Service</h1>
        <p className="mt-4 text-sm text-navy-500">
          Last updated: <time dateTime="2026-06-01">June 2026</time>
        </p>

        <div className="mt-12 space-y-8 text-navy-600 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Agreement</h2>
            <p className="mt-3">
              By using OMNIVOX AI, you agree to these Terms of Service. These terms apply to your use of the platform
              operated by Quanterae Solutions. A separate Data Processing Agreement governs how we process personal data on your behalf.
              See the <Link href="/privacy" className="text-cyan-700 hover:text-cyan-600">Privacy Policy</Link> and{" "}
              <Link href="/trust" className="text-cyan-700 hover:text-cyan-600">Trust page</Link> for data roles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Service description</h2>
            <p className="mt-3">
              OMNIVOX AI provides a cloud-based contact centre and outbound dialer including platform-managed telephony,
              a browser agent workspace, campaign management, prepaid call credits, and compliance tools such as DNC
              lists and audit logs. Feature availability is listed on the{" "}
              <Link href="/features" className="text-cyan-700 hover:text-cyan-600">features page</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Billing &amp; credits</h2>
            <p className="mt-3">
              Platform fees are billed per agent per month at the rates on our{" "}
              <Link href="/pricing" className="text-cyan-700 hover:text-cyan-600">pricing page</Link>. Call credits are
              prepaid and consumed on connected minutes. Credits are non-refundable unless otherwise agreed in writing.
              Optional seat plus credit bundles may be quoted separately.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Acceptable use</h2>
            <p className="mt-3">
              You are responsible for compliance with applicable telemarketing, data protection, and
              recording consent laws, including PECR and TPS/CTPS where they apply. You must not use OMNIVOX AI for
              unlawful calling or in violation of do-not-call regulations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Contact</h2>
            <p className="mt-3">
              For terms-related enquiries, email{" "}
              <a href="mailto:hello@omnivox.co.uk" className="text-cyan-700 hover:text-cyan-600">hello@omnivox.co.uk</a>{" "}
              or use the <Link href="/contact" className="text-cyan-700 hover:text-cyan-600">contact form</Link>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
