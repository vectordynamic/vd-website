export const BANNED_WORDS = [
  'streamline',
  'empower',
  'supercharge',
  'unlock',
  'leverage',
  'cutting-edge',
  'world-class',
  'enterprise-grade',
  'seamless',
  'revolutionize',
  'revolutionise',
  'next-gen',
  'synergy',
];

const BANNED_RES = BANNED_WORDS.map(
  (w) => [w, new RegExp(`\\b${w.replace('-', '[-\\s]?')}(?:s|d|ing)?\\b`, 'i')]
);

export function findBannedWords(value, path = 'root') {
  const hits = [];

  if (typeof value === 'string') {
    for (const [word, re] of BANNED_RES) {
      if (re.test(value)) {
        hits.push(`${path} [matched "${word}"]: ${value.slice(0, 120)}`);
      }
    }
    return hits;
  }

  if (Array.isArray(value)) {
    value.forEach((item, idx) => {
      hits.push(...findBannedWords(item, `${path}[${idx}]`));
    });
    return hits;
  }

  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      hits.push(...findBannedWords(v, `${path}.${k}`));
    }
  }

  return hits;
}

