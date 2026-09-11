import { proofPoints, whoBuys, whoDoesNotBuy } from "@/lib/constants";

export function ProofPoints() {
  return (
    <section className="border-b border-ink-600 bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <p className="kicker">Proof · anonymised pilots</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-paper md:text-4xl">
          No invented quotes. These are the things that already happened.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {proofPoints.map((p) => (
            <article key={p.label} className="border border-ink-600 bg-ink p-6">
              <p className="font-mono text-2xl tabular text-signal-300">{p.metric}</p>
              <p className="mt-1 font-medium text-paper">{p.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{p.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-bold text-paper">Who buys</h3>
            <ul className="mt-4 space-y-4">
              {whoBuys.map((w) => (
                <li key={w.title}>
                  <p className="font-medium text-paper">{w.title}</p>
                  <p className="mt-1 text-sm text-ink-300">{w.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-paper">Who should not</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-300">
              {whoDoesNotBuy.map((w) => (
                <li key={w} className="border-b border-ink-700 py-2">
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
