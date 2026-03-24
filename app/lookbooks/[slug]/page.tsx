import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import LookbookGrid from '@/app/components/lookbook/LookbookGrid';
import { Button } from '@/app/components/ui/Button';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Mock Data
const lookbookData = {
  'coastal-calm': {
    title: 'Coastal Calm',
    season: 'Spring/Summer 2026',
    description: 'Inspired by the textures of the shoreline. Bleached woods, soft linens, and organic ceramics define this serene collection.',
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop',
    products: [
      { id: '1', name: 'Seagrass Basket', brand: 'Bloomingville', price: '$45', image: 'https://images.unsplash.com/photo-1599693988002-3932454556af?q=80&w=800&auto=format&fit=crop' },
      { id: '2', name: 'Linen Throw Pillow', brand: 'Creative Co-Op', price: '$32', image: 'https://images.unsplash.com/photo-1579656381226-5fc70ac16987?q=80&w=800&auto=format&fit=crop' },
      { id: '3', name: 'Ceramic Vase Set', brand: 'Shiraleah', price: '$68', image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop' },
      { id: '4', name: 'Driftwood Mirror', brand: 'Santa Barbara', price: '$120', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop' },
      { id: '5', name: 'Woven Rug', brand: 'Bloomingville', price: '$250', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop' },
      { id: '6', name: 'Glass Carafe', brand: 'Slant', price: '$28', image: 'https://images.unsplash.com/photo-1572196284554-d9400a96a430?q=80&w=800&auto=format&fit=crop' },
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LookbookDetail({ params }: Props) {
  const { slug } = await params;
  const data = lookbookData[slug as keyof typeof lookbookData] || lookbookData['coastal-calm']; // Fallback for demo

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Header />
      
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <span className="text-white/90 text-sm uppercase tracking-[0.3em] mb-4">{data.season}</span>
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6">{data.title}</h1>
          <p className="text-white/90 text-lg max-w-2xl font-light leading-relaxed mb-8">
            {data.description}
          </p>
          <Button variant="luxury" className="bg-white text-[#1c1c1a] hover:bg-[#e8e6e1] border-none">
            Shop Full Collection
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-8 border-b border-[#e8e6e1]">
        <Link href="/lookbooks" className="inline-flex items-center text-sm uppercase tracking-widest text-[#5c5c57] hover:text-[#1c1c1a] transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Lookbooks
        </Link>
      </div>

      {/* Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <LookbookGrid products={data.products} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
