import { notFound } from 'next/navigation';
import Image from 'next/image';
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
    title: `${item.name} — ${item.domainBadge} Case Study`,
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
        eyebrow={item.domainBadge}
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

      {item.image && (
        <Section tone="surface" eyebrow="System Architecture Schematic">
          <Reveal>
            <div className={s.archImageCard}>
              <Image
                src={item.image}
                alt={item.alt || `${item.name} architecture schematic`}
                width={1200}
                height={670}
                priority
                sizes="(max-width: 900px) 100vw, 1120px"
                className={s.archImage}
              />
            </div>
          </Reveal>
        </Section>
      )}

      {showDemoVideo && (
        <Section tone="surface" eyebrow="2-Minute Engineering Walkthrough" title="See the pipeline in action">
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

      <Section eyebrow="The Business Pain Point & Operational Requirements">
        <TwoCol>
          <div>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)', lineHeight: 1.12, maxWidth: '18ch', fontWeight: 500, margin: '0 0 1.5rem' }}>
              <Words text="Why off-the-shelf software breaks under this workflow." />
            </h2>
            {item.problem.map((p) => (
              <p key={p} style={{ margin: '0 0 1.25rem', color: 'var(--vd-graphite)', fontSize: '1.06rem', lineHeight: 1.68, maxWidth: '60ch' }}>
                {p}
              </p>
            ))}
          </div>
          {item.businessNeeds && item.businessNeeds.length > 0 && (
            <div className={s.needsBox}>
              <p className={s.needsLabel}>What the operation required</p>
              <ul className={s.needsList}>
                {item.businessNeeds.map((need, i) => (
                  <li key={need} className={s.needsItem}>
                    <span className={s.needsNum}>0{i + 1}</span>
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </TwoCol>
      </Section>

      <Section tone="surface" eyebrow="In-Depth Features & Functional Modules" title="What the system does in production">
        <Rows items={item.features} />
      </Section>

      <Section tone="ink" eyebrow="Technical Architecture" title="Four-stage production pipeline">
        <Reveal className={s.pipeline}>
          {item.architecture.map((st, idx) => (
            <div key={st.stage} className={s.stageCard}>
              <span className={s.stageStep}>STAGE 0{idx + 1}</span>
              <h3 className={s.stageTitle}>{st.stage}</h3>
              <p className={s.stageDetail}>{st.detail}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section eyebrow="Engineering Complexity & Stack" title="Hard technical problems solved under the hood">
        <Rows items={item.complexities} />
        <Reveal className={s.stackBand}>
          {item.stack.map((tech) => (
            <span key={tech} className={s.stackChip}>{tech}</span>
          ))}
        </Reveal>
      </Section>

      {item.lessons && item.lessons.length > 0 && (
        <Section tone="surface" eyebrow="Architectural Takeaways" title="Principles we carry into every custom deployment">
          <Reveal className={s.lessons}>
            {item.lessons.map((lesson, idx) => (
              <div key={lesson} className={s.lessonCard}>
                <p className={s.lessonNum}>Principle 0{idx + 1}</p>
                <p className={s.lessonText}>{lesson}</p>
              </div>
            ))}
          </Reveal>
        </Section>
      )}

      <Section eyebrow="Explore More Case Studies" title="Other systems we have architected">
        <WorkLinks items={others} />
      </Section>

      <CtaBand
        title="Dealing with a similar operational bottleneck?"
        body="We architect and deploy custom systems like this tailored to your workflow—or send you a free 2–4 page written systems review within 48 hours."
        secondaryLabel="Or request a free written systems review"
        secondaryHref={auditHref}
      />
    </>
  );
}
