import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lookbooks | Just Got 2 Have It!',
  description: 'Seasonal inspiration and curated collections.',
};

const lookbooks = [
  {
    slug: 'coastal-calm',
    title: 'Coastal Calm',
    season: 'Spring/Summer 2026',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'modern-farmhouse',
    title: 'Modern Farmhouse',
    season: 'Core Collection',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'holiday-2026',
    title: 'Holiday 2026',
    season: 'Winter Preview',
    image: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'eclectic-boho',
    title: 'Eclectic Boho',
    season: 'Fall 2026',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'urban-loft',
    title: 'Urban Loft',
    season: 'Core Collection',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'garden-party',
    title: 'Garden Party',
    season: 'Spring 2026',
    image: 'https://images.unsplash.com/photo-1585128792020-803d29415281?q=80&w=1200&auto=format&fit=crop',
  }
];

export default function LookbooksPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Header />

      <section className="pt-40 pb-20 px-4 bg-[#e8e6e1]/50 border-b border-[#e8e6e1]">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-[#5c5c57] text-xs uppercase tracking-[0.3em] font-medium block mb-6">Inspiration</span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1c1c1a] mb-6">Lookbooks</h1>
          <p className="text-[#5c5c57] text-lg md:text-xl font-light leading-relaxed">
            Immerse yourself in our seasonal stories. Curated inspiration for every aesthetic.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#f5f5f0]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {lookbooks.map((book, index) => (
              <Link
                key={book.slug}
                href={`/lookbooks/${book.slug}`}
                className={`group block relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-md ${index % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1a]/80 via-[#1c1c1a]/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 ease-[0.16,1,0.3,1]"
                />

                <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end items-start z-20 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  <span className="inline-block px-4 py-1.5 bg-white/95 backdrop-blur-md text-[#1c1c1a] text-[10px] uppercase tracking-[0.2em] font-medium mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 rounded-sm">
                    View Lookbook
                  </span>
                  <h2 className="text-[#f5f5f0] font-serif text-4xl md:text-5xl mb-3 transition-transform duration-700">{book.title}</h2>
                  <p className="text-[#f5f5f0]/80 text-sm uppercase tracking-[0.2em] font-medium">{book.season}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
