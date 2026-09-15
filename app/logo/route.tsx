import { ImageResponse } from "next/og";

export const runtime = "edge";

/** 512×512 mark for Organization.logo — Google requires at least 112×112. */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2563EB",
          borderRadius: 96,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 18, height: 280 }}>
          <div style={{ width: 56, height: 140, background: "#ffffff", borderRadius: 12 }} />
          <div style={{ width: 56, height: 280, background: "#ffffff", borderRadius: 12 }} />
          <div style={{ width: 56, height: 210, background: "#ffffff", borderRadius: 12 }} />
        </div>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
