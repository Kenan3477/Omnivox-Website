export function WorkspaceMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-ink-600 bg-panel shadow-raised">
      <div className="flex items-center justify-between border-b border-ink-600 bg-ink-900 px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-ink-500" />
          <span className="h-2 w-2 rounded-full bg-ink-500" />
          <span className="h-2 w-2 rounded-full bg-ink-500" />
        </div>
        <p className="font-mono text-[11px] text-ink-400">work · agent workspace</p>
        <span className="font-mono text-[10px] text-live">Available</span>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)_220px]">
        <div className="border-b border-ink-600 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between border-b border-ink-600 px-3 py-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">Work queue</p>
            <span className="font-mono text-[10px] text-signal-400">12 queued</span>
          </div>
          <ul className="divide-y divide-ink-700 text-sm">
            {[
              ["Sarah Mitchell", "Acme Ltd", "Queued", "Preview"],
              ["James Chen", "BrightPath", "Allocated", "Power"],
              ["Emma Walsh", "NovaTech", "Queued", "Progressive"],
              ["Owen Reid", "Hale & Co", "Outcomed", "Manual"],
            ].map(([name, firm, state, method]) => (
              <li key={name} className="flex items-center justify-between gap-2 px-3 py-2.5">
                <div>
                  <p className="text-paper">{name}</p>
                  <p className="text-[11px] text-ink-400">{firm}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase text-ink-300">{state}</p>
                  <p className="font-mono text-[10px] text-signal-400/80">{method}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b border-ink-600 p-4 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">Contact</p>
          <p className="mt-2 font-display text-xl font-bold text-paper">Sarah Mitchell</p>
          <p className="text-sm text-ink-300">Acme Ltd · Director of Ops</p>
          <p className="mt-2 font-mono text-sm tabular text-signal-300">+44 7700 900123</p>
          <p className="mt-4 text-xs leading-relaxed text-ink-300">
            Last interaction · called 3 days ago, left voicemail. Interested in Q2 renewal. Follow up on pricing.
          </p>
          <div className="mt-4 rounded-md border border-ink-600 bg-ink p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">Talk track</p>
            <p className="mt-1 text-xs text-ink-200">Confirm decision window. Offer callback if procurement is in the room.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {["Callback", "Sale", "Voicemail", "Not interested"].map((d) => (
              <span key={d} className="border border-ink-600 px-2 py-1 font-mono text-[10px] uppercase text-ink-200">
                {d}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-ink-900 p-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">Softphone</p>
          <p className="mt-3 font-mono text-lg tabular text-paper">00:47</p>
          <p className="text-[11px] text-live">Connected · human</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Mute", "Hold", "Keypad", "Rec", "Skip", "Dial"].map((ctrl) => (
              <span
                key={ctrl}
                className="border border-ink-600 bg-panel py-2 text-center font-mono text-[10px] uppercase text-ink-200"
              >
                {ctrl}
              </span>
            ))}
          </div>
          <p className="mt-4 border border-amber-400/30 bg-amber-400/10 px-2 py-1.5 font-mono text-[10px] text-amber-200">
            Credits low · £24.50 remaining
          </p>
        </div>
      </div>
    </div>
  );
}
