import { Hero } from "@/components/home/Hero";
import { DialMethods } from "@/components/home/DialMethods";
import { WallboardModule } from "@/components/home/WallboardModule";
import { ProductSurfaces } from "@/components/home/ProductSurfaces";
import { Comparison } from "@/components/home/Comparison";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { ProofPoints } from "@/components/home/ProofPoints";
import { FAQ } from "@/components/home/FAQ";
import { CTABand } from "@/components/home/CTABand";
import { PageSeo } from "@/components/seo/PageSeo";
import { pageMetadata, pageSeo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: pageSeo.home.title,
  description: pageSeo.home.description,
  path: "/",
  keywords: [
    "OMNIVOX",
    "cloud contact centre",
    "preview dial",
    "power dial",
    "outbound dialer UK",
    "wallboards",
  ],
});

export default function HomePage() {
  return (
    <>
      <PageSeo page="home" includeApp includeFaq />
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
