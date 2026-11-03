import Link from 'next/link';
import { PageHero, Section, CtaBand } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/ui/Reveal';
import { workItems } from '@/content/work';
import { site, bookHref, auditHref } from '@/content/site';
import { jsonLd } from '@/lib/jsonld';
import s from './work.module.css';

export const metadata = {
  title: 'Work & Engineering Case Studies',
  description:
    'Explore production systems, ERP architectures, AI pipelines, and workflow automations engineered and operated by Vector Dynamic.',
  alternates: { canonical: '/work' },
};

export default function WorkIndexPage() {
  const flagship = workItems[0];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Work & Engineering Case Studies — Vector Dynamic',
    url: `${site.url}/work`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: workItems.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        url: `${site.url}/work/${item.slug}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Work' }]}
        eyebrow="Work & Case Studies"
        title="Systems engineered for production—not slide decks."
        lede="Examine the architectures, data pipelines, guardrails, and production lessons behind the software and AI systems built by our own engineering team."
      >
        <LinkButton href={bookHref} event="cta_click" eventParams={{ location: 'work_hero_book' }}>
          Book a 30-minute discovery call
        </LinkButton>
        <LinkButton href={auditHref} variant="quiet" event="cta_click" eventParams={{ location: 'work_hero_audit' }}>
          Request a free written review
        </LinkButton>
      </PageHero>

      <Section>
        {flagship && (
          <Reveal className={s.featured}>
            <div className={s.featuredTop}>
              <span className={s.liveBadge}>
                <span className={s.liveDot} aria-hidden="true" />
                {flagship.clientType}
              </span>
              <span className={s.practiceTag}>{flagship.practiceLabel}</span>
            </div>
            <h2 className={s.featuredTitle}>{flagship.name}: {flagship.headline}</h2>
            <p className={s.featuredSummary}>{flagship.summary}</p>
            <div className={s.miniPipeline}>
              {flagship.architecture.map((st) => (
                <div key={st.stage} className={s.miniStage}>
                  <strong>{st.stage}</strong>
                  {st.detail}
                </div>
              ))}
            </div>
            <LinkButton href={`/work/${flagship.slug}`}>
              Inspect SyncDaily architecture
            </LinkButton>
          </Reveal>
        )}

        <Reveal className={s.cards}>
          {workItems.map((it) => (
            <Link key={it.slug} href={`/work/${it.slug}`} className={s.card}>
              <div>
                <p className={`${s.cardMeta} ${it.isLive ? s.cardMetaLive : ''}`}>
                  {it.clientType}
                </p>
                <h2 className={s.cardName}>{it.name}</h2>
                <p className={s.cardPractice}>{it.practiceLabel}</p>
              </div>
              <div>
                <p className={s.cardHeadline}>{it.headline}</p>
                <p className={s.cardSummary}>{it.summary}</p>
                <div className={s.stackRow}>
                  {it.stack.map((tech) => (
                    <span key={tech} className={s.chip}>{tech}</span>
                  ))}
                </div>
                <span className={s.readMore}>Read architecture case study →</span>
              </div>
            </Link>
          ))}
        </Reveal>
      </Section>

      <CtaBand
        title="Want a system engineered with this discipline?"
        body="Walk through your operational bottleneck with a senior engineer in 30 minutes, or request a free 2–4 page written review."
      />
    </>
  );
}

