import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0f1c 0%, #111827 60%, #1f2937 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
            }}
          />
          <span style={{ fontSize: '36px', fontWeight: 700 }}>Vector Dynamic</span>
        </div>
        <div
          style={{
            fontSize: '58px',
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: '920px',
            backgroundImage: 'linear-gradient(135deg, #22d3ee 0%, #a78bfa 50%, #e879f9 100%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Enterprise Software &amp; AI Solutions
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#94a3b8',
            marginTop: '28px',
          }}
        >
          Custom Development · AI &amp; Automation · Agency Partnerships
        </div>
      </div>
    ),
    { ...size }
  );
}
