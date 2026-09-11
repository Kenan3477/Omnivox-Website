import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "OMNIVOX terms of service — platform usage terms and conditions.",
};

export default function TermsPage() {
  return (
    <section className="bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="display text-4xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: September 2026</p>

        <div className="mt-12 space-y-8 leading-relaxed text-ink-500">
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Agreement</h2>
            <p className="mt-3">
              By using OMNIVOX, you agree to these Terms of Service. These terms apply to your use of the platform
              operated by {siteConfig.poweredBy}. A separate Data Processing Agreement governs how we process personal
              data on your behalf.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Service description</h2>
            <p className="mt-3">
              Omnivox provides a cloud contact centre for outbound sales and inbound voice, including platform-managed
              telephony, an agent workspace, campaign management, inbound ACD/IVR, custom wallboards, and compliance
              tools. Capabilities labelled Waitlist or Coming on the website are not part of the live service.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Billing &amp; credits</h2>
            <p className="mt-3">
              Platform fees are billed per agent per month. Call credits are prepaid and consumed based on usage at the
              rates published on our pricing page. Credits are non-refundable unless otherwise agreed in writing.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Acceptable use</h2>
            <p className="mt-3">
              You are responsible for compliance with applicable telemarketing, data protection, and recording consent
              laws, including PECR and TPS/CTPS. You must not use Omnivox for unlawful calling practices or in violation
              of do-not-call regulations.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
            <p className="mt-3">
              For terms-related enquiries, email{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-signal-800">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
