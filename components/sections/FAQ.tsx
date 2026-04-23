'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaqItem } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqItems: FaqItem[] = [
  {
    id: '1',
    question: "How do I know you won't take my advance and go silent?",
    answer: "We get it — half the horror stories Indian business owners share about web developers involve exactly this. Here's how we've structured things to protect you: we don't ask for full payment upfront. Work starts with a 50% advance, and the remaining payment is due only after you've reviewed and approved the completed website. You see the site before we see the final payment. We also give you a fixed delivery timeline in writing before work begins — not a vague estimate.",
    category: 'process'
  },
  {
    id: '2',
    question: "What do I need to provide before you can start building?",
    answer: "Three things: your business details (what you do, who you serve, your location), any logos or brand assets you have (even a rough one is fine — we can work with it), and your content or a rough idea of what pages you need. That's it. You don't need a written brief, a wireframe, or prior website experience. We ask a structured set of questions during onboarding that pulls out everything we need. Most clients are surprised by how little effort is required from their side.",
    category: 'process'
  },
  {
    id: '3',
    question: "Your timeline says 2–3 weeks. Is that realistic or just marketing?",
    answer: "It's realistic — with one condition: the timeline depends on how quickly you review and give feedback. Our build side is fast; the main delay in most projects is waiting on client approvals. We send you a clear feedback schedule during onboarding. If you respond within 24–48 hours at each stage, 2–3 weeks is very achievable. We've launched projects in under 12 days when clients were responsive. We've also had projects stretch to 6 weeks when feedback came in slowly. The timeline is a shared responsibility.",
    category: 'process'
  },
  {
    id: '4',
    question: "How much does a website cost — give me a real number.",
    answer: "WordPress websites start from ₹6,000. Wix Studio websites start from ₹10,000. Shopify stores start from ₹15,000. Custom Next.js websites start from ₹15,000. AI chatbot add-on starts from ₹12,000. AI-generated product images from ₹5,000 per batch. All prices are fixed and quoted in writing before work begins — no surprise invoices, no GST added on top. The final quote depends on the number of pages and features you need. Most small business websites land between ₹8,000–₹25,000.",
    category: 'pricing'
  },
  {
    id: '5',
    question: "What's included in the price — and what costs extra?",
    answer: "Every project includes: design, development, mobile responsiveness, basic SEO setup, and two weeks of post-launch support. What costs extra: copywriting (we can write your content, priced separately), domain registration, hosting subscription fees (for platforms like Shopify or Wix that charge monthly), and add-ons like AI chatbot or image generation. We tell you about every extra cost before we start — nothing gets added silently mid-project.",
    category: 'pricing'
  },
  {
    id: '6',
    question: "I'm not technical. Can I update the website myself after it launches?",
    answer: "Yes — and this is something we specifically design for. On WordPress and Wix Studio, you can edit text, swap images, add blog posts, and update prices without touching a single line of code. We record a short walkthrough video of your specific website after launch so you know exactly how to make the most common changes. For Next.js custom builds, minor content updates are handled by us — or we can set up a headless CMS so your team can self-manage.",
    category: 'tech'
  },
  {
    id: '7',
    question: "What are SEO, AEO, and GEO — and why does my business need them?",
    answer: "SEO helps your website rank in Google search results. AEO (Answer Engine Optimization) helps AI tools like Perplexity and Google AI Overviews cite your business as a direct answer to questions. GEO (Generative Engine Optimization) helps ChatGPT, Gemini, and Copilot mention your business when users ask for recommendations. Search behaviour is splitting across all three channels — Google alone is no longer enough. We build AEO and GEO-ready structure into every website: schema markup, Q&A content, clear entity signals, and fast Core Web Vitals. You don't need to understand the technical details — we handle it.",
    category: 'tech'
  },
  {
    id: '8',
    question: "What happens if something breaks after the website goes live?",
    answer: "Two weeks of post-launch support is included in every project at no extra charge. If something breaks — a form stops working, a page looks wrong on a specific device, an image doesn't load — we fix it, no questions asked, within that window. After two weeks, we're still available for changes and fixes on a per-task basis. For businesses that want ongoing maintenance, we offer monthly retainer packages that cover security updates, content changes, and performance monitoring.",
    category: 'support'
  }
];

function FaqAccordion({ item, isOpen, onToggle }: { item: FaqItem, isOpen: boolean, onToggle: () => void }) {
  const revealRef = useScrollReveal(0.15);
  
  return (
    <div 
      ref={revealRef as any}
      className="border-b border-white/[0.08] anim-reveal"
    >
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onToggle}
        aria-expanded={isOpen}
        suppressHydrationWarning
      >
        <h3 className="heading-sub font-[family-name:var(--font-display)] transition-colors pr-8 group-hover:text-[#b5ff3e] active:text-[#b5ff3e] text-[#e8e8f0]">
          {item.question}
        </h3>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/[0.2] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#b5ff3e] border-[#b5ff3e] text-black' : 'text-[#8888a0] group-hover:border-[#b5ff3e] group-hover:text-[#b5ff3e]'}`}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'process' | 'pricing' | 'tech' | 'support'>('all');

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'tech', label: 'Tech' },
    { id: 'support', label: 'Support' }
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a] px-6 border-t border-white/[0.05]">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-[800px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Frequently Asked Questions
          </span>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0]">
            Your Questions, Answered Honestly
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-4 leading-relaxed">
            The questions every Indian business owner actually asks — answered without the agency jargon.
          </p>
        </div>

        {/* Category Filter */}
        {/* Note: Do not use non-deterministic attributes here. Hydration mismatches can occur if browser extensions inject attributes like fdprocessedid. */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              suppressHydrationWarning
              className={`px-4 py-2 rounded-full text-[length:var(--text-xs)] font-medium transition-all duration-200 ${
                activeCategory === cat.id 
                  ? 'bg-[#b5ff3e] text-[#000000]' 
                  : 'bg-[#111111] text-[#8888a0] hover:text-[#e8e8f0] border border-white/[0.08] hover:border-white/[0.2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="anim-stagger">
          {filteredItems.map((item) => (
            <FaqAccordion 
              key={item.id} 
              item={item} 
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 flex justify-center">
          <a 
            href="tel:+919599143235" 
            className="flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#00e5e5] hover:shadow-[var(--glow-sm)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)] font-semibold"
          >
            Book a Call →
          </a>
        </div>

      </div>
    </section>
  );
}
