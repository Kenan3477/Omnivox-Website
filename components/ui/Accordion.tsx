"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items, light = false }: { items: AccordionItem[]; light?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`divide-y border ${light ? "divide-stone-200 border-stone-300 bg-white" : "divide-ink-600 border-ink-600 bg-panel"}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left ${
                light ? "hover:bg-stone-50" : "hover:bg-raised"
              }`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={`font-semibold ${light ? "text-ink" : "text-paper"}`}>{item.question}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center font-mono text-sm ${isOpen ? "text-amber-400" : light ? "text-ink-400" : "text-ink-300"}`}
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className={`px-5 pb-5 leading-relaxed ${light ? "text-ink-500" : "text-ink-300"}`}>{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
