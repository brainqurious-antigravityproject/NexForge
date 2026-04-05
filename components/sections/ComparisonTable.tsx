'use client';

import React from 'react';
import { ComparisonRow } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const rows: ComparisonRow[] = [
  { feature: 'Time to first working build', sitecraf: '6–10 weeks', freelancer: '8–16 weeks', inHouse: '4–9 months', largeAgency: '3–6 months' },
  { feature: 'Production-ready architecture', sitecraf: true, freelancer: false, inHouse: false, largeAgency: true },
  { feature: 'Fixed-price contracts available', sitecraf: true, freelancer: false, inHouse: false, largeAgency: false },
  { feature: 'Dedicated senior engineer', sitecraf: true, freelancer: true, inHouse: false, largeAgency: false },
  { feature: 'TypeScript + tested codebase', sitecraf: true, freelancer: false, inHouse: false, largeAgency: true },
  { feature: 'Full IP ownership from day 1', sitecraf: true, freelancer: true, inHouse: true, largeAgency: false },
  { feature: 'Post-launch support included', sitecraf: '30 days', freelancer: false, inHouse: true, largeAgency: '₹ extra' },
  { feature: 'Textile industry experience', sitecraf: true, freelancer: false, inHouse: false, largeAgency: false },
  { feature: 'Transparent progress (GitHub)', sitecraf: true, freelancer: false, inHouse: true, largeAgency: false },
  { feature: 'Average total cost', sitecraf: '₹15L–₹50L', freelancer: '₹8L–₹30L', inHouse: '₹60L–₹120L/yr', largeAgency: '₹40L–₹150L' }
];

const renderCellContent = (value: string | boolean) => {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="text-[#22c55e] font-bold text-base">✓</span>
    ) : (
      <span className="text-[#ef4444] font-bold text-base">✗</span>
    );
  }
  return <span className="text-[#8888a0] text-[length:var(--text-sm)]">{value}</span>;
};

function ComparisonTableRow({ row, index }: { row: ComparisonRow, index: number }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <tr 
      ref={revealRef as any}
      className={`group transition-colors duration-200 hover:bg-[#1c1c28] anim-reveal ${
        index % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111111]'
      }`}
    >
      <td className="text-[#e8e8f0] text-[length:var(--text-sm)] px-6 py-4 font-medium font-[family-name:var(--font-body)]">
        {row.feature}
      </td>
      <td className="px-6 py-4 text-center bg-[#b5ff3e]/[0.04] border-x border-[#b5ff3e]/[0.12] group-hover:bg-[#b5ff3e]/[0.08] transition-colors duration-200">
        {renderCellContent(row.sitecraf)}
      </td>
      <td className="px-6 py-4 text-center">
        {renderCellContent(row.freelancer)}
      </td>
      <td className="px-6 py-4 text-center">
        {renderCellContent(row.inHouse)}
      </td>
      <td className="px-6 py-4 text-center">
        {renderCellContent(row.largeAgency)}
      </td>
    </tr>
  );
}

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-24 bg-[#000000] px-6">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Why Sitecraf
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            How We Stack Up
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            An honest comparison so you can make the right decision for your business.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] min-w-[700px]">
            <table className="w-full border-collapse text-left">
              
              {/* Header Row */}
              <thead>
                <tr className="bg-[#111111]">
                  <th className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 font-normal">
                    Feature
                  </th>
                  <th className="text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 text-center bg-[#b5ff3e]/[0.04] border-x border-[#b5ff3e]/[0.12] font-normal">
                    Sitecraf ★
                  </th>
                  <th className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 text-center font-normal">
                    Freelancer
                  </th>
                  <th className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 text-center font-normal">
                    In-House Team
                  </th>
                  <th className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 text-center font-normal">
                    Large Agency
                  </th>
                </tr>
              </thead>

              {/* Data Rows */}
              <tbody className="anim-stagger">
                {rows.map((row, index) => (
                  <ComparisonTableRow key={index} row={row} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-6 text-[#66667a] text-[length:var(--text-xs)] text-center font-[family-name:var(--font-body)]">
          ★ Based on average across 12 client audits, 2023–2025
        </p>

      </div>
    </section>
  );
}
