import Link from 'next/link';
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
          <h1 className={styles.title}>The Vector Dynamic Story</h1>
          <p className={styles.subtitle}>
            Empowering businesses with innovative software solutions that drive real results.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <h2>Our Mission</h2>
              <p className={styles.missionText}>
                At Vector Dynamic, we believe that every business deserves access to powerful, 
                intelligent software. Our mission is to bridge the gap between cutting-edge 
                technology and practical business solutions.
              </p>
              <p className={styles.missionText}>
                We combine deep technical expertise with a genuine understanding of business 
                challenges to create software that doesn't just work—it transforms the way 
                organizations operate, compete, and grow.
              </p>
            </div>
            <div className={styles.missionVisual}>
              <div className={styles.visualBox}>
                <span className={styles.visualText}>VD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Values</h2>
            <p>The principles that guide everything we do.</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className={styles.whatWeDo}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>What We Do</h2>
            <p>Comprehensive software solutions for modern businesses.</p>
          </div>
          <div className={styles.whatWeDoGrid}>
            {whatWeDo.map((item, index) => (
              <div key={index} className={styles.whatWeDoCard}>
                <span className={styles.whatWeDoNumber}>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className={styles.careers} id="careers">
        <div className="container">
          <div className={styles.careersContent}>
            <h2>Want to Build the Future with Us?</h2>
            <p>
              We're always looking for talented individuals who share our passion 
              for building exceptional software. If you're excited about AI, automation, 
              and creating impactful solutions, we'd love to hear from you.
            </p>
            <Button 
              href="mailto:vectordynamic@gmail.com?subject=Career Inquiry"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
