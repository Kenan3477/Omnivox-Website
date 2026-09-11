import { Button } from "@/components/ui/Button";
import { TvBezel } from "@/components/product/TvBezel";
import { WallboardMock } from "@/components/product/WallboardMock";
import { trustMetrics } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-600 bg-ink">
      <div className="mx-auto grid max-w-site gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="kicker">UK/EU cloud contact centre · voice</p>
          <h1 className="display mt-4 text-4xl text-paper sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
            The stack outbound teams actually run.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200">
            Preview, progressive and power dial. Inbound queues and IVR. Custom wallboards on the floor. £25 a seat,
            prepaid minutes, no fair-use fiction.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Book a demo
            </Button>
            <Button href="/wallboards" variant="secondary" size="lg">
              See wallboards
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {trustMetrics.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-400">{m.label}</dt>
                <dd className="mt-1 font-mono text-lg tabular text-amber-300">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <TvBezel caption="Wall TV · Dark Ops · playlist dwell">
          <WallboardMock compact />
        </TvBezel>
      </div>
    </section>
  );
}
