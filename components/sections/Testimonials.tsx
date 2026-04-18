'use client';

import React from 'react';
import { Testimonial } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Rajesh Kumar',
    role: 'Operations Director',
    company: 'Vardhman Textiles',
    industry: 'Yarn Manufacturing',
    quote: 'Sitecraf completely transformed our order management. The B2B portal they built reduced our processing time by 85%. Their understanding of the textile supply chain is unmatched.',
    rating: 5,
    projectType: 'web-app',
    avatarInitials: 'RK',
    avatarColor: '#b5ff3e'
  },
  {
    id: '2',
    author: 'Priya Sharma',
    role: 'Head of Digital',
    company: 'Arvind Ltd',
    industry: 'Denim & Retail',
    quote: 'The real-time inventory dashboard gave us visibility we never had before. Stockouts dropped by 94% within the first quarter of launch. True engineering partners.',
    rating: 5,
    projectType: 'saas',
    avatarInitials: 'PS',
    avatarColor: '#00c8c8'
  },
  {
    id: '3',
    author: 'Amit Desai',
    role: 'Supply Chain Manager',
    company: 'Welspun India',
    industry: 'Home Textiles',
    quote: 'We needed a custom QA analytics platform integrated with our factory sensors. Sitecraf delivered a robust, scalable solution in just 10 weeks. Highly recommended.',
    rating: 5,
    projectType: 'ai-integration',
    avatarInitials: 'AD',
    avatarColor: '#7c3aed'
  },
  {
    id: '4',
    author: 'Neha Gupta',
    role: 'E-commerce Lead',
    company: 'Bombay Dyeing',
    industry: 'Retail & Wholesale',
    quote: 'Our B2B wholesale storefront is now fully automated, from custom pricing tiers to GST invoicing. The transition was seamless and the ROI was immediate.',
    rating: 5,
    projectType: 'ecommerce',
    avatarInitials: 'NG',
    avatarColor: '#f59e0b'
  },
  {
    id: '5',
    author: 'Vikram Singh',
    role: 'CTO',
    company: 'Trident Group',
    industry: 'Textile Manufacturing',
    quote: 'The AI chatbot they implemented handles 70% of our routine buyer inquiries automatically. It has freed up our sales team to focus on high-value accounts.',
    rating: 5,
    projectType: 'chatbot',
    avatarInitials: 'VS',
    avatarColor: '#ec4899'
  },
  {
    id: '6',
    author: 'Sanjay Patel',
    role: 'Managing Director',
    company: 'Garden Silk Mills',
    industry: 'Silk & Synthetics',
    quote: 'Sitecraf built a design system that unified our internal tools. Their attention to detail and focus on production-ready code sets them apart from typical agencies.',
    rating: 5,
    projectType: 'design-system',
    avatarInitials: 'SP',
    avatarColor: '#3b82f6'
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const revealRef = useScrollReveal(0.15);
  
  return (
    <div 
      ref={revealRef as any}
      className="bg-[#111111] border border-white/[0.08] rounded-2xl p-8 flex flex-col anim-reveal card-hover"
    >
      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#b5ff3e]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="font-[family-name:var(--font-body)] text-[#e8e8f0] text-[length:var(--text-base)] leading-relaxed mb-8 flex-1 italic">
        &quot;{testimonial.quote}&quot;
      </p>
      
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/[0.05]">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-[#000000] text-sm flex-shrink-0"
          style={{ backgroundColor: testimonial.avatarColor }}
        >
          {testimonial.avatarInitials}
        </div>
        <div className="flex flex-col">
          <span className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-sm)]">
            {testimonial.author}
          </span>
          <span className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-xs)]">
            {testimonial.role}, {testimonial.company}
          </span>
          <span className="font-[family-name:var(--font-body)] text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest mt-1">
            {testimonial.industry}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#000000] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            What Our Clients Say
          </span>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0]">
            Success Stories from Textile Leaders
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-4 leading-relaxed">
            Don&apos;t just take our word for it. See what our partners have achieved.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 anim-stagger">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

      </div>
    </section>
  );
}
