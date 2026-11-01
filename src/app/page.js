import { home } from '@/content/home';
import { site } from '@/content/site';
import { Hero, Problem, Practices, AiBand, Portfolio, Ladder, Process, Engineering, Commitments, Fit, Faq, Closing } from '@/components/home/HomeSections';

export const metadata = {
  title: { absolute: 'Vector Dynamic | Custom Software, ERP and AI, Built to Scale' },
  description: home.hero.lede,
  alternates: { canonical: '/' },
};

const jsonLd = [
  ...home.practices.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.title,
    description: p.summary,
    provider: { '@type': 'Organization', name: site.name, url: site.url },
    areaServed: 'Worldwide',
  })),
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: home.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Problem />
      <Practices />
      <AiBand />
      <Portfolio />
      <Ladder />
      <Process />
      <Engineering />
      <Commitments />
      <Fit />
      <Faq />
      <Closing />
    </>
  );
}
