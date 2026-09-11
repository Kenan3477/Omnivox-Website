import type { FeatureStatus } from "@/lib/constants";

const labels: Record<FeatureStatus, string> = {
  live: "Live",
  waitlist: "Waitlist",
  coming: "Coming",
};

const styles: Record<FeatureStatus, string> = {
  live: "border-live/40 bg-live/10 text-live",
  waitlist: "border-ink-400/40 bg-ink-700 text-ink-200",
  coming: "border-ink-600 bg-transparent text-ink-300",
};

const lightStyles: Record<FeatureStatus, string> = {
  live: "border-emerald-700/30 bg-emerald-50 text-emerald-800",
  waitlist: "border-stone-300 bg-stone-100 text-stone-700",
  coming: "border-stone-300 bg-white text-stone-600",
};

export function StatusLabel({
  status,
  light = false,
  className = "",
}: {
  status: FeatureStatus;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${
        light ? lightStyles[status] : styles[status]
      } ${className}`}
    >
      {labels[status]}
    </span>
  );
}
