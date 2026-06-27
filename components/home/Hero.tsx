import { Button } from "@/components/ui/Button";
import { Starfield } from "@/components/brand/Starfield";
import { OmniCube } from "@/components/brand/OmniCube";
import { Wordmark } from "@/components/brand/Wordmark";
import { FeaturePills } from "@/components/brand/FeaturePills";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex flex-col overflow-hidden bg-slate-950">
      <Starfield />
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
        <OmniCube size="lg" className="mb-2 md:mb-4" />

        <Wordmark size="hero" />

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300/95 leading-relaxed text-balance font-light">
          {siteConfig.tagline}
        </p>

        <p className="mt-3 max-w-xl text-sm md:text-base text-slate-500">
          The outbound dialer for teams who want preview dial that works — at a fraction of legacy per-seat pricing.
        </p>

        <FeaturePills className="mt-8 md:mt-10" />

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Book a demo
          </Button>
          <Button href="/pricing" variant="outline" size="lg">
            See pricing
          </Button>
        </div>

        <p className="mt-8 text-xs text-slate-600">
          Powered by {siteConfig.poweredBy}
        </p>
      </div>
    </section>
  );
}
