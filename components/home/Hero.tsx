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

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl w-full">
          {/* OmniCube — centrepiece */}
          <div className="order-1 lg:order-none flex-shrink-0">
            <OmniCube size="lg" />
          </div>

          <div className="order-2 text-center lg:text-left max-w-xl">
            <Wordmark size="hero" className="justify-center lg:justify-start" />

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed text-balance">
              {siteConfig.tagline}
            </p>

            <p className="mt-4 text-sm text-cyan-400/80">
              The dialer for teams who want manual and preview outbound that actually works — with
              transparent per-minute credits instead of telecom bill shock.
            </p>

            <FeaturePills className="mt-8 justify-center lg:justify-start" />

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button href="/contact" size="lg">
                Book a demo
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See pricing
              </Button>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              From £25/agent/month · One credit wallet · No Twilio required
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          Powered by {siteConfig.poweredBy}
        </p>
      </div>
    </section>
  );
}
