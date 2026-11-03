import { describe, it, expect } from 'vitest';
import { findBannedWords } from './copy-rules';
import * as siteMod from './site';
import * as homeMod from './home';
import * as pagesMod from './pages';
import * as workMod from './work';
import * as industriesMod from './industries';
import * as articlesMod from './articles';

const ALL_CONTENT = {
  site: siteMod,
  home: homeMod,
  pages: pagesMod,
  work: workMod,
  industries: industriesMod,
  articles: articlesMod,
};

describe('content copy quality & foreign-buyer trust rules', () => {
  it('detects banned buzzwords accurately in helper', () => {
    expect(findBannedWords({ text: 'We streamline and supercharge synergy.' }).length).toBeGreaterThan(0);
    expect(findBannedWords({ text: 'We build and maintain reliable software.' })).toEqual([]);
  });

  it('contains zero banned AI-slop buzzwords across all site content modules', () => {
    const violations = findBannedWords(ALL_CONTENT);
    expect(violations).toEqual([]);
  });

  it('contains zero legacy fake stats, broken placeholders, or untrusted blog citations', () => {
    const dumped = JSON.stringify(ALL_CONTENT);
    expect(dumped).not.toContain('To be anounced');
    expect(dumped).not.toContain('99% Retention');
    expect(dumped).not.toContain('555-0123');
    expect(dumped).not.toContain('thestar.com.my');
    expect(dumped).not.toContain('tiaton-web.pages.dev');
  });

  it('keeps unproven company facts null rather than inventing numbers', () => {
    expect(siteMod.site.phone).toBeNull();
    expect(siteMod.site.address).toBeNull();
    expect(siteMod.site.foundedYear).toBeNull();
  });
});

