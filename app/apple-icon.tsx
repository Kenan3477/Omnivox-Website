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
          background: "linear-gradient(135deg, #5b21b6 0%, #0891b2 100%)",
          color: "#ecfeff",
          fontSize: 96,
          fontWeight: 700,
        }}
      >
        O
      </div>
    ),
    size
  );
}
