import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HowWeBuild() {
  return (
    <section id="how-we-build" className="why-work-section">
      <div className="w-full md:w-[80%] max-w-none mx-auto px-6">
        {/* Header */}
        <header className="why-work-header">
          <p className="why-work-eyebrow">HOW WE WORK</p>
          <h2 className="why-work-heading">
            Websites That Think. <br className="hidden md:block" />
            Built for Leads, Not Just Looks.
          </h2>
          <p className="why-work-subheading">
            Most websites look the part but do nothing. We obsess over every scroll, click, and form field — 
            so your site doesn't just impress visitors, it converts them.
          </p>
        </header>

        {/* Big Card */}
        <div className="why-work-card">
          {/* Visual Panel */}
          <div className="why-work-visual">
            <Image 
              src="/design_engineer_mobile.webp" 
              alt="Design and Engineering Mobile" 
              fill 
              className="object-contain md:hidden"
              sizes="(max-width: 768px) 100vw"
            />
            <Image 
              src="/design_engineer_desktop.webp" 
              alt="Design and Engineering Desktop" 
              fill 
              className="object-contain hidden md:block"
              sizes="40vw"
            />
            <div className="why-work-visual-overlay" />
          </div>

          {/* Content Area */}
          <div className="why-work-content">
            <div className="why-work-columns">
              {/* Column 1 */}
              <div className="why-work-column">
                <h3 className="why-work-column-title">Our build process, step by step</h3>
                <ul className="why-work-list">
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Strategy Before Pixels</h4>
                    <p className="why-work-item-body">
                      We start by understanding your customers, not your colour preferences. Goals, audience, and buyer psychology come first — then design.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">The Right Platform for Your Business</h4>
                    <p className="why-work-item-body">
                      WordPress, Shopify, or Next.js — we recommend based on your growth stage, not what's easiest for us to build.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Found on Google. Found by AI.</h4>
                    <p className="why-work-item-body">
                      We optimise for traditional search and the new wave of AI-powered answers — so your business shows up wherever your customers are searching.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Live in 2 Weeks, Not 2 Months</h4>
                    <p className="why-work-item-body">
                      We ship fast, then improve. Your site goes live in as little as 2 weeks — because every week offline is revenue left on the table.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="why-work-column">
                <h3 className="why-work-column-title">What makes us different</h3>
                <ul className="why-work-list">
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Senior-Level Thinking</h4>
                    <p className="why-work-item-body">
                      No junior account managers. You work directly with engineers who understand ROI as much as they do React and performance.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Websites That Load in a Blink</h4>
                    <p className="why-work-item-body">
                      Slow sites lose customers. We build for sub-2-second load times and near-zero hosting costs — fast by default, not as an afterthought.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Fixed & Transparent Pricing</h4>
                    <p className="why-work-item-body">
                      No hourly billing surprises. You receive a fixed-price quote based on a clear scope, ensuring your budget delivers maximum impact.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">WhatsApp & CRM Integrated</h4>
                    <p className="why-work-item-body">
                      Every site ships with WhatsApp and CRM-ready lead flows — so enquiries land in your inbox (or phone) the moment someone fills a form.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="why-work-ctas">
              <Link href="/pricing" className="why-work-cta-secondary">
                See Pricing
              </Link>
              <Link href="#contact" className="why-work-cta-primary">
                Plan My Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
