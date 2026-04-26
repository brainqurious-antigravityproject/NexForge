import { type Intent, type Language } from './detector';
import { searchKB } from './kb';

export type AnswerResult = {
  answer: string;
  source: 'canned' | 'kb' | 'llm-needed';
  snippets?: string[];
};

const cannedReplies: Record<string, string> = {
  greeting:
    "Hello! Welcome to Sitecraf. We build fast, modern websites using WordPress, Wix Studio, Shopify, and Next.js. How can I help you today?",
  whatsapp:
    "Sure! Chat with us on WhatsApp at +91 9599143235. We typically reply within a few hours during business hours.",
  services:
    "Sitecraf offers web design and development including WordPress, Wix Studio, Shopify stores, Next.js apps, landing pages, AI chatbot integration, SEO, and business automation. What kind of project do you have in mind?",
  pricing:
    "Starts from ₹6,000 (WordPress), ₹10,000 (Wix), ₹15,000 (Shopify/Next.js). Premium custom projects and automation integration cost more. Share your budget and requirements and we'll suggest the best plan for you.",
  process:
    "Our process: (1) Chat on WhatsApp or use the contact form → (2) Design mockup → (3) Development & feedback rounds → (4) Testing → (5) Launch. Most projects take 2–6 weeks. Want to get started?",
  contact:
    "Reach us on WhatsApp at +91 9599143235 or email info@sitecraf.com. We're available Mon–Sat, 9 AM – 9 PM IST. You can also use the contact form on our website.",
  faq:
    "Common questions: We offer 1–2 rounds of revisions, mobile-responsive designs, basic SEO setup, and 2 weeks of post-launch support. Hosting is billed separately. Have a specific question?",
  chatbot:
    "AI Chatbot Integration: We set up intelligent chatbots (Sitecraf's own or third-party) to automate customer support, answer FAQs, and qualify leads. Starting at ₹12,000 for setup and training. Perfect for e-commerce, service businesses, and support teams.",
  ecommerce:
    "E-Commerce Solutions: We build Shopify stores or WooCommerce sites optimized for conversions, payment integration, and inventory management. Starting at ₹15,000. Includes product setup, payment gateway (Razorpay/Stripe), and SEO basics.",
  automation:
    "Business Automation: Streamline workflows with integrations like CRM, Google Sheets, Razorpay, Zapier, and booking systems. Starting at ₹8,000 per integration. Save time and reduce manual errors across your business.",
  images:
    "AI Product Photography: We create professional lifestyle and product photos using AI, trained on your brand style. Starting at ₹3,000 per batch of 30–50 images. Perfect for e-commerce, social media, and marketing materials.",
  landing:
    "Landing Page Design: Conversion-optimized landing pages designed and built to turn visitors into customers. Included in our website tier (₹15,000+). Includes copy, design, CTAs, and A/B testing guidance.",
  about:
    "About Sitecraf: We're a web studio based in South Ex, New Delhi, working with clients across India and internationally. We focus on transparency (fixed quotes, 50% upfront), full IP ownership transfer, and no lock-in contracts.",
};

export function getAnswer(intent: Intent, message: string, language: Language): AnswerResult {
  if (intent === 'project_request') {
    const chunks = searchKB(message, 3);
    return {
      answer: '',
      source: 'llm-needed',
      snippets: chunks.length > 0 ? chunks.map((c) => c.text) : [],
    };
  }

  if (language === 'en' && intent !== 'unknown' && cannedReplies[intent]) {
    return { answer: cannedReplies[intent], source: 'canned' };
  }

  const chunks = searchKB(message, 3);

  if (chunks.length > 0) {
    return {
      answer: "I found some detailed info, let me summarize it for you.",
      source: 'llm-needed',
      snippets: chunks.map((c) => c.text),
    };
  }

  return {
    answer: "I don't see anything specific in our notes. Please ping us on WhatsApp at +91 9599143235 and we'll help you personally.",
    source: 'llm-needed',
    snippets: [],
  };
}
