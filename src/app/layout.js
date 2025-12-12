import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/lib/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import FloatingCTA from '@/components/ui/FloatingCTA';
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
  description: 'Leading software company delivering enterprise solutions, SaaS products, AI automation, and custom development. Transform your business with intelligent technology.',
  keywords: ['enterprise software', 'AI solutions', 'SaaS', 'custom development', 'digital transformation', 'CRM', 'ERP', 'automation'],
  authors: [{ name: 'Vector Dynamic' }],
  creator: 'Vector Dynamic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vectordynamic.com',
    siteName: 'Vector Dynamic',
    title: 'Vector Dynamic | Enterprise Software & AI Solutions',
    description: 'Leading software company delivering enterprise solutions, SaaS products, AI automation, and custom development.',
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
    description: 'Leading software company delivering enterprise solutions, SaaS products, AI automation, and custom development.',
    images: ['/og-image.png'],
    creator: '@vectordynamic',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
