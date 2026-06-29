import { Hero } from "@/components/home/Hero";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { PlatformGrid } from "@/components/home/PlatformGrid";
import { UsagePricingSection } from "@/components/home/UsagePricingSection";
import { ComplianceSection } from "@/components/home/ComplianceSection";
import { PricingFAQ } from "@/components/home/PricingFAQ";
import { CTABand } from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
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
