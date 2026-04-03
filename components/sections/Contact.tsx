'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            Let&apos;s Build Something Great
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#8888a0] text-sm font-medium">Name</label>
              <input 
                type="text" 
                required 
                className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors" 
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#8888a0] text-sm font-medium">Email</label>
              <input 
                type="email" 
                required 
                className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors" 
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#8888a0] text-sm font-medium">Phone Number</label>
            <input 
              type="tel" 
              className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors" 
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#8888a0] text-sm font-medium">Message</label>
            <textarea 
              required 
              rows={4} 
              className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors resize-y"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={status === 'loading' || status === 'success'} 
            className="bg-[#b5ff3e] text-[#000000] font-semibold px-8 py-4 rounded-lg hover:bg-[#00e5e5] hover:shadow-[var(--glow-sm)] transition-all duration-300 mt-2 disabled:opacity-70 disabled:hover:bg-[#b5ff3e] disabled:hover:shadow-none"
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
