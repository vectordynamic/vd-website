import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://syncdaily-api.vectordynamic.com';
const SITE_URL = process.env.SITE_URL || 'https://vectordynamic.com';

export async function GET() {
    try {
        // 1. Static Routes
        const staticRoutes = [
            '',
            '/services',
            '/products',
            '/insights',
            '/about',
            '/contact',
            '/privacy',
            '/terms',
        ].map((route) => ({
            url: `${SITE_URL}${route}`,
            lastmod: new Date().toISOString(),
            changefreq: 'daily',
            priority: route === '' ? '1.0' : '0.8',
        }));

        // 2. Fetch Blog Articles (Chunk 0)
        let articleRoutes = [];
        try {
            const artRes = await fetch(`${API_URL}/api/v1/sitemap/articles?chunk=0`, {
                next: { revalidate: 3600 }
            });
            if (artRes.ok) {
                const artData = await artRes.json();
                articleRoutes = (artData.items || []).map((item) => ({
                    url: `${SITE_URL}/insights/${item.slug}`,
                    lastmod: item.updated_at || item.published_at || new Date().toISOString(),
                    changefreq: 'weekly',
                    priority: '0.6',
                }));
            }
        } catch (e) {
            console.error('Error fetching sitemap articles:', e);
        }

        // 3. Fetch Published Posts (Chunk 0)
        let publishedRoutes = [];
        try {
            const pubRes = await fetch(`${API_URL}/api/v1/sitemap/published?chunk=0`, {
                next: { revalidate: 3600 }
            });
            if (pubRes.ok) {
                const pubData = await pubRes.json();
                publishedRoutes = (pubData.items || []).map((item) => ({
                    url: `${SITE_URL}/insights/${item.slug}`,
                    lastmod: item.updated_at || item.published_at || new Date().toISOString(),
                    changefreq: 'weekly',
                    priority: '0.7',
                }));
            }
        } catch (e) {
            console.error('Error fetching sitemap published:', e);
        }

        const allRoutes = [...staticRoutes, ...articleRoutes, ...publishedRoutes];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map((route) => `
    <url>
      <loc>${route.url}</loc>
      <lastmod>${route.lastmod}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

        return new NextResponse(xml, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
            },
        });

    } catch (error) {
        console.error('Sitemap route error:', error);
        return new NextResponse('Error generating sitemap', { status: 500 });
    }
}
