// Single source of truth for company facts. Unknown facts stay null: never invent them.
export const site = {
  name: 'Vector Dynamic',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com',
  email: 'info@vectordynamic.com',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || null, // Cal.com or Calendly embed/link URL
  demoVideoUrl: process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || null, // Optional 2-minute Loom / YouTube embed URL
  phone: null,
  address: null,
  foundedYear: null,
  location: null,
  overlapWindow: 'Fixed daily 4-hour live overlap with US, UK, European, Gulf, and APAC business hours',
  responseSla: 'Direct reply from a senior engineer within one business day',
  tagline: 'Custom software, ERP and AI, built to scale and kept running.',
  description:
    'Vector Dynamic is a senior engineering team that builds custom software, ERP and business systems, AI-powered products and workflow automation for growing B2B companies—and keeps them running.',
  social: {
    linkedin: 'https://linkedin.com/company/vectordynamic',
    twitter: 'https://twitter.com/vectordynamic',
    github: 'https://github.com/vectordynamic',
  },
  // Populate with { name, role, bio, linkedin } objects to display individual founder cards on /about and /
  founders: [],
};

export const bookHref = '/book';
export const auditHref = '/audit';
export const ctaHref = '/book';
