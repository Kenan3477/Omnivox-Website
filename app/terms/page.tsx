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
    <article className="py-20 md:py-28 bg-slate-50">
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
        <h1 className="font-display text-4xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-4 text-sm text-slate-500">
          Last updated: <time dateTime="2026-09-15">September 2026</time>
        </p>
        <p className="mt-6 text-slate-600 leading-relaxed">
          These terms explain how you may use OMNIVOX, the cloud contact centre operated by Quanterae Solutions.
          They sit alongside the{" "}
          <Link href="/privacy" className="text-blue-700 hover:text-blue-600">
            Privacy Policy
          </Link>{" "}
          and, for paying customers, a Data Processing Agreement. If you need a copy of the DPA before you sign, email{" "}
          <a href="mailto:hello@omnivox.co.uk" className="text-blue-700 hover:text-blue-600">
            hello@omnivox.co.uk
          </a>
          .
        </p>

        <div className="mt-12 space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Agreement</h2>
            <p className="mt-3">
              By creating an organisation, signing in, or asking us to provision a pilot, you agree to these terms. If
              you use OMNIVOX on behalf of a company, you confirm you have authority to bind that company. A separate
              Data Processing Agreement governs how we process personal data on your documented instructions. See the{" "}
              <Link href="/trust" className="text-blue-700 hover:text-blue-600">
                Trust page
              </Link>{" "}
              for controller and processor roles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Service description</h2>
            <p className="mt-3">
              OMNIVOX is a browser contact centre: platform-managed Twilio voice, campaign lists, inbound ACD and IVR,
              prepaid Call Credits, floor wallboards, and a Work Inbox whose catalog includes SMS, WhatsApp (24-hour
              customer-care sessions), email, live chat, and Facebook, Instagram, and X DMs. Catalog live does not mean
              every organisation has those channels enabled — that is Admin → Channels. Predictive Live is waitlist
              only. We do not provide native iOS or Android apps, a CRM marketplace, conference, whisper, or barge, or
              claimed SOC 2, ISO, or PCI certifications. Feature status is listed on the{" "}
              <Link href="/features" className="text-blue-700 hover:text-blue-600">
                features page
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Accounts and access</h2>
            <p className="mt-3">
              Login is at omnivox.vercel.app and is IP-whitelisted. You must keep credentials confidential, tell us
              promptly if access is compromised, and only grant roles (Admin, Supervisor, Agent) that match how your
              team works. You are responsible for activity under your organisation, including lists you upload and
              calls your agents place.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Billing and credits</h2>
            <p className="mt-3">
              Platform fees are billed per agent per month at the rates on our{" "}
              <Link href="/pricing" className="text-blue-700 hover:text-blue-600">
                pricing page
              </Link>{" "}
              (£25 per seat as current sales policy). Voice minutes use prepaid Call Credits: about 5p per connected
              outbound minute and 4p per connected inbound minute, with a one-minute minimum. SMS, WhatsApp, email,
              chat, and social DMs are not deducted from that wallet. Credits are consumed as connected voice minutes
              and are non-refundable unless we agree otherwise in writing. Optional seat plus credit bundles may be
              quoted separately; they remain metered in Admin → Call Credits.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Acceptable use</h2>
            <p className="mt-3">
              You remain the data controller for your contacts, campaigns, and call data. You must comply with
              applicable telemarketing, data protection, and recording-consent law, including UK GDPR, PECR, and
              TPS/CTPS where they apply. You must not use OMNIVOX for unlawful calling, to evade do-not-call rules, to
              send WhatsApp template broadcasts (we do not sell an HSM catalog), or to upload data you have no right to
              process. We may suspend an organisation that we reasonably believe is abusing the telephony stack or
              these terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Recordings and exports</h2>
            <p className="mt-3">
              Call recording can be enabled per organisation or campaign. Announcements, lawful basis, and retention
              for your leads stay your responsibility. We provide audit logs, DNC lists, and exports to support those
              duties. We process that data only to deliver the service and as described in the DPA.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Availability</h2>
            <p className="mt-3">
              We aim to keep the platform available for UK and EU business hours, but these terms do not invent an
              uptime SLA, compensation schedule, or on-prem deployment. Telephony also depends on Twilio and the public
              internet. Planned maintenance will be communicated where practical.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Liability</h2>
            <p className="mt-3">
              OMNIVOX is provided as a hosted operations tool. We are not your telecoms lawyer, and we are not liable
              for fines arising from how you call, record, or message contacts. Nothing in these terms excludes
              liability that cannot be excluded under applicable law. For commercial claims that can be limited, our
              aggregate liability in a twelve-month period is limited to the platform fees you paid us in that period.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Changes and termination</h2>
            <p className="mt-3">
              We may update these terms; the date at the top of this page is the latest version. We may stop providing
              a waitlist feature or a catalog channel with notice. You may stop using the service at any time; prepaid
              credits are not automatically refunded. After termination we delete or return platform data as the DPA
              requires.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of England and Wales. The courts of England and Wales have exclusive
              jurisdiction, except that either party may still seek injunctive relief where a court allows it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Contact</h2>
            <p className="mt-3">
              For terms-related enquiries, email{" "}
              <a href="mailto:hello@omnivox.co.uk" className="text-blue-700 hover:text-blue-600">
                hello@omnivox.co.uk
              </a>{" "}
              or use the{" "}
              <Link href="/contact" className="text-blue-700 hover:text-blue-600">
                contact form
              </Link>
              . OMNIVOX is operated by Quanterae Solutions.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
