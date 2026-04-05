'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ProcessStep } from '@/types';

const steps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Scoping',
    description: 'We spend 1 week learning your business, users, and existing systems. You get a detailed scope document — not a vague proposal.',
    duration: '1 week',
    deliverables: ['Scope document', 'User story map', 'Technical risk assessment', 'Fixed-price quote'],
    icon: 'Search'
  },
  {
    step: 2,
    title: 'System Design',
    description: 'Architecture decisions happen before code. Database schema, API contracts, component hierarchy, and deployment plan — all agreed before we write a line.',
    duration: '3–5 days',
    deliverables: ['System architecture diagram', 'DB schema draft', 'API contract (OpenAPI)', 'Tech stack decision doc'],
    icon: 'Blueprint'
  },
  {
    step: 3,
    title: 'Design System & UI',
    description: 'We build your design tokens, component library, and all page layouts in Figma. You approve before we build — no surprises.',
    duration: '1–2 weeks',
    deliverables: ['Figma design file', 'Design tokens', 'Responsive component specs', 'Prototype walkthrough'],
    icon: 'Palette'
  },
  {
    step: 4,
    title: 'Build & Ship Iterations',
    description: 'Two-week sprints with a working preview URL after every sprint. You test on real devices throughout — not just at the end.',
    duration: '4–10 weeks',
    deliverables: ['Working preview per sprint', 'Sprint review call', 'Weekly progress report', 'GitHub access'],
    icon: 'Code'
  },
  {
    step: 5,
    title: 'QA & Hardening',
    description: 'Full test suite, accessibility audit, performance profiling, and security review. We fix every issue before the production deploy.',
    duration: '1 week',
    deliverables: ['Jest test coverage report', 'Lighthouse scores', 'Security audit report', 'Cross-device test matrix'],
    icon: 'Shield'
  },
  {
    step: 6,
    title: 'Launch & Handover',
    description: 'Production deploy with zero downtime. Full handover package so your team owns the product from day one.',
    duration: '2–3 days',
    deliverables: ['Production deployment', 'Admin training session', 'Full documentation', '30-day support included'],
    icon: 'Rocket'
  }
];

export default function HowWeBuild() {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setActiveSteps((prev) => Array.from(new Set([...prev, index])));
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 bg-[#000000] px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Our Process
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            From Discovery to Deploy in 6 Steps
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl mx-auto leading-relaxed">
            A battle-tested process used across 48+ product builds.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-[1000px] mx-auto">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-[#b5ff3e]/[0.18] -translate-x-1/2" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeSteps.includes(index);

            return (
              <div
                key={step.step}
                ref={(el) => { stepRefs.current[index] = el; }}
                data-index={index}
                className="relative flex items-center mb-16 last:mb-0 opacity-0 translate-y-8 transition-all duration-[700ms] ease-[var(--t-base)]"
              >
                {/* Step Number Badge */}
                <div 
                  className={`absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-500 z-10 font-mono text-sm font-bold ${
                    isActive 
                      ? 'bg-[#b5ff3e] border-[#b5ff3e] text-[#000000] shadow-[var(--glow-xs)]' 
                      : 'bg-[#000000] border-[#b5ff3e]/30 text-[#b5ff3e]'
                  }`}
                >
                  {step.step}
                </div>

                {/* Card Wrapper */}
                <div 
                  className={`w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] flex ${
                    isEven ? 'md:justify-end md:mr-auto' : 'md:justify-start md:ml-auto'
                  }`}
                >
                  <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-6 w-full max-w-[480px] hover:border-[#b5ff3e]/[0.18] transition-colors duration-300">
                    <span className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest">
                      Step 0{step.step}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-base)] mt-1">
                      {step.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-3 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] px-3 py-1 rounded-full mt-4 inline-block">
                      {step.duration}
                    </div>
                    
                    <ul className="mt-4 space-y-2">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="text-[#66667a] text-[length:var(--text-xs)] flex items-start gap-2">
                          <span className="text-[#b5ff3e]/60 flex-shrink-0">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
