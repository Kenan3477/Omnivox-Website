import { comparisonRows, competitorNotes } from "@/lib/constants";

export function Comparison() {
  return (
    <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <p className="kicker">Compare</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-paper md:text-4xl">Fair contrast, not a smear sheet.</h2>
        <p className="mt-4 max-w-2xl text-ink-300">
          CloudTalk and Aircall are prettier, with stronger CRM and mobile. Connex One is omnichannel with live
          predictive — at two to three times the seat. Unlimited plans hide a ~3,000 minute fair-use cap.
        </p>

        <div className="mt-10 overflow-x-auto border border-ink-600">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-ink-900 font-mono text-[10px] uppercase tracking-widest text-ink-400">
              <tr>
                <th className="px-4 py-3 font-medium"> </th>
                <th className="px-4 py-3 font-medium text-signal-300">Omnivox</th>
                <th className="px-4 py-3 font-medium">Typical bundled dialer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700">
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th className="px-4 py-3 font-medium text-ink-200">{row.label}</th>
                  <td className="px-4 py-3 text-paper">{row.omnivox}</td>
                  <td className="px-4 py-3 text-ink-300">{row.typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {competitorNotes.map((c) => (
            <article key={c.name} className="border border-ink-600 bg-panel p-5">
              <h3 className="font-display text-lg font-bold text-paper">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{c.take}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
