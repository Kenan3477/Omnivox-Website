import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { Comparison } from "@/components/home/Comparison";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { CTABand } from "@/components/home/CTABand";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PillarsSection />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <Comparison />
      <PricingTeaser />
      <FAQ />
      <CTABand />
    </>
  );
}
