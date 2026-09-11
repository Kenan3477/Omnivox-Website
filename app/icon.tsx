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
          background: "#08090B",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 22,
            height: 16,
            border: "1px solid #2EC8B0",
            background: "#101318",
            padding: 2,
            gap: 2,
          }}
        >
          <div style={{ width: 5, height: 10, background: "#2EC8B0" }} />
          <div style={{ width: 5, height: 6, background: "#E8A317", marginTop: 4 }} />
          <div style={{ width: 4, height: 8, background: "#2EC8B0", opacity: 0.55, marginTop: 2 }} />
        </div>
      </div>
    ),
    size
  );
}
