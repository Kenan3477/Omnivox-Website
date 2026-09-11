import { Hero } from "@/components/home/Hero";
import { DialMethods } from "@/components/home/DialMethods";
import { WallboardModule } from "@/components/home/WallboardModule";
import { ProductSurfaces } from "@/components/home/ProductSurfaces";
import { Comparison } from "@/components/home/Comparison";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { ProofPoints } from "@/components/home/ProofPoints";
import { FAQ } from "@/components/home/FAQ";
import { CTABand } from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DialMethods />
      <WallboardModule />
      <ProductSurfaces />
      <Comparison />
      <PricingTeaser />
      <ProofPoints />
      <FAQ />
      <CTABand />
    </>
  );
}
