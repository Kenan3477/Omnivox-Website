import Link from "next/link";

export function PilotBanner() {
  return (
    <div className="relative z-50 border-b border-cyan-500/10 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-sm text-slate-300">
        <span>Start with £50 free call credits + white-glove setup</span>
        <Link href="/contact" className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
          Start pilot →
        </Link>
      </div>
    </div>
  );
}
