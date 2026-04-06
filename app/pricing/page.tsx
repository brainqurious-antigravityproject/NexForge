import { Metadata } from 'next';
import PricingClient from '@/components/sections/PricingClient';

export const metadata: Metadata = {
  title: 'Pricing — Website, AI Chatbot & Automation Packages | Sitecraf Delhi',
  description: 'Transparent, flat pricing for website development, AI chatbots, AI image generation, and automation. No hidden fees. No GST. Starting from ₹5,000. Based in New Delhi, India.',
  keywords: [
    'website development pricing India',
    'affordable website development Delhi',
    'AI chatbot price India',
    'Shopify website cost India',
    'Next.js website price Delhi',
    'web development packages India',
    'digital agency pricing New Delhi',
    'website cost for small business India'
  ],
  openGraph: {
    title: 'Pricing — Flat, Transparent Web & AI Packages | Sitecraf',
    description: 'No hidden fees. No GST. Flat pricing for websites, AI chatbots, image generation, and automation. New Delhi.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: { canonical: 'https://sitecraf.com/pricing' }
};

export default function PricingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#000000]">
      {/* SECTION 1 — Page Hero */}
      <section aria-label="Pricing Hero" className="w-full pt-32 pb-16 px-6 bg-[#000000] text-center">
        <div className="w-full md:w-[80%] max-w-none mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#b5ff3e]/[0.18] bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-8 anim-reveal is-visible">
            Transparent Pricing
          </div>
          
          <h1 className="font-[family-name:var(--font-display)] font-bold text-[length:var(--text-3xl)] text-[#e8e8f0] tracking-[-0.02em] leading-[1.15] anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            Flat Prices. <span className="text-[#b5ff3e]">No Surprises.</span> Ever.
          </h1>
          
          <p className="text-[#8888a0] text-[length:var(--text-base)] max-w-2xl mx-auto mt-4 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            Every project is quoted upfront at a fixed price.<br className="hidden sm:block" />
            No GST. No hourly billing. No revision fees in the fine print.<br className="hidden sm:block" />
            You know exactly what you&apos;re paying before we start.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-full px-5 py-2.5 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[#8888a0] text-sm">₹0 Hidden Fees</span>
            </div>
            <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-full px-5 py-2.5 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-[#8888a0] text-sm">No GST Charged</span>
            </div>
            <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-full px-5 py-2.5 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-[#8888a0] text-sm">50% Upfront Only</span>
            </div>
          </div>
        </div>
      </section>

      <PricingClient />
    </main>
  );
}
