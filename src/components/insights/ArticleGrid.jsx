'use client';

import { useState } from 'react';
import ArticleCard from './ArticleCard';
import Reveal from '@/components/ui/Reveal';
import { getPublishedArticlesFeed } from '@/lib/syncdaily';
import s from './insights.module.css';

export default function ArticleGrid({ initial }) {
  const [items, setItems] = useState(initial.articles || []);
  const [cursor, setCursor] = useState(initial.next_cursor || null);
  const [hasMore, setHasMore] = useState(Boolean(initial.has_more));
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    const res = await getPublishedArticlesFeed(cursor, 12);
    setItems((prev) => [...prev, ...(res.articles || [])]);
    setCursor(res.next_cursor || null);
    setHasMore(Boolean(res.has_more));
    setLoading(false);
  };

  if (items.length === 0) {
    return (
      <p className={s.empty}>
        We are preparing our first articles. In the meantime, if you have a system in mind, we would be glad to hear about it.
      </p>
    );
  }

  return (
    <>
      <Reveal className={s.grid}>
        {items.map((a) => <ArticleCard key={a.id || a.slug} article={a} />)}
      </Reveal>
      <div className={s.more}>
        {hasMore ? (
          <button type="button" className={s.moreBtn} onClick={loadMore} disabled={loading}>
            {loading ? 'Loading…' : 'Load more articles'}
          </button>
        ) : (
          <span className={s.end}>You are all caught up</span>
        )}
      </div>
    </>
  );
}
