import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Hero from '@/app/components/home/Hero';
import BrandMarquee from '@/app/components/home/BrandMarquee';
import FeaturedCollections from '@/app/components/home/FeaturedCollections';
import CtaSection from '@/app/components/home/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <FeaturedCollections />
      <CtaSection />
    </>
  );
}
