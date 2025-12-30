import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Products',
  description: 'Discover Opsera AI project management, AI Receptionist, and SaaS Inventory Manager. Intelligent products for modern businesses.',
};

import { products } from '@/lib/data';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </nav>
          <h1 className={styles.title}>Our AI-Powered Products</h1>
          <p className={styles.subtitle}>
            Ready-to-deploy solutions that bring intelligent automation to your business operations.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className={styles.products}>
        <div className="container">
          <div className={styles.grid}>
            {products.map((product) => (
              <div key={product.id} className={`${styles.productCard} ${styles[product.color]}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={250}
                    className={styles.productImage}
                  />
                </div>
                
                <div className={styles.cardContent}>
                  <span className={styles.status}>{product.status}</span>
                  <span className={styles.tagline}>{product.tagline}</span>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <p className={styles.productDescription}>{product.description}</p>
                  
                  <ul className={styles.features}>
                    {product.features.map((feature, i) => (
                      <li key={i}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cardFooter}>
                    <Button href={product.href} variant="gradient-outline" fullWidth>
                      Learn More
                    </Button>
                  </div>
                </div>
                
                <div className={styles.glow}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Need a Custom Product?</h2>
            <p>
              Our products are just the beginning. We can build custom AI-powered solutions 
              tailored specifically to your business needs.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contact" size="lg">
                Start a Conversation
              </Button>
              <Button href="/services" variant="ghost" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
