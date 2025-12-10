'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './WhyUs.module.css';

const stats = [
  { number: 50, suffix: '+', label: 'Projects Delivered' },
  { number: 99.9, suffix: '%', label: 'Uptime Guarantee' },
  { number: 24, suffix: '/7', label: 'Support Available' },
  { number: 100, suffix: '%', label: 'Client Satisfaction' },
];

const features = [
  {
    title: 'Enterprise-Grade',
    description: 'Built for scale, security, and reliability from day one.',
  },
  {
    title: 'Rapid Delivery',
    description: 'From concept to launch in weeks, not months.',
  },
  {
    title: 'Future-Ready',
    description: 'Modern architecture that grows with your business.',
  },
  {
    title: 'Dedicated Support',
    description: 'Your success is our priority, around the clock.',
  },
];

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start * 10) / 10);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>
              Why <span className="text-gradient">Vector Dynamic</span>?
            </h2>
            <p className={styles.description}>
              We combine deep technical expertise with a relentless focus on 
              delivering real business value. Our solutions are built to last, 
              scale, and evolve with your needs.
            </p>
            
            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statNumber}>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
