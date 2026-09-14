import { CheckIcon, XIcon } from "@/components/ui/Icons";
import { Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { compareFootnote, compareRows, compareVendors, type CompareCell } from "@/lib/product";

function Cell({ cell, highlight }: { cell: CompareCell; highlight: boolean }) {
  if (cell.kind === "text") {
    return <span className={`text-xs ${highlight ? "font-semibold text-slate-900" : "text-slate-600"}`}>{cell.text}</span>;
  }

  const mark =
    cell.kind === "yes" ? (
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
        aria-label="Yes"
      >
        <span aria-hidden="true">
          <CheckIcon className="h-3 w-3" />
        </span>
      </span>
    ) : cell.kind === "no" ? (
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-400"
        aria-label="No"
      >
        <span aria-hidden="true">
          <XIcon className="h-3 w-3" />
        </span>
      </span>
    ) : cell.kind === "waitlist" ? (
      <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
        Waitlist
      </span>
    ) : (
      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
        Limited
      </span>
    );

  return (
    <span className="flex flex-col items-start gap-1">
      {mark}
      {cell.note ? <span className="text-[11px] text-slate-500">{cell.note}</span> : null}
    </span>
  );
}

export function RivalCompare() {
  return (
    <Section id="compare" className="bg-slate-50 border-y border-slate-200">
      <SectionContainer>
        <SectionHeader
          eyebrow="Compare"
          title="Where we win — and where we don't"
          description="CloudTalk and Aircall win native mobile and CRM marketplaces. Connex One is the fuller suite. OMNIVOX wins campaign dialling, prepaid voice, wallboards, and WhatsApp honesty."
        />

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card">
          <table className="w-full min-w-[720px] text-left">
            <caption className="sr-only">OMNIVOX compared with CloudTalk, Aircall, and Connex One</caption>
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Capability</th>
                {compareVendors.map((v) => (
                  <th
                    key={v.id}
                    className={`p-4 text-sm font-bold ${v.highlight ? "text-blue-700" : "text-slate-700"}`}
                  >
                    {v.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.label} className="border-b border-slate-100 last:border-0">
                  <th className="p-4 align-top text-sm font-semibold text-slate-800">
                    {row.label}
                    {row.hint ? <span className="block text-[11px] font-normal text-slate-500 mt-0.5">{row.hint}</span> : null}
                  </th>
                  {row.cells.map((cell, i) => (
                    <td key={`${row.label}-${compareVendors[i].id}`} className={`p-4 align-top ${compareVendors[i].highlight ? "bg-blue-50/40" : ""}`}>
                      <Cell cell={cell} highlight={compareVendors[i].highlight} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500 leading-relaxed">{compareFootnote}</p>
      </SectionContainer>
    </Section>
  );
}
