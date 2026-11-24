import { ImageResponse } from "next/og";

export const alt = "growth Marketing Agency, agence de marketing digital en Tunisie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#070707",
          color: "#fff",
          padding: 80,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -200,
            top: -200,
            width: 700,
            height: 700,
            borderRadius: 700,
            background: "radial-gradient(circle, rgba(166,46,134,0.55), rgba(7,7,7,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <svg width="90" height="127" viewBox="0 0 150 212">
            <path d="M75 12.5A62.5 62.5 0 1 0 135.64 90.12" fill="none" stroke="#fff" strokeWidth="25" />
            <path d="M4.29 162A75 75 0 0 0 145.71 162H118.3A50 50 0 0 1 31.7 162Z" fill="#fff" />
            <path d="M97 0H150V62H124V37H97Z" fill="#A62E86" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
              Votre marque mérite de grandir.
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.65)" }}>
              <div style={{ width: 18, height: 18, background: "#A62E86", marginRight: 16 }} />
              growth Marketing Agency · Tunis
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
