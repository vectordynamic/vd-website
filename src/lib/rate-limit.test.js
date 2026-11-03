import { describe, it, expect } from 'vitest';
import { createRateLimiter } from './rate-limit';

describe('createRateLimiter', () => {
  it('blocks requests past limit within window and resets after window', () => {
    const limiter = createRateLimiter({ limit: 5, windowMs: 600_000 });
    for (let i = 0; i < 5; i += 1) {
      expect(limiter.check('1.2.3.4', 1000)).toBe(true);
    }
    expect(limiter.check('1.2.3.4', 1000)).toBe(false);
    expect(limiter.check('5.6.7.8', 1000)).toBe(true);
    expect(limiter.check('1.2.3.4', 601_001)).toBe(true);
  });
});

