export function createRateLimiter({ limit = 5, windowMs = 600_000 } = {}) {
  const buckets = new Map();

  return {
    check(key, now = Date.now()) {
      const k = key || 'unknown';
      // Opportunistically prune expired entries when map grows
      if (buckets.size > 500) {
        for (const [entryKey, entry] of buckets.entries()) {
          if (now - entry.start >= windowMs) buckets.delete(entryKey);
        }
      }

      const existing = buckets.get(k);
      if (!existing || now - existing.start >= windowMs) {
        buckets.set(k, { start: now, count: 1 });
        return true;
      }

      if (existing.count >= limit) {
        return false;
      }

      existing.count += 1;
      return true;
    },
  };
}

