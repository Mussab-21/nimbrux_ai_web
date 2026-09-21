import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = "Nimbrix — AI systems and software engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";


export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "72px",
          borderTop: "16px solid #0B57D0",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#0A0F1C" }}>
          Nimbrix<span style={{ color: "#0B57D0" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.15,
            color: "#0A0F1C",
            fontWeight: 700,
            maxWidth: 950,
          }}
        >
          AI systems and software engineering for growing businesses
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#4B5768" }}>
          {siteConfig.url.replace("https://", "")} · Islamabad, Pakistan · Global delivery
        </div>
      </div>
    ),
    size
  );
}
