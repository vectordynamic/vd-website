import { PageHero, Section, Rows, Steps, Checklist, TwoCol, CtaBand } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import { partners } from '@/content/pages';

export const metadata = {
  title: 'Agency Partners',
  description: partners.hero.lede,
  alternates: { canonical: '/partners' },
};

export default function PartnersPage() {
  const { hero, offers, how, commitments, fit } = partners;
  return (
    <>
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Agency partners' }]} eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede}>
        <LinkButton href="/contact">Talk about a partnership</LinkButton>
      </PageHero>
      <Section tone="surface" eyebrow="Ways to work together" title={offers.title}>
        <Rows items={offers.items} />
      </Section>
      <Section eyebrow="Getting started" title={how.title}>
        <Steps items={how.items} />
      </Section>
      <Section tone="surface" eyebrow="Commitments" title={commitments.title}>
        <Checklist items={commitments.items} />
      </Section>
      <Section eyebrow="Fit" title="Who this suits">
        <TwoCol>
          <Checklist title="A good fit" items={fit.good} />
          <Checklist title="Not a fit" items={fit.bad} tone="bad" />
        </TwoCol>
      </Section>
      <CtaBand title="Have a project that needs extra hands?" body="Tell us about it. We will reply within one business day, starting with an NDA if you prefer." label="Talk about a partnership" href="/contact" />
    </>
  );
}
