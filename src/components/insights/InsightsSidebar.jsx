'use client';

import styles from '@/app/insights/page.module.css';
import Link from 'next/link';

export default function InsightsSidebar() {
    return (
        <aside className={styles.sidebarColumn}>
            <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>ABOUT VECTOR DYNAMIC</h3>
                <p className={styles.widgetText}>
                    Learn how we build modern AI systems and scalable apps. We share our engineering journey, tutorials, and thoughts on the future of tech.
                </p>
            </div>

            <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>📰 NEWSLETTER</h3>
                <p className={styles.widgetText}>Subscribe to our daily engineering updates.</p>
                <form className={styles.sidebarForm}>
                    <input type="email" placeholder="Email address" className={styles.sidebarInput} required />
                    <button type="submit" className={styles.sidebarBtn}>Go</button>
                </form>
            </div>

            <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>🏷️ POPULAR TOPICS</h3>
                <div className={styles.sidebarTags}>
                    <span className={styles.sidebarTag}>#Cloud</span>
                    <span className={styles.sidebarTag}>#Coding</span>
                    <span className={styles.sidebarTag}>#AI</span>
                    <span className={styles.sidebarTag}>#Startups</span>
                    <span className={styles.sidebarTag}>#Hardware</span>
                </div>
            </div>

            <div className={`${styles.sidebarWidget} ${styles.sponsoredWidget}`}>
                <h3 className={styles.widgetTitle}>🎯 SPONSORED / HIRE US</h3>
                <p className={styles.widgetText}>Need custom software? Let's build your next AI MVP in 30 days.</p>
                <Link href="/contact" className={styles.sponsorBtn}>Contact Us</Link>
            </div>
        </aside>
    );
}
