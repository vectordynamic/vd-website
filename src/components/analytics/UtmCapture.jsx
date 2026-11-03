'use client';

import { useEffect } from 'react';
import { parseUtm, storeUtm } from '@/lib/utm';

export default function UtmCapture() {
  useEffect(() => {
    try {
      const utm = parseUtm(window.location.search, document.referrer);
      storeUtm(utm, window.sessionStorage);
    } catch {
      // Ignore storage errors
    }
  }, []);

  return null;
}

