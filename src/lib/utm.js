const STORAGE_KEY = 'vd-utm';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

export function parseUtm(search = '', referrer = '') {
  const result = {};
  const query = typeof search === 'string' ? search : '';
  const params = new URLSearchParams(query.startsWith('?') ? query.slice(1) : query);

  for (const key of UTM_KEYS) {
    const raw = params.get(key);
    if (raw) {
      const cleaned = raw.trim().slice(0, 100);
      if (cleaned) result[key] = cleaned;
    }
  }

  if (typeof referrer === 'string' && referrer.trim()) {
    result.referrer = referrer.trim().slice(0, 200);
  }

  return result;
}

export function storeUtm(utm, storage) {
  if (!storage || !utm || Object.keys(utm).length === 0) return;
  try {
    const existing = storage.getItem(STORAGE_KEY);
    if (existing) return; // First-touch attribution wins
    storage.setItem(STORAGE_KEY, JSON.stringify(utm));
  } catch {
    // Ignore storage quota or private-mode errors
  }
}

export function readStoredUtm(storage) {
  if (!storage) return {};
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

