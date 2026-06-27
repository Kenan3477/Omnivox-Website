import { Button } from "@/components/ui/Button";
import { Starfield } from "@/components/brand/Starfield";
import { OmniCube } from "@/components/brand/OmniCube";
import { Wordmark } from "@/components/brand/Wordmark";
import { siteConfig, trustMetrics } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 border-b border-white/5">
      <Starfield />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-12 items-center">
          {/* Left: brand */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <OmniCube size="md" className="lg:scale-90 lg:origin-left" />
          </div>

          {/* Right: copy + actions */}
          <div>
            <Wordmark size="lg" className="justify-center lg:justify-start" />
            <p className="mt-4 text-base text-slate-300 leading-snug max-w-lg mx-auto lg:mx-0">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm text-slate-500 max-w-lg mx-auto lg:mx-0">
              Preview &amp; manual outbound · £25/seat · prepaid credits · platform-managed telephony
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button href="/contact" size="md">Book a demo</Button>
              <Button href="/pricing" variant="outline" size="md">See pricing</Button>
              <Button href={siteConfig.appLoginUrl} variant="ghost" size="md" external>
                Sign in
              </Button>
            </div>
          </div>
        </div>

        {/* Inline stats — no separate band */}
        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px rounded-lg border border-white/10 bg-white/10 overflow-hidden">
          {trustMetrics.map((m) => (
            <div key={m.label} className="bg-slate-950/80 px-4 py-3 text-center md:text-left md:px-5">
              <dt className="font-display text-lg md:text-xl font-bold text-white">{m.value}</dt>
              <dd className="text-[11px] text-slate-500 mt-0.5">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
