import { describe, it, expect } from 'vitest';
import { escapeHtml, isSpam, validateInquiry, buildInquiryEmail } from './inquiry';

describe('inquiry helpers', () => {
  it('escapes HTML characters cleanly', () => {
    expect(escapeHtml('<script>"x"&\'y\'</script>')).toBe(
      '&lt;script&gt;&quot;x&quot;&amp;&#39;y&#39;&lt;/script&gt;'
    );
    expect(escapeHtml(null)).toBe('');
  });

  it('detects honeypot spam', () => {
    expect(isSpam({ website: 'https://spam.example' })).toBe(true);
    expect(isSpam({ website: '   ' })).toBe(false);
    expect(isSpam({})).toBe(false);
  });

  it('validates required fields and constraints', () => {
    const empty = validateInquiry({});
    expect(empty.ok).toBe(false);
    expect(empty.errors).toHaveProperty('name');
    expect(empty.errors).toHaveProperty('email');
    expect(empty.errors).toHaveProperty('message');

    const badEmail = validateInquiry({ name: 'Jane Doe', email: 'jane@invalid', message: 'Need custom ERP workflow built.' });
    expect(badEmail.ok).toBe(false);
    expect(badEmail.errors).toHaveProperty('email');

    const badType = validateInquiry({
      name: 'Jane Doe',
      email: 'jane@acme.com',
      inquiryType: 'InvalidHack',
      message: 'Need custom ERP workflow built.',
    });
    expect(badType.ok).toBe(false);
    expect(badType.errors).toHaveProperty('inquiryType');
  });

  it('accepts valid payloads and truncates long UTM strings without rejecting', () => {
    const res = validateInquiry({
      name: '  Jane Doe  ',
      email: 'jane@acme.com',
      company: 'Acme Logistics',
      inquiryType: 'Systems Review',
      budget: '$15,000 – $50,000',
      message: 'We want to replace spreadsheets across three warehouses.',
      utm_source: 'linkedin'.repeat(30),
    });
    expect(res.ok).toBe(true);
    expect(res.data.name).toBe('Jane Doe');
    expect(res.data.utm_source.length).toBe(100);
  });

  it('strips header injection newlines and escapes XSS in email body', () => {
    const { subject, html } = buildInquiryEmail({
      name: 'Eve\r\nBcc: attacker@evil.com',
      email: 'eve@example.com',
      company: 'Corp',
      inquiryType: 'Systems Review',
      message: '<img src=x onerror=alert(1)>',
    });
    expect(subject).not.toMatch(/[\r\n]/);
    expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;');
    expect(html).not.toContain('<img src=x');
  });
});

