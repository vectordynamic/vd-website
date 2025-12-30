import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Software Development Services',
  description: 'Custom software, enterprise solutions (CRM, ERP, HRM), AI & automation, and strategic consulting. End-to-end development expertise.',
};

import { services } from '@/lib/data';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            services.map((service) => ({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: service.title,
              description: service.description,
              serviceType: service.tagline,
              provider: {
                '@type': 'Organization',
                name: 'Vector Dynamic',
                url: 'https://vectordynamic.com',
              },
              areaServed: 'Worldwide',
              url: `https://vectordynamic.com${service.href}`,
              offers: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                }
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Features',
                itemListElement: service.features.map((feature) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: feature,
                  },
                })),
              },
            }))
          ),
        }}
      />
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </nav>
          <h1 className={styles.title}>What We Build</h1>
          <p className={styles.subtitle}>
            From enterprise software to AI-powered automation, we deliver solutions that scale with your ambitions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`${styles.serviceCard} ${index % 2 === 1 ? styles.reversed : ''}`}
            >
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <span className={styles.serviceTagline}>{service.tagline}</span>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <ul className={styles.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.technologies}>
                  {service.technologies.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>

                <Button href={service.href} className={styles.serviceButton}>
                  Learn More <ArrowIcon />
                </Button>
              </div>
              
              <div className={styles.serviceVisual}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={400}
                  className={styles.serviceImage}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Not Sure What You Need?</h2>
            <p>Schedule a free consultation and we'll help you identify the right solution for your business.</p>
            <Button href="/contact" size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
