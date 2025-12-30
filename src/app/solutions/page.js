import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Solutions',
  description: 'Tailored software solutions for enterprises, startups, and specific industries. Find the right fit for your business.',
};

const solutions = [
  {
    id: 'enterprise',
    title: 'Enterprise Transformation',
    description: 'Modernize legacy systems or deploy instant SaaS ecosystems. We provide the "Hybrid Strategic Advantage" — ready-made modules or full custom engineering.',
    features: [
      'Hybrid SaaS + Custom Integration',
      'Legacy System Modernization',
      'Enterprise-Grade Security',
      'Automated Workflow Orchestration',
      'Cross-Department Data Hubs',
      '24/7 Dedicated Support',
    ],
    ideal: 'Large Conglomerates, Government, MNCS',
    href: '/contact?solution=enterprise',
  },
  {
    id: 'startup',
    title: 'AI-First Startups',
    description: 'Launch fast with "Intelligence Native" architectures. We build MVPs that are scalable, investor-ready, and powered by AI from day one.',
    features: [
      'Rapid AI-Driven MVP Development',
      'Scalable Cloud Architecture',
      'Investor-Ready Prototypes',
      'Growth Hacking Tools',
      'Flexible Agile Development',
      'CTO-as-a-Service Options',
    ],
    ideal: 'Founders, Early-Stage Ventures, YC/Techstars Grads',
    href: '/contact?solution=startup',
  },
  {
    id: 'healthcare',
    title: 'Smart Healthcare',
    description: 'HIPAA-compliant platforms powered by Computer Vision and NLP. Streamline hospital ops and improve patient outcomes with intelligent tools.',
    features: [
      'AI Analysis & Diagnostics',
      'Telemedicine & Remote Care',
      'EHR/EMR Interoperability',
      'Automated Patient Appointment',
      'Medical Device Integration',
      'Secure Data Compliance (HIPAA)',
    ],
    ideal: 'Hospitals, Clinics, MedTech Innovators',
    href: '/contact?solution=healthcare',
  },
  {
    id: 'finance',
    title: 'Fintech & Banking',
    description: 'Secure, algorithmic financial solutions. From automated trading bots to fraud detection engines, we engineer trust and speed.',
    features: [
      'Algorithmic Trading Systems',
      'AI Fraud Detection',
      'Secure Payment Gateways',
      'Real-time Market Analytics',
      'Blockchain & Smart Contracts',
      'Regulatory Compliance (GDPR/PCI)',
    ],
    ideal: 'Banks, Fintech Startups, Hedge Funds, Insurance',
    href: '/contact?solution=finance',
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Living',
    description: 'Smart management for shared living, property rentals, and bachelor housing. Automate expenses, meals, and tenant communication.',
    features: [
      'Shared Living Management (Amardera)',
      'Automated Expense Splitting',
      'Tenant & Lease Management',
      'Smart Home Integration',
      'Property Maintenance Tracking',
      'Rent Collection Systems',
    ],
    ideal: 'Property Managers, Co-living Spaces, Landlords',
    href: '/contact?solution=real-estate',
  },
  {
    id: 'marketing',
    title: 'Marketing & AdTech',
    description: 'AI-driven marketing automation. From auto-running Meta ads to generating SEO content, we build tools that scale growth.',
    features: [
      'Automated Ad Campaign Manager',
      'AI Content & Copy Generation',
      'Social Media Scheduling',
      'Marketing Analytics Dashboards',
      'Lead Scoring & Nurturing',
      'SEO Automation Tools',
    ],
    ideal: 'Agencies, E-commerce, Marketing Teams',
    href: '/contact?solution=marketing',
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

export default function SolutionsPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Solutions</span>
          </nav>
          <h1 className={styles.title}>Solutions Built for Your Industry</h1>
          <p className={styles.subtitle}>
            Whether you're an enterprise, startup, or specialized industry — we have the right solution for you.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className={styles.solutions}>
        <div className="container">
          <div className={styles.grid}>
            {solutions.map((solution) => (
              <div key={solution.id} className={styles.solutionCard}>
                <h2 className={styles.solutionTitle}>{solution.title}</h2>
                <p className={styles.solutionDescription}>{solution.description}</p>
                
                <ul className={styles.features}>
                  {solution.features.map((feature, i) => (
                    <li key={i}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.ideal}>
                  <span className={styles.idealLabel}>Ideal for:</span>
                  <span>{solution.ideal}</span>
                </div>

                <Button href={solution.href} fullWidth>
                  Discuss Your Needs
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Don't See Your Industry?</h2>
            <p>
              We work across all sectors. Let's talk about how we can build 
              a custom solution for your specific needs.
            </p>
            <Button href="/contact" size="lg">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
