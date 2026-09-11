import Link from "next/link";

export function PilotBanner() {
  return (
    <div className="relative z-50 border-b border-ink-600 bg-ink-900">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-sm text-ink-200">
        <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400">Pilot</span>
        <span>£50 credits + white-glove setup for qualified teams. Same-day go-live.</span>
        <Link href="/contact" className="font-medium text-amber-300 hover:text-amber-200">
          Start a pilot →
        </Link>
      </div>
    </div>
  );
}
