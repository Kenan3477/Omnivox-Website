"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { suggestedQuestions } from "@/lib/chat-knowledge";

type Msg = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Ask about dial methods, wallboards, inbound, pricing, or GDPR. I only answer from live Omnivox product facts — I will not invent features. Predictive is waitlist, not live.",
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const message = text.trim();
    if (!message || loading) return;
    const next = [...messages, { role: "user" as const, content: message }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          history: next.slice(-6).map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Failed");
      setMessages([...next, { role: "assistant", content: body.answer }]);
    } catch (err) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            err instanceof Error
              ? `${err.message} You can also email hello@omnivox.co.uk.`
              : "Could not reach the helper. Email hello@omnivox.co.uk.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className="fixed bottom-20 right-4 z-50 flex h-12 items-center gap-2 rounded-md border border-signal-400/40 bg-signal-400 px-3 font-semibold text-ink shadow-raised md:bottom-6 md:right-6"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="omnivox-helper"
      >
        <span className="h-1.5 w-1.5 bg-ink tick-live" aria-hidden />
        {open ? "Close" : "Ask Omnivox"}
      </button>

      {open && (
        <section
          id="omnivox-helper"
          className="fixed bottom-36 right-4 z-50 flex w-[min(100%-2rem,24rem)] flex-col overflow-hidden rounded-lg border border-ink-600 bg-panel shadow-board md:bottom-20 md:right-6"
          aria-label="Omnivox product helper"
        >
          <header className="border-b border-ink-600 bg-ink-900 px-4 py-3">
            <p className="font-display text-sm font-bold text-paper">Site helper</p>
            <p className="text-[11px] text-ink-400">Grounded in live product facts. Not an agent copilot.</p>
          </header>
          <div ref={listRef} className="max-h-80 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <p
                key={`${m.role}-${i}`}
                className={`text-sm leading-relaxed ${m.role === "user" ? "text-signal-300" : "text-ink-100"}`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                  {m.role === "user" ? "You" : "Omnivox"}
                </span>
                <span className="mt-1 block">{m.content}</span>
              </p>
            ))}
            {loading && <p className="font-mono text-[11px] text-ink-400">Checking product facts…</p>}
          </div>
          <div className="flex flex-wrap gap-1.5 border-t border-ink-600 px-3 py-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                type="button"
                className="border border-ink-600 px-2 py-1 font-mono text-[10px] text-ink-200 hover:border-signal-400/50 hover:text-signal-300"
                onClick={() => send(q)}
              >
                {q}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-ink-600 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <label htmlFor="helper-q" className="sr-only">
              Question
            </label>
            <input
              id="helper-q"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a product question"
              className="min-w-0 flex-1 rounded-md border border-ink-600 bg-ink px-3 py-2 text-sm text-paper placeholder:text-ink-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-ink disabled:opacity-60"
            >
              Send
            </button>
          </form>
          <p className="border-t border-ink-600 px-3 py-2 text-[11px] text-ink-400">
            Prefer a human?{" "}
            <Link href="/contact" className="text-amber-300">
              Book a demo
            </Link>
            .
          </p>
        </section>
      )}
    </>
  );
}
