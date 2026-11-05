import { PageHero, Section, CtaBand } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import WorkShowcase from './WorkShowcase';
import { workItems } from '@/content/work';
import { site, bookHref, auditHref } from '@/content/site';
import { jsonLd } from '@/lib/jsonld';

export const metadata = {
  title: 'Work & Engineering Case Studies',
  description:
    'Explore 8 in-depth engineering case studies across multi-entity ERP, autonomous voice agents, omnichannel AI sales, Slack operations, document automation, and quantitative forecasting.',
  alternates: { canonical: '/work' },
};

export default function WorkIndexPage() {
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
        lede="Select any system below to inspect the business bottleneck it solves, what the operation required, its functional modules, four-stage technical pipeline, and the hard engineering problems solved."
      >
        <LinkButton href={bookHref} event="cta_click" eventParams={{ location: 'work_hero_book' }}>
          Book a 30-minute discovery call
        </LinkButton>
        <LinkButton href={auditHref} variant="quiet" event="cta_click" eventParams={{ location: 'work_hero_audit' }}>
          Request a free written review
        </LinkButton>
      </PageHero>

      <Section>
        <WorkShowcase />
      </Section>

      <CtaBand
        title="Dealing with a similar operational bottleneck?"
        body="We architect and deploy custom systems like these around your exact workflow, data stack, and team permissions—with 100% custom code ownership."
      />
    </>
  );
}
