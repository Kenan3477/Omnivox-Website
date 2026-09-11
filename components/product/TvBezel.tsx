import { type ReactNode } from "react";

export function TvBezel({
  children,
  caption = "Floor display · 16:9 · Dark Ops",
  className = "",
}: {
  children: ReactNode;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="rounded-[1.1rem] bg-[#0A0B0D] p-2 shadow-board ring-1 ring-white/10 md:p-3">
        <div className="overflow-hidden rounded-[0.65rem] bg-ink ring-1 ring-ink-600">{children}</div>
        <div className="flex items-center justify-between px-3 pb-1 pt-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">{caption}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-ink-600" aria-hidden />
        </div>
      </div>
    </figure>
  );
}
