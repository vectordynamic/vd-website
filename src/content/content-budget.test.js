import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { home } from './home';
import { services, about, howWeWork, partners } from './pages';
import { workItems } from './work';
import { findBannedWords } from './copy-rules';

function countWords(obj) {
  let count = 0;
  const walk = (val) => {
    if (typeof val === 'string') {
      // Don't count URLs or SVG paths as prose words
      if (val.startsWith('http://') || val.startsWith('https://') || val.startsWith('/') || val.startsWith('M ')) return;
      const w = val.trim().split(/\s+/).filter(Boolean).length;
      count += w;
    } else if (Array.isArray(val)) {
      val.forEach(walk);
    } else if (val && typeof val === 'object') {
      Object.values(val).forEach(walk);
    }
  };
  walk(obj);
  return count;
}

describe('content budget & noise-reduction constraints', () => {
  it('homepage strictly honors total word budget <= 1150 words', () => {
    const totalHomeWords = countWords(home);
    expect(totalHomeWords).toBeLessThanOrEqual(1150);
  });

  it('homepage hero strictly honors word budget <= 45 words', () => {
    const { diagram, ...heroCopy } = home.hero;
    const heroWords = countWords(heroCopy);
    expect(heroWords).toBeLessThanOrEqual(45);
  });

  it('services page intro & standard honors word budget <= 450 words', () => {
    const servicesWords = countWords(services.intro) + countWords(services.standard);
    expect(servicesWords).toBeLessThanOrEqual(450);
  });

  it('each service detail honors word budget <= 550 words', () => {
    for (const [key, detail] of Object.entries(services.details)) {
      const words = countWords(detail);
      expect(words, `Service ${key} exceeds 550 words`).toBeLessThanOrEqual(550);
    }
  });

  it('how-we-work honors word budget <= 650 words', () => {
    const words = countWords(howWeWork);
    expect(words).toBeLessThanOrEqual(650);
  });

  it('partners page honors word budget <= 600 words', () => {
    const words = countWords(partners);
    expect(words).toBeLessThanOrEqual(600);
  });

  it('about page honors word budget <= 450 words', () => {
    const words = countWords(about);
    expect(words).toBeLessThanOrEqual(450);
  });

  it('work overview items honor concise summaries <= 800 words total across 8 systems', () => {
    const summaries = workItems.map(w => ({
      name: w.name,
      headline: w.headline,
      summary: w.summary,
      domainBadge: w.domainBadge,
    }));
    expect(countWords(summaries)).toBeLessThanOrEqual(800);
  });

  it('contains zero banned buzzwords across home and work', () => {
    const homeViolations = findBannedWords(home);
    const workViolations = findBannedWords(workItems);
    expect(homeViolations).toEqual([]);
    expect(workViolations).toEqual([]);
  });

  it('all 8 case study & hero WebP images exist in public/images/work/ and are under 150 KB', () => {
    const requiredImages = [
      'hero.webp',
      'okebase.webp',
      'voxflow.webp',
      'advantage-ai.webp',
      'opsera.webp',
      'syncdaily.webp',
      'ledgerflow.webp',
      'runwayiq.webp',
      'vaultrag.webp',
    ];
    for (const img of requiredImages) {
      const p = path.join(process.cwd(), 'public/images/work', img);
      expect(fs.existsSync(p), `Missing image: ${p}`).toBe(true);
      const stat = fs.statSync(p);
      expect(stat.size, `Image ${img} too large: ${stat.size} bytes`).toBeLessThan(150 * 1024);
      expect(stat.size, `Image ${img} suspiciously empty`).toBeGreaterThan(1000);
    }
  });
});
