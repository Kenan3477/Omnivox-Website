"use client";

export function AgentWorkspaceMockup() {
  return (
    <div className="grid min-h-[420px] grid-cols-12 bg-slate-950 text-slate-200 text-sm">
      {/* Sidebar */}
      <div className="col-span-3 border-r border-white/5 bg-slate-900/80 p-4 hidden sm:block">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">O</div>
          <span className="font-semibold text-white text-xs">Work</span>
        </div>
        <nav className="space-y-1">
          {["Queue", "My contacts", "History"].map((item, i) => (
            <div
              key={item}
              className={`rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-cyan-500/15 text-cyan-300 font-medium" : "text-slate-500"}`}
            >
              {item}
            </div>
          ))}
        </nav>
        <div className="mt-8 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3">
          <p className="text-[10px] uppercase tracking-wider text-amber-400 font-medium">Credits low</p>
          <p className="text-xs text-amber-200/80 mt-1">£24.50 remaining</p>
        </div>
      </div>

      {/* Queue */}
      <div className="col-span-12 sm:col-span-3 border-r border-white/5 p-4 bg-slate-900/40">
        <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium mb-3">Queue · 12</p>
        <div className="space-y-2">
          {[
            { name: "Sarah Mitchell", co: "Acme Ltd", active: true },
            { name: "James Chen", co: "BrightPath", active: false },
            { name: "Emma Walsh", co: "NovaTech", active: false },
          ].map((c) => (
            <div
              key={c.name}
              className={`rounded-xl p-3 border ${c.active ? "border-cyan-500/40 bg-cyan-500/10" : "border-white/5 bg-white/[0.02]"}`}
            >
              <p className={`font-medium text-xs ${c.active ? "text-white" : "text-slate-400"}`}>{c.name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{c.co}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main contact */}
      <div className="col-span-12 sm:col-span-6 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-lg font-semibold text-white">Sarah Mitchell</p>
            <p className="text-sm text-slate-400">Acme Ltd · Director of Ops</p>
            <p className="text-sm text-cyan-400/80 mt-1">+44 7700 900123</p>
          </div>
          <span className="shrink-0 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
            Preview
          </span>
        </div>

        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 mb-5">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-2">Last interaction</p>
          <p className="text-xs text-slate-300 leading-relaxed">Called 3 days ago — left voicemail. Interested in Q2 renewal. Follow up on pricing.</p>
        </div>

        <div className="flex gap-2 mb-5">
          <button type="button" className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 py-3 text-sm font-bold text-slate-900 shadow-glow">
            Dial
          </button>
          <button type="button" className="flex-1 rounded-xl border border-white/15 py-3 text-sm font-medium text-slate-300">
            Skip
          </button>
        </div>

        <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-2">Disposition</p>
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

export function CreditsAdminMockup() {
  return (
    <div className="p-6 md:p-8 bg-slate-50 min-h-[320px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Admin · Call Credits</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">£247.50</p>
        </div>
        <button type="button" className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white">Top up</button>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {["£50", "£100", "£250", "£500"].map((p) => (
          <div key={p} className="rounded-lg border border-slate-200 bg-white py-3 text-center text-sm font-semibold text-slate-700">{p}</div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { t: "Outbound · 12 min", c: "-£0.60" },
          { t: "Inbound · 8 min", c: "-£0.40" },
          { t: "Top-up", c: "+£100.00" },
        ].map((r) => (
          <div key={r.t} className="flex justify-between text-sm py-2 border-b border-slate-100 last:border-0">
            <span className="text-slate-600">{r.t}</span>
            <span className={r.c.startsWith("+") ? "text-emerald-600 font-medium" : "text-slate-500"}>{r.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
