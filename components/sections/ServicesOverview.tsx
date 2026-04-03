'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services: Service[] = [
  {
    id: 'saas',
    title: 'SaaS Platform Development',
    description: 'End-to-end SaaS products with multi-tenancy, subscription billing, role-based access, and real-time dashboards. Production-ready architecture from day one.',
    category: 'saas',
    features: ['Multi-tenant architecture', 'Stripe + Razorpay billing', 'RBAC + SSO', 'Admin dashboard', 'Usage analytics', 'Webhooks + API'],
    timeline: '10–16 weeks',
    startingPrice: 'From ₹25L',
    icon: 'Layers',
    isHighlighted: true
  },
  {
    id: 'web-app',
    title: 'Custom Web Applications',
    description: 'Bespoke Next.js apps for order management, buyer portals, inventory systems, and B2B workflows.',
    category: 'web-app',
    features: ['Next.js App Router', 'PostgreSQL + Prisma', 'REST & tRPC APIs', 'Real-time updates'],
    timeline: '6–10 weeks',
    startingPrice: 'From ₹12L',
    icon: 'Monitor'
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Embed LLMs into your existing products — smart search, document analysis, auto-reporting, and intelligent workflows.',
    category: 'ai-integration',
    features: ['RAG pipelines', 'pgvector embeddings', 'OpenRouter multi-model', 'Streaming responses'],
    timeline: '4–8 weeks',
    startingPrice: 'From ₹8L',
    icon: 'Brain'
  },
  {
    id: 'ecommerce',
    title: 'B2B E-commerce',
    description: 'Wholesale storefronts with custom pricing tiers, bulk ordering, GST invoicing, and ERP integrations.',
    category: 'ecommerce',
    features: ['Custom pricing logic', 'GST-compliant invoicing', 'Inventory sync', 'Buyer portal'],
    timeline: '8–12 weeks',
    startingPrice: 'From ₹18L',
    icon: 'ShoppingBag'
  },
  {
    id: 'chatbot',
    title: 'AI Chatbot & Automation',
    description: 'Intelligent assistants trained on your catalog, FAQs, and order data — with CRM integration and human handoff.',
    category: 'chatbot',
    features: ['RAG over your data', 'WhatsApp + Web widget', 'CRM integration', 'Human handoff'],
    timeline: '3–5 weeks',
    startingPrice: 'From ₹5L',
    icon: 'MessageSquare'
  }
];

function FeaturedServiceCard({ service }: { service: Service }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <div 
      ref={revealRef as any}
      className="md:col-span-2 bg-[#0a0a0a] border border-[#b5ff3e]/[0.18] rounded-2xl p-8 flex flex-col lg:flex-row gap-8 anim-reveal card-hover"
    >
      <div className="flex-1 flex flex-col">
        <div className="w-10 h-10 bg-[#b5ff3e]/[0.08] rounded-lg flex items-center justify-center mb-4">
          <span className="text-[#b5ff3e] text-[length:var(--text-xs)] font-mono">{service.icon}</span>
        </div>
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-lg)]">
          {service.title}
        </h3>
        <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-2 leading-relaxed">
          {service.description}
        </p>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#b5ff3e]/40 flex-shrink-0" />
              <span className="text-[#44445a] text-[length:var(--text-xs)]">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[#44445a] text-[length:var(--text-xs)]">Timeline: {service.timeline}</span>
            <span className="text-[#44445a] text-[length:var(--text-xs)]">Starts at: {service.startingPrice}</span>
          </div>
          <Link 
            href={`/services/${service.id}`}
            className="text-[#b5ff3e] text-[length:var(--text-sm)] font-medium hover:text-[#00e5e5] transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
      
      {/* Code Mockup Column */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <pre className="bg-[#111111] text-[#b5ff3e] text-[length:var(--text-xs)] p-6 rounded-xl border border-white/[0.05] w-full overflow-x-auto">
          <code>
{`model Tenant {
  id        String   @id @default(cuid())
  name      String
  tier      PlanTier @default(STARTER)
  users     User[]
  createdAt DateTime @default(now())
}`}
          </code>
        </pre>
      </div>
    </div>
  );
}

function RegularServiceCard({ service }: { service: Service }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <div 
      ref={revealRef as any}
      className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-6 flex flex-col anim-reveal card-hover"
    >
      <div className="w-10 h-10 bg-[#b5ff3e]/[0.08] rounded-lg flex items-center justify-center mb-4">
        <span className="text-[#b5ff3e] text-[length:var(--text-xs)] font-mono">{service.icon}</span>
      </div>
      <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-base)]">
        {service.title}
      </h3>
      <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-2 leading-relaxed flex-1">
        {service.description}
      </p>
      
      <div className="mt-4 flex flex-col gap-2">
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#b5ff3e]/40 flex-shrink-0" />
            <span className="text-[#44445a] text-[length:var(--text-xs)] truncate">{feature}</span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-transparent flex-shrink-0" />
            <span className="text-[#44445a] text-[length:var(--text-xs)] italic">+ {service.features.length - 3} more</span>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-5 pt-4 border-t border-white/[0.05] text-[#44445a] text-[length:var(--text-xs)]">
        <span>{service.timeline}</span>
        <span>{service.startingPrice}</span>
      </div>
    </div>
  );
}

export default function ServicesOverview() {
  const featuredService = services.find(s => s.isHighlighted);
  const regularServices = services.filter(s => !s.isHighlighted);

  return (
    <section id="services" className="py-24 bg-[#000000] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            What We Build
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            Full-Stack Services for Textile Brands
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl">
            From idea to production in weeks — not months.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 anim-stagger">
          
          {/* Featured Card (Spans 2 columns on desktop/tablet) */}
          {featuredService && (
            <FeaturedServiceCard service={featuredService} />
          )}

          {/* Regular Cards */}
          {regularServices.map((service) => (
            <RegularServiceCard key={service.id} service={service} />
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
