import { fetchSitemapPublished } from '@/lib/sitemap-api';

export async function GET(request, { params }) {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL;

  // Await the params to safely access chunk
  const resolvedParams = await params;
  const chunkIndex = resolvedParams.chunk;

  // In production, we assume chunks are 0, 1, 2, etc. (e.g. 1000 items each)
  const data = await fetchSitemapPublished(chunkIndex);

  const urls = (data.items || []).map((item) => `
    <url>
      <loc>${SITE}/insights/${item.slug}</loc>
      <lastmod>${item.updated_at || item.published_at || new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${item.priority || 0.8}</priority>
    </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
