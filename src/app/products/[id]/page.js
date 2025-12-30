import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';
import { products } from '@/lib/data';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.name} | Vector Dynamic`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.status}>{product.status}</div>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.tagline}>{product.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.imagewrapper}>
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={600}
                className={styles.productimage}
                priority
              />
            </div>
            
            <div className={styles.description}>
              <h2>Overview</h2>
              <p>{product.description}</p>
              
              <div className={styles.features}>
                <h3>Key Features</h3>
                <ul className={styles.featureList}>
                  {product.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Interested in {product.name}?</h2>
            <p>
              Join the waitlist or schedule a demo to see how {product.name} can transform your business.
            </p>
            <Button href="/contact" size="lg">
              Request Access
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
