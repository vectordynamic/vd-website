'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/ui/Reveal';
import { workItems, workPractices } from '@/content/work';
import s from './work.module.css';

export default function WorkShowcase() {
  const [activePractice, setActivePractice] = useState('all');

  const flagship = workItems[0];
  const filtered =
    activePractice === 'all'
      ? workItems
      : workItems.filter((w) => w.practice === activePractice);

  const countFor = (id) =>
    id === 'all' ? workItems.length : workItems.filter((w) => w.practice === id).length;

  return (
    <>
      {flagship && activePractice === 'all' && (
        <Reveal className={s.featured}>
          <div className={s.featuredTop}>
            <span className={s.domainBadgeDark}>{flagship.domainBadge}</span>
            <span className={s.practiceTag}>{flagship.practiceLabel}</span>
          </div>
          <h2 className={s.featuredTitle}>
            {flagship.name}: {flagship.headline}
          </h2>
          <p className={s.featuredSummary}>{flagship.summary}</p>
          {flagship.image && (
            <div className={s.featuredImageFrame}>
              <Image
                src={flagship.image}
                alt={flagship.alt || `${flagship.name} architecture schematic`}
                width={1200}
                height={670}
                priority
                sizes="(max-width: 900px) 100vw, 1120px"
                className={s.featuredImage}
              />
            </div>
          )}
          <div className={s.miniPipeline}>
            {flagship.architecture.map((st) => (
              <div key={st.stage} className={s.miniStage}>
                <strong>{st.stage}</strong>
                {st.detail}
              </div>
            ))}
          </div>
          <LinkButton href={`/work/${flagship.slug}`}>
            Inspect {flagship.name} case study &amp; architecture
          </LinkButton>
        </Reveal>
      )}

      <div className={s.filterBar} role="tablist" aria-label="Filter case studies by engineering practice">
        {workPractices.map((p) => {
          const isActive = activePractice === p.id;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActivePractice(p.id)}
              className={`${s.filterBtn} ${isActive ? s.filterBtnActive : ''}`}
            >
              <span>{p.label}</span>
              <span className={s.filterCount}>{countFor(p.id)}</span>
            </button>
          );
        })}
      </div>

      <Reveal className={s.cards}>
        {filtered.map((it, idx) => (
          <Link key={it.slug} href={`/work/${it.slug}`} className={s.card}>
            <div>
              <span className={s.cardIndex}>
                {String(workItems.findIndex((w) => w.slug === it.slug) + 1).padStart(2, '0')}
                {' // '}
                {it.practiceLabel}
              </span>
              <h2 className={s.cardName}>{it.name}</h2>
              <p className={s.cardDomain}>{it.domainBadge}</p>
              {it.businessNeeds && it.businessNeeds.length > 0 && (
                <ul className={s.cardNeedsPreview}>
                  {it.businessNeeds.slice(0, 2).map((need) => (
                    <li key={need}>{need}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className={s.cardHeadline}>{it.headline}</p>
              <p className={s.cardSummary}>{it.summary}</p>
              {it.image && (
                <div className={s.cardImageFrame}>
                  <Image
                    src={it.image}
                    alt={it.alt || `${it.name} architecture schematic`}
                    width={1200}
                    height={670}
                    priority={idx < 2}
                    sizes="(max-width: 768px) 100vw, 560px"
                    className={s.cardImage}
                  />
                </div>
              )}
              <div className={s.stackRow}>
                {it.stack.map((tech) => (
                  <span key={tech} className={s.chip}>
                    {tech}
                  </span>
                ))}
              </div>
              <span className={s.readMore}>
                Open full case study &amp; architecture →
              </span>
            </div>
          </Link>
        ))}
      </Reveal>
    </>
  );
}
