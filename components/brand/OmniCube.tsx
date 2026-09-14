import { type ReactNode } from "react";

function Equalizer({ className = "h-10 w-10 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="8" y="16" width="3.5" height="8" rx="0.75" fill="currentColor" />
      <rect x="14.25" y="8" width="3.5" height="16" rx="0.75" fill="currentColor" />
      <rect x="20.5" y="12" width="3.5" height="12" rx="0.75" fill="currentColor" />
    </svg>
  );
}

function Face({ className, children }: { className: string; children?: ReactNode }) {
  return (
    <div className={`omni-cube-face omni-glass ${className}`}>
      {children ?? <Equalizer className="h-11 w-11 text-white/90" />}
    </div>
  );
}

interface OmniCubeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeScale = { sm: 0.62, md: 0.82, lg: 1 };

/** Quiet glass monolith — no orbiting icons, no particle gimmicks. */
export function OmniCube({ size = "lg", className = "" }: OmniCubeProps) {
  const scale = sizeScale[size];

  return (
    <div
      className={`omni-sculpture ${className}`}
      style={{ transform: `scale(${scale})` }}
      aria-hidden="true"
    >
      <div className="omni-glow" />
      <div className="omni-floor" />
      <div className="omni-stage">
        <div className="omni-rings">
          <span className="omni-ring omni-ring-outer" />
          <span className="omni-ring omni-ring-inner" />
        </div>
        <div className="omni-cube-scene">
          <Face className="omni-face-front">
            <Equalizer className="h-12 w-12 text-white" />
          </Face>
          <Face className="omni-face-back" />
          <Face className="omni-face-right" />
          <Face className="omni-face-left" />
          <Face className="omni-face-top" />
          <Face className="omni-face-bottom" />
        </div>
      </div>
    </div>
  );
}
