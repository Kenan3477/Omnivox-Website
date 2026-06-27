import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OMNIVOX AI and Quanterae Solutions collect, use, and protect personal data under UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: June 2026 · {siteConfig.poweredBy}</p>

        <div className="mt-12 space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Who we are</h2>
            <p className="mt-3">
              OMNIVOX AI is operated by {siteConfig.poweredBy} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
              We provide a cloud dialer and agent workspace for business customers. For platform customers, we typically act as a{" "}
              <strong className="text-slate-800">data processor</strong> — you remain the data controller for your contacts and call data.
              See our <Link href="/trust" className="text-cyan-600 hover:text-cyan-500">Trust page</Link> for how that works.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">What this policy covers</h2>
            <p className="mt-3">
              This policy explains how we handle personal data when you visit our website, contact us, or use OMNIVOX AI as a customer.
              Customer contact and call data processed in the dialer is governed by our Data Processing Agreement (DPA) in addition to this policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Data we collect</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><strong className="text-slate-800">Website &amp; enquiries:</strong> name, email, company, and message content when you submit our contact form.</li>
              <li><strong className="text-slate-800">Account data:</strong> usernames, roles, and authentication logs for platform users.</li>
              <li><strong className="text-slate-800">Customer-uploaded data:</strong> contact lists, campaign data, dispositions, and call metadata you load into the platform.</li>
              <li><strong className="text-slate-800">Call recordings:</strong> where enabled by you, audio recordings of calls processed to provide the service.</li>
              <li><strong className="text-slate-800">Technical data:</strong> IP addresses, browser type, and usage logs needed to operate and secure the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">How we use data</h2>
            <p className="mt-3">We process personal data to:</p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Provide, maintain, and improve the OMNIVOX AI platform and telephony services</li>
              <li>Respond to demo requests, support enquiries, and account administration</li>
              <li>Monitor security, prevent abuse, and maintain audit logs</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
            <p className="mt-3">
              We do not sell personal data. We process customer-uploaded data only on your documented instructions as processor, per the DPA.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Lawful basis (UK GDPR)</h2>
            <p className="mt-3">
              For website enquiries we rely on <strong className="text-slate-800">legitimate interests</strong> and{" "}
              <strong className="text-slate-800">contract</strong> (responding to your request). For platform services we process data as your{" "}
              <strong className="text-slate-800">processor</strong> under the DPA — you must have a lawful basis as controller for the contact and call data you upload.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Subprocessors &amp; transfers</h2>
            <p className="mt-3">
              We use infrastructure and service providers to run the platform (e.g. hosting, telephony, payments). Subprocessors are listed in your DPA.
              Where data is transferred outside the UK/EEA, we use appropriate safeguards such as Standard Contractual Clauses where required.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Retention</h2>
            <p className="mt-3">
              Website enquiry data is kept as long as needed to respond and for a reasonable period thereafter. Platform data is retained for the life of your
              contract and deleted or returned per the DPA when you leave. You control retention of contact and call data within your organisation policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Your rights</h2>
            <p className="mt-3">
              Under UK GDPR you may have rights to access, rectify, erase, restrict, or object to processing, and to data portability.
              If we process data on behalf of your organisation, direct contact data subject requests to your employer (the controller) in the first instance.
              For enquiries about data we control directly (e.g. this website), email{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-cyan-600 hover:text-cyan-500">{siteConfig.contactEmail}</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Security</h2>
            <p className="mt-3">
              We use technical and organisational measures including encrypted connections, access controls, and audit logging.
              No system is perfectly secure — report concerns to {siteConfig.contactEmail}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-slate-900">Contact</h2>
            <p className="mt-3">
              Privacy enquiries:{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-cyan-600 hover:text-cyan-500">{siteConfig.contactEmail}</a>.
              {" "}For platform compliance detail, see <Link href="/trust" className="text-cyan-600 hover:text-cyan-500">Trust &amp; Security</Link>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
