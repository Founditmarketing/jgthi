'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BrandCard from './BrandCard';
import { Button } from '@/app/components/ui/Button';
import brandsDataRaw from '@/app/data/brands.json';

interface Brand {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
  established: string;
}

const brandsData = brandsDataRaw as Brand[];

const categories = ['All', 'Gourmet', 'Jewelry', 'Apparel', 'Home Decor', 'Bath & Body', 'Accessories', 'Kitchen', 'Candles', 'Gift', 'Novelty', 'Stationery', 'Baby & Child'];

export default function BrandGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBrands = useMemo(() => {
    if (activeCategory === 'All') return brandsData;
    return brandsData.filter(brand => brand.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-12">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs uppercase tracking-[0.2em] py-2 px-4 transition-all duration-300 border-b ${activeCategory === cat
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
