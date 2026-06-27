import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Omnivox privacy policy — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-navy-900">Privacy Policy</h1>
        <p className="mt-4 text-sm text-navy-500">Last updated: June 2026</p>

        <div className="mt-12 prose prose-navy max-w-none space-y-8 text-navy-600 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Overview</h2>
            <p className="mt-3">
              This Privacy Policy describes how Omnivox (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              collects, uses, and protects personal data when you use our platform and website.
              This is a placeholder policy and should be reviewed by legal counsel before publication.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Data we collect</h2>
            <p className="mt-3">
              We collect information you provide directly (account details, contact lists, call records)
              and technical data necessary to operate the service (usage logs, IP addresses, device information).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">How we use data</h2>
            <p className="mt-3">
              We use your data to provide and improve the Omnivox platform, process telephony services,
              maintain security, and communicate with you about your account.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Your rights</h2>
            <p className="mt-3">
              Under UK GDPR and applicable EU data protection law, you may have rights to access, rectify,
              erase, or restrict processing of your personal data. Contact{" "}
              <a href="mailto:hello@omnivox.co.uk" className="text-accent">hello@omnivox.co.uk</a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-900">Contact</h2>
            <p className="mt-3">
              For privacy-related enquiries, email{" "}
              <a href="mailto:hello@omnivox.co.uk" className="text-accent">hello@omnivox.co.uk</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
