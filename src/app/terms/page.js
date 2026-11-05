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
              <li>Existing product maintenance, codebase stabilization, legacy modernization, and third-party API integrations</li>
            </ul>
          </section>

          <section>
            <h2>3. Intellectual Property, Licensing &amp; Codebase Models</h2>
            <h3>Website Content</h3>
            <p>
              All original copy, branding, diagrams, and case studies on vectordynamic.com belong to Vector Dynamic and may not be republished as your own without written permission.
            </p>
            <h3>Client Engagements</h3>
            <p>
              Codebase custody, licensing, and exclusivity are structured in each signed Statement of Work (SOW) around your commercial goals and pricing tier:
            </p>
            <ul>
              <li><strong>Client data &amp; business rules:</strong> You retain 100% ownership of all company data, customer records, documents, credentials, and proprietary domain rules at all times.</li>
              <li><strong>Cost-effective licensed deployment:</strong> When an engagement deploys or customizes Vector Dynamic&rsquo;s pre-existing core platforms or modules (across ERP, voice, AI, or automation), Vector Dynamic retains ownership of the underlying core software and grants you a commercial license as specified in your agreement.</li>
              <li><strong>Custom build with shared core libraries:</strong> For custom software builds, you receive a perpetual commercial license to operate the delivered system while Vector Dynamic retains ownership of its reusable underlying frameworks, libraries, and architectural components.</li>
              <li><strong>Full source-code buyout &amp; category exclusivity:</strong> Full source-code assignment, repository handover, or industry exclusivity is available when explicitly contracted and priced in your Statement of Work.</li>
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
