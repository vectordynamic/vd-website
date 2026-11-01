import { notFound } from 'next/navigation';
import { PageHero, Section, TwoCol, Rows, Steps, Checklist, Faq, WorkLinks, MoreLinks, CtaBand } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import { home } from '@/content/home';
import { services } from '@/content/pages';
import { site, ctaHref } from '@/content/site';

export function generateStaticParams() {
  return home.practices.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = home.practices.find((x) => x.id === id);
  if (!p) return {};
  return { title: p.title, description: services.details[id].intro, alternates: { canonical: `/services/${id}` } };
}

export default async function ServicePage({ params }) {
  const { id } = await params;
  const practice = home.practices.find((p) => p.id === id);
  if (!practice) notFound();
  const d = services.details[id];
  const work = home.portfolio.items
    .filter((w) => d.work.includes(w.name))
    .map((w) => ({ ...w, status: w.status }));
  const others = home.practices.filter((p) => p.id !== id).map((p) => ({ href: `/services/${p.id}`, label: p.title }));

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: practice.title,
      description: d.intro,
      provider: { '@type': 'Organization', name: site.name, url: site.url },
      areaServed: 'Worldwide',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: d.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: practice.title }]}
        eyebrow="Service"
        title={d.headline}
        lede={d.intro}
      >
        <LinkButton href={ctaHref}>Book a 30-minute systems review</LinkButton>
        <LinkButton href="/#process" variant="quiet">See how we work</LinkButton>
      </PageHero>

      <Section tone="surface" eyebrow="Does this sound familiar?" title="Signs you need this">
        <TwoCol>
          <Checklist items={d.signs} />
          <div>
            <p style={{ fontFamily: 'var(--vd-font-serif), serif', fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--vd-muted)', margin: 0 }}>
              “{practice.trigger}”
            </p>
            {practice.note && <p style={{ color: 'var(--vd-verdigris)', fontWeight: 600, marginTop: '1rem' }}>{practice.note}</p>}
          </div>
        </TwoCol>
      </Section>

      <Section eyebrow="What we build" title="What this covers">
        <Rows items={d.builds} />
      </Section>

      <Section tone="surface" eyebrow="Approach" title="How we approach it">
        <Steps items={d.approach} />
      </Section>

      {work.length > 0 && (
        <Section eyebrow="Built by Vector Dynamic" title="Related work">
          <WorkLinks items={work} />
        </Section>
      )}

      <Section tone="surface" eyebrow="FAQ" title="Common questions">
        <Faq items={d.faq} />
      </Section>

      <Section eyebrow="Also from us" title="Other services">
        <MoreLinks items={others} />
      </Section>
      <CtaBand />
    </>
  );
}
