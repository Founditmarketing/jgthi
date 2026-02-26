'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface Brand {
  id: string;
  name: string;
  category: string[];
  image: string;
  description: string;
  isNew?: boolean;
}

interface BrandCardProps {
  brand: Brand;
  index: number;
}

export default function BrandCard({ brand, index }: BrandCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative block aspect-[3/4] overflow-hidden bg-[#1c1c1a]"
    >
      <Link href={`/brands/${brand.id}`} className="block h-full w-full">
        {/* Image */}
        <Image
          src={brand.image}
          alt={brand.name}
          fill
          className="object-cover transition-transform duration-[2s] group-hover:scale-110 ease-[0.16,1,0.3,1] opacity-80 group-hover:opacity-100"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1a] via-[#1c1c1a]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
          <div className="flex justify-between items-start mb-4">
            {brand.isNew && (
              <span className="px-3 py-1 bg-[#f5f5f0] text-[#1c1c1a] text-[10px] uppercase tracking-[0.2em] font-medium">
                New Arrival
              </span>
            )}
            <div className="ml-auto w-10 h-10 rounded-full border border-[#f5f5f0]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-[0.16,1,0.3,1] bg-[#1c1c1a]/50 backdrop-blur-sm">
              <ArrowUpRight className="w-5 h-5 text-[#f5f5f0]" />
            </div>
          </div>

          <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
            <h3 className="font-serif text-3xl md:text-4xl text-[#f5f5f0] mb-3">{brand.name}</h3>

            <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 overflow-hidden">
              <p className="text-[#f5f5f0]/70 text-sm font-light leading-relaxed mb-6">
                {brand.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {brand.category.map((cat) => (
                  <span key={cat} className="text-[10px] uppercase tracking-[0.2em] text-[#f5f5f0]/50 border border-[#f5f5f0]/20 px-3 py-1 rounded-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
