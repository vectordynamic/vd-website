import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Products',
  description: 'Discover Opsera AI project management, AI Receptionist, and SaaS Inventory Manager. Intelligent products for modern businesses.',
};

const products = [
  {
    id: 'opsera',
    name: 'Opsera',
    tagline: 'Intelligent Project Orchestration',
    description: 'AI-automated project management that seamlessly integrates with Slack, GitHub, Jira, and Trello. Streamline your workflows and boost team productivity.',
    features: [
      'Smart task prioritization & auto-assignment',
      'AI-powered standup summaries',
      'Cross-platform sync (Slack, GitHub, Jira, Trello)',
      'Predictive sprint planning',
      'Automated progress reports',
      'Natural language commands',
    ],
    status: 'Coming Soon',
    image: '/images/opsera-mockup.png',
    href: '/products/opsera',
    color: 'cyan',
  },
  {
    id: 'ai-receptionist',
    name: 'AI Receptionist',
    tagline: 'Your 24/7 Intelligent Front Desk',
    description: 'AI-powered virtual receptionist that handles calls, schedules appointments, and manages customer inquiries around the clock.',
    features: [
      'Natural voice conversations',
      'Appointment scheduling & calendar sync',
      'Call routing & transfer',
      'Multi-language support',
      'CRM integration',
      'Real-time transcription & summaries',
    ],
    status: 'Coming Soon',
    image: '/images/ai-receptionist-mockup.png',
    href: '/products/ai-receptionist',
    color: 'violet',
  },
  {
    id: 'inventory',
    name: 'Inventory Manager',
    tagline: 'Smart Inventory, Zero Hassle',
    description: 'AI-driven inventory management SaaS that helps businesses of all sizes track, forecast, and optimize their inventory operations.',
    features: [
      'Predictive stock forecasting',
      'Automated reorder triggers',
      'Multi-warehouse management',
      'Barcode/QR scanning',
      'Supplier management',
      'Real-time analytics dashboard',
    ],
    status: 'Coming Soon',
    image: '/images/inventory-mockup.png',
    href: '/products/inventory',
    color: 'magenta',
  },
];

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
