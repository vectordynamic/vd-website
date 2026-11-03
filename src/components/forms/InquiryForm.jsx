'use client';

import { useId, useRef, useState } from 'react';
import { site } from '@/content/site';
import { INQUIRY_TYPES, BUDGET_RANGES } from '@/lib/inquiry';
import { readStoredUtm } from '@/lib/utm';
import { trackEvent } from '@/lib/analytics';
import s from './forms.module.css';

const PARTNER_TYPES = [
  'Referral partnership',
  'White-label / agency partnership',
  'Software house overflow / trial task',
];

const CONTACT_TYPES = [
  'Custom software or platform',
  'ERP or business system',
  'AI or automation',
  'Dedicated engineering pod',
  'Systems Review',
  'Something else',
];

const TIMEZONE_OPTIONS = [
  'US & Canada (Morning / Early Afternoon EST–PST)',
  'UK & Europe (Business Hours GMT / CET)',
  'Middle East & Gulf (Business Hours GST / AST)',
  'Australia & Asia-Pacific (Business Hours AEST / SGT)',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function InquiryForm({ variant = 'contact', defaultInquiryType = '' }) {
  const idPrefix = useId();
  const alertRef = useRef(null);

  const isAudit = variant === 'audit';
  const isPartner = variant === 'partner';
  const isBook = variant === 'book';

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const checkSingleField = (input) => {
    if (!input || !input.name) return '';
    const val = String(input.value || '').trim();
    if (input.name === 'name') {
      if (val.length < 2) return 'Please enter your name (at least 2 characters).';
    }
    if (input.name === 'email') {
      if (!val || !EMAIL_RE.test(val)) return 'Please enter a valid work email address.';
    }
    if (input.name === 'message') {
      if (val.length < 10) return 'Please share at least a sentence or two (10+ characters).';
    }
    if (input.matches?.(':user-invalid')) {
      return input.validationMessage || 'Please check this field.';
    }
    return '';
  };

  const handleBlur = (e) => {
    const input = e.target;
    if (!input?.name || input.name === 'website') return;
    const msg = checkSingleField(input);
    setFieldErrors((prev) => {
      if (!msg && !prev[input.name]) return prev;
      const next = { ...prev };
      if (msg) next[input.name] = msg;
      else delete next[input.name];
      return next;
    });
  };

  const handleInput = (e) => {
    const input = e.target;
    if (!input?.name || !fieldErrors[input.name]) return;
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[input.name];
      return next;
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k) => String(fd.get(k) || '').trim();

    const localErrors = {};
    for (const fieldName of ['name', 'email', 'message']) {
      const el = form.elements.namedItem(fieldName);
      const err = checkSingleField(el);
      if (err) localErrors[fieldName] = err;
    }

    if (Object.keys(localErrors).length > 0) {
      setFieldErrors(localErrors);
      const firstKey = Object.keys(localErrors)[0];
      form.elements.namedItem(firstKey)?.focus?.();
      return;
    }

    setStatus('submitting');
    setServerError('');

    const utm = typeof window !== 'undefined' ? readStoredUtm(window.sessionStorage) : {};
    const inferredType = isAudit
      ? 'Systems Review'
      : isBook
        ? 'Discovery Call'
        : get('inquiryType') || defaultInquiryType || (isPartner ? 'Referral partnership' : '');

    const payload = {
      name: get('name'),
      email: get('email'),
      company: get('company'),
      companyUrl: get('companyUrl'),
      phone: get('phone'),
      inquiryType: inferredType,
      budget: get('budget'),
      timezone: get('timezone'),
      message: get('message'),
      website: get('website'),
      page: typeof window !== 'undefined' ? window.location.pathname : '',
      ...utm,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (json.fields) setFieldErrors(json.fields);
        setServerError(json.error || `We could not send your request. Please email ${site.email} directly.`);
        setStatus('error');
        setTimeout(() => alertRef.current?.focus?.(), 0);
        return;
      }

      setFieldErrors({});
      setStatus('success');
      const eventName = isAudit
        ? 'audit_submitted'
        : isPartner
          ? 'partner_submitted'
          : isBook
            ? 'booking_requested'
            : 'contact_submitted';
      trackEvent(eventName, {
        inquiry_type: inferredType,
        utm_source: utm.utm_source || 'direct',
        utm_medium: utm.utm_medium || '',
      });
      form.reset();
    } catch {
      setServerError(`Network error while sending. Please check your connection or email ${site.email} directly.`);
      setStatus('error');
      setTimeout(() => alertRef.current?.focus?.(), 0);
    }
  };

  if (status === 'success') {
    return (
      <div className={s.receipt} role="status" aria-live="polite">
        <p className={s.receiptTag}>Received</p>
        <h3 className={s.receiptTitle}>
          {isAudit
            ? 'Your Systems Review request is in.'
            : isPartner
              ? 'Thanks — let’s talk partnership.'
              : isBook
                ? 'Discovery call request received.'
                : 'Message received.'}
        </h3>
        <p className={s.receiptBody}>
          A founder or senior engineer will reply within <strong>one business day</strong> from{' '}
          <span className="vd-mono">{site.email}</span> with concrete next steps—never an automated sales sequence.
        </p>
        <ul className={s.receiptSteps}>
          {isAudit ? (
            <>
              <li><strong>Step 1:</strong> We review your note and website/system context within 24 hours.</li>
              <li><strong>Step 2:</strong> We hold a focused 30-minute walkthrough or clarify async over email.</li>
              <li><strong>Step 3:</strong> You receive your written 2–4 page Systems Review with 3 quick wins and a fixed-price build estimate.</li>
            </>
          ) : isPartner ? (
            <>
              <li><strong>Step 1:</strong> Mutual NDA sent upfront if you have an active client brief.</li>
              <li><strong>Step 2:</strong> 25-minute founder intro to align on referral share, wholesale milestones, or a 1-week trial task.</li>
            </>
          ) : (
            <>
              <li><strong>Step 1:</strong> A senior engineer reviews your requirements today.</li>
              <li><strong>Step 2:</strong> We send calendar slots inside your timezone overlap window (or answer your questions directly in writing).</li>
            </>
          )}
        </ul>
        <div className={s.receiptActions}>
          {site.bookingUrl && !isBook && (
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vd-btn vd-btn--primary"
              onClick={() => trackEvent('booking_started', { location: 'form_receipt' })}
            >
              Pick a time on our calendar now
            </a>
          )}
          <button type="button" className="vd-btn vd-btn--quiet" onClick={() => setStatus('idle')}>
            Send another note
          </button>
        </div>
      </div>
    );
  }

  const fid = (name) => `${idPrefix}-${name}`;
  const errId = (name) => (fieldErrors[name] ? `${idPrefix}-${name}-err` : undefined);

  const messageLabel = isAudit
    ? 'Which workflow, spreadsheet bottleneck, or system should we review? *'
    : isPartner
      ? 'Tell us about your agency/practice and how you would like to partner *'
      : isBook
        ? 'What would you like to cover on our 30-minute call? *'
        : 'Tell us what you want built, fixed, or automated *';

  const messagePlaceholder = isAudit
    ? 'Example: Our operations team spends 15 hours a week copying orders between Shopify, spreadsheets, and QuickBooks...'
    : isPartner
      ? 'Example: We run a 6-person B2B growth/design agency in Austin and frequently have clients asking for custom portals and AI integrations...'
      : 'Share the operational problem, current tools, and rough timeline if you have one.';

  const submitLabel =
    status === 'submitting'
      ? 'Sending…'
      : isAudit
        ? 'Request my free written review'
        : isPartner
          ? 'Start partner conversation'
          : isBook
            ? 'Request 30-minute call invite'
            : 'Send inquiry';

  return (
    <form
      action="/api/contact"
      method="POST"
      noValidate
      onSubmit={onSubmit}
      onBlur={handleBlur}
      onInput={handleInput}
      className={s.form}
    >
      {status === 'error' && serverError && (
        <div ref={alertRef} tabIndex={-1} role="alert" className={s.errorBanner}>
          <p>{serverError}</p>
          <p className={s.errorFallback}>
            Direct email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      )}

      {/* Honeypot field: visually hidden per modern-web-guidance (not display:none) */}
      <div className="vd-visually-hidden" aria-hidden="true">
        <label htmlFor={fid('website')}>Company directory URL (leave blank)</label>
        <input id={fid('website')} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={s.pair}>
        <div className={s.field}>
          <label htmlFor={fid('name')}>Full name *</label>
          <input
            id={fid('name')}
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            aria-invalid={fieldErrors.name ? 'true' : undefined}
            aria-describedby={errId('name')}
          />
          {fieldErrors.name && (
            <span id={errId('name')} className={s.fieldError}>
              ! {fieldErrors.name}
            </span>
          )}
        </div>

        <div className={s.field}>
          <label htmlFor={fid('email')}>Work email *</label>
          <input
            id={fid('email')}
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-invalid={fieldErrors.email ? 'true' : undefined}
            aria-describedby={errId('email')}
          />
          {fieldErrors.email && (
            <span id={errId('email')} className={s.fieldError}>
              ! {fieldErrors.email}
            </span>
          )}
        </div>
      </div>

      <div className={s.pair}>
        <div className={s.field}>
          <label htmlFor={fid('company')}>Company</label>
          <input
            id={fid('company')}
            name="company"
            type="text"
            maxLength={120}
            autoComplete="organization"
          />
        </div>

        {isAudit || isPartner ? (
          <div className={s.field}>
            <label htmlFor={fid('companyUrl')}>Company website</label>
            <input
              id={fid('companyUrl')}
              name="companyUrl"
              type="url"
              maxLength={200}
              placeholder="https://example.com"
              autoComplete="url"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </div>
        ) : (
          <div className={s.field}>
            <label htmlFor={fid('companyUrl')}>Website (optional)</label>
            <input
              id={fid('companyUrl')}
              name="companyUrl"
              type="url"
              maxLength={200}
              placeholder="https://example.com"
              autoComplete="url"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </div>
        )}
      </div>

      {isPartner && (
        <div className={s.field}>
          <label htmlFor={fid('inquiryType')}>Partnership model</label>
          <select id={fid('inquiryType')} name="inquiryType" defaultValue={defaultInquiryType || PARTNER_TYPES[0]}>
            {PARTNER_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      )}

      {!isAudit && !isPartner && !isBook && (
        <div className={s.pair}>
          <div className={s.field}>
            <label htmlFor={fid('inquiryType')}>What do you need?</label>
            <select id={fid('inquiryType')} name="inquiryType" defaultValue={defaultInquiryType || ''}>
              <option value="">Select an area</option>
              {CONTACT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className={s.field}>
            <label htmlFor={fid('budget')}>Estimated budget / scope</label>
            <select id={fid('budget')} name="budget" defaultValue="">
              <option value="">Select a range (optional)</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {isBook && (
        <div className={s.pair}>
          <div className={s.field}>
            <label htmlFor={fid('timezone')}>Your region / timezone window</label>
            <select id={fid('timezone')} name="timezone" defaultValue={TIMEZONE_OPTIONS[0]}>
              {TIMEZONE_OPTIONS.map((tz) => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
          </div>

          <div className={s.field}>
            <label htmlFor={fid('budget')}>Estimated project scope</label>
            <select id={fid('budget')} name="budget" defaultValue="">
              <option value="">Select a range (optional)</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className={s.field}>
        <label htmlFor={fid('message')}>{messageLabel}</label>
        <textarea
          id={fid('message')}
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder={messagePlaceholder}
          aria-invalid={fieldErrors.message ? 'true' : undefined}
          aria-describedby={errId('message')}
        />
        {fieldErrors.message && (
          <span id={errId('message')} className={s.fieldError}>
            ! {fieldErrors.message}
          </span>
        )}
      </div>

      <div className={s.submitRow}>
        <button type="submit" disabled={status === 'submitting'} className="vd-btn vd-btn--primary">
          {submitLabel}
        </button>
        <p className={s.hint}>
          Replies come directly from a senior engineer within 1 business day. Mutual NDA available on request. Prefer email?{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </form>
  );
}
