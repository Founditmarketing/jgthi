'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import conciergesDataRaw from '@/app/data/concierges.json';
import TerritoryMap from '@/app/components/concierges/TerritoryMap';

interface Concierge {
    id: number;
    name: string;
    slug: string;
    photo: string;
    region: string;
    territory: string;
    email: string;
    phone: string;
    mobile: string;
    appointments_url: string;
    brands: any[];
}

const conciergesData = conciergesDataRaw as Concierge[];

export default function ConciergesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeRegion, setActiveRegion] = useState('All');

    const filteredConcierges = (conciergesData || []).filter(concierge => {
        const nameMatch = concierge.name.toLowerCase().includes(searchTerm.toLowerCase());
        const territoryMatch = concierge.territory.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSearch = nameMatch || territoryMatch;

        let matchesRegion = true;
        if (activeRegion !== 'All') {
            if (activeRegion === 'Midwest') {
                matchesRegion = concierge.region === 'Midwest';
            } else if (activeRegion === 'International') {
                matchesRegion = concierge.region === 'International' || concierge.region === 'Key Accounts';
            } else {
                matchesRegion = concierge.region === activeRegion;
            }
        }

        return matchesSearch && matchesRegion;
    });

    return (
        <main className="pt-32 pb-24 bg-[#f5f5f0]">
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mb-16 text-center mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs uppercase tracking-[0.4em] text-[#5c5c57] font-medium block mb-4"
                    >
                        Directory
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#1c1c1a] mb-8"
                    >
                        Find Your <br />
                        <span className="italic font-light text-[#8a8a85]">Brand Concierge</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-[#5c5c57] font-light max-w-2xl leading-relaxed mx-auto"
                    >
                        Our dedicated team provides personalized support to help you build a successful retail assortment.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <TerritoryMap
                        activeRegion={activeRegion}
                        onRegionSelect={setActiveRegion}
                    />
                </motion.div>

                {/* Filters */}
                <div id="directory-grid" className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between border-b border-[#e8e6e1] pb-12 pt-8 scroll-mt-32">
                    <div className="relative w-full md:max-w-xl mx-auto group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5c5c57]/50 group-focus-within:text-[#1c1c1a] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by concierge name, state, or territory..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-[#e8e6e1] rounded-full py-5 pl-16 pr-6 text-base outline-none focus:border-[#1c1c1a] transition-all font-light shadow-sm"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                    <AnimatePresence>
                        {filteredConcierges.map((concierge, index) => (
                            <motion.div
                                layout
                                key={concierge.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group bg-white rounded-sm border border-[#e8e6e1] hover:border-[#1c1c1a] transition-colors overflow-hidden"
                            >
                                <Link href={`/concierges/${concierge.slug}`} className="block">
                                    <div className="aspect-[4/5] relative overflow-hidden bg-[#e8e6e1]">
                                        <Image
                                            src={concierge.photo}
                                            alt={concierge.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1a]/80 via-transparent to-transparent opacity-60" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#f5f5f0] font-semibold drop-shadow-md">{concierge.region}</span>
                                            <h3 className="font-serif text-3xl text-white mt-1 drop-shadow-md">{concierge.name}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-[#5c5c57] font-light leading-snug line-clamp-2">{concierge.territory}</p>
                                        <div className="mt-6 flex items-center text-xs uppercase tracking-widest font-medium text-[#1c1c1a] group-hover:text-[#8a8a85] transition-colors">
                                            View Profile <span className="ml-2">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredConcierges.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center"
                    >
                        <h3 className="font-serif text-2xl text-[#1c1c1a] mb-2">No results found</h3>
                        <p className="text-[#5c5c57] font-light max-w-md mx-auto">
                            We couldn&apos;t find any concierges matching &quot;{searchTerm}&quot; in the selected territory. Try adjusting your search.
                        </p>
                        <button
                            onClick={() => { setSearchTerm(''); setActiveRegion('All'); }}
                            className="mt-8 text-xs uppercase tracking-widest font-medium text-[#1c1c1a] border-b border-[#1c1c1a] pb-1"
                        >
                            Clear Filters
                        </button>
                    </motion.div>
                )}
            </section>
        </main>
    );
}
