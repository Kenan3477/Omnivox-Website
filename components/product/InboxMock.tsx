"use client";

import { useState } from "react";

type Filter = "Open" | "Mine" | "Unassigned" | "Closed";
type ChannelChip = "All" | "SMS" | "WhatsApp" | "Email" | "Chat" | "Facebook" | "Instagram" | "X";

type Thread = {
  id: string;
  channel: Exclude<ChannelChip, "All">;
  name: string;
  preview: string;
  state: Filter;
  window?: "open" | "closed";
  failed?: string;
  body: string[];
};

const THREADS: Thread[] = [
  {
    id: "wa-1",
    channel: "WhatsApp",
    name: "Priya Shah",
    preview: "Can you send the appointment slot?",
    state: "Open",
    window: "open",
    body: [
      "Hi, I missed the call earlier.",
      "Can you send the appointment slot?",
    ],
  },
  {
    id: "sms-1",
    channel: "SMS",
    name: "Priya Shah",
    preview: "Thanks — I’ll wait for the callback.",
    state: "Mine",
    body: ["Thanks — I’ll wait for the callback."],
  },
  {
    id: "wa-2",
    channel: "WhatsApp",
    name: "Tom Hale",
    preview: "Window closed · HX template required",
    state: "Unassigned",
    window: "closed",
    failed: "Not sent: outside 24h window. Use an approved HX Content SID or SMS fallback.",
    body: ["Customer last messaged 31 hours ago. Free text is blocked until they write in, or you send a template."],
  },
  {
    id: "email-1",
    channel: "Email",
    name: "ops@haleco.example",
    preview: "Re: Q3 renewal pack",
    state: "Open",
    body: ["Please attach the Q3 renewal pack when you have a moment."],
  },
  {
    id: "chat-1",
    channel: "Chat",
    name: "Visitor · widget",
    preview: "Is anyone there?",
    state: "Unassigned",
    body: ["Is anyone there? I came in from the website widget."],
  },
];

export function InboxMock() {
  const [filter, setFilter] = useState<Filter>("Open");
  const [chip, setChannel] = useState<ChannelChip>("WhatsApp");
  const [selectedId, setSelectedId] = useState("wa-1");

  const visible = THREADS.filter((t) => {
    const filterOk = filter === "Open" ? t.state !== "Closed" : t.state === filter;
    const chipOk = chip === "All" || t.channel === chip;
    return filterOk && chipOk;
  });

  const selected = THREADS.find((t) => t.id === selectedId) ?? visible[0] ?? THREADS[0];

  return (
    <div className="overflow-hidden rounded-lg border border-ink-600 bg-panel shadow-raised">
      <div className="flex items-center justify-between border-b border-ink-600 bg-ink-900 px-3 py-2.5">
        <div className="flex gap-1">
          <span className="rounded-md bg-ink-700 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
            Inbox
          </span>
          <span className="px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-400">My Interactions</span>
        </div>
        <p className="font-mono text-[10px] text-ink-400">/work · two views, not one timeline</p>
      </div>

      <div className="flex flex-wrap gap-1 border-b border-ink-600 px-3 py-2">
        {(["Open", "Mine", "Unassigned", "Closed"] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
              filter === f ? "bg-cta-500 text-white" : "text-ink-300 hover:bg-ink-800"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-1 border-b border-ink-600 px-3 py-2">
        {(["All", "SMS", "WhatsApp", "Email", "Chat", "Facebook", "Instagram", "X"] as ChannelChip[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setChannel(c);
              const next = THREADS.find((t) => c === "All" || t.channel === c);
              if (next) setSelectedId(next.id);
            }}
            className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-wider ${
              chip === c ? "border-cta-500 text-cta-200" : "border-ink-600 text-ink-400"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
        <ul className="divide-y divide-ink-700 border-b border-ink-600 md:border-b-0 md:border-r">
          {visible.length === 0 && (
            <li className="px-4 py-6 text-sm text-ink-400">No threads in this filter. Closed is empty in this mock.</li>
          )}
          {visible.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => setSelectedId(t.id)}
                className={`w-full px-4 py-3 text-left ${t.id === selected.id ? "bg-cta-500/10" : "hover:bg-ink-900"}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm text-paper">{t.name}</p>
                  <span className="font-mono text-[10px] uppercase text-signal-300">{t.channel}</span>
                </div>
                <p className="mt-1 truncate text-xs text-ink-400">{t.preview}</p>
              </button>
            </li>
          ))}
        </ul>

        <div className="p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-display text-lg font-bold text-paper">{selected.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                {selected.channel} · {selected.state} · claim / close / reply
              </p>
            </div>
            {selected.window && (
              <span
                className={`font-mono text-[10px] uppercase tracking-wider ${
                  selected.window === "open" ? "text-live" : "text-amber-300"
                }`}
              >
                {selected.window === "open" ? "24h window open · 11h 12m" : "24h window closed"}
              </span>
            )}
          </div>
          <div className="mt-4 space-y-2">
            {selected.body.map((line) => (
              <p key={line} className="max-w-[90%] rounded-md border border-ink-600 bg-ink px-3 py-2 text-sm text-ink-200">
                {line}
              </p>
            ))}
            {selected.failed && (
              <p className="max-w-[90%] rounded-md border border-amber-400/40 bg-amber-400/10 px-3 py-2 text-sm text-amber-100">
                Not sent: {selected.failed.replace(/^Not sent: /, "")}
              </p>
            )}
          </div>
          {selected.channel === "WhatsApp" && selected.window === "closed" && (
            <p className="mt-4 font-mono text-[11px] text-ink-300">
              HX picker · approved Twilio Content SID · or SMS fallback after a voice wrap
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Claim", "Reply", "Close"].map((a) => (
              <span key={a} className="border border-ink-600 px-3 py-1.5 font-mono text-[10px] uppercase text-ink-200">
                {a}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-ink-400">
            Same mobile on SMS and WhatsApp stays two rows. Voice wrap codes are separate; after a voice disposition you
            can send SMS / WhatsApp / email follow-up, not Facebook or chat.
          </p>
        </div>
      </div>
    </div>
  );
}
