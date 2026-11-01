import { PageHero, Section, Steps, PracticeRows, CtaBand } from '@/components/page/Page';
import { home } from '@/content/home';
import { services } from '@/content/pages';

export const metadata = {
  title: 'Services',
  description: 'Custom software, ERP and business systems, AI-powered software and agents, and workflow automation, built to scale and kept running.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  const { intro, standard } = services;
  return (
    <>
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} eyebrow={intro.eyebrow} title={intro.title} lede={intro.lede} />
      <Section>
        <PracticeRows practices={home.practices} />
      </Section>
      <Section tone="surface" eyebrow="Engineering" title={standard.title}>
        <Steps items={standard.items} />
      </Section>
      <CtaBand />
    </>
  );
}
