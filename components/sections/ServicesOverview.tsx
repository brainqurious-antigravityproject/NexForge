'use client';

import React from 'react';
import Image from 'next/image';
import { Layout, Target, ShoppingBag, MessageSquare, Zap, Camera } from 'lucide-react';

type ServiceCard = {
  id: string;
  title: string;
  lead: string;
  points: string[];
  icon: React.ElementType;
  accent: 'portfolio' | 'landing' | 'ecommerce' | 'chatbots' | 'automation' | 'images';
  image: string;
};

const serviceCards: ServiceCard[] = [
  {
    id: 'portfolio',
    title: 'Business Websites',
    lead: 'Your business deserves a website that works as hard as you do.',
    points: [
      'Mobile-first, SEO-ready from day one',
      'Built on WordPress, Next.js, or Wix Studio',
      'Launched in as little as 2 weeks'
    ],
    icon: Layout,
    accent: 'portfolio',
    image: '/portfolio_design.webp'
  },
  {
    id: 'landing',
    title: 'Landing Pages',
    lead: 'Turn ad spend into leads with pages built to convert.',
    points: [
      'Conversion-led architecture',
      'A/B test readiness',
      'Core Web Vitals optimized'
    ],
    icon: Target,
    accent: 'landing',
    image: '/landing_pages.webp'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    lead: 'Shop setups that sell like hot chai on a winter morning.',
    points: [
      'Shopify & WooCommerce expertise',
      'Optimized checkout flows',
      'WhatsApp sales support'
    ],
    icon: ShoppingBag,
    accent: 'ecommerce',
    image: '/ecommerce_store.webp'
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    lead: 'Never miss a lead — your website handles enquiries around the clock.',
    points: [
      'Multilingual lead capture',
      'Smart routing & qualification',
      'CRM & Google Sheets sync'
    ],
    icon: MessageSquare,
    accent: 'chatbots',
    image: '/AI Chatbots.webp'
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    lead: 'Stop doing manually what your tools should do automatically.',
    points: [
      'Lead notification workflows',
      'Custom SaaS integrations',
      'Operations dashboards'
    ],
    icon: Zap,
    accent: 'automation',
    image: '/automation_api_integration.webp'
  },
  {
    id: 'images',
    title: 'AI Image Generation',
    lead: 'Professional product visuals at a fraction of studio cost.',
    points: [
      'E-commerce catalog visuals',
      'Batch photo enhancement',
      'On-brand styling templates'
    ],
    icon: Camera,
    accent: 'images',
    image: '/ai_image_generation.webp'
  }
];

export default function ServicesOverview() {
  return (
    <section id="what-we-build" className="what-we-build-section">
      <div className="what-we-build-inner">
        <header className="what-we-build-header">
          <p className="what-we-build-eyebrow">WHAT WE BUILD</p>
          <h2 className="what-we-build-heading">Everything Your Business Needs Online — Under One Roof</h2>
          <p className="what-we-build-subheading">
            Websites, stores, chatbots, and automation — built fast, priced fairly, and handed over with full ownership.
          </p>
        </header>

        <div className="what-we-build-grid">
          {serviceCards.map((card) => (
            <article key={card.id} className="what-we-build-card">
              <div className="what-we-build-card-icon">
                <card.icon size={20} />
              </div>

              <h3 className="what-we-build-card-title">{card.title}</h3>
              <p className="what-we-build-card-lead">{card.lead}</p>

              <ul className="what-we-build-card-points">
                {card.points.map((point) => (
                  <li key={point} className="what-we-build-card-point">
                    <span className="what-we-build-card-point-bullet">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className={`what-we-build-card-image what-we-build-card-image--${card.accent}`}>
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="what-we-build-card-image-overlay" />
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16 pb-8 md:pb-0">
          <a href="#contact" className="inline-flex items-center justify-center min-h-[48px] bg-[#b5ff3e] text-[#000000] font-semibold px-8 py-4 rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-md)] active:scale-[0.98] transition-all duration-300 text-[length:var(--text-sm)] w-full md:w-auto">
            Discuss Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
