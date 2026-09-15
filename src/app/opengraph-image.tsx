import { ImageResponse } from "next/og";

export const alt =
  "Pierce Web Solutions — Business Systems & Practical Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "65px 78px",
        background: "#1f1f1d",
        color: "#f7f3ed",
        border: "18px solid #f7f3ed",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 27,
          letterSpacing: 2,
          color: "#d3b986",
        }}
      >
        <div style={{ width: 32, height: 32, border: "3px solid #b89456" }} />
        Pierce Web Solutions
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Georgia",
            fontSize: 74,
            lineHeight: 1.08,
          }}
        >
          <span>Business Systems.</span>
          <span>Practical Solutions.</span>
        </div>
        <div style={{ fontSize: 27, color: "#a8b6a6" }}>
          Built around how your business works.
        </div>
      </div>
      <div style={{ fontSize: 20, color: "#d3b986", letterSpacing: 2 }}>
        NORTH GEORGIA · DIRECT PARTNERSHIP
      </div>
    </div>,
    size,
  );
}
