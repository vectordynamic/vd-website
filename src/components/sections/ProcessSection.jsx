import styles from './ProcessSection.module.css';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business goals, challenges, and requirements.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team crafts a tailored solution architecture and user experience.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We build your solution using modern, scalable technologies.',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Launch with confidence, backed by ongoing support and optimization.',
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>How We Work</h2>
          <p className={styles.subtitle}>
            A proven process that delivers results, every time.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.connector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
