"use client";

import { useEffect, useState } from "react";

const PLAYLIST = [
  { name: "Operations", dwell: 30 },
  { name: "Agent capacity", dwell: 45 },
  { name: "Campaign", dwell: 60 },
] as const;

function useLondonClock() {
  const [now, setNow] = useState("14:32:08");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tick = () => {
      setNow(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    tick();
    if (reduced) return;
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return now;
}

function Kpi({
  label,
  value,
  hint,
  accent = false,
}: {
  label: string;
  value: string;
  hint?: string;
  accent?: boolean;
}) {
  return (
    <div className="border border-ink-600 bg-ink-900/80 p-3 md:p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">{label}</p>
      <p className={`mt-2 font-mono text-2xl tabular leading-none md:text-3xl ${accent ? "text-signal-400" : "text-paper"}`}>
        {value}
      </p>
      {hint && <p className="mt-1.5 text-[11px] text-ink-400">{hint}</p>}
    </div>
  );
}

export function WallboardMock({ compact = false }: { compact?: boolean }) {
  const clock = useLondonClock();

  return (
    <div className="bg-[#0B0E12] text-paper">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-600 bg-[#0E1218] px-3 py-2.5 md:px-5">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-extrabold tracking-tight">OMNIVOX</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-ink-400 sm:inline">
            Operations · Floor 1 · Manchester
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            {PLAYLIST.map((item, i) => (
              <span
                key={item.name}
                className={`font-mono text-[10px] uppercase tracking-wider ${i === 0 ? "text-signal-400" : "text-ink-400"}`}
              >
                {item.name} {item.dwell}s
                {i < PLAYLIST.length - 1 ? " →" : ""}
              </span>
            ))}
          </div>
          <span className="h-1.5 w-1.5 bg-live tick-live" aria-hidden />
          <span className="font-mono text-sm tabular text-paper">{clock}</span>
        </div>
      </div>

      <div className="relative h-0.5 bg-ink-700">
        <div className="playlist-progress h-full bg-signal-400" />
      </div>

      <div className="grid grid-cols-2 gap-px bg-ink-600 sm:grid-cols-3 lg:grid-cols-5">
        <Kpi label="Live calls" value="14" hint="voice only" accent />
        <Kpi label="Available" value="9" hint="of 23 online" />
        <Kpi label="On call" value="14" hint="0 in ACW" />
        <Kpi label="Occupancy" value="78%" hint="idle 12%" />
        <Kpi label="Queue depth" value="3" hint="inbound +44" />
      </div>

      {!compact && (
        <div className="grid gap-px bg-ink-600 md:grid-cols-2">
          <div className="bg-ink-900 p-4 md:p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">Campaign · Q3 B2B renewals</p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div>
                <p className="text-[11px] text-ink-400">Connection</p>
                <p className="font-mono text-xl tabular text-live">41%</p>
              </div>
              <div>
                <p className="text-[11px] text-ink-400">Sales today</p>
                <p className="font-mono text-xl tabular text-paper">12</p>
              </div>
              <div>
                <p className="text-[11px] text-ink-400">Power ratio</p>
                <p className="font-mono text-xl tabular text-signal-400">1.8</p>
              </div>
              <div>
                <p className="text-[11px] text-ink-400">Inflight</p>
                <p className="font-mono text-xl tabular text-paper">11</p>
              </div>
            </div>
            <p className="mt-4 font-mono text-[11px] text-ink-400">Pacing · Running · Power · AMD gated · Supply 1,842</p>
          </div>
          <div className="bg-ink-900 p-4 md:p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">AMD scoreboard</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="border border-live/30 bg-live/5 p-3">
                <p className="text-[11px] text-ink-300">Human</p>
                <p className="font-mono text-2xl tabular text-live">86</p>
              </div>
              <div className="border border-ink-600 p-3">
                <p className="text-[11px] text-ink-300">Machine</p>
                <p className="font-mono text-2xl tabular text-ink-200">31</p>
              </div>
              <div className="border border-ink-600 p-3">
                <p className="text-[11px] text-ink-300">Unknown</p>
                <p className="font-mono text-2xl tabular text-ink-200">4</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto border-t border-ink-600">
        <table className="w-full min-w-[520px] text-left text-xs">
          <thead className="bg-[#0E1218] font-mono text-[10px] uppercase tracking-widest text-ink-400">
            <tr>
              <th className="px-4 py-2 font-medium">Agent</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">State</th>
              <th className="px-4 py-2 font-medium">Talk</th>
              <th className="px-4 py-2 font-medium">CLI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-700">
            {[
              ["J. Hart", "Available", "Idle", "—", "—"],
              ["A. Rahman", "On call", "Power", "02:14", "+44 161 496 0120"],
              ["M. Cole", "On call", "Preview", "00:47", "+44 113 496 0188"],
              ["S. Okonkwo", "Break", "—", "—", "—"],
            ].map((row) => (
              <tr key={row[0]} className="bg-ink-950/40">
                {row.map((cell) => (
                  <td key={cell} className="px-4 py-2 font-mono tabular text-ink-200">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ink-600 bg-[#0E1218] px-4 py-2.5 font-mono text-[11px] text-ink-300">
        <span className="text-amber-300">Credits remaining · £184.20</span>
        <span>Callbacks due · 7</span>
        <span className="text-signal-400">Theme · Dark Ops</span>
      </div>
    </div>
  );
}

export function PlaylistStory() {
  return (
    <ol className="grid gap-3 md:grid-cols-3">
      {PLAYLIST.map((item, i) => (
        <li key={item.name} className="border border-ink-600 bg-panel p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-signal-400">
            {String(i + 1).padStart(2, "0")} · {item.dwell}s dwell
          </p>
          <p className="mt-2 font-display text-xl font-bold text-paper">{item.name}</p>
          <p className="mt-2 text-sm text-ink-300">
            {i === 0 && "Live calls, occupancy, queue depth, credits. The floor pulse."}
            {i === 1 && "Available, on call, ACW, idle rate. Who can take the next connect."}
            {i === 2 && "Connection rate, AMD, power ratio, inflight, remaining supply."}
          </p>
        </li>
      ))}
    </ol>
  );
}
