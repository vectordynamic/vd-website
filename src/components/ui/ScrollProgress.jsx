'use client';

import { useEffect, useRef } from 'react';

// Thin accent line at the top of the viewport showing reading progress.
// Uses native CSS animation-timeline: scroll() when supported; attaches a JS fallback otherwise.
export default function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    if (typeof CSS !== 'undefined' && CSS.supports?.('animation-timeline', 'scroll()')) {
      return undefined;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = bar.current;
      if (!el) return;
      const d = document.documentElement;
      const max = d.scrollHeight - d.clientHeight;
      el.style.transform = `scaleX(${max > 0 ? Math.min(1, d.scrollTop / max) : 0})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="vd-progress" aria-hidden="true">
      <div ref={bar} className="vd-progress__bar" />
    </div>
  );
}
