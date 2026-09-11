import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function CTABand() {
  return (
    <section className="bg-amber-400 py-14 text-ink md:py-16">
      <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/70">Same-day pilot</p>
          <h2 className="display mt-2 text-3xl md:text-4xl">£50 credits. White-glove. Agents dialling this afternoon.</h2>
          <p className="mt-2 max-w-xl text-ink/80">
            Qualified outbound and inbound voice teams. Email {siteConfig.contactEmail} if the form is too slow.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="paper" size="lg">
            Start a pilot
          </Button>
          <Button href={siteConfig.appLoginUrl} variant="ghost" size="lg" external className="text-ink hover:bg-ink/10 hover:text-ink">
            Sign in
          </Button>
        </div>
      </div>
    </section>
  );
}
