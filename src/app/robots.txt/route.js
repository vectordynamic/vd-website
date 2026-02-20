export async function GET() {
    const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com';

    const body = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE}/sitemap.xml

# Important directives
Disallow: /api/
Disallow: /admin/
`;

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain' },
    });
}
