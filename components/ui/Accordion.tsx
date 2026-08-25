import { type ReactNode } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  light?: boolean;
}

export function Accordion({ items, light = false }: AccordionProps) {
  return (
    <div className={`divide-y rounded-2xl border ${light ? "divide-slate-100 border-slate-200 bg-white" : "divide-white/10 border-white/10 bg-white/5"}`}>
      {items.map((item, index) => (
        <details key={item.question} className="group" open={index === 0}>
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left [&::-webkit-details-marker]:hidden ${
              light ? "hover:bg-slate-50" : "hover:bg-white/5"
            }`}
          >
            <h3 className={`m-0 font-semibold ${light ? "text-slate-900" : "text-white"}`}>{item.question}</h3>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-open:rotate-45 ${
                light ? "bg-slate-100 text-slate-600" : "bg-white/10 text-cyan-400"
              }`}
              aria-hidden="true"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </summary>
          <p className={`px-6 pb-5 leading-relaxed ${light ? "text-slate-600" : "text-slate-400"}`}>{item.answer}</p>
        </details>
      ))}
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
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  light = false,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-wider ${dark ? "text-cyan-400" : light ? "text-cyan-600" : "text-cyan-400"}`}>
          {eyebrow}
        </p>
      )}
      <Heading
        className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance ${dark ? "text-white" : light ? "text-slate-900" : "text-white"}`}
      >
        {title}
      </Heading>
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
