import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Software Development Services',
  description: 'Custom software, enterprise solutions (CRM, ERP, HRM), AI & automation, and strategic consulting. End-to-end development expertise.',
};

const services = [
  {
    id: 'custom-development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Custom Software Development',
    tagline: 'Bespoke solutions tailored to your business',
    description: 'We build custom web and mobile applications that perfectly align with your unique business requirements and workflows.',
    features: [
      'Web & Mobile Applications',
      'Enterprise Portals',
      'API Development & Integration',
      'Cloud-Native Architecture',
      'DevOps & CI/CD Pipelines',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'PostgreSQL'],
    image: '/images/custom-development.png',
    href: '/services/custom-development',
  },
  {
    id: 'enterprise',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
      </svg>
    ),
    title: 'Enterprise Solutions',
    tagline: 'Comprehensive business systems at scale',
    description: 'Powerful enterprise-grade systems that streamline operations and drive efficiency across your organization.',
    features: [
      'CRM Systems (Customer Relationship Management)',
      'HRM/HRMS Solutions',
      'ERP Systems (Enterprise Resource Planning)',
      'Inventory & Supply Chain Management',
      'Business Intelligence Dashboards',
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Microservices'],
    image: '/images/enterprise-solutions.png',
    href: '/services/enterprise',
  },
  {
    id: 'ai-automation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
      </svg>
    ),
    title: 'AI & Automation',
    tagline: 'Intelligent systems that scale',
    description: 'Harness the power of artificial intelligence and machine learning to automate processes and unlock new capabilities.',
    features: [
      'AI-Powered SaaS Products',
      'Process Automation & RPA',
      'Natural Language Processing',
      'Predictive Analytics',
      'Computer Vision Solutions',
      'Chatbots & Virtual Assistants',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
    image: '/images/ai-automation.png',
    href: '/services/ai-automation',
  },
  {
    id: 'consulting',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Consulting & Strategy',
    tagline: 'Strategic guidance for digital transformation',
    description: 'Expert guidance to help you navigate technology decisions and implement solutions that drive business value.',
    features: [
      'Technology Stack Assessment',
      'Digital Transformation Roadmap',
      'Architecture Design & Review',
      'AI/Automation Readiness',
      'Security & Compliance Audit',
    ],
    technologies: ['Strategy', 'Architecture', 'Cloud', 'Security', 'DevOps'],
    image: '/images/consulting.png',
    href: '/services/consulting',
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </nav>
          <h1 className={styles.title}>What We Build</h1>
          <p className={styles.subtitle}>
            From enterprise software to AI-powered automation, we deliver solutions that scale with your ambitions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`${styles.serviceCard} ${index % 2 === 1 ? styles.reversed : ''}`}
            >
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <span className={styles.serviceTagline}>{service.tagline}</span>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <ul className={styles.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.technologies}>
                  {service.technologies.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>

                <Button href={service.href} className={styles.serviceButton}>
                  Learn More <ArrowIcon />
                </Button>
              </div>
              
              <div className={styles.serviceVisual}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={400}
                  className={styles.serviceImage}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Not Sure What You Need?</h2>
            <p>Schedule a free consultation and we'll help you identify the right solution for your business.</p>
            <Button href="/contact" size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
