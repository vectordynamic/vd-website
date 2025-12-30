import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';
import { services } from '@/lib/data';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Vector Dynamic`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServicePage({ params }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.tagline}>{service.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.description}>
              <h2>Our Approach</h2>
              <p>{service.description}</p>
              
              <div className={styles.features}>
                <h3>Capabilities</h3>
                <ul className={styles.featureList}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

               <div className={styles.technologies}>
                <h3>Technologies We Use</h3>
                <div className={styles.techGrid}>
                  {service.technologies.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

             <div className={styles.imagewrapper}>
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={600}
                className={styles.serviceimage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Build?</h2>
            <p>
              Let's discuss how our {service.title} expertise can solve your specific business challenges.
            </p>
            <Button href="/contact" size="lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
