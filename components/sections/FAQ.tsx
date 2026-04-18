'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaqItem } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Do I need to be a large business to work with you?',
    answer: 'Not at all. We work with small and medium-sized Indian businesses — local service providers, manufacturers, exporters, and D2C brands. Whether you need a simple ₹12,000 showcase website on Wix Studio or a ₹60,000+ custom Next.js build with chatbot, we have an option for your budget and your platform.',
    category: 'process'
  },
  {
    id: '2',
    question: 'Which platform should I choose — WordPress, Shopify, Wix, or custom?',
    answer: 'It depends entirely on what your business needs. WordPress is best for SEO-driven content sites and service businesses. Shopify is best for online stores and D2C brands selling products. Wix Studio is best for fast, editable business websites. Custom Next.js is best when you need maximum performance, custom features, or AEO-first structure. We recommend the right platform after understanding your goals — not based on which one earns us more.',
    category: 'process'
  },
  {
    id: '3',
    question: 'Can you add an AI chatbot to my existing website?',
    answer: 'Yes. If your website is on WordPress, Shopify, Wix, or is a custom-coded site, we can add a chatbot that answers your visitor queries in Hindi, Hinglish, or English — trained on your product details, pricing, and FAQs. It captures leads even at 2am when your team is offline.',
    category: 'tech'
  },
  {
    id: '4',
    question: 'What is AEO and why does it matter for my website?',
    answer: 'AEO stands for Answer Engine Optimization — the practice of structuring your website so that AI tools like ChatGPT, Perplexity, Google AI Overviews, and voice assistants can find, understand, and cite your business as a direct answer. As more people search through AI rather than traditional search, AEO ensures your website is visible in that new layer of discovery. We build AEO-ready structure into every project — schema markup, clear question-and-answer content, and structured data that answer engines can parse.',
    category: 'tech'
  },
  {
    id: '5',
    question: 'I need product images but do not have a photographer. What can you do?',
    answer: 'We can generate studio-quality product images and website banners using AI — from just your raw product photographs. We have generated 400+ images for home furnishing, fabric, and consumer product brands. Pricing is per-batch and significantly cheaper than a studio photoshoot.',
    category: 'tech'
  },
  {
    id: '6',
    question: 'How much does a website cost?',
    answer: 'Wix Studio websites start from ₹10,000. WordPress websites start from ₹12,000. Shopify stores start from ₹18,000. Webflow sites start from ₹20,000. Custom Next.js websites start from ₹22,000. Add-ons like AI chatbot start from ₹12,000 and AI image generation from ₹5,000 per batch. All prices are fixed and quoted upfront — no surprises, no GST added on top.',
    category: 'pricing'
  },
  {
    id: '7',
    question: 'Who will I be communicating with during the project?',
    answer: 'Directly with our team — the people building your website. There is no account manager or middleman. You can reach us on WhatsApp, email, or call. Most project updates happen on WhatsApp because that is what works best for Indian clients.',
    category: 'process'
  },
  {
    id: '8',
    question: 'What if I need changes after the website launches?',
    answer: 'Two weeks of post-launch support is included in every project at no extra cost — regardless of platform. After that, we are available for changes on an hourly or per-task basis. Maintenance retainer packages are also available if you need ongoing updates, content changes, or security management.',
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
      >
        <span className="font-[family-name:var(--font-display)] font-medium text-[#e8e8f0] text-[length:var(--text-base)] pr-8 group-hover:text-[#b5ff3e] active:text-[#b5ff3e] transition-colors">
          {item.question}
        </span>
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
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            Your Questions, Answered Honestly
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-4 leading-relaxed">
            Plain answers on platforms, pricing, AEO, and what to expect when you work with us.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
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
          <Link 
            href="#contact" 
            className="flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#00e5e5] hover:shadow-[var(--glow-sm)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)] font-semibold"
          >
            Book a Call →
          </Link>
        </div>

      </div>
    </section>
  );
}
