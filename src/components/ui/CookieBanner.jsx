'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';

const KEY = 'vd-consent';
const subscribe = (cb) => {
  window.addEventListener('vd-consent', cb);
  window.addEventListener('storage', cb);
  return () => { window.removeEventListener('vd-consent', cb); window.removeEventListener('storage', cb); };
};
const read = () => { try { return localStorage.getItem(KEY) || 'unset'; } catch { return 'granted'; } };

// Analytics stays off until the visitor accepts (Google consent mode: denied by default).
export default function CookieBanner() {
  const state = useSyncExternalStore(subscribe, read, () => 'server');
  if (state !== 'unset') return null;

  const choose = (value) => {
    try { localStorage.setItem(KEY, value); } catch {}
    if (value === 'granted' && typeof window.gtag === 'function') window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.dispatchEvent(new Event('vd-consent'));
  };

  return (
    <div className="vd-consent" role="region" aria-label="Cookie notice">
      <p>
        We use analytics cookies to understand how the site is used, only if you agree.{' '}
        <Link href="/privacy">Privacy policy</Link>
      </p>
      <div className="vd-consent__actions">
        <button type="button" className="vd-consent__btn" onClick={() => choose('denied')}>Decline</button>
        <button type="button" className="vd-consent__btn vd-consent__btn--accept" onClick={() => choose('granted')}>Accept</button>
      </div>
    </div>
  );
}
