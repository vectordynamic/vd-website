'use client';

import { useState } from 'react';
import { site } from '@/content/site';
import s from './forms.module.css';

const TYPES = ['New project', 'ERP or business system', 'AI or automation', 'Agency partnership', 'Something else'];

// No backend: the form composes an email in the visitor's own mail app.
export default function InquiryForm({ variant = 'contact' }) {
  const audit = variant === 'audit';
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k) => String(f.get(k) || '').trim();
    const subject = audit ? `Systems Review request: ${get('company') || get('name')}` : `${get('type') || 'Inquiry'}: ${get('name')}`;
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Company: ${get('company')}`,
      audit ? `Website: ${get('url')}` : `Phone: ${get('phone')}`,
      '',
      audit ? 'Workflow or system to review:' : 'Message:',
      get('message'),
    ].join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <div className={s.pair}>
        <label className={s.field}>Name *<input name="name" required autoComplete="name" /></label>
        <label className={s.field}>Work email *<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className={s.pair}>
        <label className={s.field}>Company<input name="company" autoComplete="organization" /></label>
        {audit
          ? <label className={s.field}>Company website<input name="url" type="url" placeholder="https://" /></label>
          : <label className={s.field}>Phone<input name="phone" type="tel" autoComplete="tel" /></label>}
      </div>
      {!audit && (
        <label className={s.field}>What do you need?
          <select name="type" defaultValue="">
            <option value="">Select one</option>
            {TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
      )}
      <label className={s.field}>
        {audit ? 'Which workflow or system should we review? *' : 'Message *'}
        <textarea name="message" required minLength={10} rows={6} />
      </label>
      <button type="submit" className="vd-btn vd-btn--primary">{audit ? 'Request my review' : 'Send message'}</button>
      <p className={s.hint} role="status">
        {sent
          ? <>Your email app should have opened with the message ready to send. If nothing opened, email <a href={`mailto:${site.email}`}>{site.email}</a> directly.</>
          : <>This opens your email app with the message prepared. Prefer to write yourself? <a href={`mailto:${site.email}`}>{site.email}</a></>}
      </p>
    </form>
  );
}
