import Link from "next/link";
import { type ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function BrowserFrame({ children, title = "OMNIVOX AI — Agent Workspace", className = "" }: BrowserFrameProps) {
  return (
    <div className={`rounded-2xl border border-slate-200/80 bg-slate-100 p-2 shadow-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-200 bg-white rounded-t-xl px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        </div>
        <div className="flex-1 mx-4">
          <div className="mx-auto max-w-md rounded-md bg-slate-100 px-3 py-1 text-center text-xs text-slate-500 truncate">
            {title}
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-b-xl bg-white">{children}</div>
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
      className={`py-20 md:py-28 lg:py-32 ${dark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({ eyebrow, title, description, align = "center", dark = false }: SectionHeaderProps) {
  return (
    <div className={`mb-14 md:mb-16 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${dark ? "text-cyan-400" : "text-cyan-600"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight text-balance ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>{description}</p>
      )}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-500 transition-colors group">
      {children}
      <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
    </Link>
  );
}
