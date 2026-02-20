/**
 * SyncDaily API Client Wrapper
 * Handles fetching from the Python Backend for the Insights Vlogs and News Aggregation
 */

const API_BASE_URL = 'https://syncdaily-api.vectordynamic.com/api/v1';

/**
 * Fetch a specific Published Article by slug (Internal Vlogs)
 * @param {string} slug 
 * @returns {Promise<any>}
 */
export async function getPublishedArticleBySlug(slug) {
    try {
        const res = await fetch(`${API_BASE_URL}/published/${slug}`, {
            next: { revalidate: 60 }, // Lowered during dev
        });

        if (!res.ok) {
            if (res.status === 404) return null;
            throw new Error(`Failed to fetch article: ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error in getPublishedArticleBySlug:', error);
        return null;
    }
}

/**
 * Fetch the Latest Published Articles (for the Top Hero Carousel/Section)
 * @returns {Promise<any>}
 */
export async function getLatestPublishedArticles(limit = 4) {
    try {
        const res = await fetch(`${API_BASE_URL}/published/?limit=${limit}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch published feed: ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error in getLatestPublishedArticles:', error);
        return { articles: [], total: 0, has_more: false };
    }
}

/**
 * Fetch Published Articles with Pagination (for Infinite Scroll Feed)
 * @param {string} cursor 
 * @param {number} limit 
 * @returns {Promise<any>}
 */
export async function getPublishedArticlesFeed(cursor = null, limit = 12) {
    try {
        const params = new URLSearchParams({ limit });
        if (cursor) params.append('cursor', cursor);

        const res = await fetch(`${API_BASE_URL}/published/?${params.toString()}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch published feed: ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error in getPublishedArticlesFeed:', error);
        return { articles: [], total: 0, next_cursor: null, has_more: false };
    }
}

/**
 * Fetch the Latest External Articles (The News Feed - Client Side primarily via TanStack, but exported here for initial hydration if needed)
 * @param {string} cursor 
 * @param {number} size 
 * @param {string} topic 
 * @returns {Promise<any>}
 */
export async function getRawArticlesNewsFeed(cursor = null, size = 12, topic = '') {
    try {
        const params = new URLSearchParams({ size });
        if (cursor) params.append('cursor', cursor);
        if (topic && topic !== 'All') params.append('topic', topic); // Assuming 'topic' matches 'categories' pill in UI

        const res = await fetch(`${API_BASE_URL}/articles?${params.toString()}`, {
            next: { revalidate: 60 }, // Cache news feed for 1 minute as it changes fast
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch news feed: ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error in getRawArticlesNewsFeed:', error);
        return { items: [], total: 0, next_cursor: null, has_more: false };
    }
}
