// Vector Dynamic mark. Uses currentColor so it works on paper and on ink.
export const LOGO_PATHS = [
  'M38.1717 15.6201L32.5935 16.0594L40.3112 46.3753L46.1914 45.7358L38.1717 15.6201Z',
  'M52.5673 16.7111L44.7852 35.7863L46.4201 45.7889L58.9975 17.2284L52.5673 16.7111Z',
  'M55.2352 9.32578C74.8051 12.7187 77.4266 48.7871 47.3402 45.325L49.6558 40.578C75.1133 53.2767 71.0834 10.2033 57.2542 14.5695L55.2352 9.32578Z',
];

// Measured from the path geometry (the original frame was off-centre by ~4 x 5 units).
export const LOGO_BBOX = { cx: 51.28, cy: 27.85, size: 37.4 };

// Square viewBox centred exactly on the mark. `pad` > 1 adds breathing room.
export function logoViewBox(pad = 1.1) {
  const s = LOGO_BBOX.size * pad;
  return `${(LOGO_BBOX.cx - s / 2).toFixed(2)} ${(LOGO_BBOX.cy - s / 2).toFixed(2)} ${s.toFixed(2)} ${s.toFixed(2)}`;
}

export default function Logo({ size = 32, title = 'Vector Dynamic', className }) {
  return (
    <svg width={size} height={size} viewBox={logoViewBox(1.1)} fill="currentColor" role="img" aria-label={title} className={className}>
      <title>{title}</title>
      {LOGO_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
