'use client';

import { useState, useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import styles from '@/app/insights/page.module.css';
import { getPublishedArticlesFeed, getRawArticlesNewsFeed } from '@/lib/syncdaily';
import Link from 'next/link';

export default function FeedList({ activeTab, activeView, initialBlogData, initialRadarData, categories }) {
    const observerTarget = useRef(null);
    const [activeCategory, setActiveCategory] = useState('All');

    // 1. TanStack Query for "Our Blog" (Published)
    const {
        data: blogData,
        fetchNextPage: fetchNextBlog,
        hasNextPage: hasNextBlog,
        isFetchingNextPage: isFetchingNextBlog,
    } = useInfiniteQuery({
        queryKey: ['blogFeed'],
        queryFn: async ({ pageParam = null }) => {
            return await getPublishedArticlesFeed(pageParam, 12);
        },
        initialPageParam: null,
        getNextPageParam: (lastPage) => lastPage.next_cursor || undefined,
        initialData: () => ({
            pages: [initialBlogData],
            pageParams: [null],
        }),
    });

    // 2. TanStack Query for "Live Tech Radar" (Articles)
    const {
        data: radarData,
        fetchNextPage: fetchNextRadar,
        hasNextPage: hasNextRadar,
        isFetchingNextPage: isFetchingNextRadar,
    } = useInfiniteQuery({
        queryKey: ['radarFeed', activeCategory],
        queryFn: async ({ pageParam = null }) => {
            const topic = activeCategory === 'All' ? '' : activeCategory;
            return await getRawArticlesNewsFeed(pageParam, 12, topic);
        },
        initialPageParam: null,
        getNextPageParam: (lastPage) => lastPage.next_cursor || undefined,
        initialData: activeCategory === 'All' ? () => ({
            pages: [initialRadarData],
            pageParams: [null],
        }) : undefined,
    });

    // Determine Active Dataset
    const isActiveBlog = activeTab === 'blog';
    const currentData = isActiveBlog ? blogData : radarData;
    const fetchNextPage = isActiveBlog ? fetchNextBlog : fetchNextRadar;
    const hasNextPage = isActiveBlog ? hasNextBlog : hasNextRadar;
    const isFetchingNextPage = isActiveBlog ? isFetchingNextBlog : isFetchingNextRadar;

    // Flatten pages into array of items
    const items = currentData?.pages.flatMap((page) => isActiveBlog ? (page.articles || []) : (page.items || [])) || [];

    // Intersection Observer for Infinite Scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => observer.disconnect();
    }, [hasNextPage, fetchNextPage, isFetchingNextPage, activeTab]);

    return (
        <div className={styles.feedWrapper}>
            {/* Radar Categories - Only show when Radar is active */}
            {!isActiveBlog && (
                <div className={styles.radarCategories}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`${styles.categoryPill} ${activeCategory === category ? styles.active : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            <div className={`${styles.feedFeedList} ${activeView === 'grid' ? styles.feedGrid : styles.feedClassic}`}>
                {items.map((item) => {
                    const id = item.id;
                    const title = item.title;
                    const date = item.published_at || item.ingested_at;
                    const excerpt = item.excerpt || 'Read the full story to learn more...';
                    const imageUrl = item.image_url;
                    // Blog format has "categories", News format has tags mapping or categories if available
                    const firstCategory = item.categories && item.categories.length > 0 ? item.categories[0] : (item.topic || 'Tech News');
                    const linkHref = isActiveBlog ? `/insights/${item.slug}` : item.url;
                    const isExternal = !isActiveBlog;

                    const cardContent = (
                        <>
                            {activeView === 'classic' ? (
                                <>
                                    <div className={styles.classicCardTop}>
                                        <h3 className={styles.cardTitleClassic}>{title}</h3>
                                        <div className={styles.cardMetaClassic}>
                                            <span className={styles.cardDate}>📅 {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            <span className={styles.cardDot}>•</span>
                                            <span className={styles.cardCategory}>🏷️ {firstCategory}</span>
                                        </div>
                                    </div>
                                    {imageUrl && (
                                        <div className={styles.dynamicImageHub}>
                                            <img src={imageUrl} alt={title} loading="lazy" />
                                        </div>
                                    )}
                                    <p className={styles.cardExcerptClassic}>{excerpt}</p>
                                </>
                            ) : (
                                <>
                                    <div className={styles.gridImageWrap}>
                                        {imageUrl ? (
                                            <img src={imageUrl} alt={title} loading="lazy" />
                                        ) : (
                                            <div className={styles.placeholderGlow} />
                                        )}
                                        {isExternal && <div className={styles.externalIcon}>↗</div>}
                                    </div>
                                    <div className={styles.gridCardContent}>
                                        <h4 className={styles.cardTitleGrid}>{title}</h4>
                                        <div className={styles.cardMetaGrid}>
                                            <span>📅 {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <p className={styles.cardExcerptGrid}>{excerpt.substring(0, 100)}...</p>
                                        <span className={styles.cardCategoryGrid}>🏷️ {firstCategory}</span>
                                    </div>
                                </>
                            )}
                        </>
                    );

                    return isExternal ? (
                        <a key={id} href={linkHref} target="_blank" rel="noopener noreferrer" className={activeView === 'classic' ? styles.classicCard : styles.gridCard}>
                            {cardContent}
                        </a>
                    ) : (
                        <Link key={id} href={linkHref} className={activeView === 'classic' ? styles.classicCard : styles.gridCard}>
                            {cardContent}
                        </Link>
                    );
                })}
            </div>

            {/* Loading / End states */}
            <div ref={observerTarget} className={styles.loadingIndicator}>
                {isFetchingNextPage && (
                    <div className={styles.skeletonFeed}>
                        <div className="placeholderGlow" style={{ height: '100px', width: '100%', marginBottom: '1rem', borderRadius: '12px' }} />
                        <div className="placeholderGlow" style={{ height: '100px', width: '100%', marginBottom: '1rem', borderRadius: '12px' }} />
                    </div>
                )}
                {!hasNextPage && items.length > 0 && (
                    <p className={styles.endMessage}>You've reached the end of the line.</p>
                )}
            </div>
        </div>
    );
}
