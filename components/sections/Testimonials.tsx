'use client';

import React from 'react';
import { Testimonial } from '@/types';

const testimonialData: Testimonial[] = [
  {
    id: '1',
    quote: "The performance jump was immediate. Our entire catalog loads instantly now, even on slow connections.",
    name: "Amit Singhal",
    role: "Founder",
    company: "CraftIndia Exports",
    location: "New Delhi, India",
    projectType: "Wix Studio / Catalogue"
  },
  {
    id: '2',
    quote: "Sitecraf understood our B2B workflow perfectly. The new dashboard saved us hours of manual entry every day.",
    name: "Priya Nair",
    role: "Marketing Head",
    company: "Zenith Logistics",
    location: "Mumbai, India",
    projectType: "WordPress / B2B"
  },
  {
    id: '3',
    quote: "The transition from Shopify was seamless. We're saving thousands on monthly fees without losing any speed.",
    name: "Rohan Gupta",
    role: "CEO",
    company: "UrbanThread D2C",
    location: "Gurgaon, India",
    projectType: "Next.js / SaaS"
  },
  {
    id: '4',
    quote: "Their AI chatbot handles our customer queries in Hinglish brilliantly. Lead qualification is now automated.",
    name: "Sneha Kapoor",
    role: "Ops Manager",
    company: "EduCore Systems",
    location: "Noida, India",
    projectType: "AI Chatbot / EdTech"
  },
  {
    id: '5',
    quote: "Professional, fast, and high-quality code. They are true partners who deliver on their 3-week promise.",
    name: "Arjun Mehta",
    role: "Tech Lead",
    company: "Silverline Hardware",
    location: "Okhla, India",
    projectType: "Custom Next.js"
  },
  {
    id: '6',
    quote: "Best decision for our digital transformation. The ROI on our new Shopify store was clear within weeks.",
    name: "Divya Roy",
    role: "Founder",
    company: "Aura Decor",
    location: "New Delhi, India",
    projectType: "Shopify / D2C"
  },
  {
    id: '7',
    quote: "Sitecraf's automation tools helped us sync our leads directly to our CRM. Zero data leakage across teams.",
    name: "Rahul Verma",
    role: "Director",
    company: "Prime Realty",
    location: "Bangalore, India",
    projectType: "Automation / Lead Gen"
  },
  {
    id: '8',
    quote: "A sleek website that actually reflects our brand's premium identity. The team is incredibly responsive.",
    name: "Meera Joshi",
    role: "Co-founder",
    company: "GreenStem Foods",
    location: "Pune, India",
    projectType: "Wix Studio / Catalogue"
  },
  {
    id: '9',
    quote: "Excellent understanding of SEO and AEO. Our organic traffic and enquiries have tripled since launch.",
    name: "Karan Singh",
    role: "Head of Growth",
    company: "TechPulse India",
    location: "New Delhi, India",
    projectType: "Next.js / Blog"
  },
  {
    id: '10',
    quote: "The most reliable agency we've worked with. They stick to timelines and provide zero-hosting solutions.",
    name: "Ananya Das",
    role: "Product Head",
    company: "Bloom EdTech",
    location: "Kolkata, India",
    projectType: "Wix Studio / Education"
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="testimonial-footer">
        <div className="testimonial-info">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-meta">
            {testimonial.role}, {testimonial.company}
          </span>
          <span className="testimonial-meta-extra">
            {testimonial.location} • {testimonial.projectType}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Split data into two rows
  const row1 = testimonialData.slice(0, 5);
  const row2 = testimonialData.slice(5, 10);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">
            CLIENT STORIES
          </span>
          <h2 className="testimonials-heading">
            What our clients say
          </h2>
          <p className="testimonials-description">
            We build long-term partnerships with growing brands across India.
          </p>
        </div>

        {/* Scrolling Rows */}
        <div className="testimonials-rows">
          {/* Row 1: Left to Right */}
          <div className="testimonials-row">
            <div className="testimonials-track testimonials-marquee-left">
              {[...row1, ...row1].map((testimonial, idx) => (
                <TestimonialCard key={`${testimonial.id}-r1-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="testimonials-row">
            <div className="testimonials-track testimonials-marquee-right">
              {[...row2, ...row2].map((testimonial, idx) => (
                <TestimonialCard key={`${testimonial.id}-r2-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
