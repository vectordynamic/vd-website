'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import s from './sticky-cta.module.css';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show when scrolled past 400px (beyond hero)
      const scrolled = window.scrollY > 400;
      setVisible(scrolled);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside className={s.bar} aria-label="Quick contact actions">
      <div className={s.inner}>
        <div className={s.copy}>
          <span className={s.title}>Vector Dynamic</span>
          <span className={s.sub}>Custom software &amp; AI</span>
        </div>
        <div className={s.actions}>
          <Link href="/audit" className={s.auditLink}>
            Free review
          </Link>
          <Link href="/book" className={s.bookBtn}>
            Book a call
          </Link>
        </div>
      </div>
    </aside>
  );
}

