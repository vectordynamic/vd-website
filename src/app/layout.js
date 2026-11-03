import { Suspense } from 'react';
import { Newsreader, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import UtmCapture from '@/components/analytics/UtmCapture';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CookieBanner from '@/components/ui/CookieBanner';
import { site } from '@/content/site';
import { jsonLd } from '@/lib/jsonld';
import '@/styles/globals.css';
import '@/styles/brand.css';

const serif = Newsreader({ subsets: ['latin'], variable: '--vd-font-serif', display: 'swap' });
const sans = Hanken_Grotesk({ subsets: ['latin'], variable: '--vd-font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--vd-font-mono', display: 'swap' });

const TITLE = 'Vector Dynamic | Custom Software, ERP and AI, Built to Scale';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: TITLE, template: '%s | Vector Dynamic' },
  description: site.description,
  keywords: [
    'custom software development',
    'custom ERP development',
    'AI development company',
    'workflow automation',
    'software development partner',
    'Odoo implementation',
    'RAG knowledge base',
    'B2B SaaS engineering',
    'legacy modernization',
  ],
  authors: [{ name: 'Vector Dynamic' }],
  creator: 'Vector Dynamic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: 'Vector Dynamic',
    title: TITLE,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: site.description,
    creator: '@vectordynamic',
  },
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.svg`,
  email: site.email,
  description: site.description,
  sameAs: Object.values(site.social).filter(Boolean),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: site.email,
    availableLanguage: ['en'],
  },
  ...(site.phone ? { telephone: site.phone } : {}),
  ...(site.address ? { address: site.address } : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics GA_MEASUREMENT_ID="G-KHBTJM0J0W" />
          <UtmCapture />
        </Suspense>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organization) }} />
        <ScrollProgress />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
