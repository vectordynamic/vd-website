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
  overlapWindow:
    '24/7 dedicated client support · Daily live engineering overlap & shift-aligned teams for US, UK, EU, Gulf & APAC',
  responseSla: '24/7 client desk with direct senior engineer response',
  tagline: 'Custom software, ERP, AI, and enterprise integrations built to scale and kept running.',
  description:
    'Vector Dynamic is a senior engineering team that builds, integrates, and maintains custom software, ERP and business systems, AI-powered products, and workflow automation for growing B2B companies.',
  social: {
    linkedin: 'https://www.linkedin.com/company/vectordynamic',
    github: 'https://github.com/vectordynamic',
    facebook: 'https://www.facebook.com/vectordynamicltd',
  },
  // Populate with { name, role, bio, linkedin } objects to display individual founder cards on /about and /
  founders: [],
};

export const bookHref = '/book';
export const auditHref = '/audit';
export const ctaHref = '/book';
