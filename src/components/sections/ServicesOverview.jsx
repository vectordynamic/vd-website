'use client';

import Link from 'next/link';
import Card, { CardIcon, CardTitle, CardBody } from '@/components/ui/Card';
import styles from './ServicesOverview.module.css';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Custom System Development',
    description: 'High-performance iOS/Android mobile apps and scalable web platforms built tailored to your business goals. We engineer what you imagine.',
    href: '/services/custom-development',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10"/><path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M12 6v6"/><path d="M12 16v6"/>
      </svg>
    ),
    title: 'Enterprise Ecosystem',
    description: 'Comprehensive management: CRM, ERP, HRM, Inventory, Sales, & Marketing. Available as instant SaaS or full Source Code ownership.',
    href: '/services/enterprise',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3"/><path d="M12 11c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3S9 3.3 9 5v3c0 1.7 1.3 3 3 3Z"/><path d="M5.5 19c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"/>
      </svg>
    ),
    title: 'SaaS Product Suite',
    description: 'Ready-to-use cloud software (SaaS) products designed for immediate business impact. Subscribe, onboard, and start growing today.',
    href: '/products',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z"/><path d="m14 8-4 8"/><path d="m10 8 4 8"/>
      </svg>
    ),
    title: 'Custom AI Solutions',
    description: 'End-to-end AI Application development. We engineer custom LLMs, Computer Vision, and smart systems tailored to your specific needs.',
    href: '/services/ai-automation',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
      </svg>
    ),
    title: 'Intelligent Automation',
    description: 'Deploy Autonomous Agents and self-driving workflows to handle complex customer operations and internal processes 24/7.',
    href: '/services/ai-automation#agents',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Digital Consulting',
    description: 'Expert roadmapping for Digital Transformation, Cloud Migration, and System Architecture to align tech with your business vision.',
    href: '/services/consulting',
  },
];

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default function ServicesOverview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>What We Do</span>
          <h2 className={styles.title}>The Vector Ecosystem</h2>
          <p className={styles.subtitle}>
            A complete spectrum of technology services: from custom engineering and deep-tech AI to ready-to-use SaaS products.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className={styles.serviceCard}
            >
              <Card variant="glow" className="feature-card card-interactive h-full">
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
