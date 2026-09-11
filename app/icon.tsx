import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 16 }}>
          <div style={{ width: 4, height: 8, background: "#ffffff", borderRadius: 1 }} />
          <div style={{ width: 4, height: 16, background: "#ffffff", borderRadius: 1 }} />
          <div style={{ width: 4, height: 12, background: "#ffffff", borderRadius: 1 }} />
        </div>
      </div>
    ),
    size
  );
}
