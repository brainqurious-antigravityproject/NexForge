'use client';

import React from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const caseStudies: CaseStudy[] = [
  {
    id: 'vardhman-b2b-portal',
    client: 'Vardhman Textiles',
    industry: 'Yarn & Fabric Manufacturing',
    title: 'Global B2B Wholesale Portal & Order Management',
    description: 'Replaced a legacy email and spreadsheet-based ordering system with a modern Next.js portal. Enabled self-serve ordering, real-time inventory checks, and automated GST invoicing for 2,000+ global buyers, completely transforming their sales operations.',
    challenge: 'Managing 500+ daily orders manually via WhatsApp and Excel.',
    solution: 'Custom B2B buyer portal with real-time order tracking.',
    results: [
      { metric: 'Order Processing Time', value: '–85%', trend: 'down' },
      { metric: 'B2B Sales Volume', value: '+32%', trend: 'up' },
      { metric: 'Support Tickets', value: '–60%', trend: 'down' }
    ],
    tags: ['Next.js', 'PostgreSQL', 'ERP Integration', 'Stripe'],
    duration: '12 weeks',
    isFeatured: true
  },
  {
    id: 'arvind-inventory',
    client: 'Arvind Ltd',
    industry: 'Denim & Retail',
    title: 'Real-time Inventory & Logistics Dashboard',
    description: 'Unified fragmented inventory data from 4 regional warehouses into a single real-time dashboard, significantly reducing stockouts and optimizing logistics routing for their B2B distribution network.',
    challenge: 'No real-time inventory visibility across multiple warehouses.',
    solution: 'Live inventory dashboard integrated with existing ERP.',
    results: [
      { metric: 'Stockout Rate', value: '–94%', trend: 'down' },
      { metric: 'Logistics Costs', value: '–18%', trend: 'down' }
    ],
    tags: ['React', 'Node.js', 'Redis', 'WebSockets'],
    duration: '8 weeks'
  },
  {
    id: 'welspun-qa',
    client: 'Welspun India',
    industry: 'Home Textiles',
    title: 'Automated QA & Production Analytics',
    description: 'Developed a custom analytics platform that integrates directly with their production line sensors to track defect rates in real-time, replacing manual end-of-line reporting.',
    challenge: 'Manual QA reporting causing delays and missed defects.',
    solution: 'Automated QA platform with real-time sensor integration.',
    results: [
      { metric: 'Defect Detection Speed', value: '+400%', trend: 'up' },
      { metric: 'Manual QA Time', value: '–70%', trend: 'down' }
    ],
    tags: ['Python', 'FastAPI', 'React', 'TimescaleDB'],
    duration: '10 weeks'
  }
];

function FeaturedCaseStudyCard({ featured }: { featured: CaseStudy }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <div 
      ref={revealRef as any}
      className="bg-[#0a0a0a] border border-[#b5ff3e]/[0.18] rounded-2xl overflow-hidden flex flex-col lg:flex-row anim-reveal card-hover"
    >
      <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] px-3 py-1 rounded-full font-medium">
            {featured.client}
          </span>
          <span className="text-[#44445a] text-[length:var(--text-xs)] uppercase tracking-widest">
            {featured.industry}
          </span>
        </div>
        
        <h3 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-2xl md:text-3xl mb-4 leading-tight">
          {featured.title}
        </h3>
        
        <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-base)] leading-relaxed mb-8 flex-1">
          {featured.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {featured.tags.map(tag => (
            <span key={tag} className="text-[#8888a0] text-[length:var(--text-xs)] border border-white/[0.08] rounded-md px-2.5 py-1 bg-[#111111]">
              {tag}
            </span>
          ))}
          <span className="text-[#44445a] text-[length:var(--text-xs)] ml-2">
            ⏱ {featured.duration}
          </span>
        </div>

        <Link 
          href={`/case-studies/${featured.id}`}
          className="inline-flex items-center text-[#b5ff3e] text-[length:var(--text-sm)] font-medium hover:text-[#00e5e5] transition-colors w-max"
        >
          Read Full Case Study →
        </Link>
      </div>
      
      <div className="bg-[#111111] border-t lg:border-t-0 lg:border-l border-white/[0.06] p-8 lg:p-12 lg:w-2/5 flex flex-col justify-center gap-8">
        <h4 className="text-[#44445a] text-[length:var(--text-xs)] uppercase tracking-widest font-[family-name:var(--font-body)]">
          Key Outcomes
        </h4>
        <div className="flex flex-col gap-8">
          {featured.results.map((result, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] font-bold text-[#b5ff3e] text-4xl">
                  {result.value}
                </span>
                <span className={`text-lg ${result.trend === 'up' ? 'text-[#22c55e]' : 'text-[#b5ff3e]'}`}>
                  {result.trend === 'up' ? '↑' : '↓'}
                </span>
              </div>
              <span className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-1">
                {result.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RegularCaseStudyCard({ study }: { study: CaseStudy }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <div 
      ref={revealRef as any}
      className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8 flex flex-col anim-reveal card-hover"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#e8e8f0] font-medium text-[length:var(--text-sm)]">
          {study.client}
        </span>
        <span className="w-1 h-1 rounded-full bg-[#44445a]" />
        <span className="text-[#44445a] text-[length:var(--text-xs)] uppercase tracking-widest">
          {study.industry}
        </span>
      </div>
      
      <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-xl mb-3">
        {study.title}
      </h3>
      
      <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] leading-relaxed mb-6 flex-1">
        {study.description}
      </p>

      <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/[0.06] mb-6">
        {study.results.map((result, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-display)] font-bold text-[#b5ff3e] text-2xl">
                {result.value}
              </span>
              <span className={`text-sm ${result.trend === 'up' ? 'text-[#22c55e]' : 'text-[#b5ff3e]'}`}>
                {result.trend === 'up' ? '↑' : '↓'}
              </span>
            </div>
            <span className="font-[family-name:var(--font-body)] text-[#44445a] text-[length:var(--text-xs)] mt-1">
              {result.metric}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex gap-2">
          {study.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[#8888a0] text-[length:var(--text-xs)] border border-white/[0.08] rounded-md px-2 py-1 bg-[#111111]">
              {tag}
            </span>
          ))}
          {study.tags.length > 2 && (
            <span className="text-[#44445a] text-[length:var(--text-xs)] px-1 py-1">
              +{study.tags.length - 2}
            </span>
          )}
        </div>
        <Link 
          href={`/case-studies/${study.id}`}
          className="text-[#b5ff3e] hover:text-[#00e5e5] transition-colors"
          aria-label={`Read case study about ${study.client}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const featured = caseStudies.find(c => c.isFeatured);
  const regular = caseStudies.filter(c => !c.isFeatured);

  return (
    <section id="case-studies" className="py-24 bg-[#000000] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
              Case Studies
            </span>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
              Proven Results in the Textile Industry
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 leading-relaxed">
              See how we&apos;ve helped leading manufacturers and exporters scale their operations with custom software.
            </p>
          </div>
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-2 border border-white/[0.08] text-[#e8e8f0] rounded-full hover:border-white/[0.16] hover:text-[#b5ff3e] transition-all duration-300 text-[length:var(--text-sm)] font-medium whitespace-nowrap"
          >
            View All Work →
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {/* Featured Case Study */}
          {featured && (
            <FeaturedCaseStudyCard featured={featured} />
          )}

          {/* Regular Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 anim-stagger">
            {regular.map((study) => (
              <RegularCaseStudyCard key={study.id} study={study} />
            ))}
          </div>
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
