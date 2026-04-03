'use client';

import React, { useEffect, useRef } from 'react';
import { Benefit } from '@/types';

const benefits: Benefit[] = [
  {
    id: 'domain',
    icon: 'Factory',
    title: 'Textile Industry DNA',
    description: 'We have spent 4+ years building exclusively for the textile industry. We know the difference between a warp and weft — and more importantly, we understand your buyer relationships, ERP constraints, and margin pressures.',
    stat: { value: '48+', label: 'textile products shipped' }
  },
  {
    id: 'senior',
    icon: 'Award',
    title: 'Senior Engineers Only',
    description: 'Every project is led by a senior full-stack engineer with 6+ years of experience. We do not use junior developers on client work. The person scoping your project is the person building it.',
    stat: { value: '6+ yrs', label: 'avg. engineer experience' }
  },
  {
    id: 'speed',
    icon: 'Zap',
    title: 'Ship in Weeks, Not Months',
    description: 'Our opinionated tech stack, pre-built patterns, and battle-tested boilerplate means we write less boilerplate and more product. Your first working deploy happens in week 6, not month 6.',
    stat: { value: '6 wks', label: 'avg. first deploy' }
  },
  {
    id: 'fixed',
    icon: 'Lock',
    title: 'Fixed-Price Contracts',
    description: 'We scope before we quote. Once agreed, the price does not change unless the scope changes. No surprise invoices, no hourly billing ambiguity.',
    stat: undefined
  },
  {
    id: 'transparent',
    icon: 'GitBranch',
    title: 'Full Transparency',
    description: 'You get GitHub access from day one. Every commit, every PR, every deployment is visible to you. We write a weekly progress update every Friday without exception.',
    stat: undefined
  },
  {
    id: 'ownership',
    icon: 'Key',
    title: '100% IP Ownership',
    description: 'Every line of code, every design file, every database schema — it is yours from day one. No licence fees, no lock-in, no "we own the platform" clauses.',
    stat: undefined
  },
  {
    id: 'support',
    icon: 'Headphones',
    title: '30 Days Post-Launch Support',
    description: 'We do not disappear after deploy. 30 days of bug fixes, minor adjustments, and handover support is included in every project. No extra charge.',
    stat: undefined
  },
  {
    id: 'retention',
    icon: 'RefreshCw',
    title: 'Clients Come Back',
    description: 'Our 94% client retention rate is not a marketing claim — it comes from clients returning for their second, third, and fourth products. We build things that last.',
    stat: { value: '94%', label: 'client retention rate' }
  }
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.benefit-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const featuredBenefits = benefits.slice(0, 2);
  const gridBenefits = benefits.slice(2);

  return (
    <section id="benefits" ref={sectionRef} className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Why Work With Us
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            Built Different, By Design
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            Eight reasons why 94% of our clients come back for their next product.
          </p>
        </div>

        {/* Top Featured Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featuredBenefits.map((benefit, index) => (
            <div 
              key={benefit.id}
              className={`benefit-card p-8 rounded-2xl flex flex-col opacity-0 translate-y-8 transition-all duration-[700ms] ease-[var(--t-base)] ${
                index === 0 
                  ? 'bg-[#b5ff3e]/[0.04] border border-[#b5ff3e]/[0.14]' 
                  : 'bg-[#111111] border border-white/[0.08]'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-[#b5ff3e]/[0.08] rounded-lg flex items-center justify-center mb-6">
                <span className="text-[#b5ff3e] text-[10px] font-mono">{benefit.icon}</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-xl mb-3">
                {benefit.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] leading-relaxed flex-1">
                {benefit.description}
              </p>
              {benefit.stat && (
                <div className="mt-8 pt-6 border-t border-white/[0.05]">
                  <div className="font-[family-name:var(--font-display)] font-bold text-[#b5ff3e] text-2xl">
                    {benefit.stat.value}
                  </div>
                  <div className="font-[family-name:var(--font-body)] text-[#44445a] text-[length:var(--text-xs)] mt-1 uppercase tracking-wider">
                    {benefit.stat.label}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridBenefits.map((benefit, index) => (
            <div 
              key={benefit.id}
              className="benefit-card p-6 rounded-xl bg-[#111111] border border-white/[0.08] hover:border-[#b5ff3e]/[0.18] hover:shadow-[var(--glow-xs)] transition-all duration-300 flex flex-col opacity-0 translate-y-8 ease-[var(--t-base)]"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="w-10 h-10 bg-[#b5ff3e]/[0.08] rounded-lg flex items-center justify-center mb-5">
                <span className="text-[#b5ff3e] text-[10px] font-mono">{benefit.icon}</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] leading-relaxed flex-1">
                {benefit.description}
              </p>
              {benefit.stat && (
                <div className="mt-6 pt-4 border-t border-white/[0.05]">
                  <div className="font-[family-name:var(--font-display)] font-bold text-[#b5ff3e] text-xl">
                    {benefit.stat.value}
                  </div>
                  <div className="font-[family-name:var(--font-body)] text-[#44445a] text-[length:var(--text-xs)] mt-1 uppercase tracking-wider">
                    {benefit.stat.label}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
