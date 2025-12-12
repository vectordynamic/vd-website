'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useTheme } from '@/lib/ThemeContext';
import { navigation } from '@/data/navigation';

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Check if link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo">
            <Image 
              src="/logo.png" 
              alt="Vector Dynamic" 
              width={40} 
              height={40}
              priority
            />
            <span className="header-logo-text">Vector Dynamic</span>
          </Link>

          {/* Desktop Navigation - with active state */}
          <nav className="header-nav" role="navigation" aria-label="Main navigation">
            {navigation.main.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            <Button href="/contact" size="sm" className="desktop-main-cta">
              Get in Touch
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <button 
          className="mobile-nav-close"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>

        {navigation.main.map((item) => (
          <Link 
            key={item.name}
            href={item.href}
            className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-current={isActive(item.href) ? 'page' : undefined}
          >
            {item.name}
          </Link>
        ))}

        {/* Theme Toggle in Mobile Menu */}
        <button 
          onClick={toggleTheme}
          className="mobile-theme-toggle"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </nav>
    </header>
  );
}
