export function trackEvent(name, params = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function' && name) {
      window.gtag('event', name, params);
    }
  } catch {
    // Analytics must never interrupt user actions
  }
}

