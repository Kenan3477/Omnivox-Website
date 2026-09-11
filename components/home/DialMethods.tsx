"use client";

import { useState } from "react";
import { StatusLabel } from "@/components/ui/StatusLabel";
import type { FeatureStatus } from "@/lib/constants";

const methods: {
  name: string;
  status: FeatureStatus;
  detail: string;
  why: string;
}[] = [
  {
    name: "Manual / click-to-call",
    status: "live",
    detail: "Browser WebRTC. Mute, hold, keypad, recording.",
    why: "The agent picks the number. No pacing.",
  },
  {
    name: "Preview",
    status: "live",
    detail: "Review the contact, skip, or dial. Production pilots.",
    why: "Agents stay in control of the list. Same-day go-live.",
  },
  {
    name: "Progressive",
    status: "live",
    detail: "1:1 auto-dial. Shipped — not waitlisted.",
    why: "One live attempt per available agent. No multi-line predictive.",
  },
  {
    name: "Power",
    status: "live",
    detail: "Ratio > 1, AMD-gated so voicemail does not eat the floor.",
    why: "Twilio AMD routes humans to agents. Human vs machine on the scoreboard.",
  },
  {
    name: "Adaptive Power",
    status: "waitlist",
    detail: "Ratio from occupancy / abandon. ADAPTIVE_POWER_LIVE_ALLOWED default false.",
    why: "Join the waitlist. Do not expect it on day one.",
  },
  {
    name: "Predictive",
    status: "waitlist",
    detail: "Statistical / multi-line. isPredictiveLiveAllowed() is always false.",
    why: "Never badged Live. Still waitlist until it actually ships.",
  },
];

export function DialMethods() {
  const [selected, setSelected] = useState(methods[3].name);
  const active = methods.find((m) => m.name === selected) ?? methods[0];

  return (
    <section className="border-b border-ink-600 bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <p className="kicker">Dial methods · honest availability</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-paper md:text-4xl">
          Progressive is live. Predictive is not. We will not lie about the dialler.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-300">
          Campaign DAC: Manual / Preview / Progressive / Power are Live. Adaptive Power and Predictive stay Waitlist.
          AMD sits on Power: human vs machine so agents are not burned on tapes.
        </p>

        <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((m) => {
            const on = m.name === selected;
            return (
              <button
                key={m.name}
                type="button"
                onClick={() => setSelected(m.name)}
                className={`border p-4 text-left transition-colors ${
                  on ? "border-cta-500 bg-cta-500/10" : "border-ink-600 bg-ink hover:border-ink-400"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-medium text-paper">{m.name}</span>
                  <StatusLabel status={m.status} />
                </div>
                <p className="mt-2 text-sm text-ink-300">{m.detail}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-4 border border-ink-600 bg-ink px-5 py-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-signal-300">{active.name}</p>
          <p className="mt-2 text-sm text-ink-200">{active.why}</p>
        </div>
      </div>
    </section>
  );
}
