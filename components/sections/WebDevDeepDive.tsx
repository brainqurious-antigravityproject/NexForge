'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const accordionItems = [
  {
    title: "Frontend Architecture",
    content: "We build with Next.js 15 App Router, React Server Components, and Tailwind CSS. Pages are server-rendered for SEO and hydrated only where interactivity is needed — giving you sub-1s load times and perfect Core Web Vitals scores."
  },
  {
    title: "Backend & API Design",
    content: "REST APIs or tRPC for type-safe full-stack calls. PostgreSQL with Prisma ORM, row-level security, and database migrations tracked in version control. Your schema is never a mystery."
  },
  {
    title: "Authentication & Security",
    content: "Auth.js v5 or Clerk for authentication. JWT + refresh tokens, RBAC middleware, CSRF protection, rate limiting on all public endpoints, and HTTPS enforced at infrastructure level."
  },
  {
    title: "Deployment & DevOps",
    content: "Vercel for frontend (global edge network, preview deployments per PR). Render or Railway for backend services. GitHub Actions CI/CD pipeline with automated testing, linting, and type-checking before every deploy."
  }
];

const techStack = [
  {
    label: "Frontend",
    tags: ["Next.js 15", "React 19", "Tailwind CSS", "shadcn/ui", "TypeScript"]
  },
  {
    label: "Backend",
    tags: ["Node.js", "Fastify", "tRPC", "Zod", "Prisma ORM"]
  },
  {
    label: "Database",
    tags: ["PostgreSQL", "Redis (Upstash)", "pgvector", "Supabase"]
  },
  {
    label: "Infrastructure",
    tags: ["Vercel", "GitHub Actions", "Docker", "Sentry", "Posthog"]
  }
];

export default function WebDevDeepDive() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="web-development" className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Website Development
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            Every Website We Build Is a Product
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-xl leading-relaxed">
            Not a template. Not a brochure site. A scalable system built on a production architecture that grows with your business.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column — Expandable capability accordion */}
          <div className="lg:w-[60%] flex flex-col">
            {accordionItems.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-white/[0.06] last:border-0"
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[#e8e8f0] font-medium font-[family-name:var(--font-display)] text-[length:var(--text-base)]">
                    {item.title}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-[#8888a0] transition-transform duration-300 ease-[var(--t-base)] flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-[var(--t-base)] ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[#8888a0] text-[length:var(--text-sm)] leading-relaxed font-[family-name:var(--font-body)]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column — Tech stack visual */}
          <div className="lg:w-[40%] flex flex-col gap-8">
            {techStack.map((row, index) => (
              <div key={index}>
                <h4 className="text-[#44445a] text-[length:var(--text-xs)] uppercase tracking-widest mb-3 font-[family-name:var(--font-body)]">
                  {row.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {row.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[#8888a0] text-[length:var(--text-xs)] border border-white/[0.08] rounded-md px-3 py-1.5 bg-[#111111] hover:border-[#b5ff3e]/[0.18] hover:text-[#b5ff3e] transition-colors duration-300 font-[family-name:var(--font-body)] cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 p-8 bg-[#111111] border border-white/[0.08] rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
          <h3 className="text-[#e8e8f0] font-semibold font-[family-name:var(--font-display)] text-[length:var(--text-base)] md:text-lg text-center md:text-left max-w-md">
            Ready to see what&apos;s possible for your business?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
            <Link 
              href="#case-studies" 
              className="flex items-center justify-center min-h-[48px] px-6 py-3 border border-white/[0.08] text-[#e8e8f0] rounded-full hover:border-white/[0.16] hover:text-[#b5ff3e] transition-all duration-300 text-[length:var(--text-sm)] font-medium"
            >
              View Case Studies
            </Link>
            <Link 
              href="#contact" 
              className="flex items-center justify-center min-h-[48px] px-6 py-3 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#00e5e5] hover:shadow-[var(--glow-sm)] transition-all duration-300 text-[length:var(--text-sm)] font-semibold"
            >
              Start a Project →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
