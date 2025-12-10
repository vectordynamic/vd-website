'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

const headlines = [
  'Enterprise Software',
  'AI Automation',
  'SaaS Products',
  'Digital Transformation',
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

export default function Hero() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const headline = headlines[currentHeadline];
    let charIndex = 0;

    if (isTyping) {
      const typeInterval = setInterval(() => {
        if (charIndex <= headline.length) {
          setDisplayText(headline.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsTyping(false), 2500);
        }
      }, 80);
      return () => clearInterval(typeInterval);
    } else {
      const deleteInterval = setInterval(() => {
        if (charIndex >= 0) {
          setDisplayText(headline.slice(0, charIndex));
          charIndex--;
        } else {
          clearInterval(deleteInterval);
          setCurrentHeadline((prev) => (prev + 1) % headlines.length);
          setIsTyping(true);
        }
      }, 50);
      charIndex = headline.length;
      return () => clearInterval(deleteInterval);
    }
  }, [currentHeadline, isTyping]);

  return (
    <section className={styles.hero}>
      {/* Subtle Background */}
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>

      <div className="container">
        <div className={styles.content}>
          <span className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Building the Future of Software
          </span>

          <h1 className={styles.title}>
            We Power Your
            <br />
            <span className={styles.typewriter}>
              {displayText}
              <span className={styles.cursor}></span>
            </span>
          </h1>

          <p className={styles.description}>
            Vector Dynamic delivers cutting-edge software solutions that transform 
            businesses. From enterprise systems to AI-powered automation — we build 
            what you envision.
          </p>

          <div className={styles.cta}>
            <Button href="/contact" size="lg">
              Start Your Project
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Explore Services
            </Button>
          </div>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
