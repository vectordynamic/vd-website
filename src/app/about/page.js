import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'About Vector Dynamic',
  description: "Learn about Vector Dynamic's mission to deliver innovative software that drives business growth.",
};

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4"/><path d="m6.8 15-3.5 2"/><path d="m20.7 17-3.5-2"/><path d="M6.8 9 3.3 7"/><path d="m20.7 7-3.5 2"/><circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technology and creative solutions.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'Integrity',
    description: 'Transparent, ethical practices in everything we build and every relationship we nurture.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
    title: 'Excellence',
    description: 'Uncompromising quality and attention to detail in every line of code.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Partnership',
    description: 'Your success is our success. We build lasting relationships, not just software.',
  },
];

const whatWeDo = [
  {
    title: 'AI SaaS Products',
    description: 'Ready-to-deploy AI-powered solutions',
  },
  {
    title: 'Custom Enterprise Solutions',
    description: 'CRM, HRM, ERP, and more',
  },
  {
    title: 'ML Engineering',
    description: 'Production-grade machine learning',
  },
  {
    title: 'Strategic Consulting',
    description: 'Digital transformation guidance',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </nav>
          <h1 className={styles.title}>Forging the Future of Intelligence</h1>
          <p className={styles.subtitle}>
            Vector Dynamic is not just a software company. We are your strategic partner in navigating the AI revolution.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div className={styles.textContent}>
              <h2>Our Vision</h2>
              <p>
                We envision a world where <strong>Artificial Intelligence</strong> isn't just a buzzword, but the backbone of efficient, scalable business operations.
              </p>
              <p>
                From legacy enterprises to agile startups, our goal is to democratize access to 
                <strong>Deep Tech</strong> and <strong>Autonomous Systems</strong>, turning complex data into actionable dominance.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/about/vision-city.png" 
                  alt="Future City Vision" 
                  width={600} 
                  height={400} 
                  className={styles.roundedImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section (Reversed) */}
      <section className={`${styles.section} ${styles.bgDark}`}>
        <div className="container">
          <div className={`${styles.splitLayout} ${styles.reversed}`}>
             <div className={styles.textContent}>
              <h2>The Hybrid Methodology</h2>
              <p>
                Why choose between <strong>SaaS speed</strong> and <strong>Custom control</strong>?
                At Vector Dynamic, we offer both.
              </p>
              <ul className={styles.checkList}>
                <li><strong>Rapid Deployment:</strong> Launch fast with our pre-built SaaS modules (Okebase, Opsera).</li>
                <li><strong>Unlimited Scale:</strong> Customize every line of code with our Source Code licensing.</li>
                <li><strong>AI-First Core:</strong> Every system we build is architected for future AI integration.</li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/about/innovation-process.png" 
                  alt="Innovation Process" 
                  width={600} 
                  height={400} 
                  className={styles.roundedImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div className={styles.textContent}>
              <h2>Engineers. Thinkers. Solvers.</h2>
              <p>
                We are a collective of obsession. Obsessed with clean code, obsessed with pixel-perfect UI, and obsessed with your ROI.
              </p>
              <p>
                Our team spans the globe, bringing together diverse perspectives to solve singular problems. We don't just write code; we engineer outcomes.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Enterprise Clients</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1M+</span>
                  <span className={styles.statLabel}>Lines of Code</span>
                </div>
                 <div className={styles.statItem}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Global Ops</span>
                </div>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/about/office-culture.png" 
                  alt="Team Culture" 
                  width={600} 
                  height={400} 
                  className={styles.roundedImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className={styles.careers} id="careers">
        <div className="container">
          <div className={styles.careersContent}>
            <h2>Join the Revolution</h2>
            <p>
              Ready to work on the edge of what's possible? We are always hiring 
              exceptional talent in AI, Engineering, and Design.
            </p>
            <Button 
              href="mailto:careers@vectordynamic.com"
              size="lg"
            >
              View Open Roles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
