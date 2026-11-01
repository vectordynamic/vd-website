// Single source of truth for company facts. Unknown facts stay null: never invent them.
export const site = {
  name: 'Vector Dynamic',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com',
  email: 'info@vectordynamic.com',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || null, // Cal.com / Calendly link
  phone: null,
  address: null,
  foundedYear: null,
  location: 'Dhaka, Bangladesh',
  tagline: 'Custom software, ERP and AI, built to scale and kept running.',
  description:
    'Vector Dynamic builds custom software, ERP and business systems, AI and automation for growing B2B companies, then keeps them running.',
  social: {
    linkedin: 'https://linkedin.com/company/vectordynamic',
    twitter: 'https://twitter.com/vectordynamic',
    github: 'https://github.com/vectordynamic',
  },
};

export const ctaHref = site.bookingUrl || '/audit';
