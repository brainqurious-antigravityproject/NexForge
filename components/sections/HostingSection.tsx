'use client';

import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HostingSection() {
  const revealRef = useScrollReveal(0.1);

  return (
    <section id="hosting" className="py-24 bg-[#0a0a0a] px-6">
      <div className="w-full md:w-[80%] max-w-none mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3 block">
            Infrastructure
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            Web Hosting Built for Performance & Reliability
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            As a trusted website development company in Delhi, we provide reliable, secure, and high-performance web hosting — including managed dedicated servers. Your website stays fast, secure, and online with maximum uptime, backed by proactive monitoring and expert support.
          </p>
        </div>

        {/* ZONE 1 — Feature Cards */}
        <div
          ref={revealRef as any}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 anim-reveal is-visible"
        >
          {/* Card 1 — Managed Dedicated Servers */}
          <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.12] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#b5ff3e]/[0.08] flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#b5ff3e]">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6"/>
                <line x1="6" y1="18" x2="6.01" y2="18"/>
              </svg>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-base)]">
                Managed Dedicated Servers
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] leading-relaxed mt-2">
                Full server management handled by us — security patches, performance tuning, configuration, and monitoring. You focus on running your business while we keep the infrastructure running cleanly.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-1">
              {[
                "Server setup & configuration",
                "Security patches & updates",
                "Performance tuning & monitoring",
                "Direct support — no ticket queues"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b5ff3e]/50 flex-shrink-0" />
                  <span className="text-[#66667a] text-[length:var(--text-xs)]">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — Uptime & Speed Guarantee */}
          <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.12] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#b5ff3e]/[0.08] flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#b5ff3e]">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-base)]">
                Fast Load Times & Maximum Uptime
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] leading-relaxed mt-2">
                Optimised server configurations built around Core Web Vitals. Proactive uptime monitoring with instant alerts means issues are resolved before your visitors notice them.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-1">
              {[
                "Core Web Vitals optimised setup",
                "Uptime monitoring & instant alerts",
                "CDN integration available",
                "Fast response on critical issues"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b5ff3e]/50 flex-shrink-0" />
                  <span className="text-[#66667a] text-[length:var(--text-xs)]">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 — Bundled with Website Builds */}
          <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.12] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#b5ff3e]/[0.08] flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#b5ff3e]">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-base)]">
                Bundled with Website Projects
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] leading-relaxed mt-2">
                Every website project we deliver can include hosting setup at no extra configuration cost. One team, one point of contact — from design and development through to live hosting and ongoing support.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-1">
              {[
                "Hosting included with any build",
                "SSL certificate setup",
                "Regular backups & restore points",
                "Single point of contact always"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b5ff3e]/50 flex-shrink-0" />
                  <span className="text-[#66667a] text-[length:var(--text-xs)]">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ZONE 2 — Specs Strip */}
        <div className="mt-8 bg-[#111111] border border-white/[0.06] rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "99.9%", label: "Uptime SLA" },
            { value: "<2s", label: "Avg. Load Time" },
            { value: "24/7", label: "Monitoring" },
            { value: "₹3,000", label: "Starting / month" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start gap-1 md:border-r md:border-white/[0.06] md:pr-6 last:border-r-0 last:pr-0">
              <span className="font-[family-name:var(--font-display)] font-bold text-[#b5ff3e] text-2xl">
                {stat.value}
              </span>
              <span className="font-[family-name:var(--font-body)] text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ZONE 3 — CTA Banner */}
        <div className="mt-8 bg-[#0a0a0a] border border-[#b5ff3e]/[0.18] rounded-2xl px-8 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-base)]">
              Need hosting for your website?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-1 max-w-lg">
              Whether you need hosting bundled with a new website build or a standalone managed server — we will set it up and keep it running. Starting at ₹3,000/month.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a 
              href="https://wa.me/919599143235" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#b5ff3e] text-[#000000] rounded-full px-7 py-3.5 font-semibold text-[length:var(--text-sm)] hover:bg-[#c4ff66] hover:shadow-[0_0_20px_rgba(181,255,62,0.25)] transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              Discuss Hosting →
            </a>
            <Link 
              href="#contact"
              className="border border-[#b5ff3e]/[0.25] text-[#b5ff3e] rounded-full px-7 py-3.5 font-semibold text-[length:var(--text-sm)] hover:bg-[#b5ff3e]/[0.08] transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
