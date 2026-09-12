import { ImageResponse } from "next/og";

export const alt = "OMNIVOX — Cloud dialer for outbound sales teams";
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
              background: "#2563EB",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 3,
              paddingBottom: 10,
            }}
          >
            <div style={{ width: 6, height: 14, background: "white", borderRadius: 2 }} />
            <div style={{ width: 6, height: 26, background: "white", borderRadius: 2 }} />
            <div style={{ width: 6, height: 20, background: "white", borderRadius: 2 }} />
          </div>
          <span>OMNIVOX</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Cloud dialer for outbound sales teams
          </div>
          <div style={{ fontSize: 26, color: "#93c5fd", maxWidth: 820 }}>
            Preview &amp; manual outbound · £25/seat · prepaid credits · platform-managed telephony
          </div>
        </div>

        <div style={{ display: "flex", gap: 36, color: "#93c5fd", fontSize: 22, fontWeight: 600 }}>
          <span>£25 / agent / month</span>
          <span>~5p / connected minute</span>
          <span>Same-day pilots</span>
        </div>
      </div>
    ),
    size
  );
}
