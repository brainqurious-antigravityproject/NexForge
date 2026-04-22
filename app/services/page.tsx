import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — WordPress, Shopify, Wix Studio & Next.js Websites | Sitecraf Delhi',
  description: 'Sitecraf builds WordPress, Shopify, Wix Studio, and custom Next.js websites for Indian businesses. AI chatbots in Hindi & English. AI image generation. Fixed pricing from ₹6,000. New Delhi.',
  keywords: [
    'website development services New Delhi',
    'Shopify to Wix Studio migration India',
    'AI chatbot Hindi English India',
    'custom website development Delhi',
    'AI image generation India',
    'business automation India',
    'Next.js website developer Delhi',
    'website developer for Indian B2B brands'
  ],
  openGraph: {
    title: 'Services — Website, AI Chatbot & Automation | Sitecraf New Delhi',
    description: 'Custom websites, Shopify migrations, AI chatbots in Hindi & English, AI image generation — flat pricing, 3-week delivery, New Delhi.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: { canonical: 'https://sitecraf.com/services' }
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--color-bg)]">
      {/* SECTION 1 — Page Hero */}
      <section aria-label="Services Hero" className="w-full pt-32 pb-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[var(--color-primary-border)] bg-[var(--color-primary)]/[0.08] text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-8 anim-reveal is-visible">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            6 Services · Fixed Pricing · New Delhi
          </div>

          {/* H1 */}
          <h1 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            Websites, AI Chatbots &amp; Automation<br />
            <span className="text-[var(--color-primary)]">Built for Indian Businesses.</span>
          </h1>

          {/* Subheading */}
          <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl mx-auto mt-4 leading-relaxed anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            WordPress, Shopify, Wix Studio, or custom Next.js — we build the right website for your budget and your business. Flat pricing. 2–3 week delivery. No hidden fees.
          </p>

          {/* Stats Bar */}
          <div className="mt-12 border-t border-b border-[var(--color-border)] py-8 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-2xl font-[family-name:var(--font-display)]">6 Services</span>
                <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Available</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-2xl font-[family-name:var(--font-display)]">From ₹6,000</span>
                <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Starting Price</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-2xl font-[family-name:var(--font-display)]">2–3 Weeks</span>
                <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Avg. Delivery</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-2xl font-[family-name:var(--font-display)]">₹0</span>
                <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mt-1">Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Service Jump Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 anim-reveal is-visible" style={{ animationDelay: '400ms' }}>
            {[
              { label: 'WordPress', href: '#service-wordpress' },
              { label: 'Shopify', href: '#service-shopify' },
              { label: 'Wix Studio', href: '#service-wix' },
              { label: 'Next.js', href: '#service-nextjs' },
              { label: 'AI Chatbot', href: '#service-chatbot' },
              { label: 'AI Images', href: '#service-ai-images' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full text-[length:var(--text-xs)] font-medium border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2 — Service Finder / Intent Selector */}
      <section aria-label="Find Your Service" className="w-full py-16 px-6 bg-[var(--color-surface)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">

          {/* Header */}
          <div className="mb-10 text-center anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
              Find Your Fit
            </span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-3">
              Not sure where to start?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-xl mx-auto">
              Pick what describes your situation — we&apos;ll point you to the right service.
            </p>
          </div>

          {/* Intent Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>

            {/* Tile 1 — Website */}
            <a href="#service-wordpress" className="group bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)]/[0.04] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 cursor-pointer">
              <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <div className="flex-grow">
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-relaxed mb-3 italic">
                  &ldquo;My business doesn&apos;t have a proper website — or my current one is embarrassing.&rdquo;
                </p>
                <p className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">
                  You need a website.
                </p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">
                  WordPress, Shopify, Wix Studio, or Next.js — depending on your goals.
                </p>
              </div>
              <div className="flex items-center gap-1 text-[var(--color-primary)] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest group-hover:gap-2 transition-all duration-200">
                See Website Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* Tile 2 — AI Tools */}
            <a href="#service-chatbot" className="group bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)]/[0.04] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 cursor-pointer">
              <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <path d="M8 10h.01M12 10h.01M16 10h.01"/>
                </svg>
              </div>
              <div className="flex-grow">
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-relaxed mb-3 italic">
                  &ldquo;I&apos;m spending too much time answering the same customer questions — or my product images look bad.&rdquo;
                </p>
                <p className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">
                  You need AI tools.
                </p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">
                  An AI Chatbot handles queries 24/7. AI Image Generation fixes your product visuals.
                </p>
              </div>
              <div className="flex items-center gap-1 text-[var(--color-primary)] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest group-hover:gap-2 transition-all duration-200">
                See AI Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* Tile 3 — Automation */}
            <a href="#service-automation" className="group bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)]/[0.04] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 cursor-pointer">
              <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div className="flex-grow">
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-relaxed mb-3 italic">
                  &ldquo;My website exists — but leads don&apos;t reach me, or my tools don&apos;t talk to each other.&rdquo;
                </p>
                <p className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">
                  You need automation.
                </p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">
                  We connect WhatsApp, CRM, Google Sheets, booking calendars, and payment gateways to your site.
                </p>
              </div>
              <div className="flex items-center gap-1 text-[var(--color-primary)] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest group-hover:gap-2 transition-all duration-200">
                See Automation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

          </div>

          {/* Bottom nudge */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)]">
              Still not sure? Book a free 30-minute call — we&apos;ll tell you exactly what you need (and what you don&apos;t).
            </p>
            <a
              href="https://wa.me/919599143235"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[var(--color-primary)] text-[#000000] rounded-full px-5 py-2.5 text-[length:var(--text-xs)] font-semibold hover:bg-[var(--color-primary-hover)] transition-colors duration-200"
            >
              Book a Free Call →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3 — Individual Service Cards */}
      <section aria-label="Our Services" className="w-full py-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">

          {/* Section Header */}
          <div className="mb-12 anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">Our Services</span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-4">
              Six ways we help Indian businesses grow
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl">
              Each service is scoped, quoted, and delivered separately. Pick one or combine them — no bundle pressure.
            </p>
          </div>

          <div className="flex flex-col gap-6">

            {/* CARD 1 — WordPress */}
            <div id="service-wordpress" className="bg-[var(--color-surface)] border border-[var(--color-primary-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
              <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
                Most Popular
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">WordPress Website</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">Best for service businesses, agencies, blogs &amp; SEO-driven brands.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Mobile-first, SEO-ready build from day one',
                      'Easy content management — your team can update it',
                      '1,000+ plugin ecosystem for any functionality',
                      '2 weeks post-launch support included'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[var(--color-text-faint)] text-xs italic">NOT for: Businesses needing a fully managed, zero-maintenance solution.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center w-full">
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Global Market Share</span>
                    <span className="text-[var(--color-primary)] font-bold text-5xl font-[family-name:var(--font-display)]">43%</span>
                    <span className="block text-[var(--color-text-muted)] text-sm mt-2">of all websites run on WordPress</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">2–3 weeks</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Price</span>
                    <span className="text-[var(--color-text)] font-medium">From ₹6,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

            {/* CARD 2 — Shopify */}
            <div id="service-shopify" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '150ms' }}>
              <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
                E-Commerce
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">Shopify Store</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">Best for D2C brands, product sellers &amp; businesses needing inventory and payments.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Full product catalogue setup & configuration',
                      'Payment & shipping fully configured',
                      'Optimized checkout flow to reduce drop-offs',
                      'Multi-currency support for international selling'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[var(--color-text-faint)] text-xs italic">NOT for: Non-e-commerce businesses — you would pay for store features you never use.</p>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <p className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Already on Shopify but not selling online? Migrate to Wix Studio and save:</p>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex justify-between items-center">
                    <span className="text-[var(--color-text-muted)] text-sm">Shopify Cost</span>
                    <span className="text-red-400 font-bold">₹2,000/mo</span>
                  </div>
                  <div className="bg-[var(--color-primary)]/[0.08] border border-[var(--color-primary-border)] rounded-xl p-4 flex justify-between items-center">
                    <span className="text-[var(--color-text-muted)] text-sm">Wix Studio Cost</span>
                    <span className="text-[var(--color-primary)] font-bold">₹450/mo</span>
                  </div>
                  <div className="bg-[#00c8c8]/[0.08] border border-[#00c8c8]/20 rounded-xl p-4 flex justify-between items-center">
                    <span className="text-[var(--color-text-muted)] text-sm">Annual Saving</span>
                    <span className="text-[#00c8c8] font-bold">₹18,600/yr</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">2–4 weeks</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Price</span>
                    <span className="text-[var(--color-text)] font-medium">From ₹15,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

            {/* CARD 3 — Wix Studio */}
            <div id="service-wix" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
              <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
                Fastest Launch
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">Wix Studio Website</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">Best for local businesses, clinics, restaurants &amp; teams who want to self-manage content.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Visual builder — edit anything without a developer',
                      'Fast delivery, polished professional design',
                      'Perfect for service businesses & portfolios',
                      'Shopify migration available — save ₹18,600/yr'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[var(--color-text-faint)] text-xs italic">NOT for: Businesses needing complex custom functionality or deep API integrations.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center w-full">
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Fastest Delivery</span>
                    <span className="text-[var(--color-primary)] font-bold text-5xl font-[family-name:var(--font-display)]">2 Wks</span>
                    <span className="block text-[var(--color-text-muted)] text-sm mt-2">live on your domain — fastest of all 4 platforms</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">2–3 weeks</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Price</span>
                    <span className="text-[var(--color-text)] font-medium">From ₹10,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

            {/* CARD 4 — Next.js */}
            <div id="service-nextjs" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '250ms' }}>
              <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
                Max Performance
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">Custom Next.js Website</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">Best for performance-critical sites, custom web apps &amp; AEO-first builds.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'No templates — built entirely from scratch',
                      'Near-perfect Google PageSpeed scores',
                      'Free hosting on Vercel — zero hosting cost, forever',
                      '100% code ownership — no platform lock-in ever'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[var(--color-text-faint)] text-xs italic">NOT for: Businesses needing a very fast, low-budget turnaround.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center w-full">
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Google PageSpeed</span>
                    <span className="text-[var(--color-primary)] font-bold text-5xl font-[family-name:var(--font-display)]">99/100</span>
                    <span className="block text-[var(--color-text-muted)] text-sm mt-2">consistently achievable on custom Next.js builds</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">3–5 weeks</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Price</span>
                    <span className="text-[var(--color-text)] font-medium">From ₹15,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

            {/* ROW — AI Chatbot + AI Images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* CARD 5 — AI Chatbot */}
              <div id="service-chatbot" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col relative anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
                <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-[var(--color-primary-border)]">
                  Hindi + English
                </div>
                <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M8 10h.01M12 10h.01M16 10h.01"/>
                  </svg>
                </div>
                <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">AI Chatbot</h3>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6 flex-grow">For businesses losing leads after hours — handles queries 24/7 in Hindi, Hinglish &amp; English.</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Hindi, Hinglish & English (unique in India)',
                    'Trained on your products, pricing & FAQs',
                    'Lead capture & qualification while you\'re offline',
                    '1-line embed widget — on any website'
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="block text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest mb-1">Timeline</span>
                      <span className="text-[var(--color-text)] text-sm font-medium">1–3 weeks</span>
                    </div>
                    <div>
                      <span className="block text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest mb-1">Price</span>
                      <span className="text-[var(--color-text)] text-sm font-medium">From ₹12,000</span>
                    </div>
                  </div>
                  <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] text-sm font-medium hover:underline">Get a Quote →</a>
                </div>
              </div>

              {/* CARD 6 — AI Image Generation */}
              <div id="service-ai-images" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col relative anim-reveal is-visible" style={{ animationDelay: '350ms' }}>
                <div className="absolute top-6 right-6 bg-white/5 text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-[var(--color-border)]">
                  Add-on Available
                </div>
                <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">AI Image Generation</h3>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6 flex-grow">For businesses with bad product photos — professional visuals at a fraction of studio cost.</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'E-commerce catalog & product visuals',
                    'Batch delivery — multiple images at once',
                    'On-brand styling & background replacement',
                    'No studio booking, no photographer fees'
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="block text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest mb-1">Timeline</span>
                      <span className="text-[var(--color-text)] text-sm font-medium">3–5 days</span>
                    </div>
                    <div>
                      <span className="block text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest mb-1">Price</span>
                      <span className="text-[var(--color-text)] text-sm font-medium">From ₹3,000</span>
                    </div>
                  </div>
                  <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] text-sm font-medium hover:underline">Get a Quote →</a>
                </div>
              </div>

            </div>

            {/* CARD 7 — Automation */}
            <div id="service-automation" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '400ms' }}>
              <div className="absolute top-6 right-6 bg-white/5 text-[var(--color-text-muted)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-border)]">
                Add-on Available
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">Automation &amp; API Integrations</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">For businesses where leads go missing or tools don&apos;t talk to each other.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'WhatsApp + email lead notifications — instant alerts',
                      'CRM & Google Sheets sync — zero manual data entry',
                      'Calendar & booking integrations',
                      'Payment gateway setup — Razorpay & Stripe'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center w-full">
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Fastest Turnaround</span>
                    <span className="text-[var(--color-primary)] font-bold text-5xl font-[family-name:var(--font-display)]">3–7</span>
                    <span className="block text-[var(--color-text-muted)] text-sm mt-2">days from brief to live automation</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">3–7 days</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Price</span>
                    <span className="text-[var(--color-text)] font-medium">From ₹8,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — How It Works (5-Step Process) */}
      <section aria-label="How It Works" className="w-full py-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">
          <div className="mb-16 text-center md:text-left anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">Our Process</span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-4">From first call to live website — here&apos;s exactly what happens</h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl">
              No surprises. No delays. No ghosting after payment.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 border-l-2 border-dashed border-[var(--color-border)]"></div>
            
            <div className="flex flex-col gap-8">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
                <div className="hidden md:flex shrink-0 w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full items-center justify-center z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5ff3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex-grow relative overflow-hidden">
                  <div className="absolute -right-4 -top-8 text-[var(--color-primary)]/5 font-bold text-9xl select-none pointer-events-none">01</div>
                  <span className="block text-[var(--color-primary)] text-xs uppercase tracking-widest mb-2">Step 01</span>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-3">Free Discovery Call</h3>
                  <div className="inline-block bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-3 py-1 text-xs mb-4">30 mins</div>
                  <p className="text-[var(--color-text-muted)] mb-4">No hard sell. Listen first, recommend right solution.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Discuss your goals</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Review current website</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Honest recommendations</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
                <div className="hidden md:flex shrink-0 w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full items-center justify-center z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5ff3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex-grow relative overflow-hidden">
                  <div className="absolute -right-4 -top-8 text-[var(--color-primary)]/5 font-bold text-9xl select-none pointer-events-none">02</div>
                  <span className="block text-[var(--color-primary)] text-xs uppercase tracking-widest mb-2">Step 02</span>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-3">Written Quote &amp; Scope</h3>
                  <div className="inline-block bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-3 py-1 text-xs mb-4">Within 48 hours</div>
                  <p className="text-[var(--color-text-muted)] mb-4">Fixed price. Exact scope. No ambiguity. 50/50 payment.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Detailed proposal</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Fixed timeline</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> 50% advance payment</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
                <div className="hidden md:flex shrink-0 w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full items-center justify-center z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5ff3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                </div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex-grow relative overflow-hidden">
                  <div className="absolute -right-4 -top-8 text-[var(--color-primary)]/5 font-bold text-9xl select-none pointer-events-none">03</div>
                  <span className="block text-[var(--color-primary)] text-xs uppercase tracking-widest mb-2">Step 03</span>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-3">Design &amp; Content Setup</h3>
                  <div className="inline-block bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-3 py-1 text-xs mb-4">3–5 days</div>
                  <p className="text-[var(--color-text-muted)] mb-4">Visual mockup shown before coding begins. You approve first.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Wireframing</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Content gathering</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Design approval</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 anim-reveal is-visible" style={{ animationDelay: '400ms' }}>
                <div className="hidden md:flex shrink-0 w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full items-center justify-center z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5ff3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex-grow relative overflow-hidden">
                  <div className="absolute -right-4 -top-8 text-[var(--color-primary)]/5 font-bold text-9xl select-none pointer-events-none">04</div>
                  <span className="block text-[var(--color-primary)] text-xs uppercase tracking-widest mb-2">Step 04</span>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-3">Build &amp; Review</h3>
                  <div className="inline-block bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-3 py-1 text-xs mb-4">1–3 weeks</div>
                  <p className="text-[var(--color-text-muted)] mb-4">Live preview link. Two revision rounds. WhatsApp updates.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Development phase</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Live staging link</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> 2 rounds of revisions</li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 anim-reveal is-visible" style={{ animationDelay: '500ms' }}>
                <div className="hidden md:flex shrink-0 w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full items-center justify-center z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5ff3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a15.4 15.4 0 0 0 5-5l.5-.5a15.4 15.4 0 0 0-5-5l-.5.5a15.4 15.4 0 0 0-5 5l-.5.5z"></path>
                    <path d="M12 15l-3-3a22 22 0 0 1-3-3 22 22 0 0 1 3-3 22 22 0 0 1 3 3 22 22 0 0 1 3 3l-3 3z"></path>
                    <path d="M9 12l-3 3"></path>
                  </svg>
                </div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex-grow relative overflow-hidden">
                  <div className="absolute -right-4 -top-8 text-[var(--color-primary)]/5 font-bold text-9xl select-none pointer-events-none">05</div>
                  <span className="block text-[var(--color-primary)] text-xs uppercase tracking-widest mb-2">Step 05</span>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-3">Launch &amp; Handover</h3>
                  <div className="inline-block bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-3 py-1 text-xs mb-4">1–2 days</div>
                  <p className="text-[var(--color-text-muted)] mb-4">Live on your domain. All logins handed over. 2-week support.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Domain connection</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> Final 50% payment</li>
                    <li className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><span className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40" /> 2 weeks free support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Pricing Anchor / Transparency Strip */}
      <div className="w-full bg-[var(--color-surface)] py-16 px-6 overflow-hidden">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">
          <div className="flex flex-wrap justify-center gap-4 pb-4 anim-reveal is-visible">
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl p-5 flex-1 min-w-[180px]">
              <div className="text-[var(--color-text)] font-medium mb-2">Platform Website</div>
              <div className="text-[var(--color-primary)] font-bold text-xl mb-1">From ₹15,000</div>
              <div className="text-[var(--color-text-muted)] text-xs">1–3 weeks</div>
            </div>
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl p-5 flex-1 min-w-[180px]">
              <div className="text-[var(--color-text)] font-medium mb-2">Custom Website</div>
              <div className="text-[var(--color-primary)] font-bold text-xl mb-1">From ₹20,000</div>
              <div className="text-[var(--color-text-muted)] text-xs">2–5 weeks</div>
            </div>
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl p-5 flex-1 min-w-[180px]">
              <div className="text-[var(--color-text)] font-medium mb-2">AI Chatbot</div>
              <div className="text-[var(--color-primary)] font-bold text-xl mb-1">From ₹12,000</div>
              <div className="text-[var(--color-text-muted)] text-xs">1–3 weeks</div>
            </div>
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl p-5 flex-1 min-w-[180px]">
              <div className="text-[var(--color-text)] font-medium mb-2">Automation</div>
              <div className="text-[var(--color-primary)] font-bold text-xl mb-1">From ₹8,000</div>
              <div className="text-[var(--color-text-muted)] text-xs">3–7 days</div>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm text-center mt-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            All prices are fixed. No GST. No hidden charges. No hourly billing.
          </p>
        </div>
      </div>

      {/* SECTION 6 — FAQ (Services-specific) */}
      <section aria-label="Services FAQ" className="w-full py-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">
          <div className="mb-12 text-center md:text-left anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">Common Questions</span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)]">Answered honestly</h2>
          </div>

          <div className="flex flex-col anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do I need to buy a Shopify plan to start the migration?
                <svg className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                No. You only need your existing Shopify login credentials. We export your content and rebuild it on Wix Studio. You can cancel Shopify after your domain is transferred.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What if I need changes after the site goes live?
                <svg className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                Two revision rounds are included in every project. After that, small changes are ₹500 each. Larger updates are quoted separately. We send a clear price before touching anything.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Can the AI chatbot speak in Hindi?
                <svg className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                Yes — this is one of our core differentiators. The chatbot handles queries in Hindi, Hinglish, and English. You can set the default language per your audience.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How is payment structured?
                <svg className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                50% upfront, 50% before the final delivery. No payment before you&apos;ve seen and approved the design. No full upfront payment ever.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do you work with international clients?
                <svg className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                Yes. We work with clients across India, UAE, UK, and the US. All communication happens via WhatsApp and email. Payments accepted via bank transfer, Razorpay, or Wise.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Will I own the website after delivery?
                <svg className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                100%. Every line of code, every design file, every image — transferred to you completely. No license fees, no retainer required to keep your site running.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA Banner (Lead Conversion) */}
      <section aria-label="Call to Action" className="w-full py-16 px-6 bg-[var(--color-primary)] flex flex-col items-center text-center">
        <div className="w-full max-w-[var(--content-wide)] mx-auto flex flex-col items-center anim-reveal is-visible">
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#000000] mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-[#000000]/70 text-[length:var(--text-base)] max-w-xl mx-auto mt-4">
            Most clients start with a free 30-minute call. No pitch decks. No agency theatrics. Just an honest conversation about what you need, what it&apos;ll cost, and whether we&apos;re the right fit.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-primary)] rounded-full px-8 py-4 font-semibold hover:bg-[var(--color-surface-2)] transition-colors">
              Book a Free Call
            </a>
            <a href="mailto:support@sitecraf.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#000000]/20 text-[#000000] rounded-full px-8 py-4 font-semibold hover:bg-[var(--color-bg)]/[0.08] transition-colors">
              Email Us Instead
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
