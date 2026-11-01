'use client';

import { useState } from 'react';
import { site } from '@/content/site';
import s from './insights.module.css';

export default function SocialShare({ title, slug }) {
  const [copied, setCopied] = useState(false);
  const url = `${site.url}/insights/${slug}`;
  const enc = encodeURIComponent;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link', url);
    }
  };

  return (
    <div className={s.share}>
      <h2 className={s.shareH}>Share</h2>
      <a className={s.shareLink} target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`}>LinkedIn</a>
      <a className={s.shareLink} target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`}>X</a>
      <a className={s.shareLink} href={`mailto:?subject=${enc(title)}&body=${enc(url)}`}>Email</a>
      <button type="button" className={s.shareLink} onClick={copy} aria-live="polite">{copied ? 'Copied' : 'Copy link'}</button>
    </div>
  );
}
