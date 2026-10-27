import Link from 'next/link';
import ContactForm from './ContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Vector Dynamic to discuss custom software, AI solutions, or an agency partnership. We typically respond within 24 hours.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1 className={styles.title}>Let's Build Something Great Together</h1>
          <p className={styles.subtitle}>
            Have a project in mind? We'd love to hear about it. Get in touch and let's
            discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.formWrapper}>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <h3>Contact Information</h3>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:info@vectordynamic.com" className={styles.infoValue}>
                      info@vectordynamic.com
                    </a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Website</span>
                    <a href={process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'} className={styles.infoValue}>
                      {(process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com').replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.responseCard}>
                <div className={styles.responseIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h4>Quick Response</h4>
                <p>We typically respond within 24 hours on business days.</p>
              </div>

              <div className={styles.socialCard}>
                <h4>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <a href="https://linkedin.com/company/vectordynamic" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/vectordynamic" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    Twitter/X
                  </a>
                  <a href="https://github.com/vectordynamic" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
