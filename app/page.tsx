import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesOverview from '@/components/sections/ServicesOverview';
import HowWeBuild from '@/components/sections/HowWeBuild';
import BeforeAfter from '@/components/sections/BeforeAfter';
import ComparisonTable from '@/components/sections/ComparisonTable';
import Benefits from '@/components/sections/Benefits';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import WebDevDeepDive from '@/components/sections/WebDevDeepDive';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <HowWeBuild />
      <BeforeAfter />
      <ComparisonTable />
      <Benefits />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <WebDevDeepDive />
    </>
  );
}
