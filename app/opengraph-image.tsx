import { ImageResponse } from "next/og";

export const alt = "OMNIVOX AI — Cloud dialer for outbound sales teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#020617",
          padding: "64px 72px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #7c3aed 0%, #0891b2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ecfeff",
              fontSize: 26,
            }}
          >
            O
          </div>
          <span>
            OMNIVOX <span style={{ color: "#22d3ee" }}>AI</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Cloud dialer for outbound sales teams
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8", maxWidth: 820 }}>
            Preview &amp; manual outbound · £25/seat · prepaid credits · platform-managed telephony
          </div>
        </div>

        <div style={{ display: "flex", gap: 36, color: "#67e8f9", fontSize: 22, fontWeight: 600 }}>
          <span>£25 / agent / month</span>
          <span>~5p / connected minute</span>
          <span>Same-day pilots</span>
        </div>
      </div>
    ),
    size
  );
}
