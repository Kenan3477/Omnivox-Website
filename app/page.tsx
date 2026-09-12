import { Hero } from "@/components/home/Hero";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
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
            name: pageSeo.home.title,
            description: pageSeo.home.description,
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
