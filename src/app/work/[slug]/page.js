import { notFound } from 'next/navigation';
import { PageHero, Section, TwoCol, Rows, WorkLinks, CtaBand, Words } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/ui/Reveal';
import { workItems, getWorkBySlug } from '@/content/work';
import { site, bookHref, auditHref } from '@/content/site';
import { jsonLd } from '@/lib/jsonld';
import s from '../work.module.css';

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.name} — ${item.practiceLabel} Case Study`,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  const others = workItems.filter((w) => w.slug !== item.slug);
  const showDemoVideo = item.slug === 'syncdaily' && Boolean(site.demoVideoUrl);

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: `${item.name}: ${item.headline}`,
      description: item.summary,
      author: { '@type': 'Organization', name: site.name, url: site.url },
      publisher: { '@type': 'Organization', name: site.name, url: site.url },
      mainEntityOfPage: `${site.url}/work/${item.slug}`,
      keywords: item.stack.join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Work', item: `${site.url}/work` },
        { '@type': 'ListItem', position: 3, name: item.name, item: `${site.url}/work/${item.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work' },
          { label: item.name },
        ]}
        eyebrow={item.clientType}
        title={`${item.name}: ${item.headline}`}
        lede={item.summary}
      >
        <LinkButton href={bookHref} event="cta_click" eventParams={{ location: `work_${item.slug}_book` }}>
          Book a 30-minute discovery call
        </LinkButton>
        <LinkButton href={`/services/${item.practice}`} variant="quiet">
          Explore {item.practiceLabel}
        </LinkButton>
      </PageHero>

      {showDemoVideo && (
        <Section tone="surface" eyebrow="2-Minute Engineering Walkthrough" title="See the live pipeline in action">
          <div className={s.videoFrameWrap}>
            <iframe
              src={site.demoVideoUrl}
              title={`${item.name} architecture walkthrough`}
              className={s.videoFrame}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </Section>
      )}

      <Section tone="surface" eyebrow="Operational Context">
        <TwoCol>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.1, maxWidth: '17ch', fontWeight: 500, margin: 0 }}>
            <Words text="Why off-the-shelf demos fail this workflow." />
          </h2>
          <div>
            {item.problem.map((p) => (
              <p key={p} style={{ margin: '0 0 1.25rem', color: 'var(--vd-graphite)', fontSize: '1.1rem', maxWidth: '60ch' }}>
                {p}
              </p>
            ))}
          </div>
        </TwoCol>
      </Section>

      <Section tone="ink" eyebrow="System Architecture" title="Four-stage production pipeline">
        <Reveal className={s.pipeline}>
          {item.architecture.map((st) => (
            <div key={st.stage} className={s.stageCard}>
              <h3 className={s.stageTitle}>{st.stage}</h3>
              <p className={s.stageDetail}>{st.detail}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section eyebrow="Key Capabilities & Stack" title="Engineered for reliability and clear handover">
        <Rows items={item.capabilities} />
        <Reveal className={s.stackBand}>
          {item.stack.map((tech) => (
            <span key={tech} className={s.stackChip}>{tech}</span>
          ))}
        </Reveal>
      </Section>

      <Section tone="surface" eyebrow="Production Takeaways" title="Lessons we apply to client builds">
        <Reveal className={s.lessons}>
          {item.lessons.map((lesson, idx) => (
            <div key={lesson} className={s.lessonCard}>
              <p className={s.lessonNum}>Takeaway 0{idx + 1}</p>
              <p className={s.lessonText}>{lesson}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section eyebrow="More Built by Vector Dynamic" title="Other system architectures">
        <WorkLinks items={others} />
      </Section>

      <CtaBand
        title="Facing a similar architecture or workflow bottleneck?"
        body="Request a free 2–4 page written review of your workflow, or talk directly with the engineers who built this system."
        secondaryLabel="Or request a free written systems review"
        secondaryHref={auditHref}
      />
    </>
  );
}
