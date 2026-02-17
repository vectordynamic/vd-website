'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './FeaturedProducts.module.css';

import { products } from '@/lib/data';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function FeaturedProducts() {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Our Products</span>
          <h2 className={styles.title}>AI-Powered Solutions</h2>
          <p className={styles.subtitle}>
            Ready-to-deploy products that bring intelligent automation to your business.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`${styles.card} ${styles[product.color]}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.shadowName || product.name}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              <div className={styles.content}>
                <span className={styles.status}>{product.status}</span>
                <h3 className={styles.productName}>{product.shadowName || product.name}</h3>
                <span className={styles.tagline}>{product.tagline}</span>
                <p className={styles.description}>{product.description}</p>

                <ul className={styles.features}>
                  {product.features.slice(0, 5).map((feature, i) => (
                    <li key={i}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={product.href}
                  variant="ghost"
                  fullWidth
                  aria-label={`Learn more about ${product.shadowName || product.name}`}
                >
                  Learn More
                </Button>
              </div>

              <div className={styles.glow}></div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/products" variant="secondary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
