export function Wordmark({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-paper" style={{ letterSpacing: "0.01em" }}>
        OMNIVOX
      </span>
      {!compact && (
        <span className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
          <span className="h-1.5 w-1.5 bg-cta-400 tick-live" />
        </span>
      )}
    </span>
  );
}

/** Equalizer in a rounded square — same mark as the app BrandMark, not a cyan O. */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#2563EB" />
      <rect x="8" y="16" width="3.5" height="8" rx="0.75" fill="#ffffff" />
      <rect x="14.25" y="8" width="3.5" height="16" rx="0.75" fill="#ffffff" />
      <rect x="20.5" y="12" width="3.5" height="12" rx="0.75" fill="#ffffff" />
    </svg>
  );
}
