import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://syncdaily-api.vectordynamic.com';
const SITE_URL = process.env.SITE_URL || 'https://vectordynamic.com';
const PUBLICATION_NAME = process.env.PUBLICATION_NAME || "SyncDaily News";

export async function GET() {
    try {
        const res = await fetch(`${API_URL}/api/v1/sitemap/news`, {
            next: { revalidate: 900 }, // Cache for 15 minutes
        });

        if (!res.ok) {
            console.error('News sitemap fetch failed:', res.status);
            return new NextResponse('Error fetching news data', { status: 500 });
        }

        const data = await res.json();
        const items = data.items || [];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${items.map((item) => `
    <url>
      <loc>${SITE_URL}/insights/${item.slug}</loc>
      <news:news>
        <news:publication>
          <news:name>${PUBLICATION_NAME}</news:name>
          <news:language>en</news:language>
        </news:publication>
        <news:publication_date>${item.published_at || new Date().toISOString()}</news:publication_date>
        <news:title>${(item.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:title>
      </news:news>
      ${item.image_url ? `
      <image:image>
        <image:loc>${item.image_url}</image:loc>
      </image:image>` : ''}
    </url>
  `).join('')}
</urlset>`;

        return new NextResponse(xml, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=600',
            },
        });
    } catch (error) {
        console.error('News sitemap generation error:', error);
        return new NextResponse('Error generating news sitemap', { status: 500 });
    }
}
