'use client';

import { useState } from 'react';
import styles from '@/app/insights/page.module.css';
import FeedList from './FeedList';
import InsightsSidebar from './InsightsSidebar';

export default function InsightsFeedHub({ initialBlogData, initialRadarData, categories, latestArticles }) {
    const [activeTab, setActiveTab] = useState('blog'); // 'blog' | 'radar'
    const [activeView, setActiveView] = useState('classic'); // 'classic' | 'grid'

    return (
        <section className={styles.insightsFeedHub}>
            <div className="container">
                {/* Top Navigation Bar: Tabs & View Controls */}
                <div className={styles.feedControls}>
                    <div className={styles.feedTabs}>
                        <button
                            className={`${styles.tabBtn} ${activeTab === 'blog' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('blog')}
                        >
                            Our Blog
                        </button>
                        <button
                            className={`${styles.tabBtn} ${activeTab === 'radar' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('radar')}
                        >
                            Live Tech Radar
                        </button>
                    </div>

                    <div className={styles.viewToggles}>
                        <button
                            className={`${styles.viewBtn} ${activeView === 'classic' ? styles.activeView : ''}`}
                            onClick={() => setActiveView('classic')}
                            title="Classic List"
                            aria-label="Classic List View"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                        </button>
                        <button
                            className={`${styles.viewBtn} ${activeView === 'grid' ? styles.activeView : ''}`}
                            onClick={() => setActiveView('grid')}
                            title="Grid Cards"
                            aria-label="Grid Card View"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        </button>
                    </div>
                </div>

                {/* Main Content Split Area */}
                <div className={`${styles.hubLayout} ${activeView === 'grid' ? styles.hubLayoutGrid : styles.hubLayoutClassic}`}>
                    {/* Left Column: The Feed */}
                    <div className={styles.hubFeedArea}>
                        <FeedList
                            activeTab={activeTab}
                            activeView={activeView}
                            initialBlogData={initialBlogData}
                            initialRadarData={initialRadarData}
                            categories={categories}
                        />
                    </div>

                    {/* Right Column: Sticky Sidebar (Hides on Grid View via CSS) */}
                    <div className={styles.hubSidebarArea} data-lenis-prevent>
                        <InsightsSidebar latestArticles={latestArticles} />
                    </div>
                </div>
            </div>
        </section>
    );
}
