import { PageHero, Section, Steps, PracticeRows, MoreLinks, CtaBand } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import { home } from '@/content/home';
import { services } from '@/content/pages';
import { industries } from '@/content/industries';
import { bookHref, auditHref } from '@/content/site';

export const metadata = {
  title: 'Services',
  description:
    'Custom software, ERP and business systems, AI-powered software and agents, and workflow automation—built to scale and kept running.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  const { intro, standard } = services;
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        eyebrow={intro.eyebrow}
        title={intro.title}
        lede={intro.lede}
      >
        <LinkButton href={bookHref} event="cta_click" eventParams={{ location: 'services_hero_book' }}>
          Book a 30-minute discovery call
        </LinkButton>
        <LinkButton href={auditHref} variant="quiet" event="cta_click" eventParams={{ location: 'services_hero_audit' }}>
          Request a free written review
        </LinkButton>
      </PageHero>

      <Section>
        <PracticeRows practices={home.practices} />
      </Section>

      <Section tone="surface" eyebrow="Engineering Standard" title={standard.title}>
        <Steps items={standard.items} />
      </Section>

      <Section id="industries" eyebrow="Vertical Playbooks" title="Systems tailored to high-friction operational industries">
        <MoreLinks items={industries.map((ind) => ({ href: `/for/${ind.slug}`, label: ind.name }))} />
      </Section>

      <CtaBand />
    </>
  );
}
