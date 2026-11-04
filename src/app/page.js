import { home } from '@/content/home';
import { site } from '@/content/site';
import { jsonLd } from '@/lib/jsonld';
import { Hero, Problem, Guide, Practices, FeaturedWork, Plan, Faq, Closing } from '@/components/home/HomeSections';
import StickyCta from '@/components/ui/StickyCta';

export const metadata = {
  title: { absolute: 'Vector Dynamic | Custom Software and AI That Runs Your Operations' },
  description: home.hero.lede,
  alternates: { canonical: '/' },
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: home.hero.lede,
    url: site.url,
    areaServed: 'Worldwide',
    priceRange: '$$$$',
  },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <Hero />
      <Problem />
      <Guide />
      <Practices />
      <FeaturedWork />
      <Plan />
      <Faq />
      <Closing />
      <StickyCta />
    </>
  );
}
