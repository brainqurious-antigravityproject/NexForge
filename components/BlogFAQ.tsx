'use client';
import React from 'react';

interface FAQItem { q: string; a: string; }
interface BlogFAQProps { items: FAQItem[]; }

export default function BlogFAQ({ items }: BlogFAQProps) {
  if (!items || items.length === 0) return null;
  return (
    <section aria-label="FAQ" className="w-full py-16 px-6 bg-[color:var(--color-surface)]">
      <div className="w-full md:w-[80%] max-w-4xl mx-auto">
        <span className="block text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">FAQ</span>
        <h2 className="font-[family-name:var(--font-display)] text-[color:var(--color-text)] text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="flex flex-col">
          {items.map((faq, idx) => (
            <details key={idx} className="group border-b border-[color:var(--color-border)] py-5">
              <summary className="text-[color:var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[color:var(--color-primary)] transition-colors">
                {faq.q}
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[color:var(--color-text-muted)] group-hover:text-[color:var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[color:var(--color-text-muted)] mt-3 leading-relaxed pt-2">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-[color:var(--color-text-muted)] text-[length:var(--text-sm)]">Still have a question not answered above?</p>
          <a
            href="https://wa.me/919599143235"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--color-primary)] border border-[color:var(--color-primary)]/[0.3] rounded-full px-5 py-2 text-[length:var(--text-sm)] font-semibold hover:bg-[color:var(--color-primary)]/[0.08] transition-colors duration-200 flex-shrink-0"
          >
            Ask on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
