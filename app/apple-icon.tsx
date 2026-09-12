import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 84 }}>
          <div style={{ width: 22, height: 42, background: "#ffffff", borderRadius: 4 }} />
          <div style={{ width: 22, height: 84, background: "#ffffff", borderRadius: 4 }} />
          <div style={{ width: 22, height: 62, background: "#ffffff", borderRadius: 4 }} />
        </div>
      </div>
    ),
    size
  );
}
