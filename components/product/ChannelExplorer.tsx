"use client";

import { useState } from "react";
import { channelCatalog, type ChannelId } from "@/lib/channels";

const TILE_ORDER: ChannelId[] = [
  "voice",
  "sms",
  "whatsapp",
  "chat",
  "email",
  "facebook",
  "instagram",
  "x",
];

export function ChannelExplorer() {
  const [selectedId, setSelectedId] = useState<ChannelId>("whatsapp");
  const [exampleConfigured, setExampleConfigured] = useState(false);
  const selected = channelCatalog.find((c) => c.id === selectedId) ?? channelCatalog[0];
  const orgReady = exampleConfigured;

  return (
    <div className="rounded-lg border border-ink-600 bg-panel shadow-raised">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-600 bg-ink-900 px-4 py-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">Admin → Channels</p>
          <p className="mt-0.5 font-display text-lg font-bold text-paper">Channel Types</p>
        </div>
        <label className="flex cursor-pointer items-center gap-2 font-mono text-[11px] text-ink-300">
          <input
            type="checkbox"
            checked={exampleConfigured}
            onChange={(e) => setExampleConfigured(e.target.checked)}
            className="accent-cta-500"
          />
          Example org with assets configured
        </label>
      </div>

      <div className="grid gap-px bg-ink-600 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="bg-ink p-3 sm:p-4">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-400">4 × 2 · catalog status</p>
          <div className="grid grid-cols-2 gap-2 min-[480px]:grid-cols-4">
            {TILE_ORDER.map((id) => {
              const ch = channelCatalog.find((c) => c.id === id)!;
              const active = id === selectedId;
              const ready = exampleConfigured;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedId(id)}
                  className={`min-h-[5.75rem] border p-2.5 text-left transition-colors ${
                    active
                      ? "border-cta-500 bg-cta-500/10"
                      : "border-ink-600 bg-panel hover:border-ink-400"
                  }`}
                >
                  <span className="block text-sm font-medium leading-tight text-paper">{ch.name}</span>
                  <span className="mt-2 flex flex-wrap gap-1">
                    <span className="border border-live/40 bg-live/10 px-1 font-mono text-[9px] uppercase tracking-wider text-live">
                      Live
                    </span>
                    <span
                      className={`px-1 font-mono text-[9px] uppercase tracking-wider ${
                        ready
                          ? "border border-live/40 bg-live/10 text-live"
                          : "border border-ink-600 text-ink-400"
                      }`}
                    >
                      {ready ? "Org-ready" : "Not ready"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-ink-400">
            Live = the platform implements it. Org-ready = this organisation actually has a DID, WABA, mailbox,
            widget key or social token. Empty orgs stay not ready. Tests: catalog live is not treated as org-ready.
          </p>
        </div>

        <div className="bg-ink-900 p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="font-display text-xl font-bold text-paper">{selected.name}</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">{selected.direction}</p>
          </div>
          <dl className="mt-4 space-y-3 text-sm">
            <Row label="Catalog" value="Live in product" />
            <Row
              label="This org"
              value={orgReady ? "Receive / send ready (example)" : "Not ready until configured"}
              warn={!orgReady}
            />
            <Row label="Setup" value={selected.setup} />
            <Row label="Agent sees it" value={selected.agentView} />
            <Row label="Routing" value={selected.routing} />
            <Row label="Wallboard" value={selected.widget} />
          </dl>
          <p className="mt-4 text-xs text-ink-400">{selected.orgReadyHint}</p>
          <ul className="mt-4 space-y-1">
            {selected.limits.map((limit) => (
              <li key={limit} className="border-l-2 border-cta-500 pl-2 text-xs text-ink-200">
                {limit}
              </li>
            ))}
          </ul>
          <p className="mt-4 border border-ink-600 bg-ink px-3 py-2 text-xs text-ink-300">{selected.never}</p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, warn = false }: { label: string; value: string; warn?: boolean }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-400">{label}</dt>
      <dd className={`mt-0.5 ${warn ? "text-amber-200" : "text-ink-200"}`}>{value}</dd>
    </div>
  );
}
