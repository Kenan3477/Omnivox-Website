"use client";

import { useState } from "react";
import { BrowserFrame, Section, SectionContainer, SectionHeader } from "@/components/ui/Section";
import { channels, dialModes } from "@/lib/product";
import { siteConfig } from "@/lib/constants";

const tabs = [
  { id: "dialer", label: "Dialer", caption: "Preview · Progressive · Power" },
  { id: "inbox", label: "Work Inbox", caption: "WhatsApp 24h · SMS · chat" },
  { id: "wallboard", label: "Wallboard", caption: "Floor + Digital waiting" },
] as const;

type TabId = (typeof tabs)[number]["id"];
type DialId = (typeof dialModes)[number]["id"];

export function ProductStage() {
  const [tab, setTab] = useState<TabId>("dialer");

  return (
    <Section id="product" className="bg-white">
      <SectionContainer>
        <SectionHeader
          eyebrow="Product"
          title="The workspace CloudTalk-class sites put in the hero"
          description="Click through the dialer, inbox, and floor board. Catalog live does not mean every org has the channel enabled — that is Admin → Channels."
        />

        <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Product surfaces">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
              className={`rounded-2xl border px-4 py-3 text-left transition-colors ${
                tab === item.id
                  ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-200"
              }`}
            >
              <span className="block text-sm font-semibold">{item.label}</span>
              <span className={`block text-[11px] mt-0.5 ${tab === item.id ? "text-blue-100" : "text-slate-500"}`}>
                {item.caption}
              </span>
            </button>
          ))}
        </div>

        <BrowserFrame
          title={
            tab === "dialer"
              ? siteConfig.appWorkHost
              : tab === "inbox"
                ? "omnivox.vercel.app/work · inbox"
                : "omnivox.vercel.app/wallboards"
          }
        >
          {tab === "dialer" && <DialerStage />}
          {tab === "inbox" && <InboxStage />}
          {tab === "wallboard" && <WallboardStage />}
        </BrowserFrame>

        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {channels.map((ch) => (
            <li key={ch.id} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <p className="text-xs font-semibold text-slate-800">{ch.name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                {ch.ready === "live" ? "Live" : "Catalog"} · {ch.stack}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          Eight channels live in code. Enable per organisation in Admin → Channels. WhatsApp is a 24-hour
          customer-care session — not an HSM broadcast product.
        </p>
      </SectionContainer>
    </Section>
  );
}

function DialerStage() {
  const [mode, setMode] = useState<DialId>("preview");
  const active = dialModes.find((m) => m.id === mode) ?? dialModes[0];
  const paced = mode === "progressive" || mode === "power";

  return (
    <div className="bg-slate-950 text-slate-200">
      <div className="flex flex-wrap gap-1 border-b border-white/5 p-3">
        {dialModes.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
              mode === m.id
                ? m.status === "waitlist"
                  ? "bg-amber-500/20 text-amber-200 border border-amber-500/30"
                  : "bg-blue-600 text-white"
                : m.status === "waitlist"
                  ? "text-slate-500 border border-white/5 hover:bg-white/5"
                  : "text-slate-400 hover:bg-white/5"
            }`}
          >
            {m.label}
            {m.status === "waitlist" ? " · waitlist" : ""}
          </button>
        ))}
      </div>
      <div className="grid min-h-[320px] grid-cols-12">
        <div className="col-span-4 border-r border-white/5 p-4 hidden sm:block">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-3">Queue · 12</p>
          {["Sarah Mitchell · Acme", "James Chen · BrightPath", "Emma Walsh · NovaTech"].map((row, i) => (
            <div
              key={row}
              className={`mb-2 rounded-xl border p-3 ${i === 0 ? "border-blue-500/40 bg-blue-500/10" : "border-white/5"}`}
            >
              <p className="text-xs font-medium text-white">{row.split(" · ")[0]}</p>
              <p className="text-[10px] text-slate-500">{row.split(" · ")[1]}</p>
            </div>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-8 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-lg font-semibold text-white">Sarah Mitchell</p>
              <p className="text-sm text-slate-400">Acme Ltd · +44 7700 900123</p>
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
              {active.label}
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">{active.summary}</p>
          {paced && (
            <p className="mt-3 rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs text-blue-200">
              AMD on — machines drop so agents hear people.
            </p>
          )}
          {mode === "predictive" && (
            <p className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
              Predictive Live is not enabled in production.
            </p>
          )}
          <div className="mt-5 flex gap-2">
            <div
              className={`flex-1 rounded-xl py-3 text-center text-sm font-bold ${
                mode === "predictive" ? "bg-white/10 text-slate-500" : "bg-blue-600 text-white"
              }`}
            >
              {mode === "predictive" ? "Waitlist" : mode === "preview" ? "Dial" : "On call"}
            </div>
            <div className="flex-1 rounded-xl border border-white/15 py-3 text-center text-sm text-slate-300">Skip</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InboxStage() {
  const [thread, setThread] = useState<"whatsapp" | "sms">("whatsapp");
  const isWa = thread === "whatsapp";

  return (
    <div className="grid min-h-[320px] grid-cols-12 bg-slate-950 text-slate-200">
      <div className="col-span-4 border-r border-white/5 p-3 hidden sm:block">
        <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-3 px-1">Inbox</p>
        <button
          type="button"
          onClick={() => setThread("whatsapp")}
          className={`w-full rounded-xl border p-3 text-left mb-2 ${isWa ? "border-emerald-500/40 bg-emerald-500/10" : "border-white/5"}`}
        >
          <p className="text-[10px] font-semibold text-emerald-400">WhatsApp</p>
          <p className="text-xs font-medium text-white mt-0.5">James Chen</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Can you send the pack?</p>
        </button>
        <button
          type="button"
          onClick={() => setThread("sms")}
          className={`w-full rounded-xl border p-3 text-left ${!isWa ? "border-blue-500/40 bg-blue-500/10" : "border-white/5"}`}
        >
          <p className="text-[10px] font-semibold text-blue-300">SMS</p>
          <p className="text-xs font-medium text-white mt-0.5">Emma Walsh</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Thanks — call me tomorrow</p>
        </button>
      </div>
      <div className="col-span-12 sm:col-span-8 p-5 flex flex-col">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">{isWa ? "James Chen" : "Emma Walsh"}</p>
            <p className="text-xs text-slate-400">{isWa ? "WhatsApp · Twilio" : "SMS · Twilio"}</p>
          </div>
          {isWa ? (
            <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-[10px] font-semibold text-amber-300">
              24h window · 18h left
            </span>
          ) : (
            <span className="rounded-full bg-slate-800 px-3 py-1 text-[10px] font-semibold text-slate-400">No session window</span>
          )}
        </div>
        <div className="mt-4 flex-1 space-y-2">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/5 px-3 py-2 text-xs text-slate-300">
            {isWa ? "Can you send the pack?" : "Thanks — call me tomorrow"}
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-blue-600/80 px-3 py-2 text-xs text-white">
            {isWa ? "Yes — I'll reply in this session." : "Booked for 10:00. We'll call the DID."}
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-slate-400">
          {isWa
            ? "Session messages only. OMNIVOX does not sell WhatsApp template broadcasts or an HSM catalog."
            : "SMS has no 24-hour window. Digital is not billed from Call Credits."}
        </div>
      </div>
    </div>
  );
}

function WallboardStage() {
  return (
    <div className="bg-slate-950 text-slate-200 p-5 min-h-[320px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { l: "Available", v: "8" },
          { l: "On call", v: "3" },
          { l: "Wrap", v: "1" },
          { l: "Voice waiting", v: "4" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
            <p className="text-[10px] uppercase tracking-wider text-slate-500">{s.l}</p>
            <p className="mt-1 font-display text-2xl font-bold text-white">{s.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid lg:grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/5 p-4">
          <p className="text-[10px] uppercase tracking-wider text-slate-500">Voice queue</p>
          <p className="mt-2 text-sm text-slate-300">Q2 Renewal · Preview · 12 in list</p>
          <p className="mt-2 text-xs text-slate-500">Longest wait 0:42</p>
        </div>
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <p className="text-[10px] uppercase tracking-wider text-amber-400">Digital waiting</p>
          <p className="mt-2 text-sm text-white">2 waiting · WhatsApp not org-ready</p>
          <p className="mt-2 text-xs text-slate-400">
            Enable in Admin → Channels. Catalog live ≠ routing to the floor.
          </p>
        </div>
      </div>
    </div>
  );
}
