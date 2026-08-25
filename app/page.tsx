import { Hero } from "@/components/home/Hero";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { PlatformGrid } from "@/components/home/PlatformGrid";
import { UsagePricingSection } from "@/components/home/UsagePricingSection";
import { ComplianceSection } from "@/components/home/ComplianceSection";
import { PricingFAQ } from "@/components/home/PricingFAQ";
import { CTABand } from "@/components/home/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, faqPageJsonLd, softwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "OMNIVOX AI — Cloud dialer for outbound sales teams",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "OMNIVOX AI",
    "cloud dialer",
    "preview dial",
    "outbound dialer UK",
    "contact centre software",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/",
            name: "OMNIVOX AI — Cloud dialer for outbound sales teams",
            description: siteConfig.description,
          }),
          softwareApplicationJsonLd(),
          faqPageJsonLd(),
        ]}
      />
      <Hero />
      <PillarsSection />
      <ProductShowcase />
      <UsagePricingSection />
      <PlatformGrid />
      <ComplianceSection />
      <PricingFAQ />
      <CTABand />
    </>
  );
}
