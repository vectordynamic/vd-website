import Button from '@/components/ui/Button';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>
      
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Transform Your Business?
          </h2>
          <p className={styles.description}>
            Let's discuss how we can help you build intelligent software solutions 
            that drive real results.
          </p>
          <div className={styles.ctas}>
            <Button href="/contact" size="lg">
              Let's Talk
            </Button>
            <Button href="/solutions" variant="ghost" size="lg">
              View Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
