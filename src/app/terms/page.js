import Link from 'next/link';
import { site } from '@/content/site';
import styles from './page.module.css';

export const metadata = {
  title: 'Terms of Service',
  description: 'Vector Dynamic Terms of Service — Commercial, website, and intellectual property terms for our software and AI engineering services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className="vd-container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms of Service</span>
        </nav>

        <article className={styles.content}>
          <h1>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: November 2026</p>

          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing <strong>vectordynamic.com</strong>, you agree to these website Terms of Service. Paid engineering sprints, managed operations retainers, dedicated engineering pods, and agency partnerships are governed by a separate written Master Services Agreement (MSA) and Statement of Work (SOW) signed by both parties; if any conflict arises between this page and a signed client agreement, the signed agreement controls.
            </p>
          </section>

          <section>
            <h2>2. Scope of Services</h2>
            <p>Vector Dynamic provides B2B software engineering and technical advisory services, including:</p>
            <ul>
              <li>Custom web platforms, B2B SaaS products, mobile apps, and API engineering</li>
              <li>Modular custom ERP, CRM, inventory, and operations systems (including off-the-shelf/Odoo configuration where appropriate)</li>
              <li>Applied AI software, retrieval-augmented generation (RAG), voice/chat intake, and bounded agents</li>
              <li>End-to-end workflow automation, document extraction, and managed operations</li>
            </ul>
          </section>

          <section>
            <h2>3. Intellectual Property &amp; Source Code Ownership</h2>
            <h3>Website Content</h3>
            <p>
              All original copy, branding, diagrams, and case studies on vectordynamic.com belong to Vector Dynamic and may not be republished as your own without written permission.
            </p>
            <h3>Client Custom Engagements</h3>
            <p>
              Unless expressly agreed otherwise in a signed SOW, our standard client IP structure is straightforward:
            </p>
            <ul>
              <li><strong>Client data:</strong> You retain 100% ownership of all company data, documents, credentials, and domain content at all times.</li>
              <li><strong>Custom-developed code:</strong> Upon payment for each applicable milestone, 100% of the custom source code, schemas, workflows, and documentation written specifically for your engagement is assigned to you—and lives in your Git repository and cloud accounts from week one.</li>
              <li><strong>Optional pre-existing modules:</strong> If both parties agree in writing to include pre-built Vector Dynamic internal libraries or boilerplate modules to accelerate delivery, Vector Dynamic retains ownership of those background tools and grants you a perpetual, worldwide, royalty-free commercial license (with full source code access) to use, modify, and operate them without vendor lock-in.</li>
            </ul>
          </section>

          <section>
            <h2>4. Free Systems Reviews &amp; Estimates</h2>
            <p>
              Complimentary Systems Reviews and discovery call recommendations are provided in good faith based on the workflow details shared with us. Rough build ranges shared during an initial review are non-binding planning estimates until finalized in a mutual Statement of Work.
            </p>
          </section>

          <section>
            <h2>5. Acceptable Website Use</h2>
            <p>When using vectordynamic.com, you agree not to:</p>
            <ul>
              <li>Submit false, impersonated, or automated spam inquiries through our forms or API routes</li>
              <li>Attempt to probe, disrupt, or bypass rate limits or security controls on our infrastructure</li>
              <li>Scrape or misrepresent our engineering case studies or brand identity</li>
            </ul>
          </section>

          <section>
            <h2>6. Warranties &amp; Limitation of Liability</h2>
            <p>
              This informational website and its articles are provided &ldquo;as is&rdquo; without warranties of completeness or fitness for a particular purpose. Production warranties, acceptance testing windows, and SLA commitments for paid builds are specified directly in each client Statement of Work. To the maximum extent permitted by law, Vector Dynamic shall not be liable for indirect, incidental, or consequential damages arising from your browsing of this website.
            </p>
          </section>

          <section>
            <h2>7. Changes to These Terms</h2>
            <p>
              We may update these website Terms periodically to reflect new services or legal requirements. Updated versions take effect when posted here with a revised date.
            </p>
          </section>

          <section>
            <h2>8. Contact Information</h2>
            <p>
              Questions regarding commercial terms, MSAs, mutual NDAs, or partnerships can be sent directly to{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
