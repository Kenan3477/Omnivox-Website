import { Button } from "@/components/ui/Button";
import { Section, SectionContainer } from "@/components/ui/Section";

export function CTABand() {
  return (
    <Section className="bg-gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark opacity-60" />
      <SectionContainer className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
            Ready to compete on outbound — without enterprise pricing?
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Book a 30-minute demo or start a pilot. We&apos;ll provision your org, grant starter credits, and have your team on preview dial same day.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">Book a demo</Button>
            <Button href="/pricing" variant="outline" size="lg">See pricing</Button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            £50 free call credits for pilot customers · Powered by Quanterae Solutions
          </p>
        </div>
      </SectionContainer>
    </Section>
  );
}
