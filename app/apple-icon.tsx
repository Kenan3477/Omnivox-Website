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
          background: "#08090B",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 84,
            border: "4px solid #2EC8B0",
            background: "#101318",
            padding: 10,
            gap: 8,
          }}
        >
          <div style={{ width: 28, height: 60, background: "#2EC8B0" }} />
          <div style={{ width: 28, height: 36, background: "#E8A317", marginTop: 24 }} />
          <div style={{ width: 24, height: 48, background: "#2EC8B0", opacity: 0.55, marginTop: 12 }} />
        </div>
      </div>
    ),
    size
  );
}
