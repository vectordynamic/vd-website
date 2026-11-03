'use client';

import { useEffect, useRef } from 'react';

// Staggered fade-up for direct children when scrolled into view.
// Content stays visible in SSR HTML and with JS disabled. Elements already in or above
// the viewport (e.g. anchor jumps or mid-page reloads) are never hidden.
export default function Reveal({ as: Tag = 'div', className, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    el.removeAttribute('data-reveal');

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return undefined;

    const rect = el.getBoundingClientRect();
    // If element is already partially in view or scrolled past above the fold, leave it visible.
    if (rect.top < window.innerHeight * 0.98) return undefined;

    el.dataset.reveal = 'hidden';

    const show = () => {
      if (el.dataset.reveal === 'hidden') {
        el.dataset.reveal = 'shown';
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            show();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -16px 0px' }
    );
    io.observe(el);

    const onHash = () => show();
    window.addEventListener('hashchange', onHash);

    return () => {
      io.disconnect();
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
