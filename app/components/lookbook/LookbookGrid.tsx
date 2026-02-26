'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/app/components/ui/Button';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
}

interface LookbookGridProps {
  products: Product[];
}

export default function LookbookGrid({ products }: LookbookGridProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="break-inside-avoid group relative"
        >
          <div className="relative overflow-hidden bg-[#e8e6e1]">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={1000}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#1c1c1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-[#e8e6e1] text-xs uppercase tracking-widest mb-2">{product.brand}</span>
              <h3 className="text-[#f5f5f0] font-serif text-2xl mb-6">{product.name}</h3>
              <Button variant="luxury" size="sm" className="bg-[#f5f5f0] text-[#1c1c1a] hover:bg-white border-none">
                Shop on MarketTime <ArrowUpRight className="ml-2 w-3 h-3" />
              </Button>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-start md:hidden">
            <div>
              <h3 className="text-[#1c1c1a] font-serif text-lg">{product.name}</h3>
              <p className="text-[#5c5c57] text-xs uppercase tracking-wider">{product.brand}</p>
            </div>
            <button className="p-2 bg-[#1c1c1a] text-white rounded-full">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
