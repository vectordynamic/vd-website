#!/usr/bin/env node

// Automated SSR, SEO, Redirect & API Smoke Verification Suite
import { spawn } from 'node:child_process';

const PORT = process.env.SMOKE_PORT || '3105';
const BASE = process.env.SMOKE_BASE_URL || `http://127.0.0.1:${PORT}`;

const HTML_ROUTES = [
  '/',
  '/services',
  '/services/custom-software',
  '/services/erp',
  '/services/ai',
  '/services/automation',
  '/work',
  '/work/syncdaily',
  '/work/okebase',
  '/work/opsera',
  '/work/advantage-ai',
  '/work/ai-receptionist',
  '/how-we-work',
  '/audit',
  '/book',
  '/partners',
  '/about',
  '/contact',
  '/faq',
  '/for/logistics',
  '/for/ecommerce-operations',
  '/for/healthcare-operations',
  '/for/b2b-saas',
  '/insights',
  '/insights/custom-erp-vs-odoo-vs-off-the-shelf-cost-guide',
  '/insights/why-b2b-ai-pilots-stall-before-production',
  '/insights/inside-syncdaily-running-an-autonomous-ai-pipeline',
  '/insights/replacing-the-ten-spreadsheet-back-office',
  '/privacy',
  '/terms',
];

const FORBIDDEN_SNIPPETS = ['adsbygoogle', 'sitemap-news.xml', 'To be anounced'];

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function ensureServer() {
  try {
    const ping = await fetch(`${BASE}/robots.txt`);
    if (ping.ok) return null;
  } catch {
    // Not running yet; spawn local production server inside same namespace
  }

  const child = spawn('./node_modules/.bin/next', ['start', '-p', PORT, '-H', '127.0.0.1'], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Timed out waiting for next start')), 8000);
    child.stdout.on('data', (chunk) => {
      if (String(chunk).includes('Ready')) {
        clearTimeout(timer);
        resolve();
      }
    });
    child.on('error', (err) => {
      clearTimeout(timer);
      reject(err);
    });
  });

  return child;
}

async function runChecks() {
  let failures = 0;
  const fail = (msg) => {
    console.error(`✗ FAIL: ${msg}`);
    failures += 1;
  };
  const pass = (msg) => console.log(`✓ ${msg}`);

  for (const route of HTML_ROUTES) {
    const res = await fetch(`${BASE}${route}`);
    if (res.status !== 200) {
      fail(`${route} returned HTTP ${res.status}`);
      continue;
    }
    const html = await res.text();
    if (!/<h1[\s>]/i.test(html)) {
      fail(`${route} missing <h1> element`);
      continue;
    }
    const visibleText = stripTags(html);
    if (visibleText.length < 400) {
      fail(`${route} SSR visible text too short (${visibleText.length} chars)`);
      continue;
    }
    for (const bad of FORBIDDEN_SNIPPETS) {
      if (html.includes(bad)) {
        fail(`${route} contains forbidden string "${bad}"`);
      }
    }
    pass(`GET ${route} -> 200 OK (<h1> present, ${visibleText.length} SSR chars)`);
  }

  // Check robots.txt, sitemap.xml, llms.txt
  const robots = await fetch(`${BASE}/robots.txt`).then((r) => r.text());
  if (robots.includes('sitemap-news.xml') || !robots.includes('Disallow: /api/')) {
    fail('/robots.txt missing Disallow: /api/ or still has sitemap-news.xml');
  } else {
    pass('GET /robots.txt -> clean (Disallow: /api/, no sitemap-news.xml)');
  }

  const sitemap = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text());
  for (const expected of [
    '/work/syncdaily',
    '/book',
    '/how-we-work',
    '/for/logistics',
    '/insights/custom-erp-vs-odoo-vs-off-the-shelf-cost-guide',
  ]) {
    if (!sitemap.includes(expected)) {
      fail(`/sitemap.xml missing ${expected}`);
    }
  }
  pass('GET /sitemap.xml -> includes all core, case-study, industry & insight URLs');

  const llms = await fetch(`${BASE}/llms.txt`).then((r) => r.text());
  if (!llms.includes('SyncDaily') || !llms.includes('Strategic Partnerships')) {
    fail('/llms.txt missing expected B2B sections');
  } else {
    pass('GET /llms.txt -> includes practice areas, case studies, industries & partnerships');
  }

  const llmsFull = await fetch(`${BASE}/llms-full.txt`).then((r) => r.text());
  if (!llmsFull.includes('Full Technical & Operational Documentation') || !llmsFull.includes('Engagement Ladder')) {
    fail('/llms-full.txt missing expected full technical sections');
  } else {
    pass('GET /llms-full.txt -> serves full markdown architecture, pricing & FAQ documentation');
  }

  // Check redirects
  for (const [from, to] of [
    ['/products', '/work'],
    ['/solutions', '/services'],
    ['/services/custom-development', '/services/custom-software'],
  ]) {
    const r = await fetch(`${BASE}${from}`, { redirect: 'manual' });
    const loc = r.headers.get('location') || '';
    if (![307, 308].includes(r.status) || !loc.endsWith(to)) {
      fail(`Redirect ${from} -> status ${r.status}, location "${loc}" (expected ${to})`);
    } else {
      pass(`REDIRECT ${from} -> ${r.status} ${loc}`);
    }
  }

  // Check API validation & honeypot behavior
  const badApi = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'A', email: 'not-an-email', message: 'short' }),
  });
  if (badApi.status !== 400) {
    fail(`POST /api/contact invalid payload returned ${badApi.status} (expected 400)`);
  } else {
    pass('POST /api/contact (invalid fields) -> 400 validation error');
  }

  const honeypotApi = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Spam Bot',
      email: 'bot@example.com',
      message: 'Automated spam pitch message here.',
      website: 'https://spam-directory.biz',
    }),
  });
  const hpJson = await honeypotApi.json().catch(() => ({}));
  if (honeypotApi.status !== 200 || hpJson.ok !== true) {
    fail(`POST /api/contact honeypot returned ${honeypotApi.status}`);
  } else {
    pass('POST /api/contact (honeypot) -> 200 silent drop');
  }

  if (failures > 0) {
    throw new Error(`Smoke suite failed with ${failures} error(s).`);
  }
  console.log(`\nAll ${HTML_ROUTES.length} HTML routes + SEO endpoints + redirects + API checks passed!`);
}

async function main() {
  const child = await ensureServer();
  try {
    await runChecks();
  } finally {
    if (child) child.kill('SIGTERM');
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
