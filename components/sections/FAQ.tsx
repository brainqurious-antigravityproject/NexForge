'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaqItem } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'How long does a typical project take?',
    answer: 'Most of our projects are delivered within 6 to 10 weeks. This includes discovery, design, development, testing, and deployment. Complex enterprise integrations may take up to 12-16 weeks.',
    category: 'process'
  },
  {
    id: '2',
    question: 'Do you offer fixed-price contracts?',
    answer: 'Yes, we prefer fixed-price contracts for well-scoped projects. After our initial discovery phase, we provide a detailed proposal with a guaranteed price and timeline.',
    category: 'pricing'
  },
  {
    id: '3',
    question: 'What technologies do you use?',
    answer: 'We specialize in modern web technologies: Next.js, React, TypeScript, and Tailwind CSS for the frontend. For the backend, we use Node.js, Python, PostgreSQL, and serverless architectures on AWS or Vercel.',
    category: 'tech'
  },
  {
    id: '4',
    question: 'What happens after launch?',
    answer: 'Every project includes 30 days of post-launch support to ensure a smooth transition. We also offer ongoing maintenance and retainer packages for continuous feature development.',
    category: 'support'
  },
  {
    id: '5',
    question: 'Who owns the intellectual property (IP)?',
    answer: 'You do. Upon final payment, full ownership of the codebase, designs, and all related intellectual property is transferred to you. We do not hold your code hostage.',
    category: 'process'
  },
  {
    id: '6',
    question: 'How much does a custom web app cost?',
    answer: 'Our projects typically range from ₹15L to ₹50L depending on complexity, features, and timeline. We offer transparent pricing and will give you a clear estimate after our first call.',
    category: 'pricing'
  },
  {
    id: '7',
    question: 'Can you integrate with our existing ERP?',
    answer: 'Absolutely. We have extensive experience integrating with legacy ERPs, CRMs, and custom databases common in the textile industry via REST APIs, SOAP, or direct database connections.',
    category: 'tech'
  },
  {
    id: '8',
    question: 'Will I have a dedicated project manager?',
    answer: 'Yes, you will be assigned a dedicated senior engineer who acts as your technical lead and project manager. You will communicate directly with the person building your product.',
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

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a] px-6 border-t border-white/[0.05]">
      <div className="max-w-[800px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Frequently Asked Questions
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            Common Questions Answered
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-4 leading-relaxed">
            Everything you need to know about working with us.
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
