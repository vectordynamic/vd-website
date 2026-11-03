import { describe, it, expect } from 'vitest';
import { parseUtm, storeUtm, readStoredUtm } from './utm';

describe('utm attribution helpers', () => {
  it('parses allowed utm keys and referrer', () => {
    const parsed = parseUtm('?utm_source=linkedin&utm_medium=dm&ignored=1', 'https://www.linkedin.com/');
    expect(parsed).toEqual({
      utm_source: 'linkedin',
      utm_medium: 'dm',
      referrer: 'https://www.linkedin.com/',
    });
  });

  it('preserves first-touch attribution in storage', () => {
    const map = new Map();
    const storage = {
      getItem: (k) => map.get(k) ?? null,
      setItem: (k, v) => map.set(k, v),
    };

    storeUtm({ utm_source: 'linkedin' }, storage);
    storeUtm({ utm_source: 'cold_email' }, storage);

    expect(readStoredUtm(storage)).toEqual({ utm_source: 'linkedin' });
  });

  it('handles storage errors gracefully', () => {
    const broken = {
      getItem: () => { throw new Error('blocked'); },
      setItem: () => { throw new Error('blocked'); },
    };
    expect(() => storeUtm({ utm_source: 'x' }, broken)).not.toThrow();
    expect(readStoredUtm(broken)).toEqual({});
  });
});

