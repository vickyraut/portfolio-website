import { ImageResponse } from "next/og";

export const alt = "Vicky Raut — AI Engineer & Android Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        {/* Top Header Brand Tag */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              background: "#ffffff",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#a1a1aa",
              textTransform: "uppercase",
            }}
          >
            VICKYRAUT.COM
          </span>
        </div>

        {/* Center Body: Name & Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: 0,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Vicky Raut
          </h1>
          <p
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "#a1a1aa",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            AI Engineer & Android Developer
          </p>
        </div>

        {/* Bottom Tagline & Capability Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 22,
            fontWeight: 600,
            color: "#ffffff",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <span>Agentic AI</span>
          <span style={{ color: "#52525b" }}>•</span>
          <span>RAG</span>
          <span style={{ color: "#52525b" }}>•</span>
          <span>LLMs</span>
          <span style={{ color: "#52525b" }}>•</span>
          <span>Android</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
