'use client';

import { useRef, useEffect, useState } from 'react';
import { techCategories } from '@/lib/data';
import { TechIcon } from '@/components/ui/TechIcons';
import styles from './TrustBar.module.css';

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Flatten categories into two rows for visual balance
  const row1 = [
    ...techCategories.backend.skills,
    ...techCategories.cloud.skills,
  ];
  
  const row2 = [
    ...techCategories.frontend.skills,
    ...techCategories.data.skills,
    ...techCategories.ai.skills,
  ];

  // Duplicate for seamless loop
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={styles.section}
    >
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>Technologies We Master</p>
        </div>
        
        <div className={styles.marqueeWrapper}>
          {/* Row 1: Backend & Cloud (Left) */}
          <div className={styles.marqueeRow}>
            {marqueeRow1.map((tech, index) => (
              <div key={`r1-${index}`} className={styles.techItem}>
                <TechIcon name={tech} />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          {/* Row 2: Frontend, Data & AI (Right) */}
          <div className={`${styles.marqueeRow} ${styles.reverse}`}>
             {marqueeRow2.map((tech, index) => (
              <div key={`r2-${index}`} className={styles.techItem}>
                <TechIcon name={tech} />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
