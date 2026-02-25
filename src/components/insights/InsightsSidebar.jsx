'use client';

import styles from '@/app/insights/page.module.css';
import Link from 'next/link';
import GoogleAd from '@/components/ads/GoogleAd';
import { FiTrendingUp, FiMail, FiTag, FiBookOpen } from 'react-icons/fi';

export default function InsightsSidebar({ latestArticles = [] }) {
    return (
        <aside className={styles.sidebarColumn}>
            {/* 1. MUST READ - Dynamic data from API */}
            {latestArticles.length > 0 && (
                <div className={`${styles.sidebarWidget} ${styles.glass}`}>
                    <h3 className={styles.widgetTitle}>
                        <FiBookOpen className={styles.widgetIcon} />
                        Must Read
                    </h3>
                    <div className={styles.mustReadList}>
                        {latestArticles.map((article) => (
                            <Link
                                href={`/insights/${article.slug}`}
                                key={article.id}
                                className={styles.mustReadItem}
                            >
                                <div className={styles.mustReadContent}>
                                    <span className={styles.mustReadCategory}>{article.category || 'Engineering'}</span>
                                    <h4 className={styles.mustReadTitle}>{article.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* 2. SPONSORED - Kept prominent */}
            <div className={`${styles.sidebarWidget} ${styles.adWidget}`}>
                <h3 className={styles.widgetTitle}>
                    <FiTrendingUp className={styles.widgetIcon} />
                    SPONSORED
                </h3>
                <GoogleAd adSlot="0987654321" adFormat="rectangle" fullWidthResponsive={true} />
            </div>

            {/* 3. ABOUT VD */}
            <div className={`${styles.sidebarWidget} ${styles.glass}`}>
                <h3 className={styles.widgetTitle}>ABOUT VD</h3>
                <p className={styles.widgetText}>
                    Learn how we build modern AI systems and scalable apps. We share our engineering journey and thoughts on the future of tech.
                </p>
                <Link href="/about" className={styles.learnMoreLink}>Learn More →</Link>
            </div>
        </aside>
    );
}
