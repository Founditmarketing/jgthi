'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag, Calendar, ArrowRight } from 'lucide-react';
import promotionsDataRaw from '@/app/data/promotions.json';

interface Promotion {
    id: number;
    brand_name: string;
    logo: string;
    title: string;
    description: string;
    regions: string[];
    expires: string;
}

const promotionsData = promotionsDataRaw as Promotion[];

const regions = ['All', 'Southeast', 'Mid-Atlantic', 'Northeast', 'Midwest', 'West'];

export default function PromotionsPage() {
    const [activeRegion, setActiveRegion] = useState('All');

    const filteredPromotions = promotionsData.filter(promo =>
        activeRegion === 'All' || promo.regions.includes(activeRegion) || promo.regions.includes('All')
    );

    return (
        <main className="pt-32 pb-24 bg-[#f5f5f0] min-h-screen">
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mb-16 text-center mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs uppercase tracking-[0.4em] text-[#5c5c57] font-medium block mb-4"
                    >
                        Specials
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#1c1c1a] mb-8"
                    >
                        Active <br />
                        <span className="italic font-light text-[#8a8a85]">Promotions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-[#5c5c57] font-light max-w-2xl leading-relaxed mx-auto"
                    >
                        Discover exclusive show specials, freight allowances, and opening order incentives available in your territory.
                    </motion.p>
                </div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-16 border-b border-[#e8e6e1] pb-12"
                >
                    {regions.map((region) => (
                        <button
                            key={region}
                            onClick={() => setActiveRegion(region)}
                            className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${activeRegion === region
                                ? 'bg-[#1c1c1a] text-white shadow-md'
                                : 'bg-white text-[#5c5c57] border border-[#e8e6e1] hover:border-[#1c1c1a] hover:text-[#1c1c1a]'
                                }`}
                        >
                            {region}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPromotions.map((promo) => (
                            <motion.div
                                layout
                                key={promo.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group bg-white rounded-sm border border-[#e8e6e1] hover:border-[#1c1c1a] hover:shadow-2xl hover:shadow-[#1c1c1a]/5 transition-all duration-500 overflow-hidden flex flex-col h-full"
                            >
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="relative w-20 h-20 grayscale group-hover:grayscale-0 transition-all duration-500">
                                            <Image
                                                src={promo.logo}
                                                alt={promo.brand_name}
                                                fill
                                                className="object-cover rounded-sm"
                                            />
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 bg-[#f5f5f0] border border-[#e8e6e1] px-3 py-1.5 rounded-sm text-[10px] uppercase tracking-widest text-[#5c5c57] font-semibold">
                                            <Tag className="w-3 h-3" /> Offer
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-3xl text-[#1c1c1a] mb-2">{promo.brand_name}</h3>
                                    <h4 className="text-[#8a8a85] font-light text-lg mb-6">{promo.title}</h4>

                                    <p className="text-[#5c5c57] leading-relaxed flex-grow">
                                        {promo.description}
                                    </p>

                                    <div className="mt-8 pt-6 border-t border-[#e8e6e1] flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-[#8a8a85] font-medium uppercase tracking-wider">
                                            <Calendar className="w-4 h-4" />
                                            Expires {new Date(promo.expires).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1c1c1a] text-white p-6 relative overflow-hidden group/btn cursor-pointer">
                                    <Link href="/concierges" className="flex items-center justify-between w-full relative z-10">
                                        <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/90 group-hover/btn:text-white transition-colors">
                                            Contact Concierge to Claim
                                        </span>
                                        <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2" />
                                    </Link>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredPromotions.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center"
                    >
                        <h3 className="font-serif text-2xl text-[#1c1c1a] mb-2">No active promotions</h3>
                        <p className="text-[#5c5c57] font-light max-w-md mx-auto">
                            There are currently no active promotions for the {activeRegion} region. Check back soon for new offers.
                        </p>
                        <button
                            onClick={() => setActiveRegion('All')}
                            className="mt-8 text-xs uppercase tracking-widest font-medium text-[#1c1c1a] border-b border-[#1c1c1a] pb-1"
                        >
                            View All Regions
                        </button>
                    </motion.div>
                )}
            </section>
        </main>
    );
}
