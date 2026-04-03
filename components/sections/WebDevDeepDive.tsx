'use client';

import React from 'react';
import Link from 'next/link';

export default function WebDevDeepDive() {
  return (
    <section id="cta-section" className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Bottom CTA Bar */}
        <div className="p-8 bg-[#111111] border border-white/[0.08] rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
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
