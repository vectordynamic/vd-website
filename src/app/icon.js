import { ImageResponse } from 'next/og';
import { LOGO_PATHS } from '@/components/brand/Logo';

export const size = { width: 96, height: 96 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#101418', borderRadius: 18 }}>
        <svg width="62" height="62" viewBox="30 8 50 50" fill="#F6F3EC">
          {LOGO_PATHS.map((d) => <path key={d} d={d} />)}
        </svg>
      </div>
    ),
    { ...size }
  );
}
