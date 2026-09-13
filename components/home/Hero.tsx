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
    <section className="relative overflow-hidden bg-slate-950 border-b border-white/5">
      <Starfield />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              <LogoMark className="h-6 w-6" />
              UK / EU contact centre
            </p>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-white text-balance leading-[1.08]">
              Campaigns, queues, and a Work Inbox — in one browser.
            </h1>
            <p className="mt-5 text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Preview, progressive, and power dial with AMD. Inbound ACD. SMS, WhatsApp{" "}
              <span className="text-white">24-hour sessions</span>, email, chat, and social DMs. Floor
              wallboards. Prepaid voice at ~5p outbound / ~4p inbound. Predictive is waitlist only.
            </p>
            <FeaturePills className="mt-6 justify-center lg:justify-start" />

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
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

          <div className="relative lg:min-h-[480px]">
            <div
              className="pointer-events-none absolute left-1/2 top-0 z-0 hidden -translate-x-[20%] -translate-y-[18%] opacity-80 lg:block"
              aria-hidden="true"
            >
              <OmniCube size="lg" />
            </div>
            <div className="hero-product relative z-10 lg:mt-8 lg:mr-8">
              <BrowserFrame title={siteConfig.appWorkHost}>
                <HeroWorkspace />
              </BrowserFrame>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-white/10 bg-white/10 overflow-hidden">
          {trustMetrics.map((m) => (
            <div key={m.label} className="bg-slate-950/80 px-5 py-5 text-center md:text-left">
              <dt className="font-display text-2xl md:text-3xl font-bold text-white">{m.value}</dt>
              <dd className="text-xs text-slate-400 mt-1">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
