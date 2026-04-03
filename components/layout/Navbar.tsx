'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Process', href: '/process' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      // Handle scrolled state for background
      setIsScrolled(currentScrollY > 20);
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#b5ff3e] text-[#000000] px-4 py-2 rounded-lg z-[100] font-medium"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ease-[var(--t-base)] ${
          isScrolled 
            ? 'bg-[#000000]/90 backdrop-blur-xl border-b border-white/[0.06]' 
            : 'bg-transparent'
        } ${
          scrollDirection === 'down' && isScrolled 
            ? '-translate-y-full' 
            : 'translate-y-0'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          
          {/* LEFT — SVG Logo + Brand Name */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg 
              viewBox="0 0 32 32" 
              className="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-[var(--glow-sm)]"
            >
              <rect x="16" y="2" width="14" height="14" transform="rotate(45 16 2)" stroke="#00c8c8" strokeWidth="1.5" fill="none" />
              <rect x="16" y="12" width="14" height="14" transform="rotate(45 16 12)" stroke="#00c8c8" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-xl tracking-tight">
              NexForge
            </span>
          </Link>

          {/* CENTER — Nav Links (Desktop) */}
          <nav className={`hidden md:flex items-center gap-8 ${isScrolled ? 'nav-scrolled' : ''}`}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#b5ff3e]' 
                      : 'text-[#8888a0] hover:text-[#e8e8f0]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT — Action cluster (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/[0.05] transition-colors text-[#e8e8f0]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              )}
            </button>
            <Link 
              href="/quote" 
              className="border border-[#b5ff3e]/[0.18] text-[#b5ff3e] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#b5ff3e]/[0.08] hover:shadow-[var(--glow-sm)] transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* MOBILE — Hamburger Menu Button */}
          <button
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            <span 
              className={`w-6 h-[2px] bg-[#e8e8f0] rounded-full transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`} 
            />
            <span 
              className={`w-6 h-[2px] bg-[#e8e8f0] rounded-full transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} 
            />
            <span 
              className={`w-6 h-[2px] bg-[#e8e8f0] rounded-full transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`} 
            />
          </button>
        </div>

        {/* MOBILE — Drawer */}
        <div 
          className={`md:hidden absolute top-[72px] left-0 right-0 overflow-hidden transition-all duration-300 ease-[var(--t-base)] ${
            isMobileMenuOpen ? 'max-h-[100dvh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#0a0a0a] border-b border-white/[0.08] flex flex-col px-6 py-4 shadow-2xl">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg py-4 border-b border-white/[0.04] transition-colors active:text-[#b5ff3e] active:bg-white/[0.02] ${
                    isActive ? 'text-[#b5ff3e]' : 'text-[#8888a0] hover:text-[#e8e8f0]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            <div className="pt-6 pb-4 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[#8888a0] text-sm">Theme</span>
                <button 
                  onClick={toggleTheme} 
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/[0.08] text-[#e8e8f0] hover:bg-white/[0.05] transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4"/>
                      <path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                    </svg>
                  )}
                </button>
              </div>
              
              <Link 
                href="/quote" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center border border-[#b5ff3e]/[0.18] text-[#b5ff3e] font-medium px-6 py-4 rounded-full hover:bg-[#b5ff3e]/[0.08] active:scale-[0.98] active:bg-[#b5ff3e]/[0.12] transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
