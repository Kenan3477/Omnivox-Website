import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OMNIVOX Channel Types";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#09090B",
          color: "#F8FAFC",
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: 48,
            border: "16px solid #111827",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>OMNIVOX</div>
            <div style={{ display: "flex", fontSize: 18, color: "#818CF8" }}>Channel Types · catalog Live</div>
          </div>
          <div style={{ display: "flex", marginTop: 28, gap: 12 }}>
            {["Voice", "SMS", "WhatsApp", "Chat", "Email", "FB", "IG", "X"].map((k) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  background: "#101318",
                  border: "1px solid #1E293B",
                  padding: 16,
                }}
              >
                <div style={{ display: "flex", fontSize: 14, color: "#94A3B8" }}>{k}</div>
                <div style={{ display: "flex", fontSize: 18, color: "#3DDC97", marginTop: 8 }}>Live</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 36 }}>
            <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>
              Outbound depth and a digital inbox.
            </div>
            <div style={{ display: "flex", fontSize: 22, color: "#93C5FD", marginTop: 12 }}>
              £25 a seat · 5p out / 4p in · catalog live ≠ org-ready
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
