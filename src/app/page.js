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
