'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const collections = [
  {
    id: 1,
    title: "Fashion & Apparel",
    subtitle: "Curated boutique collections",
    image: "/apparel.png",
    size: "large", // spans 2 rows
    link: "/lookbook/apparel"
  },
  {
    id: 2,
    title: "Home Decor",
    subtitle: "Transform your living space",
    image: "/homedecor.png",
    size: "normal",
    link: "/lookbook/homedecor"
  },
  {
    id: 3,
    title: "Bath & Body",
    subtitle: "Luxury wellness products",
    image: "/bath&body.png",
    size: "normal",
    link: "/lookbook/bathbody"
  },
  {
    id: 4,
    title: "Gourmet",
    subtitle: "Fine foods & entertaining",
    image: "/gormet.png",
    size: "wide", // spans 2 cols
    link: "/lookbook/gourmet"
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-24 md:py-32 bg-[#e8e6e1]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[#5c5c57] text-xs uppercase tracking-[0.3em] font-medium block">Multi Line B2B Agency</span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#1c1c1a]">Our Collections</h2>
            <p className="text-[#5c5c57] max-w-2xl text-lg font-light leading-relaxed">
              Top of the line products and the latest trends in home, bath, gift, and glam.
              <br className="hidden md:block" />
              Servicing the finest retailers worldwide.
            </p>
          </div>
          <Link href="/lookbooks" className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-[#1c1c1a] hover:text-[#5c5c57] transition-colors pb-2 border-b-2 border-transparent hover:border-[#1c1c1a]">
            View All Lookbooks
            <div className="bg-[#1c1c1a] text-white p-2 rounded-full group-hover:bg-[#5c5c57] transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 auto-rows-[450px]">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-md cursor-pointer ${item.size === 'large' ? 'md:col-span-1 md:row-span-2' :
                item.size === 'wide' ? 'md:col-span-2' : ''
                }`}
            >
              <Link href={item.link} className="block h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1a]/80 via-[#1c1c1a]/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 ease-[0.16,1,0.3,1]"
                />

                <div className="absolute inset-0 z-20 p-10 md:p-12 flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                    <span className="inline-block px-4 py-1.5 bg-white/95 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-medium mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 text-[#1c1c1a] rounded-sm transform translate-y-4 group-hover:translate-y-0">
                      Explore Collection
                    </span>
                    <h3 className="text-[#f5f5f0] font-serif text-4xl md:text-5xl mb-2 transition-transform duration-700">{item.title}</h3>
                    <p className="text-[#f5f5f0]/80 text-sm md:text-base font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-700">{item.subtitle}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

