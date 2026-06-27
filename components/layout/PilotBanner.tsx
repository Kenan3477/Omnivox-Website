import Link from "next/link";

export function PilotBanner() {
  return (
    <div className="bg-accent text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm">
        <span className="font-medium">
          Pilot offer: first 5 organisations get £50 call credits + white-glove setup.
        </span>
        <Link href="/contact" className="underline underline-offset-2 hover:text-white/80 whitespace-nowrap">
          Start pilot →
        </Link>
      </div>
    </div>
  );
}
