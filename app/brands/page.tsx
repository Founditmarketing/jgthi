import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import BrandGrid from '@/app/components/brands/BrandGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Brands | Just Got 2 Have It!',
  description: 'Explore our curated collection of premium wholesale brands.',
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Header />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 px-4 bg-[#e8e6e1]">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl text-[#1c1c1a] mb-6">Our Brands</h1>
          <p className="text-[#5c5c57] text-lg md:text-xl font-light leading-relaxed">
            We represent the most innovative and sought-after brands in the industry. 
            Discover the partners that define our aesthetic.
          </p>
        </div>
      </section>

      {/* Brand Grid Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <BrandGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}
