import { notFound } from 'next/navigation';
import { PageHero, Section, Rows, Checklist, WorkLinks, MoreLinks, Words } from '@/components/page/Page';
import InquiryForm from '@/components/forms/InquiryForm';
import LinkButton from '@/components/ui/LinkButton';
import { industries, getIndustryBySlug } from '@/content/industries';
import { workItems } from '@/content/work';
import { site, bookHref } from '@/content/site';
import { jsonLd } from '@/lib/jsonld';
import f from '@/components/forms/forms.module.css';

export function generateStaticParams() {
  return industries.map((ind) => ({ industry: ind.slug }));
}

export async function generateMetadata({ params }) {
  const { industry } = await params;
  const ind = getIndustryBySlug(industry);
  if (!ind) return {};
  return {
    title: `${ind.name} — Custom Software, ERP & AI Automation`,
    description: ind.lede,
    alternates: { canonical: `/for/${ind.slug}` },
  };
}

export default async function IndustryPage({ params }) {
  const { industry } = await params;
  const ind = getIndustryBySlug(industry);
  if (!ind) notFound();

  const relatedWork = workItems.filter((w) => ind.relatedWork.includes(w.slug));
  const otherIndustries = industries
    .filter((x) => x.slug !== ind.slug)
    .map((x) => ({ href: `/for/${x.slug}`, label: x.name }));

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${ind.eyebrow} — Vector Dynamic`,
      description: ind.lede,
      provider: { '@type': 'Organization', name: site.name, url: site.url },
      areaServed: 'Worldwide',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
        { '@type': 'ListItem', position: 3, name: ind.name, item: `${site.url}/for/${ind.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: ind.name },
        ]}
        eyebrow={ind.eyebrow}
        title={ind.headline}
        lede={ind.lede}
      >
        <LinkButton href="#review" event="cta_click" eventParams={{ location: `industry_${ind.slug}_review` }}>
          Request a free written review
        </LinkButton>
        <LinkButton href={bookHref} variant="quiet" event="cta_click" eventParams={{ location: `industry_${ind.slug}_book` }}>
          Or book a 30-minute discovery call
        </LinkButton>
      </PageHero>

      <Section tone="surface" eyebrow="Operational Bottlenecks" title="Where hours and margin leak most often">
        <Checklist items={ind.pains} tone="bad" />
      </Section>

      <Section eyebrow="What We Engineer" title={`Production systems built for ${ind.name}`}>
        <Rows items={ind.solutions} />
      </Section>

      {relatedWork.length > 0 && (
        <Section tone="surface" eyebrow="Architecture Proof" title="Related systems built by Vector Dynamic">
          <WorkLinks items={relatedWork} />
        </Section>
      )}

      <section id="review" style={{ paddingBlock: 'var(--vd-section)', borderTop: '1px solid var(--vd-rule)' }}>
        <div className="vd-container">
          <div className={f.grid}>
            <div>
              <p className={f.eyebrow}>Free Systems Review · {ind.name}</p>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.1, maxWidth: '17ch', fontWeight: 500, margin: '0 0 1.25rem' }}>
                <Words text="Send us one bottleneck. Receive a written engineering plan." />
              </h2>
              <p className={f.lede}>{ind.auditOffer}</p>
              <ul className={f.ul}>
                <li>2–4 page written engineering review scoped to your workflow</li>
                <li>Honest build-vs-buy verdict before writing custom code</li>
                <li>Three quick wins plus a milestone and commercial estimate</li>
              </ul>
            </div>

            <InquiryForm variant="audit" />
          </div>
        </div>
      </section>

      <Section tone="surface" eyebrow="Other Verticals" title="Explore other industry playbooks">
        <MoreLinks items={otherIndustries} />
      </Section>
    </>
  );
}

