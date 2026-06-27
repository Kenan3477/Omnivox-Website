import { Button } from "@/components/ui/Button";
import { Starfield } from "@/components/brand/Starfield";
import { OmniCube } from "@/components/brand/OmniCube";
import { Wordmark } from "@/components/brand/Wordmark";
import { FeaturePills } from "@/components/brand/FeaturePills";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <Starfield />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-8 pb-20 md:pt-12 md:pb-28 text-center">
        <OmniCube size="lg" className="mb-4 md:mb-6" />

        <Wordmark size="hero" />

        <p className="mt-5 max-w-2xl text-lg md:text-xl text-slate-200/90 leading-relaxed text-balance font-light">
          {siteConfig.tagline}
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

        <p className="mt-8 text-xs text-slate-500 tracking-wide">
          From £25/agent/month · One credit wallet · Preview dial included
        </p>

        <p className="mt-10 text-sm text-slate-500">
          Powered by <span className="text-cyan-400/80">{siteConfig.poweredBy}</span>
        </p>
      </div>
    </section>
  );
}
