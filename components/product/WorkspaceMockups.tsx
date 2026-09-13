export function HeroWorkspace() {
  return (
    <div className="grid min-h-[340px] grid-cols-12 bg-slate-950 text-slate-200 text-sm">
      <div className="col-span-4 border-r border-white/5 bg-slate-900/80 p-4 hidden sm:block">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Q2 Renewal · Preview</p>
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">Live</span>
        </div>
        <div className="space-y-2">
          {[
            { name: "Sarah Mitchell", co: "Acme Ltd", state: "Preview" },
            { name: "James Chen", co: "BrightPath", state: "Queued" },
            { name: "Emma Walsh", co: "NovaTech", active: false, state: "Queued" },
          ].map((c, i) => (
            <div
              key={c.name}
              className={`rounded-xl p-3 border ${i === 0 ? "border-blue-500/40 bg-blue-500/10" : "border-white/5 bg-white/[0.02]"}`}
            >
              <p className={`font-medium text-xs ${i === 0 ? "text-white" : "text-slate-400"}`}>{c.name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                {c.co} · {c.state}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 sm:col-span-8 p-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-lg font-semibold text-white">Sarah Mitchell</p>
            <p className="text-sm text-slate-400">Acme Ltd · Director of Ops</p>
            <p className="text-sm text-blue-300 mt-1">+44 7700 900123</p>
          </div>
          <span className="shrink-0 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
            Preview
          </span>
        </div>

        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 mb-4">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Last interaction</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Called 3 days ago — left voicemail. Q2 renewal. Follow up on pricing.
          </p>
        </div>

        <div className="flex gap-2 mb-4">
          <div className="flex-1 rounded-xl bg-blue-600 py-3 text-center text-sm font-bold text-white">Dial</div>
          <div className="flex-1 rounded-xl border border-white/15 py-3 text-center text-sm font-medium text-slate-300">
            Skip
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {["Callback", "Sale", "Voicemail", "Not interested"].map((d) => (
            <div key={d} className="rounded-lg border border-white/8 bg-white/[0.02] py-2 text-center text-xs text-slate-400">
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AgentWorkspaceMockup() {
  return <HeroWorkspace />;
}

export function CreditsAdminMockup() {
  return (
    <div className="p-5 md:p-6 bg-slate-50 min-h-[240px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Admin · Call Credits</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">£247.50</p>
        </div>
        <button type="button" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          Top up
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {["£50", "£100", "£250", "£500"].map((p) => (
          <div key={p} className="rounded-lg border border-slate-200 bg-white py-3 text-center text-sm font-semibold text-slate-700">
            {p}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { t: "Outbound · 12 min · 5p", c: "-£0.60" },
          { t: "Inbound · 8 min · 4p", c: "-£0.32" },
          { t: "Top-up", c: "+£100.00" },
        ].map((r) => (
          <div key={r.t} className="flex justify-between text-sm py-2 border-b border-slate-100 last:border-0">
            <span className="text-slate-600">{r.t}</span>
            <span className={r.c.startsWith("+") ? "text-emerald-600 font-medium" : "text-slate-500"}>{r.c}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-slate-500">Digital channels are not in this wallet.</p>
    </div>
  );
}
