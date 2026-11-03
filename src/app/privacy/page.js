import Link from 'next/link';
import { site } from '@/content/site';
import styles from './page.module.css';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Vector Dynamic Privacy Policy — How we collect, process, and safeguard information across vectordynamic.com and B2B inquiries.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className="vd-container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </nav>

        <article className={styles.content}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: November 2026</p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Vector Dynamic (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and handles business and personal data transparently.
              This Privacy Policy explains what information we collect when you visit <strong>vectordynamic.com</strong>, request a Systems Review, book a discovery call, or correspond with our engineering team.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>Information You Provide Directly</h3>
            <p>When you submit an inquiry, Systems Review request, call request, or partnership form, we collect:</p>
            <ul>
              <li>Your name and work email address</li>
              <li>Company name, website URL, and optional phone number or region/timezone</li>
              <li>Project scope, budget band, and workflow details you choose to share</li>
              <li>First-touch campaign attribution parameters (such as <code>utm_source</code>, <code>utm_medium</code>, <code>utm_campaign</code>, and HTTP referrer) stored temporarily in your browser session so we understand how you found us</li>
            </ul>

            <h3>Technical &amp; Analytics Information</h3>
            <ul>
              <li><strong>Security &amp; rate limiting:</strong> Request IP addresses are checked briefly in memory on our API route solely to prevent automated form spam.</li>
              <li><strong>Optional analytics:</strong> Google Analytics 4 runs <em>only</em> if you explicitly click &ldquo;Accept&rdquo; on our cookie notice. If you click &ldquo;Decline&rdquo; or ignore the banner, analytics scripts remain disabled.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We process inquiry and technical data strictly to:</p>
            <ul>
              <li>Review your technical inquiry and respond directly from an engineer or founder</li>
              <li>Prepare requested deliverables (such as a written Systems Review, scope brief, or mutual NDA)</li>
              <li>Protect our website and forms against abuse and spam</li>
              <li>Measure aggregate website performance when analytics consent has been granted</li>
            </ul>
            <p>
              We do <strong>not</strong> place B2B inquiry contacts onto automated marketing spam lists, and we never sell or rent your contact details.
            </p>
          </section>

          <section>
            <h2>4. Subprocessors &amp; Data Sharing</h2>
            <p>We share data only with essential infrastructure providers acting under strict confidentiality:</p>
            <ul>
              <li><strong>Transactional email delivery (Resend):</strong> Form submissions on vectordynamic.com are transmitted securely via Resend to deliver your inquiry directly to our engineering inbox.</li>
              <li><strong>Hosting &amp; infrastructure:</strong> Cloud hosting providers serving our Next.js web application over encrypted HTTPS connections.</li>
              <li><strong>Analytics (Google Analytics 4):</strong> Loaded only after explicit opt-in consent.</li>
              <li><strong>Legal compliance:</strong> When required by applicable law or valid legal process.</li>
            </ul>
          </section>

          <section>
            <h2>5. Client Project Confidentiality &amp; AI Data Protection</h2>
            <p>
              Before reviewing internal source code, operational spreadsheets, or proprietary datasets for a client engagement, we execute a mutual Non-Disclosure Agreement (NDA) on request. Any AI or LLM integrations we engineer for clients use commercial API tiers or private deployments where customer data is excluded from model training.
            </p>
          </section>

          <section>
            <h2>6. Data Retention &amp; Security</h2>
            <p>
              We retain business inquiry correspondence only as long as necessary to evaluate a potential engagement, fulfill contractual obligations, or comply with tax and accounting regulations. All website traffic is encrypted in transit via TLS, and access to company email and infrastructure requires multi-factor authentication.
            </p>
          </section>

          <section>
            <h2>7. International Rights (GDPR, UK GDPR &amp; CCPA)</h2>
            <p>Depending on your jurisdiction (including the UK, European Economic Area, and US states), you have the right to:</p>
            <ul>
              <li>Request a copy of the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request erasure (&ldquo;right to be forgotten&rdquo;) of your inquiry records</li>
              <li>Object to or restrict processing, or withdraw analytics cookie consent at any time by clearing site storage in your browser</li>
            </ul>
            <p>
              To exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond promptly.
            </p>
          </section>

          <section>
            <h2>8. Contact Us</h2>
            <p>
              For privacy questions, data-deletion requests, or mutual NDA inquiries, contact us directly at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
