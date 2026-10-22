import { ImageResponse } from 'next/og';

export const alt = 'Priya Kushwaha, Software Engineer (SDE I)';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#0B1220', color: '#fff' }}>
        <div style={{ fontSize: 30, color: '#8EE3B0', marginBottom: 24 }}>Open to SDE I roles</div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>Priya Kushwaha</div>
        <div style={{ fontSize: 40, color: '#C9D3EA', marginTop: 24 }}>Software Engineer · MERN · Next.js · Java · Docker · AWS</div>
      </div>
    ),
    size
  );
}
