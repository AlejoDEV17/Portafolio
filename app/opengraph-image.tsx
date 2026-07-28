import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Alejandro Lozano — Software, automatización e inteligencia artificial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070708",
          color: "#f5f3ec",
          padding: "58px 68px",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            border: "2px solid #d7ff3f",
            borderRadius: "50%",
            right: -80,
            top: 50,
            opacity: 0.65,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 390,
            height: 390,
            border: "2px solid #ff2ba6",
            borderRadius: "50%",
            right: -5,
            top: 115,
            opacity: 0.55,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 4,
            color: "#d7ff3f",
          }}
        >
          <span>AL / PORTFOLIO</span>
          <span>CALI — CO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 112,
              lineHeight: 0.9,
              fontWeight: 900,
              letterSpacing: -7,
            }}
          >
            ALEJANDRO
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 112,
              lineHeight: 0.9,
              fontWeight: 900,
              color: "#070708",
              WebkitTextStroke: "2px #f5f3ec",
              letterSpacing: -7,
            }}
          >
            LOZANO
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 720,
            fontSize: 24,
            lineHeight: 1.4,
            color: "#b9b7b0",
          }}
        >
          DESARROLLO DE SOFTWARE · AUTOMATIZACIÓN · INTEGRACIONES · IA
        </div>
      </div>
    ),
    size,
  );
}
