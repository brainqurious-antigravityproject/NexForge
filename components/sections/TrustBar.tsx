import React from 'react';

const brands = [
  "Vardhman Textiles",
  "Raymond Group",
  "Arvind Ltd",
  "Bombay Dyeing",
  "Welspun India",
  "Trident Group",
  "Garden Silk Mills",
  "Himatsingka Seide"
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#0a0a0a] border-y border-white/[0.05] py-6">
      <div className="flex items-center gap-10 max-w-[1200px] mx-auto px-6">
        <span className="flex-shrink-0 text-[#44445a] text-[length:var(--text-xs)] uppercase tracking-[0.12em] whitespace-nowrap">
          Trusted by
        </span>
        
        <div 
          className="flex-1 overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="marquee-track gap-12">
            {[...brands, ...brands].map((brand, index) => (
              <span 
                key={index}
                className="font-[family-name:var(--font-body)] font-semibold text-[#44445a] hover:text-[#8888a0] text-[length:var(--text-xs)] uppercase tracking-[0.1em] whitespace-nowrap transition-colors duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
