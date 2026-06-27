import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateOnScroll>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-navy-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Ready for onboarding — pilot-proven manual &amp; preview dialing
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Outbound sales calling — without the telecom stack.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-200 md:text-xl">
              Omnivox gives your team a modern agent workspace, platform-managed phone numbers,
              and prepaid call credits. Manual and preview dialing that pilots already trust.
              Inbound included. Compliance built in.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Book a demo
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See how credits work
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <p className="mt-6 text-sm text-navy-400">
              No Twilio account required · From £59/agent/month · 500 inbound minutes included
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={500}>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl shadow-black/20">
              <div className="rounded-xl bg-navy-800 overflow-hidden">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="ml-2 text-xs text-navy-400">Omnivox — Agent Workspace</span>
                </div>
                <div className="grid md:grid-cols-3 gap-px bg-white/5">
                  <div className="bg-navy-800 p-4 md:col-span-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-400 mb-3">Queue</p>
                    <div className="space-y-2">
                      {["Sarah Mitchell — Acme Ltd", "James Chen — BrightPath", "Emma Walsh — NovaTech"].map((name, i) => (
                        <div key={name} className={`rounded-lg p-3 text-sm ${i === 0 ? "bg-accent/20 border border-accent/30 text-white" : "bg-white/5 text-navy-300"}`}>
                          <p className="font-medium">{name.split(" — ")[0]}</p>
                          <p className="text-xs text-navy-400 mt-0.5">{name.split(" — ")[1]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-navy-800 p-4 md:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-white font-semibold">Sarah Mitchell</p>
                        <p className="text-sm text-navy-400">Acme Ltd · +44 7700 900123</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">Preview dial</span>
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 mb-4">
                      <p className="text-xs text-navy-400 mb-2">Last interaction</p>
                      <p className="text-sm text-navy-200">Called 3 days ago — Left voicemail. Interested in Q2 renewal.</p>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" className="flex-1 rounded-lg bg-accent py-2.5 text-sm font-semibold text-white">Dial</button>
                      <button type="button" className="flex-1 rounded-lg border border-white/20 py-2.5 text-sm font-medium text-navy-300">Skip</button>
                      <button type="button" className="rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-navy-300">Notes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
