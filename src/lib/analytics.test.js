import { describe, it, expect, vi, afterEach } from 'vitest';
import { trackEvent } from './analytics';

describe('trackEvent', () => {
  afterEach(() => {
    delete globalThis.window;
  });

  it('calls window.gtag when available and never throws when absent', () => {
    expect(() => trackEvent('cta_click', { location: 'hero' })).not.toThrow();

    const gtag = vi.fn();
    globalThis.window = { gtag };
    trackEvent('audit_submitted', { utm_source: 'linkedin' });
    expect(gtag).toHaveBeenCalledWith('event', 'audit_submitted', { utm_source: 'linkedin' });
  });
});

