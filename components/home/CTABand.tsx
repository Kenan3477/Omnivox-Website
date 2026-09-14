import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function CTABand() {
  return (
    <section className="bg-slate-950 border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-white">Start a pilot — £50 free voice credits</h2>
          <p className="text-sm text-slate-400 mt-1">
            Digital is not in that wallet. Powered by {siteConfig.poweredBy}. Sign in at omnivox.vercel.app
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button href="/contact" size="lg">
            Book a demo
          </Button>
          <Button href="/pricing" variant="outline" size="lg">
            Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
