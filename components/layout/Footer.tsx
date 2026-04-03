'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NewsletterFormData, NewsletterStatus } from '@/types';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<NewsletterStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email } as NewsletterFormData),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="w-full flex flex-col">
      {/* SECTION A — Newsletter Strip */}
      <section className="w-full bg-[#0a0a0a] border-y border-white/[0.06] py-12 px-6">
        <div className="max-w-[960px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-xl mb-2">
              Stay Ahead of the Curve
            </h3>
            <p className="text-[#8888a0] text-sm">
              Textile industry insights, tech updates, and case studies — monthly.
            </p>
          </div>

          <div className="w-full md:w-auto md:min-w-[400px]">
            {status === 'success' ? (
              <div className="flex items-center gap-2 text-[#22c55e] font-medium py-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                ✓ You&apos;re subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    className="bg-[#111111] border border-white/[0.08] text-[#e8e8f0] placeholder:text-[#44445a] rounded-lg px-4 py-3 flex-1 focus:border-[#b5ff3e]/40 focus:outline-none min-w-0 disabled:opacity-50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-[#b5ff3e] text-[#000000] font-semibold px-6 py-3 rounded-lg hover:bg-[#00e5e5] transition-colors whitespace-nowrap disabled:opacity-70 flex items-center justify-center min-w-[120px]"
                  >
                    {status === 'loading' ? (
                      <svg className="animate-spin h-5 w-5 text-[#000000]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-[#ef4444] text-xs pl-1">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION B — Main Footer Grid */}
      <section className="w-full bg-[#000000] pt-16 pb-8 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            
            {/* Col 1: Brand */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-3">
                <svg viewBox="0 0 32 32" className="w-8 h-8">
                  <rect x="16" y="2" width="14" height="14" transform="rotate(45 16 2)" stroke="#00c8c8" strokeWidth="1.5" fill="none" />
                  <rect x="16" y="12" width="14" height="14" transform="rotate(45 16 12)" stroke="#00c8c8" strokeWidth="1.5" fill="none" />
                </svg>
                <span className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-xl tracking-tight">
                  NexForge
                </span>
              </Link>
              <p className="text-[#44445a] text-sm max-w-[200px]">
                Engineering digital products for textile brands since 2021.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <a href="#" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-[#8888a0] hover:border-[#b5ff3e]/30 hover:text-[#b5ff3e] transition-colors" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-[#8888a0] hover:border-[#b5ff3e]/30 hover:text-[#b5ff3e] transition-colors" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-[#8888a0] hover:border-[#b5ff3e]/30 hover:text-[#b5ff3e] transition-colors" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="flex flex-col">
              <h4 className="text-[#e8e8f0] text-xs uppercase tracking-widest font-semibold mb-5">Services</h4>
              <nav className="flex flex-col">
                <Link href="/services/saas" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">SaaS Development</Link>
                <Link href="/services/web-apps" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Web Applications</Link>
                <Link href="/services/ai" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">AI Integration</Link>
                <Link href="/services/ecommerce" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">B2B E-commerce</Link>
                <Link href="/services/chatbots" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">AI Chatbots</Link>
                <Link href="/services/design-systems" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Design Systems</Link>
              </nav>
            </div>

            {/* Col 3: Industries */}
            <div className="flex flex-col">
              <h4 className="text-[#e8e8f0] text-xs uppercase tracking-widest font-semibold mb-5">Industries</h4>
              <nav className="flex flex-col">
                <Link href="/industries/manufacturers" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Textile Manufacturers</Link>
                <Link href="/industries/yarn-fibre" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Yarn & Fibre</Link>
                <Link href="/industries/home-textiles" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Home Textiles</Link>
                <Link href="/industries/apparel" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Apparel Brands</Link>
                <Link href="/industries/exporters" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Fabric Exporters</Link>
                <Link href="/industries/retail" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Retail Chains</Link>
              </nav>
            </div>

            {/* Col 4: Company */}
            <div className="flex flex-col">
              <h4 className="text-[#e8e8f0] text-xs uppercase tracking-widest font-semibold mb-5">Company</h4>
              <nav className="flex flex-col">
                <Link href="/about" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">About NexForge</Link>
                <Link href="/case-studies" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Case Studies</Link>
                <Link href="/process" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Our Process</Link>
                <Link href="/blog" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Blog</Link>
                <Link href="/careers" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Careers</Link>
                <Link href="/press" className="text-[#44445a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Press Kit</Link>
              </nav>
            </div>

            {/* Col 5: Contact */}
            <div className="flex flex-col">
              <h4 className="text-[#e8e8f0] text-xs uppercase tracking-widest font-semibold mb-5">Contact</h4>
              <address className="flex flex-col not-italic gap-3">
                <a href="mailto:hello@nexforge.in" className="text-[#8888a0] text-sm hover:text-[#e8e8f0] transition-colors">hello@nexforge.in</a>
                <a href="tel:+919876543210" className="text-[#8888a0] text-sm hover:text-[#e8e8f0] transition-colors">+91 98765 43210</a>
                <span className="text-[#8888a0] text-sm">Ahmedabad, Gujarat</span>
                <span className="text-[#8888a0] text-sm">Mon–Fri, 10am–7pm IST</span>
              </address>
            </div>

          </div>

          {/* SECTION C — Bottom Bar */}
          <div className="border-t border-white/[0.05] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#44445a] text-xs text-center md:text-left">
              © 2026 NexForge Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-[#44445a] text-xs hover:text-[#8888a0] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[#44445a] text-xs hover:text-[#8888a0] transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-[#44445a] text-xs hover:text-[#8888a0] transition-colors">Cookie Policy</Link>
            </div>
            <p className="text-[#44445a] text-xs text-center md:text-right">
              Built with Next.js 15 + Vercel
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
