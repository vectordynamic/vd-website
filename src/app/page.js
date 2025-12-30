import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyUs from '@/components/sections/WhyUs';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import ProcessSection from '@/components/sections/ProcessSection';
import CTABanner from '@/components/sections/CTABanner';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Opsera',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Recall',
              description: 'Complete Project & Team Orchestration tool for enterprise management.',
              url: 'https://vectordynamic.com/products/opsera',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/ComingSoon',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Okebase',
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'Recall',
              description: 'The All-in-One Business OS for inventory, employee records, and financial analytics.',
              url: 'https://vectordynamic.com/products/okebase',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/ComingSoon',
              },
            }
          ]),
        }}
      />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyUs />
      <FeaturedProducts />
      <ProcessSection />
      <CTABanner />
    </div>
  );
}
