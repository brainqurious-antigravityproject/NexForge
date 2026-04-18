import { Metadata } from 'next';
import BlogClient from '@/components/sections/BlogClient';

export const metadata: Metadata = {
  title: 'Blog — Websites, SEO, AI Chatbots & Growth Insights | Sitecraf',
  description: 'Actionable articles on website development, SEO, GEO, AI chatbots, Shopify, Wix Studio, automation, and digital growth for Indian businesses.',
  keywords: [
    'website development blog India',
    'SEO blog for small business India',
    'GEO generative engine optimization blog',
    'AI chatbot blog India',
    'Next.js SEO blog',
    'Shopify vs Wix Studio India',
    'digital growth blog Delhi',
    'website tips for Indian businesses'
  ],
  openGraph: {
    title: 'Blog — Websites, SEO, AI & Growth Insights | Sitecraf',
    description: 'Practical guides on websites, SEO, AI chatbots, automation, and growth for Indian businesses.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: { canonical: 'https://sitecraf.com/blog' }
};

export default function BlogPage() {
  return <BlogClient />;
}
