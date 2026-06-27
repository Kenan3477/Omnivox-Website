"use client";

import { useState, type ReactNode } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  light?: boolean;
}

export function Accordion({ items, light = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`divide-y rounded-2xl border ${light ? "divide-slate-100 border-slate-200 bg-white" : "divide-white/10 border-white/10 bg-white/5"}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${light ? "hover:bg-slate-50" : "hover:bg-white/5"}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={`font-semibold ${light ? "text-slate-900" : "text-white"}`}>{item.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${isOpen ? "rotate-45" : ""} ${light ? "bg-slate-100 text-slate-600" : "bg-white/10 text-cyan-400"}`}
                aria-hidden="true"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
              <p className={`px-6 leading-relaxed ${light ? "text-slate-600" : "text-slate-400"}`}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-wider ${dark ? "text-cyan-400" : light ? "text-cyan-600" : "text-cyan-400"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance ${dark ? "text-white" : light ? "text-slate-900" : "text-white"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-slate-400" : light ? "text-slate-600" : "text-slate-400"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 md:p-8 ${hover ? "transition-all duration-300 hover:border-cyan-300 hover:shadow-lg hover:-translate-y-1" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
