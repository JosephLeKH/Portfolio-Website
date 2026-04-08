import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Joseph Le — Software engineer, Stanford CS';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Brand primary ≈ hsl(350 80% 55%) */
const accent = '#e8486f';
const bg = '#0c0c0c';
const text = '#fafafa';
const muted = '#a3a3a3';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: bg,
          padding: 72,
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 68, fontWeight: 700, color: text, letterSpacing: '-0.02em' }}>
          Joseph Le
        </div>
        <div style={{ fontSize: 30, color: muted, marginTop: 12, fontWeight: 500 }}>
          Software engineer · Stanford CS
        </div>
        <div
          style={{
            fontSize: 22,
            color: accent,
            marginTop: 36,
            fontWeight: 600,
          }}
        >
          Portfolio, projects & experience
        </div>
      </div>
    ),
    { ...size },
  );
}
