import { notFound } from 'next/navigation';
import { jsonLd } from '@/lib/jsonld';
import { PageHero, Section, TwoCol, Rows, Steps, Checklist, Faq, WorkLinks, MoreLinks, CtaBand } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import { home } from '@/content/home';
import { services } from '@/content/pages';
import { workItems } from '@/content/work';
import { industries } from '@/content/industries';
import { site, bookHref } from '@/content/site';

export function generateStaticParams() {
  return home.practices.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = home.practices.find((x) => x.id === id);
  if (!p) return {};
  return {
    title: p.title,
    description: services.details[id].intro,
    alternates: { canonical: `/services/${id}` },
  };
}

export default async function ServicePage({ params }) {
  const { id } = await params;
  const practice = home.practices.find((p) => p.id === id);
  if (!practice) notFound();

  const d = services.details[id];
  const work = workItems.filter((w) => d.work.includes(w.slug));
  const relatedVerticals = industries
    .filter((ind) => (d.verticals || []).includes(ind.slug))
    .map((ind) => ({ href: `/for/${ind.slug}`, label: ind.name }));
  const others = home.practices
    .filter((p) => p.id !== id)
    .map((p) => ({ href: `/services/${p.id}`, label: p.title }));

  const structuredData = [
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
      mainEntity: d.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: practice.title },
        ]}
        eyebrow="Practice Area"
        title={d.headline}
        lede={d.intro}
      >
        <LinkButton href={bookHref} event="cta_click" eventParams={{ location: `service_${id}_book` }}>
          Book a 30-minute discovery call
        </LinkButton>
        <LinkButton href="/how-we-work" variant="quiet">
          See how we work
        </LinkButton>
      </PageHero>

      <Section tone="surface" eyebrow="Does this sound familiar?" title="Signs you have outgrown your current setup">
        <TwoCol>
          <Checklist items={d.signs} />
          <div>
            <p style={{ fontFamily: 'var(--vd-font-serif), serif', fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--vd-muted)', margin: 0 }}>
              “{practice.trigger}”
            </p>
            {practice.note && (
              <p style={{ color: 'var(--vd-verdigris)', fontWeight: 600, marginTop: '1rem' }}>
                {practice.note}
              </p>
            )}
          </div>
        </TwoCol>
      </Section>

      <Section eyebrow="What we build" title="Capabilities inside this practice">
        <Rows items={d.builds} />
      </Section>

      <Section tone="surface" eyebrow="Execution" title="How we deliver without surprises">
        <Steps items={d.approach} />
      </Section>

      {work.length > 0 && (
        <Section eyebrow="Built by Vector Dynamic" title="Related engineering case studies">
          <WorkLinks items={work} />
        </Section>
      )}

      {relatedVerticals.length > 0 && (
        <Section tone="surface" eyebrow="Industry Playbooks" title="Where teams apply this most">
          <MoreLinks items={relatedVerticals} />
        </Section>
      )}

      <Section eyebrow="FAQ" title="Questions buyers ask about this practice">
        <Faq items={d.faq} />
      </Section>

      <Section tone="surface" eyebrow="Explore further" title="Other practice areas">
        <MoreLinks items={others} />
      </Section>

      <CtaBand />
    </>
  );
}
