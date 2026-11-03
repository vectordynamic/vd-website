import ArticleCard from './ArticleCard';
import Reveal from '@/components/ui/Reveal';
import s from './insights.module.css';

export default function ArticleGrid({ articles = [] }) {
  if (articles.length === 0) {
    return (
      <p className={s.empty}>
        We are preparing new engineering guides. In the meantime, if you have a system in mind, request a free written Systems Review.
      </p>
    );
  }

  return (
    <Reveal className={s.grid}>
      {articles.map((a) => (
        <ArticleCard key={a.id || a.slug} article={a} />
      ))}
    </Reveal>
  );
}
