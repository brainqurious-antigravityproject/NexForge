import { type Intent } from './detector';
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
    "Pricing depends on scope — website complexity, features, and timeline. Starter sites begin around ₹15,000–₹30,000. Share your budget and requirements and we'll suggest the best plan for you.",
  process:
    "Our typical process: (1) Requirements call → (2) Design mockup → (3) Development & feedback rounds → (4) Testing → (5) Launch. Most projects take 2–6 weeks. Want to get started?",
  contact:
    "Reach us on WhatsApp at +91 9599143235 or email info@sitecraf.com. We're available Mon–Sat, 10am–7pm IST. You can also use the contact form on our website.",
  faq:
    "Common questions: We offer 1–2 rounds of revisions, mobile-responsive designs, basic SEO setup, and 30 days of post-launch support. Hosting is billed separately. Have a specific question?",
};

export function getAnswer(intent: Intent, message: string): AnswerResult {
  if (intent !== 'unknown' && cannedReplies[intent]) {
    return { answer: cannedReplies[intent], source: 'canned' };
  }

  const chunks = searchKB(message, 3);

  if (chunks.length === 1 && chunks[0].text.length <= 100) {
    return { answer: chunks[0].text.split('\n')[0], source: 'kb' };
  }

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
