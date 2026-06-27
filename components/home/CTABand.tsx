import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function CTABand() {
  return (
    <section className="bg-slate-950 border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg font-bold text-white">Start a pilot — £50 free credits</p>
          <p className="text-sm text-slate-500 mt-0.5">Powered by {siteConfig.poweredBy}</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button href="/contact" size="md">Book a demo</Button>
          <Button href="/pricing" variant="outline" size="md">Pricing</Button>
        </div>
      </div>
    </section>
  );
}
