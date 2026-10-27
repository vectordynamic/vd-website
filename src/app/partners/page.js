import Link from 'next/link';
import Button from '@/components/ui/Button';
import TrustBar from '@/components/sections/TrustBar';
import { services } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
  title: 'Agency Partnership Program',
  description:
    'Vector Dynamic partners with software and AI agencies as an external engineering bench — white-label development, dedicated engineers, and AI integration support so you can deliver more client work without hiring.',
  keywords: [
    'software development partner for agencies',
    'white label software development',
    'agency development partner',
    'staff augmentation for agencies',
    'AI development partner',
    'subcontract software development',
    'outsourced engineering team',
    'dedicated development team for agencies',
  ],
  alternates: {
    canonical: '/partners',
  },
  openGraph: {
    title: 'Agency Partnership Program | Vector Dynamic',
    description:
      'An external engineering bench for software and AI agencies — white-label development, dedicated engineers, and AI integration support.',
    url: '/partners',
  },
};

const engagementModels = [
  {
    title: 'White-Label Delivery',
    description:
      'We build silently behind your brand. Your client talks to you; we never appear in the room, the repo commits, or the invoice.',
  },
  {
    title: 'Dedicated Engineer(s)',
    description:
      'Treat us as remote hires embedded in your sprint — standups, your tools, your process. Billed hourly or monthly, scale up or down per project.',
  },
  {
    title: 'Fixed-Scope Project',
    description:
      'Hand off a defined project with clear deliverables, a fixed price, and a fixed timeline. You stay the single point of contact for your client.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    description:
      '20 minutes to understand your tech stack, typical client profile, and where your capacity gaps actually are.',
  },
  {
    title: 'Scope & Engagement Model',
    description:
      'We propose the right model — white-label, dedicated, or fixed-scope — with a transparent rate and timeline.',
  },
  {
    title: 'Build Under NDA',
    description:
      'We sign your NDA, work inside your tools (Slack, Jira, GitHub, Linear), and bill you directly — never your client.',
  },
  {
    title: 'Scale As Needed',
    description:
      'Add capacity for a launch, release it between projects. No long-term retainer required to start.',
  },
];

const reasons = [
  'Full-stack range — backend, frontend, cloud, data, and AI under one partner instead of five freelancers.',
  'NDA-first engagement; IP transfers to you on delivery.',
  'Async-friendly communication that works across time zones.',
  'Senior engineering judgment on your client work, not junior outsourcing.',
  'No lock-in — scale up for a launch, scale down between projects.',
];

const faqs = [
  {
    question: 'Do you work under our brand (white-label)?',
    answer:
      'Yes. For white-label engagements we have no presence your client can see — no commits under our name, no mention on calls, no line item on the invoice. You own the relationship end to end.',
  },
  {
    question: 'How do you handle NDAs and IP ownership?',
    answer:
      "We sign your NDA before any technical discussion and work under your agency's standard agreement. All code and IP we produce for your client transfers to you on delivery.",
  },
  {
    question: "What's your pricing model?",
    answer:
      'Hourly for dedicated-engineer engagements, or a fixed price for scoped projects. We quote after the discovery call once we understand the actual scope — no generic rate card.',
  },
  {
    question: 'Which time zones do you cover?',
    answer:
      'Our team works async-first and overlaps with US and European business hours for calls and reviews, so handoffs don’t stall your client timelines.',
  },
  {
    question: 'How fast can you start?',
    answer:
      'Most partnerships move from discovery call to first delivery within a week, once scope and access are confirmed.',
  },
  {
    question: 'Do you work with agencies outside the US?',
    answer:
      'Yes. We partner with software and AI agencies globally — the engagement models and NDA-first approach stay the same regardless of location.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Partners',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/partners`,
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Agency Partnership Program',
    serviceType: 'Software Development Outsourcing',
    description:
      'External software engineering and AI development support for software and AI agencies, delivered white-label, as dedicated engineers, or as fixed-scope projects.',
    provider: {
      '@type': 'Organization',
      name: 'Vector Dynamic',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Software and AI agencies',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/partners`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function PartnersPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Partners</span>
          </nav>
          <h1 className={styles.title}>A Technical Development Partner for Agencies</h1>
          <p className={styles.subtitle}>
            Vector Dynamic gives software and AI agencies an external engineering bench —
            custom development, AI integrations, and automation, delivered under your brand.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/contact?solution=agency-partnership" size="lg">
              Start a Partnership Conversation
            </Button>
            <Button href="#faq" variant="ghost" size="lg">
              Read the FAQ
            </Button>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.offer}>
            <p className={styles.offerLead}>
              We help software and AI agencies deliver client projects through external
              software engineering and AI development support.
            </p>
            <p>
              Agencies win more client work than they can staff. When a project needs a skill
              your bench doesn&apos;t have, or your team is heads-down on a launch, we slot in as
              extra engineering capacity — on your terms, under your brand, billed directly to you.
            </p>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className={`${styles.section} ${styles.bgDark}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What We Deliver For Your Clients</h2>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <Link key={service.id} href={service.href} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Engagement Models</h2>
          <p className={styles.sectionSubtitle}>Pick the shape that fits the project, not the other way around.</p>
          <div className={styles.modelsGrid}>
            {engagementModels.map((model) => (
              <div key={model.title} className={styles.modelCard}>
                <h3 className={styles.modelTitle}>{model.title}</h3>
                <p className={styles.modelDescription}>{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={`${styles.section} ${styles.bgDark}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How a Partnership Works</h2>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={step.title} className={styles.stepCard}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.reasonsLayout}>
            <h2 className={styles.sectionTitle}>Why Agencies Partner With Vector Dynamic</h2>
            <ul className={styles.reasonsList}>
              {reasons.map((reason) => (
                <li key={reason}>
                  <CheckIcon />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <TrustBar />

      {/* FAQ */}
      <section id="faq" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Partnership FAQ</h2>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{faq.question}</summary>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.section} ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Let&apos;s Talk About Your Pipeline</h2>
            <p>
              Tell us what&apos;s on your plate and where you&apos;re short on capacity.
              We&apos;ll tell you honestly whether we&apos;re a fit.
            </p>
            <Button href="/contact?solution=agency-partnership" size="lg">
              Start a Partnership Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
