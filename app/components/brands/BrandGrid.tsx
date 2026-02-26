'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BrandCard, { Brand } from './BrandCard';
import { Button } from '@/app/components/ui/Button';

// Mock Data - In a real app, this would come from a CMS or API
const brandsData: Brand[] = [
  {
    id: 'shiraleah',
    name: 'Shiraleah',
    category: ['Fashion', 'Home'],
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    description: 'Trend-driven lifestyle brand making modern design accessible.',
    isNew: true
  },
  {
    id: 'santa-barbara',
    name: 'Santa Barbara Design',
    category: ['Gift', 'Home'],
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
    description: 'Eclectic collection of lifestyle gifts and home décor.'
  },
  {
    id: 'slant',
    name: 'Slant Collections',
    category: ['Party', 'Gift'],
    image: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=800&auto=format&fit=crop',
    description: 'Connecting friends and family through life\'s celebrations.'
  },
  {
    id: 'creative-co-op',
    name: 'Creative Co-Op',
    category: ['Home', 'Furniture'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    description: 'Passion for style and design in home furnishings.'
  },
  {
    id: 'bloomingville',
    name: 'Bloomingville',
    category: ['Home', 'Kids'],
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop',
    description: 'Nordic design with a focus on high quality and reasonable prices.'
  },
  {
    id: 'illume',
    name: 'Illume',
    category: ['Fragrance', 'Home'],
    image: 'https://images.unsplash.com/photo-1602523961358-f9f03dd557db?q=80&w=800&auto=format&fit=crop',
    description: 'Fragrances that transform your environment.',
    isNew: true
  },
  {
    id: 'paddywax',
    name: 'Paddywax',
    category: ['Fragrance', 'Gift'],
    image: 'https://images.unsplash.com/photo-1608508438673-4589d799a48b?q=80&w=800&auto=format&fit=crop',
    description: 'Artisan candles designed to set the tone for memories.'
  },
  {
    id: 'designworks',
    name: 'DesignWorks Ink',
    category: ['Stationery', 'Gift'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop',
    description: 'Stationery products for writers, dreamers, and doers.'
  },
  {
    id: 'gentlemens-hardware',
    name: 'Gentlemen\'s Hardware',
    category: ['Men', 'Gift', 'Outdoor'],
    image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=800&auto=format&fit=crop',
    description: 'Superior goods for the rigors of modern life.'
  }
];

const categories = ['All', 'Home', 'Gift', 'Fashion', 'Fragrance', 'Kids'];

export default function BrandGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBrands = activeCategory === 'All' 
    ? brandsData 
    : brandsData.filter(brand => brand.category.includes(activeCategory));

  return (
    <div className="space-y-12">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs uppercase tracking-[0.2em] py-2 px-4 transition-all duration-300 border-b ${
              activeCategory === cat 
                ? 'text-[#1c1c1a] border-[#1c1c1a]' 
                : 'text-[#5c5c57] border-transparent hover:text-[#1c1c1a] hover:border-[#1c1c1a]/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1"
      >
        <AnimatePresence mode='popLayout'>
          {filteredBrands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredBrands.length === 0 && (
        <div className="text-center py-24">
          <p className="text-[#5c5c57] font-serif text-xl">No brands found in this category.</p>
          <Button 
            variant="link" 
            onClick={() => setActiveCategory('All')}
            className="mt-4"
          >
            View all brands
          </Button>
        </div>
      )}
    </div>
  );
}
