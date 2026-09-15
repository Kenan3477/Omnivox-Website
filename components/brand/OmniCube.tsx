import { type ReactNode } from "react";
import { channels } from "@/lib/product";

type ChannelId = (typeof channels)[number]["id"];

/** Eight catalog channels on an ellipse, rotated so none sit under the workspace mock. */
const nodeLayout = channels.map((channel, index) => {
  const angle = (index / channels.length) * Math.PI * 2 - Math.PI / 2 + Math.PI / 8;
  return {
    channel,
    left: `${50 + 46 * Math.cos(angle)}%`,
    top: `${48 + 36 * Math.sin(angle)}%`,
  };
});

function ChannelGlyph({ id, className = "h-4 w-4" }: { id: ChannelId; className?: string }) {
  const icons: Record<ChannelId, ReactNode> = {
    voice: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.2 3.8h2.1c.5 0 .9.3 1 .8l.6 2.3c.1.4 0 .8-.3 1.1L9.4 9.3a11.2 11.2 0 0 0 5.3 5.3l1.3-1.2c.3-.3.7-.4 1.1-.3l2.3.6c.5.1.8.5.8 1v2.1c0 .6-.5 1.1-1.1 1-6.3-.7-11.4-5.8-12.1-12.1-.1-.6.4-1.1 1-1.1Z"
        />
      </svg>
    ),
    sms: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.5" y="5.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M8 10h8M8 13h5" />
        <circle cx="8.2" cy="18.6" r="1.15" fill="currentColor" />
        <circle cx="12" cy="18.6" r="1.15" fill="currentColor" />
        <circle cx="15.8" cy="18.6" r="1.15" fill="currentColor" />
      </svg>
    ),
    whatsapp: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          d="M12.1 4.2a7.7 7.7 0 0 0-6.5 11.8l-1.4 3.8 3.9-.8A7.7 7.7 0 1 0 12.1 4.2Z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M9 10.2h.01M12 10.2h.01M15 10.2h.01"
        />
      </svg>
    ),
    email: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          d="M4.4 7.2h15.2v10.2H4.4V7.2Z"
        />
        <path stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" d="m4.8 7.6 7.2 5.6 7.2-5.6" />
      </svg>
    ),
    chat: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          d="M7.2 6.2h9.2A1.8 1.8 0 0 1 18.2 8v4.4A1.8 1.8 0 0 1 16.4 14.2h-4.6L8 16.4V14.2H7.2A1.8 1.8 0 0 1 5.4 12.4V8A1.8 1.8 0 0 1 7.2 6.2Z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          d="M8.4 15.6h-1A1.6 1.6 0 0 0 5.8 17.2v1.4l2.4-1.2h3.8"
        />
      </svg>
    ),
    facebook: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="3.2" stroke="currentColor" strokeWidth="1.6" />
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          d="M13.4 19v-6.2h2.1l.3-2.2h-2.4V9.3c0-.6.2-1.1 1.1-1.1h1.3V6.2c-.2 0-1-.1-1.8-.1-1.9 0-3.1 1.1-3.1 3.2v1.5H9.2v2.2h1.7V19"
        />
      </svg>
    ),
    instagram: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.4" y="4.4" width="15.2" height="15.2" rx="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.2" cy="7.8" r="0.7" fill="currentColor" />
      </svg>
    ),
    x: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          d="m6.4 6.4 11.2 11.2M17.6 6.4 6.4 17.6"
        />
      </svg>
    ),
  };

  return <span className="text-current">{icons[id]}</span>;
}

function ChannelChip({ id, name }: { id: ChannelId; name: string }) {
  return (
    <span className="omni-channel-chip">
      <span className="omni-channel-glyph">
        <ChannelGlyph id={id} className="h-3.5 w-3.5" />
      </span>
      <span className="omni-channel-name">{name}</span>
    </span>
  );
}

function MiniCube({ id, tilt }: { id: ChannelId; tilt: number }) {
  return (
    <div className="omni-mini-scene" style={{ transform: `rotateX(-26deg) rotateY(${tilt}deg)` }}>
      <div className="omni-mini-face omni-glass omni-mini-front">
        <ChannelGlyph id={id} className="h-4 w-4" />
      </div>
      <div className="omni-mini-face omni-glass omni-mini-right" />
      <div className="omni-mini-face omni-glass omni-mini-left" />
      <div className="omni-mini-face omni-glass omni-mini-back" />
      <div className="omni-mini-face omni-glass omni-mini-top" />
      <div className="omni-mini-face omni-glass omni-mini-bottom" />
    </div>
  );
}

function ChannelCube({
  id,
  name,
  tilt,
}: {
  id: ChannelId;
  name: string;
  tilt: number;
}) {
  return (
    <span className="omni-channel-sat">
      <MiniCube id={id} tilt={tilt} />
      <span className="omni-channel-sat-name">{name}</span>
    </span>
  );
}

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
  return <div className={`omni-cube-face omni-glass ${className}`}>{children}</div>;
}

interface OmniCubeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeScale = { sm: 0.62, md: 0.82, lg: 1 };

export function CatalogChannelChips({ className = "" }: { className?: string }) {
  return (
    <ul className={`omni-channel-mobile ${className}`.trim()}>
      {channels.map((channel) => (
        <li key={channel.id}>
          <ChannelChip id={channel.id} name={channel.name} />
        </li>
      ))}
    </ul>
  );
}

/** Glass cube with eight catalog channels as floating mini cubes. */
export function OmniCube({ size = "lg", className = "" }: OmniCubeProps) {
  const scale = sizeScale[size];

  return (
    <div className={className}>
      <div className="omni-hero-stage" style={{ transform: `scale(${scale})` }}>
        <ul className="omni-channel-nodes">
          {nodeLayout.map(({ channel, left, top }, index) => (
            <li key={channel.id} style={{ left, top }}>
              <ChannelCube id={channel.id} name={channel.name} tilt={32 + index * 19} />
            </li>
          ))}
        </ul>

        <div className="omni-sculpture" aria-hidden="true">
          <div className="omni-glow" />
          <div className="omni-floor" />
          <div className="omni-stage">
            <div className="omni-rings">
              <span className="omni-ring omni-ring-outer" />
              <span className="omni-ring omni-ring-inner" />
            </div>
            <div className="omni-cube-scene">
              <Face className="omni-face-front">
                <Equalizer className="h-14 w-14 text-white" />
              </Face>
              <Face className="omni-face-back">
                <Equalizer className="h-12 w-12 text-white/80" />
              </Face>
              <Face className="omni-face-right">
                <Equalizer className="h-12 w-12 text-white/85" />
              </Face>
              <Face className="omni-face-left">
                <Equalizer className="h-12 w-12 text-white/85" />
              </Face>
              <Face className="omni-face-top">
                <Equalizer className="h-11 w-11 text-white/90" />
              </Face>
              <Face className="omni-face-bottom">
                <Equalizer className="h-10 w-10 text-white/70" />
              </Face>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
