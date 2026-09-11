export function IvrCanvasMock() {
  const nodes = [
    { id: "Hours", x: "8%", y: "18%", note: "Mon–Fri 08:00–18:00" },
    { id: "IVR menu", x: "38%", y: "18%", note: "1 Sales · 2 Support" },
    { id: "Collect", x: "68%", y: "18%", note: "Account number" },
    { id: "Queue", x: "38%", y: "58%", note: "Sales · overflow" },
    { id: "Voicemail", x: "68%", y: "58%", note: "After hours" },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-ink-600 bg-[#0E1218] shadow-raised">
      <div className="flex items-center justify-between border-b border-ink-600 px-4 py-2.5">
        <p className="font-mono text-[11px] text-ink-300">Inbound studio · +44 161 496 0100</p>
        <span className="font-mono text-[10px] uppercase tracking-widest text-live">Live</span>
      </div>
      <div className="relative h-72 bg-[linear-gradient(to_right,rgba(42,50,60,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,50,60,0.35)_1px,transparent_1px)] bg-[size:28px_28px]">
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <line x1="18%" y1="26%" x2="38%" y2="26%" stroke="#6366F1" strokeWidth="1.2" />
          <line x1="48%" y1="26%" x2="68%" y2="26%" stroke="#1E293B" strokeWidth="1.2" />
          <line x1="44%" y1="34%" x2="44%" y2="58%" stroke="#6366F1" strokeWidth="1.2" />
          <line x1="54%" y1="66%" x2="68%" y2="66%" stroke="#1E293B" strokeWidth="1.2" />
        </svg>
        {nodes.map((node) => (
          <div
            key={node.id}
            className="absolute w-40 -translate-x-1/2 border border-ink-600 bg-panel px-3 py-2 shadow-raised"
            style={{ left: node.x, top: node.y }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-signal-400">{node.id}</p>
            <p className="mt-1 text-xs text-ink-200">{node.note}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-ink-600 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-ink-400">
        {["Hours", "IVR", "Collect input", "Play audio", "TTS", "Queue", "Voicemail", "End call"].map((chip) => (
          <span key={chip} className="border border-ink-600 px-2 py-1">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CampaignListMock() {
  const rows = [
    ["Q3 B2B renewals", "Power", "+44 161 496 0120", "Running", "1.8"],
    ["Inbound DID · Manchester", "ACD", "+44 161 496 0100", "Open", "—"],
    ["NHS supplier list", "Preview", "+44 113 496 0188", "Paused", "—"],
    ["Agency · Client Hale", "Progressive", "+44 121 496 0202", "Running", "1.0"],
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-ink-600 bg-panel shadow-raised">
      <div className="flex items-center justify-between border-b border-ink-600 px-4 py-2.5">
        <p className="font-mono text-[11px] text-ink-300">Campaigns</p>
        <span className="font-mono text-[10px] text-ink-400">CLI · hours · retries · recording per campaign</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
            <tr className="border-b border-ink-600">
              <th className="px-4 py-2 font-medium">Name</th>
              <th className="px-4 py-2 font-medium">Dial method</th>
              <th className="px-4 py-2 font-medium">CLI</th>
              <th className="px-4 py-2 font-medium">Monitor</th>
              <th className="px-4 py-2 font-medium">Ratio</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-ink-700 last:border-0">
                <td className="px-4 py-3 text-paper">{row[0]}</td>
                <td className="px-4 py-3 font-mono text-xs text-signal-300">{row[1]}</td>
                <td className="px-4 py-3 font-mono text-xs tabular text-ink-300">{row[2]}</td>
                <td className="px-4 py-3 font-mono text-xs text-live">{row[3]}</td>
                <td className="px-4 py-3 font-mono text-xs tabular text-ink-200">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
