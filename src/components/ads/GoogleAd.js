'use client';

import { useEffect, useRef } from 'react';

export default function GoogleAd({
    adSlot,
    adFormat = 'auto',
    fullWidthResponsive = true,
    className = ''
}) {
    const initializedRef = useRef(false);
    const insRef = useRef(null);

    useEffect(() => {
        // Prevent pushing ads multiple times
        if (initializedRef.current) return;

        // Ensure the ad element is present in the DOM before pushing
        if (insRef.current && typeof window !== 'undefined' && window.adsbygoogle) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                initializedRef.current = true;
            } catch (err) {
                console.error('AdSense Error:', err);
            }
        }
    }, []);

    // Check if we are in development mode to prevent an empty gap where ad should be
    const isDev = process.env.NODE_ENV === 'development';

    if (isDev) {
        return (
            <div className={`ad-placeholder ${className}`} style={{
                background: 'rgba(128, 128, 128, 0.1)',
                border: '1px dashed rgba(128, 128, 128, 0.4)',
                textAlign: 'center',
                padding: '20px',
                color: 'var(--color-text-muted)',
                minHeight: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px'
            }}>
                <small>Google Ad Placeholder<br />(AdSlot: {adSlot})</small>
            </div>
        );
    }

    return (
        <div style={{ overflow: 'hidden', minHeight: '250px' }} className={className}>
            <ins
                ref={insRef}
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ACCOUNT}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    );
}
