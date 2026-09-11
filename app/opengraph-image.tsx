import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OMNIVOX operations wallboard";
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
          background: "#08090B",
          color: "#F4F1EA",
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: 48,
            border: "16px solid #12171D",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>OMNIVOX</div>
            <div style={{ display: "flex", fontSize: 20, color: "#3DDBC8" }}>14:32:08 Europe/London</div>
          </div>
          <div style={{ display: "flex", marginTop: 28, gap: 16 }}>
            {[
              ["LIVE CALLS", "14"],
              ["AVAILABLE", "9"],
              ["OCCUPANCY", "78%"],
              ["QUEUE", "3"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  background: "#101318",
                  border: "1px solid #2A323C",
                  padding: 20,
                }}
              >
                <div style={{ display: "flex", fontSize: 14, color: "#9AA3AE", letterSpacing: 2 }}>{k}</div>
                <div style={{ display: "flex", fontSize: 56, color: "#3DDBC8", marginTop: 8 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 36 }}>
            <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
              Preview, power, inbound, wallboards.
            </div>
            <div style={{ display: "flex", fontSize: 22, color: "#E8A317", marginTop: 12 }}>
              £25 a seat · ~5p / connected minute · UK/EU voice contact centre
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
