import { Button } from "@/components/ui/Button";
import { Starfield } from "@/components/brand/Starfield";
import { OmniCube } from "@/components/brand/OmniCube";
import { LogoMark } from "@/components/brand/Wordmark";
import { FeaturePills } from "@/components/brand/FeaturePills";
import { BrowserFrame } from "@/components/ui/Section";
import { HeroWorkspace } from "@/components/product/WorkspaceMockups";
import { siteConfig, trustMetrics } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <Starfield />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-20 lg:pt-28">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-blue-200/80">
              <LogoMark className="h-6 w-6" />
              UK / EU contact centre
            </p>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] font-semibold tracking-tight text-white text-balance leading-[1.07]">
              Campaigns, queues, and a Work Inbox — in one browser.
            </h1>
            <p className="mt-6 text-base md:text-[1.05rem] text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Preview, progressive, and power with AMD. WhatsApp as a 24-hour session. Floor
              wallboards. Prepaid voice at ~5p outbound / ~4p inbound.
            </p>
            <FeaturePills className="mt-7 justify-center lg:justify-start" />

            <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button href="/contact" size="lg">
                Book a demo
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See pricing
              </Button>
              <Button href={siteConfig.appLoginUrl} variant="ghost" size="lg" external>
                Sign in
              </Button>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="hidden lg:block -mb-24">
              <OmniCube size="lg" />
            </div>
            <div className="relative z-10 w-full max-w-xl">
              <BrowserFrame title={siteConfig.appWorkHost} tone="dark">
                <HeroWorkspace />
              </BrowserFrame>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
          {trustMetrics.map((m) => (
            <div
              key={m.label}
              className="px-0 py-6 md:px-6 md:first:pl-0 border-white/10 md:border-l md:first:border-l-0"
            >
              <dt className="font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight text-white">
                {m.value}
              </dt>
              <dd className="text-xs text-slate-500 mt-1 tracking-wide">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
