import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nirav Thakur — Frontend Developer & UI/UX Designer";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#000000",
          padding: "80px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 2, color: "#666666" }}>
          NIRAVTHAKUR.IN
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1 }}>
            Nirav Thakur
          </div>
          <div style={{ fontSize: 40, marginTop: 24, color: "#444444" }}>
            Frontend Developer &amp; UI/UX Designer
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#666666" }}>Mumbai, India</div>
      </div>
    ),
    size,
  );
}
