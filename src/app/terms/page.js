import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Terms of Service',
  description: 'Vector Dynamic Terms of Service - Terms and conditions for using our website and services.',
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms of Service</span>
        </nav>

        <article className={styles.content}>
          <h1>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: December 2024</p>

          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using Vector Dynamic's website (vectordynamic.com) and services, 
              you agree to be bound by these Terms of Service. If you do not agree to these 
              terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2>2. Services Description</h2>
            <p>
              Vector Dynamic provides software development services, including but not limited to:
            </p>
            <ul>
              <li>Custom software development</li>
              <li>Enterprise solutions (CRM, ERP, HRM)</li>
              <li>AI and automation solutions</li>
              <li>Technology consulting</li>
              <li>SaaS products</li>
            </ul>
          </section>

          <section>
            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the 
              property of Vector Dynamic or its licensors and is protected by intellectual 
              property laws.
            </p>
            <p>
              For custom development projects, intellectual property rights will be defined 
              in individual service agreements.
            </p>
          </section>

          <section>
            <h2>4. User Responsibilities</h2>
            <p>When using our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Not use our services for any unlawful purpose</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not interfere with the proper functioning of our services</li>
            </ul>
          </section>

          <section>
            <h2>5. Service Agreements</h2>
            <p>
              Individual projects and engagements will be governed by separate service agreements 
              that outline specific terms, deliverables, timelines, and payment terms.
            </p>
          </section>

          <section>
            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Vector Dynamic shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages arising 
              from your use of our services.
            </p>
          </section>

          <section>
            <h2>7. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without warranties of any kind, either express 
              or implied. We do not warrant that our services will be uninterrupted, error-free, 
              or secure.
            </p>
          </section>

          <section>
            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Vector Dynamic and its officers, 
              directors, employees, and agents from any claims, damages, or expenses arising 
              from your use of our services or violation of these terms.
            </p>
          </section>

          <section>
            <h2>9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our services at any time, 
              without prior notice, for any reason, including breach of these Terms.
            </p>
          </section>

          <section>
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective 
              immediately upon posting to this page. Continued use of our services constitutes 
              acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2>12. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:vectordynamic@gmail.com">vectordynamic@gmail.com</a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
