import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OMNIVOX and Quanterae Solutions collect, use, and protect personal data under UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="display text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: September 2026 · {siteConfig.poweredBy}</p>

        <div className="mt-12 space-y-10 leading-relaxed text-ink-500">
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Who we are</h2>
            <p className="mt-3">
              OMNIVOX is operated by {siteConfig.poweredBy} (“we”, “us”, “our”). We provide a cloud contact centre and
              agent workspace for business customers. For platform customers, we typically act as a{" "}
              <strong className="text-ink">data processor</strong> — you remain the data controller for your contacts
              and call data. See our{" "}
              <Link href="/trust" className="text-amber-800">
                Trust page
              </Link>{" "}
              for how that works.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">What this policy covers</h2>
            <p className="mt-3">
              This policy explains how we handle personal data when you visit our website, use the site helper, contact
              us, or use OMNIVOX as a customer. Customer contact and call data processed in the platform is governed by
              our Data Processing Agreement (DPA) in addition to this policy.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Data we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-ink">Website &amp; enquiries:</strong> name, email, company, and message content
                when you submit our contact form.
              </li>
              <li>
                <strong className="text-ink">Site helper:</strong> questions you type into the on-site assistant, used
                only to answer from published product facts.
              </li>
              <li>
                <strong className="text-ink">Account data:</strong> usernames, roles, and authentication logs for
                platform users.
              </li>
              <li>
                <strong className="text-ink">Customer-uploaded data:</strong> contact lists, campaign data, dispositions,
                and call metadata you load into the platform.
              </li>
              <li>
                <strong className="text-ink">Call recordings:</strong> where enabled by you, audio recordings of calls
                processed to provide the service.
              </li>
              <li>
                <strong className="text-ink">Technical data:</strong> IP addresses, browser type, and usage logs needed
                to operate and secure the service.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">How we use data</h2>
            <p className="mt-3">We process personal data to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Provide, maintain, and improve the OMNIVOX platform and telephony services</li>
              <li>Respond to demo requests, support enquiries, and account administration</li>
              <li>Answer public product questions via the site helper</li>
              <li>Monitor security, prevent abuse, and maintain audit logs</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
            <p className="mt-3">
              We do not sell personal data. We process customer-uploaded data only on your documented instructions as
              processor, per the DPA.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Lawful basis (UK GDPR)</h2>
            <p className="mt-3">
              For website enquiries we rely on <strong className="text-ink">legitimate interests</strong> and{" "}
              <strong className="text-ink">contract</strong> (responding to your request). For platform services we
              process data as your <strong className="text-ink">processor</strong> under the DPA — you must have a
              lawful basis as controller for the contact and call data you upload.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Subprocessors &amp; transfers</h2>
            <p className="mt-3">
              We use infrastructure and service providers to run the platform (e.g. hosting, telephony, payments).
              Subprocessors are listed in your DPA. Where data is transferred outside the UK/EEA, we use appropriate
              safeguards such as Standard Contractual Clauses where required.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Retention</h2>
            <p className="mt-3">
              Website enquiry data is kept as long as needed to respond and for a reasonable period thereafter. Platform
              data is retained for the life of your contract and deleted or returned per the DPA when you leave. You
              control retention of contact and call data within your organisation policies.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Your rights</h2>
            <p className="mt-3">
              Under UK GDPR you may have rights to access, rectify, erase, restrict, or object to processing, and to
              data portability. If we process data on behalf of your organisation, direct contact data subject requests
              to your employer (the controller) in the first instance. For enquiries about data we control directly
              (e.g. this website), email{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-amber-800">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Security</h2>
            <p className="mt-3">
              We use technical and organisational measures including encrypted connections, access controls, and audit
              logging. We do not claim SOC 2, ISO 27001 or PCI-DSS. Report concerns to {siteConfig.contactEmail}.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
            <p className="mt-3">
              Privacy enquiries:{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-amber-800">
                {siteConfig.contactEmail}
              </a>
              . For platform compliance detail, see{" "}
              <Link href="/trust" className="text-amber-800">
                Trust
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
