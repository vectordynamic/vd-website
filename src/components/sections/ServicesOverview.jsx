'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Card, { CardIcon, CardTitle, CardBody } from '@/components/ui/Card';
import styles from './ServicesOverview.module.css';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Custom Development',
    description: 'Bespoke web and mobile applications built to your exact specifications.',
    href: '/services/custom-development',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
      </svg>
    ),
    title: 'Enterprise Solutions',
    description: 'Scalable CRM, ERP, and HRM systems that power your organization.',
    href: '/services/enterprise',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
      </svg>
    ),
    title: 'AI & Automation',
    description: 'Intelligent solutions that automate processes and unlock new capabilities.',
    href: '/services/ai-automation',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Consulting & Strategy',
    description: 'Expert guidance on technology decisions and digital transformation.',
    href: '/services/consulting',
  },
];

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default function ServicesOverview() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger animation
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>What We Do</span>
          <h2 className={styles.title}>Services We Offer</h2>
          <p className={styles.subtitle}>
            Comprehensive software solutions tailored to your business needs.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className={`${styles.serviceCard} ${visibleItems.includes(index) ? styles.visible : ''}`}
            >
              <Card variant="glow" className="feature-card card-interactive">
                <CardIcon>{service.icon}</CardIcon>
                <CardTitle>{service.title}</CardTitle>
                <CardBody>
                  <p>{service.description}</p>
                </CardBody>
                <span className={styles.cardLink}>
                  Learn More <ArrowIcon />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
