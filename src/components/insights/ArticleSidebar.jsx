'use client';

import Link from 'next/link';
import styles from '@/app/insights/[slug]/page.module.css';
import { FiTrendingUp, FiBookOpen, FiShare2, FiLink, FiExternalLink } from 'react-icons/fi';

export default function ArticleSidebar({ article, latestArticles = [] }) {
    // Filter out current article from latest list
    const mustReads = latestArticles.filter(a => a.slug !== article.slug).slice(0, 3);

    return (
        <aside className={styles.sidebar}>
            {/* 1. MUST READ (Latest Insights) */}
            {mustReads.length > 0 && (
                <div className={`${styles.sidebarWidget} ${styles.glass}`}>
                    <h3 className={styles.widgetTitle}>
                        <FiBookOpen className={styles.widgetIcon} />
                        Must Read
                    </h3>
                    <div className={styles.mustReadList}>
                        {mustReads.map((item) => (
                            <Link
                                href={`/insights/${item.slug}`}
                                key={item.id}
                                className={styles.mustReadItem}
                            >
                                <span className={styles.mustReadCategory}>{item.category || 'Engineering'}</span>
                                <h4 className={styles.mustReadTitle}>{item.title}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
}
