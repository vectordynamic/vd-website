import { ImageResponse } from 'next/og';
import { LOGO_PATHS, logoViewBox } from '@/components/brand/Logo';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Vector Dynamic: custom software, ERP and AI, built to scale and kept running';

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#F6F3EC', color: '#101418' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="56" height="56" viewBox={logoViewBox(1.1)} fill="#101418">
            {LOGO_PATHS.map((d) => <path key={d} d={d} />)}
          </svg>
          <span style={{ fontSize: 34, fontWeight: 700 }}>Vector Dynamic</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>The software and AI your business runs on.</div>
          <div style={{ fontSize: 30, color: '#3A424B', marginTop: 28 }}>Custom software · ERP · AI · Automation. Built to scale. Kept running.</div>
        </div>
        <div style={{ height: 6, width: 120, background: '#C93D20' }} />
      </div>
    ),
    { ...size }
  );
}
