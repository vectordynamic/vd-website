import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/lib/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import FloatingCTA from '@/components/ui/FloatingCTA';
import SmoothScroll from '@/components/ui/SmoothScroll';
import '@/styles/globals.css';
import '@/styles/components/buttons.css';
import '@/styles/components/cards.css';
import '@/styles/components/header.css';
import '@/styles/components/footer.css';
import '@/styles/components/forms.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://vectordynamic.com'),
  title: {
    default: 'Vector Dynamic | Enterprise Software & AI Solutions',
    template: '%s | Vector Dynamic',
  },
  description: 'Leading B2B & B2C software company delivering enterprise solutions, consumer apps, AI automation, and custom development. Transform your business or lifestyle with intelligent technology.',
  keywords: [
    // Core Business
    'B2B software', 'B2C applications', 'enterprise solutions', 'SaaS development', 'digital transformation', 
    // Products (Specific Long-tail)
    'project management software', 'team orchestration tools', 'Opsera',
    'AI virtual receptionist', 'automated front desk', 
    'inventory management system', 'business OS', 'Okebase',
    'bachelor home management', 'roommate expense tracker', 'Amardera',
    'tech news aggregator', 'AI newsletter', 'Sync Daily',
    'marketing automation AI', 'meta ads autopilot', 'AdVantage AI',
    // Services
    'custom software development', 'mobile app development', 'AI solutions',
    'custom LLM development', 'computer vision', 'autonomous agents',
    'CRM development', 'ERP source code', 'cloud migration'
  ],
  authors: [{ name: 'Vector Dynamic' }],
  creator: 'Vector Dynamic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vectordynamic.com',
    siteName: 'Vector Dynamic',
    title: 'Vector Dynamic | Enterprise Software & AI Solutions',
    description: 'Leading B2B & B2C software company delivering enterprise solutions, consumer apps, AI automation, and custom development.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vector Dynamic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vector Dynamic | Enterprise Software & AI Solutions',
    description: 'Leading B2B & B2C software company delivering enterprise solutions, consumer apps, AI automation, and custom development.',
    images: ['/og-image.png'],
    creator: '@vectordynamic',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KHBTJM0J0W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KHBTJM0J0W');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Vector Dynamic',
              url: 'https://vectordynamic.com',
              logo: 'https://vectordynamic.com/logo.png',
              sameAs: [
                'https://twitter.com/vectordynamic',
                'https://linkedin.com/company/vectordynamic',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-0123-456',
                contactType: 'customer service',
                areaServed: 'Worldwide',
                availableLanguage: 'en',
              },
              description: 'Leading B2B & B2C software company delivering enterprise solutions, consumer apps, AI automation, and custom development.',
              knowsAbout: ['B2B Software', 'Consumer Applications', 'AI Agents', 'SaaS'],
            }),
          }}
        />
        <ThemeProvider>
          {/* Skip to main content - Accessibility */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingCTA />
          <BackToTop />
          <SmoothScroll />
        </ThemeProvider>
      </body>
    </html>
  );
}
