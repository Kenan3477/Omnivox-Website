import { type ReactNode } from "react";
import { siteConfig } from "@/lib/constants";

interface BrowserFrameProps {
  children: ReactNode;
  title?: string;
  className?: string;
  tone?: "light" | "dark";
}

export function BrowserFrame({
  children,
  title = siteConfig.appWorkHost,
  className = "",
  tone = "light",
}: BrowserFrameProps) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-2xl ${
        dark
          ? "border border-white/10 bg-slate-950 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.75)]"
          : "border border-slate-200 bg-slate-100 shadow-card"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2 px-3 py-2.5 ${
          dark ? "border-b border-white/10 bg-slate-950/90" : "border-b border-slate-200 bg-white"
        }`}
      >
        <div className="flex gap-1.5">
          <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/20" : "bg-red-400"}`} />
          <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/20" : "bg-amber-400"}`} />
          <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/20" : "bg-emerald-400"}`} />
        </div>
        <div className={`flex-1 text-center text-[11px] truncate px-2 tracking-wide ${dark ? "text-slate-500" : "text-slate-400"}`}>
          {title}
        </div>
      </div>
      <div className="overflow-hidden">{children}</div>
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
      className={`py-16 md:py-24 ${dark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} ${className}`}
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
  compact?: boolean;
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  compact = false,
  className = "",
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={`${compact ? "mb-6" : "mb-10"} ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p className={`mb-2 text-[11px] font-semibold uppercase tracking-widest ${dark ? "text-blue-400" : "text-blue-600"}`}>
          {eyebrow}
        </p>
      )}
      <Heading
        className={`font-display font-bold tracking-tight text-balance ${
          compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
        } ${dark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </Heading>
      {description && (
        <p className={`mt-3 text-sm md:text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
