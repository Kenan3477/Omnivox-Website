interface WordmarkProps {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  showAi?: boolean;
  as?: "p" | "h1" | "span";
}

const sizes = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl sm:text-4xl",
  hero: "text-4xl sm:text-5xl",
};

const markSizes = {
  sm: "h-6 w-9",
  md: "h-7 w-9",
  lg: "h-9 w-11",
  hero: "h-11 w-14",
};

/** Equalizer in a rounded square — product BrandMark, not a cyan O or letter-V. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#2563EB" />
      <rect x="8" y="16" width="3.5" height="8" rx="0.75" fill="#ffffff" />
      <rect x="14.25" y="8" width="3.5" height="16" rx="0.75" fill="#ffffff" />
      <rect x="20.5" y="12" width="3.5" height="12" rx="0.75" fill="#ffffff" />
    </svg>
  );
}

export function Wordmark({
  size = "md",
  className = "",
  showAi = false,
  as: Tag = "p",
}: WordmarkProps) {
  return (
    <Tag className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-white ${sizes[size]} ${className}`}>
      <LogoMark className={markSizes[size]} />
      <span>
        OMNI<span className="text-blue-300">VOX</span>
        {showAi ? <span className="sr-only"> </span> : null}
      </span>
    </Tag>
  );
}
