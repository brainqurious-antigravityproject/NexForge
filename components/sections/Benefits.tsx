'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Benefit } from '@/types';
import { 
  IndianRupee, 
  Zap, 
  Key, 
  Languages, 
  Server, 
  User, 
  Headphones, 
  Sparkles 
} from 'lucide-react';

const benefits: Benefit[] = [
  {
    id: 'cost-honest',
    icon: 'IndianRupee',
    title: 'Transparent Pricing. No Surprises.',
    description: 'Every project gets a clear written quote before work starts. The price you see is the price you pay — no hidden revision charges, no scope creep invoices. What we quote is the final amount, regardless of platform or project type.',
    stat: { value: '₹0', label: 'hidden charges, ever' }
  },
  {
    id: 'speed',
    icon: 'Zap',
    title: 'First Delivery in 3 Weeks or Less',
    description: 'Most projects deliver a working first version in 2–3 weeks. We use pre-built components, modern frameworks, and AI-assisted development to move fast — without cutting corners on quality, whether it is WordPress, Shopify, or custom Next.js.',
    stat: { value: '3 wks', label: 'average first delivery' }
  },
  {
    id: 'ownership',
    icon: 'Key',
    title: '100% Ownership From Day One',
    description: 'Every file, every image, every line of code is yours the moment it is delivered. No platform lock-in. No recurring licence fees. No "we host it so we own it" clauses. Full transfer, always — on every platform we build.',
    stat: undefined
  },
  {
    id: 'multilingual',
    icon: 'Languages',
    title: 'Built for Indian Businesses — Local & Global',
    description: 'Chatbots in Hindi, Hinglish, and English. Forms that work on slow connections. WhatsApp integration as standard. Pricing in INR. Built for how Indian businesses and their customers actually operate — whether you serve a local market or customers abroad.',
    stat: undefined
  },
  {
    id: 'zero-hosting',
    icon: 'Server',
    title: 'Right Platform. Right Cost.',
    description: 'We match the platform to your goals — not to our preferred stack. WordPress for SEO-driven sites, Shopify for stores, Wix Studio for fast editable builds, custom Next.js for performance-critical projects. No over-engineering, no unnecessary costs.',
    stat: { value: '₹0/mo', label: 'hosting for custom sites' }
  },
  {
    id: 'single-contact',
    icon: 'User',
    title: 'One Team. Full Accountability.',
    description: 'There is no project manager between you and the people building your website. You communicate directly with us. Every decision, every update, every question — handled by the same team that wrote your code and designed your site.',
    stat: undefined
  },
  {
    id: 'support',
    icon: 'Headphones',
    title: '2-Week Post-Launch Support Included',
    description: 'After your site goes live, we stay available for 2 weeks to fix any bugs, make small adjustments, and help you get comfortable managing the platform — whether that is WordPress, Shopify, or any other. No extra charge for this period.',
    stat: undefined
  },
  {
    id: 'ai-advantage',
    icon: 'Sparkles',
    title: 'SEO, AEO & Performance Built In',
    description: 'Every website we deliver is mobile-first, fast-loading, and structured for both search engines and answer engines. SEO and AEO are not add-ons — they are part of how we build, from page structure and metadata to Core Web Vitals and schema markup.',
    stat: undefined
  }
];

const IconMap: Record<string, React.ElementType> = {
  IndianRupee,
  Zap,
  Key,
  Languages,
  Server,
  User,
  Headphones,
  Sparkles
};

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
            Why Businesses Choose Sitecraf
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            Every promise below applies regardless of which platform you choose or which industry you are in.
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
                {IconMap[benefit.icon] ? (
                  React.createElement(IconMap[benefit.icon], { size: 20, className: "text-[#b5ff3e]" })
                ) : (
                  <span className="text-[#b5ff3e] text-[10px] font-mono">{benefit.icon}</span>
                )}
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
                  <div className="font-[family-name:var(--font-body)] text-[#66667a] text-[length:var(--text-xs)] mt-1 uppercase tracking-wider">
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
                {IconMap[benefit.icon] ? (
                  React.createElement(IconMap[benefit.icon], { size: 18, className: "text-[#b5ff3e]" })
                ) : (
                  <span className="text-[#b5ff3e] text-[10px] font-mono">{benefit.icon}</span>
                )}
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
                  <div className="font-[family-name:var(--font-body)] text-[#66667a] text-[length:var(--text-xs)] mt-1 uppercase tracking-wider">
                    {benefit.stat.label}
                  </div>
                </div>
              )}
            </div>
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
