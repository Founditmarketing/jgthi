'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const brands = [
  "Shiraleah", "Santa Barbara Design", "Slant Collections", "Creative Co-Op",
  "Bloomingville", "Illume", "Paddywax", "DesignWorks Ink", "Gentlemen's Hardware",
  "Scout", "Swig Life", "Corkcicle", "Mud Pie", "Two's Company"
];

export default function BrandMarquee() {
  return (
    <section className="py-24 bg-[#1c1c1a] overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <span className="text-[#f5f5f0]/60 text-xs uppercase tracking-[0.3em] font-medium block mb-4">Our Partners</span>
        <h3 className="font-serif text-4xl md:text-5xl text-[#f5f5f0] mb-6">Representing the Best</h3>
        <div className="w-16 h-[1px] bg-[#f5f5f0]/20 mx-auto" />
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 md:gap-40 py-8">
          {brands.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="text-3xl md:text-5xl font-serif italic text-[#f5f5f0]/30 hover:text-[#f5f5f0] transition-colors duration-500 cursor-pointer select-none"
            >
              {brand}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, index) => (
            <span
              key={`${brand}-duplicate-${index}`}
              className="text-3xl md:text-5xl font-serif italic text-[#f5f5f0]/30 hover:text-[#f5f5f0] transition-colors duration-500 cursor-pointer select-none"
            >
              {brand}
            </span>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1c1c1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1c1c1a] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="text-center mt-16">
        <Link href="/brands" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#f5f5f0] border-b border-[#f5f5f0]/30 pb-1 hover:text-white hover:border-white transition-all duration-300">
          View Directory <ArrowUpRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
}
