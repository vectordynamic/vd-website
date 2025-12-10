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
    title: 'Enterprise Solutions',
    description: 'Comprehensive software ecosystems for large organizations with complex requirements.',
    features: [
      'Multi-department integration',
      'Advanced security & compliance',
      'Scalable architecture',
      'Custom workflow automation',
      'Executive dashboards',
      'Dedicated support team',
    ],
    ideal: 'Large organizations, Fortune 500 companies, Government agencies',
    href: '/contact?solution=enterprise',
  },
  {
    id: 'startup',
    title: 'Startup Solutions',
    description: 'Agile, cost-effective solutions designed to help startups move fast and scale smart.',
    features: [
      'MVP development',
      'Growth-ready architecture',
      'Lean development process',
      'Quick time-to-market',
      'Flexible engagement models',
      'Startup-friendly pricing',
    ],
    ideal: 'Early-stage startups, Scale-ups, Funded ventures',
    href: '/contact?solution=startup',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'HIPAA-compliant solutions for healthcare providers, clinics, and medical technology companies.',
    features: [
      'Patient management systems',
      'EHR/EMR integration',
      'Telemedicine platforms',
      'HIPAA compliance',
      'Medical device integration',
      'Healthcare analytics',
    ],
    ideal: 'Hospitals, Clinics, MedTech companies, Health insurers',
    href: '/contact?solution=healthcare',
  },
  {
    id: 'finance',
    title: 'Finance & Fintech',
    description: 'Secure, compliant solutions for financial services and fintech innovators.',
    features: [
      'Payment processing',
      'Fraud detection',
      'Regulatory compliance',
      'Trading platforms',
      'Banking integrations',
      'Financial analytics',
    ],
    ideal: 'Banks, Financial institutions, Fintech startups, Insurance companies',
    href: '/contact?solution=finance',
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
