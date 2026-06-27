import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Omnivox terms of service — platform usage terms and conditions.",
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-navy-900">Terms of Service</h1>
        <p className="mt-4 text-sm text-navy-500">Last updated: June 2026</p>

        <div className="mt-12 space-y-8 text-navy-600 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Agreement</h2>
            <p className="mt-3">
              By using OMNIVOX AI, you agree to these Terms of Service. These terms apply to your use of the platform
              operated by Quanterae Solutions. A separate Data Processing Agreement governs how we process personal data on your behalf.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Service description</h2>
            <p className="mt-3">
              Omnivox provides a cloud-based contact centre and outbound dialer platform including
              telephony services, agent workspace, campaign management, and compliance tools.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Billing &amp; credits</h2>
            <p className="mt-3">
              Platform fees are billed per agent per month. Call credits are prepaid and consumed
              based on usage at the rates published on our pricing page. Credits are non-refundable
              unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Acceptable use</h2>
            <p className="mt-3">
              You are responsible for compliance with applicable telemarketing, data protection, and
              recording consent laws. You must not use Omnivox for unlawful calling practices or
              in violation of do-not-call regulations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Contact</h2>
            <p className="mt-3">
              For terms-related enquiries, email{" "}
              <a href="mailto:hello@omnivox.co.uk" className="text-accent">hello@omnivox.co.uk</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
