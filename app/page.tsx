import { Hero } from "@/components/home/Hero";
import { ProductStage } from "@/components/home/ProductStage";
import { PillarsSection } from "@/components/home/PillarsSection";
import { RivalCompare } from "@/components/home/RivalCompare";
import { PlatformGrid } from "@/components/home/PlatformGrid";
import { UsagePricingSection } from "@/components/home/UsagePricingSection";
import { ComplianceSection } from "@/components/home/ComplianceSection";
import { PricingFAQ } from "@/components/home/PricingFAQ";
import { CTABand } from "@/components/home/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, pageSeo, faqPageJsonLd, softwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: pageSeo.home.title,
  description: pageSeo.home.description,
  path: "/",
  keywords: [
    "OMNIVOX",
    "cloud contact centre",
    "preview dial",
    "progressive dial",
    "WhatsApp contact centre",
    "UK outbound dialer",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/",
            name: pageSeo.home.title,
            description: pageSeo.home.description,
          }),
          softwareApplicationJsonLd(),
          faqPageJsonLd(),
        ]}
      />
      <Hero />
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-4 text-slate-600 leading-relaxed">
          <h2 className="font-display text-2xl font-semibold text-slate-900">What ships today</h2>
          <p>
            OMNIVOX is a UK and EU cloud contact centre in the browser. Agents preview, progressive-dial, or
            power-dial with answering-machine detection. Inbound uses ACD and IVR. The Work Inbox catalog is eight
            channels: Voice, SMS, WhatsApp, Email, Live chat, Facebook, Instagram, and X. WhatsApp is a 24-hour
            customer-care session — not template broadcasts. Floor wallboards include Digital waiting until you enable
            a channel in Admin → Channels. Voice is prepaid at about 5p outbound and 4p inbound. Digital is not in that
            wallet.
          </p>
          <p>
            Predictive Live is waitlist only. We do not claim native mobile, a CRM marketplace, conference, whisper,
            barge, or SOC 2 / ISO / PCI. Login is at omnivox.vercel.app and is IP-whitelisted. The comparison table
            below names CloudTalk, Aircall, and Connex One so you can see where they win and where this stack is
            thinner. Book a demo if you want a same-day pilot with starter credits.
          </p>
        </div>
      </section>
      <ProductStage />
      <PillarsSection />
      <RivalCompare />
      <UsagePricingSection />
      <PlatformGrid />
      <ComplianceSection />
      <PricingFAQ />
      <CTABand />
    </>
  );
}
