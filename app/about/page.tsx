import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/app/components/ui/Button';
import FounderSection from '@/app/components/about/FounderSection';
import Timeline from '@/app/components/about/Timeline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Just Got 2 Have It!',
  description: 'The story behind the premier multi-line wholesale agency.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-[#1c1c1a]">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#f5f5f0]/60 text-xs md:text-sm uppercase tracking-[0.4em] mb-8 block font-medium">Est. 2002</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#f5f5f0] mb-8 leading-[1.1]">
              Bridging the gap between <br className="hidden md:block" />
              <span className="italic text-[#f5f5f0]/70">visionary brands</span> and <span className="italic text-[#f5f5f0]/70">exceptional retailers</span>.
            </h1>
            <div className="w-24 h-[1px] bg-[#f5f5f0]/20 mx-auto mb-8" />
            <p className="text-[#f5f5f0]/80 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              Just Got 2 Have It! is more than a wholesale agency. We are curators, trend-spotters, and partners in your success.
            </p>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] md:w-[1000px] md:h-[1000px] bg-[#f5f5f0]/5 rounded-full blur-[100px] -z-0 pointer-events-none" />
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Image Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center mb-16">
          <span className="text-[#5c5c57] text-xs uppercase tracking-[0.3em] font-medium block mb-4">The Experience</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1c1c1a]">A Glimpse Inside</h2>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
            <div className="md:col-span-8 relative aspect-[16/9] md:aspect-auto md:h-[700px] overflow-hidden rounded-sm group">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                alt="Showroom Team"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105 ease-[0.16,1,0.3,1]"
              />
              <div className="absolute inset-0 bg-[#1c1c1a]/10" />
            </div>
            <div className="md:col-span-4 space-y-4 md:space-y-8">
              <div className="relative aspect-square overflow-hidden rounded-sm group">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                  alt="Meeting"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105 ease-[0.16,1,0.3,1]"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm hidden md:block group">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                  alt="Details"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105 ease-[0.16,1,0.3,1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Showrooms */}
      <section className="py-32 px-4 bg-[#f5f5f0]">
        <div className="container mx-auto text-center mb-20">
          <span className="text-[#5c5c57] text-xs uppercase tracking-[0.3em] font-medium block mb-4">Our Locations</span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#1c1c1a] mb-6">Visit Our Showrooms</h2>
          <p className="text-[#5c5c57] text-lg font-light max-w-xl mx-auto">Experience the collections in person at the industry&apos;s premier markets.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Atlanta */}
          <div className="relative group overflow-hidden h-[500px] rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop"
              alt="Atlanta Showroom"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-[0.16,1,0.3,1]"
            />
            <div className="absolute inset-0 bg-[#1c1c1a]/40 group-hover:bg-[#1c1c1a]/30 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-start translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
              <h3 className="font-serif text-4xl md:text-5xl text-[#f5f5f0] mb-2">Atlanta</h3>
              <p className="uppercase tracking-[0.2em] text-[#f5f5f0]/80 text-sm mb-8">AmericasMart • Bldg 2, Floor 17</p>
              <Link href="/shows">
                <Button variant="outline" className="text-[#f5f5f0] border-[#f5f5f0]/40 hover:bg-[#f5f5f0] hover:text-[#1c1c1a] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>

          {/* Las Vegas */}
          <div className="relative group overflow-hidden h-[500px] rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop"
              alt="Las Vegas Showroom"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-[0.16,1,0.3,1]"
            />
            <div className="absolute inset-0 bg-[#1c1c1a]/40 group-hover:bg-[#1c1c1a]/30 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-start translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
              <h3 className="font-serif text-4xl md:text-5xl text-[#f5f5f0] mb-2">Las Vegas</h3>
              <p className="uppercase tracking-[0.2em] text-[#f5f5f0]/80 text-sm mb-8">World Market Center • C-1012</p>
              <Link href="/shows">
                <Button variant="outline" className="text-[#f5f5f0] border-[#f5f5f0]/40 hover:bg-[#f5f5f0] hover:text-[#1c1c1a] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
