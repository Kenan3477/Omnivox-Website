import Link from "next/link";

export function PilotBanner() {
  return (
    <div className="relative z-50 border-b border-cyan-400/20 bg-gradient-to-r from-purple-950/90 via-blue-950/90 to-slate-900/90 text-cyan-100">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 py-2.5 text-center text-sm">
        <span className="font-medium">
          Start with £50 free call credits + white-glove setup
        </span>
        <Link
          href="/contact"
          className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 whitespace-nowrap"
        >
          Start pilot →
        </Link>
      </div>
    </div>
  );
}
