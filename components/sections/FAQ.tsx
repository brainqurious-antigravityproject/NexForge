'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaqItem } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Do I need to be a large business to work with you?',
    answer: 'Not at all. I work with small and medium-sized Indian businesses — local service providers, manufacturers, exporters, and D2C brands. Whether you need a simple ₹15,000 showcase website or a ₹60,000 custom build with chatbot, I have an option for your budget.',
    category: 'process'
  },
  {
    id: '2',
    question: 'My business is already on Shopify. Should I move to Wix Studio?',
    answer: 'If you are using Shopify only to showcase your products and not actively selling online, then yes — Wix Studio can do everything your site currently does at ₹450/month vs ₹2,000+/month. I handle the migration and preserve your entire design. If you are actively selling through Shopify, then staying on Shopify makes more sense.',
    category: 'pricing'
  },
  {
    id: '3',
    question: 'Can you add an AI chatbot to my existing website?',
    answer: 'Yes. If your website is on Shopify, Wix, or is a custom-coded site, I can add a chatbot that answers your visitor queries in Hindi, Hinglish, or English — trained on your product details, pricing, and FAQs. It captures leads even at 2am when you are offline.',
    category: 'tech'
  },
  {
    id: '4',
    question: 'I need product images for my website but don\'t have a photographer. What can you do?',
    answer: 'I can generate studio-quality product images and website banners using AI — from just your raw product photographs. I have generated 400+ images for home furnishing and fabric brands. Pricing is per-batch and significantly cheaper than a studio photoshoot.',
    category: 'tech'
  },
  {
    id: '5',
    question: 'Do you charge GST on your invoices?',
    answer: 'No. I am currently below the GST registration threshold, which means there is no GST added to your invoice. The price I quote is the final amount you pay — no additional tax, no hidden charges.',
    category: 'pricing'
  },
  {
    id: '6',
    question: 'How much does a website cost?',
    answer: 'Platform websites (Wix Studio / Shopify) start from ₹15,000. Custom coded websites start from ₹20,000. Add-ons like AI chatbot start from ₹12,000 and AI image generation from ₹5,000 per batch. All prices are fixed and quoted upfront — no surprises.',
    category: 'pricing'
  },
  {
    id: '7',
    question: 'Who will I be communicating with during the project?',
    answer: 'Directly with me — the person who is building your website. There is no account manager or middleman. You can reach me on WhatsApp, email, or call. Most project updates happen on WhatsApp because that is what works best for Indian clients.',
    category: 'process'
  },
  {
    id: '8',
    question: 'What if I need changes after the website launches?',
    answer: 'Two weeks of post-launch support is included in every project at no extra cost. After that, I am available for changes on an hourly or per-task basis. Maintenance retainer packages are also available if you need ongoing updates.',
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
            No fluff. No vague agency answers.
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
