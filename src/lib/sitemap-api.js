const API = 'https://syncdaily-api.vectordynamic.com';

export async function fetchSitemapIndex() {
    const res = await fetch(`${API}/api/v1/sitemap/index`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) return { article_chunks: 1, published_chunks: 1 }; // graceful fallback
    return res.json();
}

export async function fetchSitemapPublished(chunk) {
    const res = await fetch(`${API}/api/v1/sitemap/published?chunk=${chunk}`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) return { items: [] };
    return res.json();
}

export async function fetchSitemapNews() {
    const res = await fetch(`${API}/api/v1/sitemap/news`, {
        next: { revalidate: 900 }, // Cache for 15 mins
    });
    if (!res.ok) return { items: [] };
    return res.json();
}
