'use client';

import React, { useEffect, useRef } from 'react';
import { BeforeAfterItem } from '@/types';

const items: BeforeAfterItem[] = [
  {
    id: 'order-management',
    category: 'Order Management',
    problem: 'Managing 500+ daily orders via WhatsApp, phone calls, and Excel sheets',
    solution: 'Custom B2B buyer portal with real-time order tracking',
    beforeState: {
      title: 'The Old Way — Manual Everything',
      points: [
        'Orders scattered across 12 WhatsApp groups',
        'Excel sheets overwritten by mistake daily',
        'No visibility into order status for buyers',
        '3 staff members doing nothing but data entry',
        'Invoice generation takes 2 hours per day'
      ],
      pain: '"We were spending more time managing spreadsheets than managing our business."'
    },
    afterState: {
      title: 'The New Way — Automated & Visible',
      points: [
        'Single buyer portal with real-time order status',
        'Auto-generated GST invoices in under 3 seconds',
        'Buyers self-serve: track, reorder, download invoices',
        'Staff repurposed to higher-value tasks',
        'Full audit trail for every order'
      ],
      result: '"Our buyers now prefer our portal over calling us. That\'s the highest compliment."'
    },
    metric: { value: '–73%', label: 'Order processing time' }
  },
  {
    id: 'inventory',
    category: 'Inventory Visibility',
    problem: 'No real-time inventory data — buyers call to check stock availability',
    solution: 'Live inventory dashboard integrated with existing ERP',
    beforeState: {
      title: 'Blind Spots Everywhere',
      points: [
        'Stock data updated once a day from ERP export',
        '40+ buyer calls per day asking "do you have X?"',
        'Overselling happened 8–12 times per month',
        'Sales team had no live data during calls',
        'Returns due to stock errors cost ₹3L/month'
      ],
      pain: '"We had no idea what we had until the warehouse called us."'
    },
    afterState: {
      title: 'Live Data Everywhere',
      points: [
        'Real-time sync from ERP every 60 seconds',
        'Buyers see live stock on portal — no calls needed',
        'Low-stock alerts sent automatically to buyers',
        'Overselling reduced to near zero',
        'Sales team works with live data during every call'
      ],
      result: '"Stock errors used to cost us ₹3L/month. Now it is essentially zero."'
    },
    metric: { value: '–94%', label: 'Stock-related errors' }
  },
  {
    id: 'reporting',
    category: 'Business Reporting',
    problem: 'Monthly P&L reports taking 4–5 days to compile manually',
    solution: 'Automated reporting dashboard with real-time business metrics',
    beforeState: {
      title: 'Reporting Was a Full-Time Job',
      points: [
        'Finance team spent 4 days pulling data from 6 systems',
        'Reports were stale by the time leadership saw them',
        'No way to drill down into specific regions or SKUs',
        'Decision-making lagged by 2–3 weeks',
        'Errors in manual consolidation caused bad decisions'
      ],
      pain: '"By the time we had the data, the problem was already two weeks old."'
    },
    afterState: {
      title: 'Insights in Real Time',
      points: [
        'Live P&L dashboard updated every 15 minutes',
        'Drill-down by region, SKU, buyer, and channel',
        'Automated weekly and monthly PDF reports',
        'Finance team freed from 4 days of manual work',
        'Decisions now made on same-day data'
      ],
      result: '"We cut a ₹40L underperforming product line because the dashboard showed us clearly."'
    },
    metric: { value: '–87%', label: 'Reporting time' }
  }
];

export default function BeforeAfter() {
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

    const cards = sectionRef.current?.querySelectorAll('.transformation-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="transformation" ref={sectionRef} className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Real Transformations
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            What Changes When You Build It Right
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            Three common problems we&apos;ve solved for textile businesses.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-12">
          {items.map((item, index) => (
            <div 
              key={item.id}
              className="transformation-card bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden opacity-0 translate-y-8 transition-all duration-[700ms] ease-[var(--t-base)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="p-6 md:p-8 pb-6">
                <div className="inline-block bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] rounded-full px-3 py-1 mb-4">
                  {item.category}
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-lg md:text-xl mb-2">
                  {item.problem}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)]">
                  <span className="text-[#44445a] mr-2">Solution:</span>
                  {item.solution}
                </p>
              </div>

              {/* Split Panel */}
              <div className="flex flex-col md:flex-row border-t border-white/[0.06]">
                
                {/* LEFT — Before */}
                <div className="flex-1 flex flex-col">
                  <div className="bg-[#ef4444]/[0.08] border-b border-[#ef4444]/[0.12] px-6 py-3">
                    <span className="text-[#ef4444] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest">
                      Before
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] font-medium mb-4">
                      {item.beforeState.title}
                    </h4>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border-l-2 border-[#ef4444]/30 mb-4">
                      <p className="font-[family-name:var(--font-body)] text-[#44445a] text-[length:var(--text-xs)] italic">
                        {item.beforeState.pain}
                      </p>
                    </div>
                    <ul className="space-y-3 mt-auto">
                      {item.beforeState.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#ef4444]/60 text-[length:var(--text-xs)] flex-shrink-0 mt-0.5">✗</span>
                          <span className="font-[family-name:var(--font-body)] text-[#44445a] text-[length:var(--text-xs)] leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-white/[0.06]" />
                <div className="md:hidden h-px bg-white/[0.06] w-full" />

                {/* RIGHT — After */}
                <div className="flex-1 flex flex-col">
                  <div className="bg-[#22c55e]/[0.08] border-b border-[#22c55e]/[0.12] px-6 py-3 flex justify-between items-center">
                    <span className="text-[#22c55e] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest">
                      After
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-[family-name:var(--font-display)] text-[#22c55e] font-bold text-lg">
                        {item.metric.value}
                      </span>
                      <span className="font-[family-name:var(--font-body)] text-[#44445a] text-[length:var(--text-xs)]">
                        {item.metric.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="font-[family-name:var(--font-body)] text-[#e8e8f0] text-[length:var(--text-sm)] font-medium mb-4">
                      {item.afterState.title}
                    </h4>
                    <div className="bg-[#b5ff3e]/[0.04] p-3 rounded-lg border-l-2 border-[#22c55e]/30 mb-4">
                      <p className="font-[family-name:var(--font-body)] text-[#22c55e]/80 text-[length:var(--text-xs)] italic">
                        {item.afterState.result}
                      </p>
                    </div>
                    <ul className="space-y-3 mt-auto">
                      {item.afterState.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#22c55e]/60 text-[length:var(--text-xs)] flex-shrink-0 mt-0.5">✓</span>
                          <span className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-xs)] leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
