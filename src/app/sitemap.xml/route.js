import { site } from '@/content/site';
import { home } from '@/content/home';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://syncdaily-api.vectordynamic.com';
const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET() {
  const staticPaths = [
    '', '/services', ...home.practices.map((p) => `/services/${p.id}`),
    '/audit', '/about', '/partners', '/insights', '/contact', '/privacy', '/terms',
  ];
  const urls = new Map(staticPaths.map((p) => [`${site.url}${p}`, null]));

  // Published articles (dates come from the API, never invented). Duplicates collapse by URL.
  try {
    const res = await fetch(`${API_URL}/api/v1/sitemap/published?chunk=0`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const data = await res.json();
      for (const item of data.items || []) {
        urls.set(`${site.url}/insights/${item.slug}`, item.updated_at || item.published_at || null);
      }
    }
  } catch (e) {
    console.error('Sitemap: could not fetch published articles', e);
  }

  const body = [...urls.entries()]
    .map(([loc, lastmod]) => `  <url><loc>${esc(loc)}</loc>${lastmod ? `<lastmod>${esc(lastmod)}</lastmod>` : ''}</url>`)
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600' },
  });
}
