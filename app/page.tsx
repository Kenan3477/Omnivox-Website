import { Hero } from "@/components/home/Hero";
import { ValuePillars } from "@/components/home/ValuePillars";
import { ProductMockups } from "@/components/home/ProductMockups";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Comparison } from "@/components/home/Comparison";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <ProductMockups />
      <HowItWorks />
      <Comparison />
      <FAQ />
    </>
  );
}
