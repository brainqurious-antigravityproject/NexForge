'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ProcessStep } from '@/types';
import { Phone, FileText, Palette, Code, Rocket } from 'lucide-react';

const steps: ProcessStep[] = [
  {
    step: 1,
    title: 'Free Discovery Call (30 mins)',
    description: 'We talk about your business, what you need, and what budget you have in mind. No hard sell. I listen first, then recommend the right solution for your situation.',
    duration: '30 minutes',
    deliverables: ['Clear understanding of your requirement', 'Platform recommendation', 'Rough timeline estimate', 'No obligation'],
    icon: 'Phone'
  },
  {
    step: 2,
    title: 'Written Quote & Scope',
    description: 'I send you a clear written proposal — exactly what will be built, what is NOT included, timeline, and fixed price. No ambiguity before we start.',
    duration: 'Within 48 hours',
    deliverables: ['Fixed-price quote', 'Scope of work document', 'Timeline with milestones', 'Payment schedule (50/50)'],
    icon: 'FileText'
  },
  {
    step: 3,
    title: 'Design & Content Setup',
    description: 'I set up the design direction, collect your content (logo, text, photos), and show you a visual mockup before coding begins. You approve before I build.',
    duration: '3–5 days',
    deliverables: ['Visual mockup / wireframe', 'Content checklist sent to you', 'Platform account setup', 'Design approval from you'],
    icon: 'Palette'
  },
  {
    step: 4,
    title: 'Build & Review',
    description: 'I build the website and share a live preview link. You review on your phone and laptop and give feedback. Two revision rounds are included.',
    duration: '1–3 weeks',
    deliverables: ['Live preview link', 'Mobile + desktop review', 'Two revision rounds', 'Progress updates via WhatsApp'],
    icon: 'Code'
  },
  {
    step: 5,
    title: 'Launch & Handover',
    description: 'Your site goes live on your domain. I hand over all logins, show you how to manage content, and stay available for 2 weeks post-launch for any questions.',
    duration: '1–2 days',
    deliverables: ['Live on your domain', 'All login credentials', 'Basic training on managing content', '2-week support window'],
    icon: 'Rocket'
  }
];

const IconMap: Record<string, React.ElementType> = {
  Phone,
  FileText,
  Palette,
  Code,
  Rocket
};

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
            How I Work
          </span>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0]">
            From First Call to Live Website in 5 Steps
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl mx-auto leading-relaxed">
            A simple, transparent process — no jargon, no surprises.
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
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest">
                        Step 0{step.step}
                      </span>
                      {IconMap[step.icon] && (
                        <div className="text-[#b5ff3e]/40">
                          {React.createElement(IconMap[step.icon], { size: 18 })}
                        </div>
                      )}
                    </div>
                    <h3 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0] mt-1">
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
