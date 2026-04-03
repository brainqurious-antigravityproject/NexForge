import type { Metadata } from 'next';
import './globals.css'; // Global styles
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import Chatbot from '@/components/ui/Chatbot';

export const metadata: Metadata = {
  title: 'NexForge | B2B Digital Agency',
  description: 'B2B digital agency website targeting textile brands.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body suppressHydrationWarning className="bg-[#000000] text-[#e8e8f0] font-[family-name:var(--font-body)] antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
        <Chatbot />
      </body>
    </html>
  );
}
