import Link from "next/link";
import { type ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function BrowserFrame({ children, title = "app.omnivox.ai/work", className = "" }: BrowserFrameProps) {
  return (
    <div className={`rounded-lg border border-slate-200 bg-slate-100 shadow-sm ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-3 py-2 rounded-t-lg">
        <div className="flex gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 text-center text-[11px] text-slate-400 truncate px-2">{title}</div>
      </div>
      <div className="overflow-hidden rounded-b-lg">{children}</div>
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = "", id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-10 md:py-14 ${dark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  compact?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  compact = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`${compact ? "mb-0" : "mb-8"} ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`}
    >
      {eyebrow && (
        <p className={`mb-1.5 text-[11px] font-semibold uppercase tracking-widest ${dark ? "text-cyan-400" : "text-cyan-600"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-bold tracking-tight text-balance ${
          compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
        } ${dark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-2 text-sm md:text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
