'use client';

import Link from 'next/link';
import styles from '@/app/insights/[slug]/page.module.css';
import GoogleAd from '@/components/ads/GoogleAd';

export default function ArticleSidebar({ article }) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Share Article</h3>
                <div className="flex gap-4">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/insights/${article.slug}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm glass">Twitter / X</a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/insights/${article.slug}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm glass">LinkedIn</a>
                </div>
            </div>

            {article.tags && article.tags.length > 0 && (
                <div className={styles.sidebarWidget}>
                    <h3 className={styles.widgetTitle}>Topics</h3>
                    <div className={styles.topicsList}>
                        {article.tags.map(tag => (
                            <span key={tag} className={styles.topicPill}>#{tag}</span>
                        ))}
                    </div>
                </div>
            )}

            {article.sources && article.sources.length > 0 && (
                <div className={styles.sidebarWidget}>
                    <h3 className={styles.widgetTitle}>References & Sources</h3>
                    <div className={styles.sourcesList}>
                        {article.sources.map((src, i) => (
                            <a key={i} href={src.url || '#'} target="_blank" rel="noopener noreferrer" className={styles.sourceItem}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                {src.name || src.source_id || 'External Reference'}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Sponsored</h3>
                <GoogleAd adSlot="1234567890" adFormat="rectangle" fullWidthResponsive={true} />
            </div>
        </aside>
    );
}
