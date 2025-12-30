'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './FeaturedProducts.module.css';

const products = [
  {
    id: 'opsera',
    name: 'Opsera',
    tagline: 'Complete Project & Team Orchestration',
    description: 'The ultimate project management tool. Automate deadlines, track employee performance, push smart notifications, and streamline delivery from one hub.',
    features: ['Employee Tracking', 'Deadline Automation', 'Smart Notifications'],
    image: '/images/opsera-mockup.png',
    href: '/products/opsera',
    color: 'cyan',
    status: 'Coming Soon',
  },
  {
    id: 'ai-receptionist',
    name: 'AI Receptionist',
    tagline: '24/7 Intelligent Front Desk',
    description: 'AI-powered virtual receptionist for calls, appointments, and customer inquiries. Never miss a lead again.',
    features: ['Natural Voice AI', 'Appointment Scheduling', 'Multi-Language Support'],
    image: '/images/ai-receptionist-mockup.png',
    href: '/products/ai-receptionist',
    color: 'violet',
    status: 'Coming Soon',
  },
  {
    id: 'okebase',
    name: 'Okebase',
    tagline: 'The All-in-One Business OS',
    description: 'Beyond inventory. Manage your entire business: Employee records, Product sales, financial reporting, and real-time Profit & Loss analytics.',
    features: ['Real-time P&L', 'Sales & Inventory', 'Employee Management'],
    image: '/images/okebase-mockup.png',
    href: '/products/okebase',
    color: 'magenta',
    status: 'Coming Soon',
  },
  {
    id: 'amardera',
    name: 'Amardera',
    tagline: 'Smart Bachelor Home Management',
    description: 'The automated solution for shared living. Track meals, split bazaar expenses, manage utility bills, and harmonize shared flat life.',
    features: ['Meal Management', 'Expense Splitting', 'Bazaar Tracking'],
    image: '/images/amardera-mockup.png',
    href: '/products/amardera',
    color: 'violet',
    status: 'Coming Soon',
  },
  {
    id: 'sync-daily',
    name: 'Sync Daily',
    tagline: 'AI-Curated Tech Intelligence',
    description: 'Next-gen newsletter and blog platform. Get the latest AI and tech news, curated, summarized, and delivered by intelligent algorithms.',
    features: ['AI Summaries', 'Tech News Aggregator', 'Smart Newsletter'],
    image: '/images/syncdaily-mockup.png',
    href: '/products/sync-daily',
    color: 'cyan',
    status: 'Coming Soon',
  },
  {
    id: 'advantage-ai',
    name: 'AdVantage AI',
    tagline: 'Marketing Campaign Autopilot',
    description: 'End-to-end marketing automation. From AI content planning to launching and optimizing high-conversion Meta campaigns.',
    features: ['Auto-Run Meta Ads', 'Content Strategy', 'ROI Analytics'],
    image: '/images/marketing-mockup.png',
    href: '/products/marketing',
    color: 'magenta',
    status: 'Coming Soon',
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
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
                  alt={product.name}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.content}>
                <span className={styles.status}>{product.status}</span>
                <h3 className={styles.productName}>{product.name}</h3>
                <span className={styles.tagline}>{product.tagline}</span>
                <p className={styles.description}>{product.description}</p>
                
                <ul className={styles.features}>
                  {product.features.map((feature, i) => (
                    <li key={i}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button href={product.href} variant="ghost" fullWidth>
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
