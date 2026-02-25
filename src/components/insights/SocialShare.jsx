'use client';

import { FiTwitter, FiLinkedin, FiLink } from 'react-icons/fi';
import styles from '@/app/insights/[slug]/page.module.css';

export default function SocialShare({ title, slug }) {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/insights/${slug}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        // Optional: Add a toast notification here
    };

    return (
        <div className={styles.shareSection}>
            <h3 className={styles.shareTitle}>Share this insight</h3>
            <div className={styles.shareButtons}>
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.shareButton} ${styles.twitter}`}
                >
                    <FiTwitter /> Twitter
                </a>
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.shareButton} ${styles.linkedin}`}
                >
                    <FiLinkedin /> LinkedIn
                </a>
                <button
                    className={`${styles.shareButton} ${styles.copyLink}`}
                    onClick={handleCopyLink}
                >
                    <FiLink /> Copy Link
                </button>
            </div>
        </div>
    );
}
