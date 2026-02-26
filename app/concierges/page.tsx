'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import conciergesDataRaw from '@/app/data/concierges.json';

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

const regions = ['All', 'Northeast', 'Mid-Atlantic', 'Southeast', 'West', 'Midwest'];

export default function ConciergesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeRegion, setActiveRegion] = useState('All');

    const filteredConcierges = (conciergesData || []).filter(concierge => {
        const nameMatch = concierge.name.toLowerCase().includes(searchTerm.toLowerCase());
        const territoryMatch = concierge.territory.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSearch = nameMatch || territoryMatch;
        const matchesRegion = activeRegion === 'All' || concierge.region === activeRegion;
        return matchesSearch && matchesRegion;
    });

    return (
        <main className="pt-32 pb-24 bg-[#f5f5f0]">
            <section className="container mx-auto px-4">
                {/* Header content omitted for brevity, adding it back */}
                <div className="max-w-4xl mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs uppercase tracking-[0.4em] text-[#5c5c57] font-medium block mb-4"
                    >
                        The Team
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-6xl md:text-7xl text-[#1c1c1a] mb-8"
                    >
                        Find Your <br />
                        <span className="italic font-light text-[#8a8a85]">Brand Concierge</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[#5c5c57] font-light max-w-2xl leading-relaxed"
                    >
                        Our dedicated team of concierges provides personalized support and expertise to help you build a successful retail assortment.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-8 mb-16 items-start md:items-center justify-between border-b border-[#e8e6e1] pb-12">
                    <div className="relative w-full md:max-w-md group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5c5c57]/50 group-focus-within:text-[#1c1c1a] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by name or territory..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-[#e8e6e1] rounded-full py-4 pl-12 pr-6 text-sm outline-none focus:border-[#1c1c1a] transition-all font-light"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {regions.map((region) => (
                            <button
                                key={region}
                                onClick={() => setActiveRegion(region)}
                                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${activeRegion === region
                                    ? 'bg-[#1c1c1a] text-white'
                                    : 'bg-white text-[#5c5c57] border border-[#e8e6e1] hover:border-[#1c1c1a] hover:text-[#1c1c1a]'
                                    }`}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-10">
                    {filteredConcierges.map((concierge, index) => (
                        <motion.div
                            key={concierge.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <Link href={`/concierges/${concierge.slug}`} className="block">
                                <div className="aspect-[4/5] relative overflow-hidden rounded-sm mb-6 bg-[#e8e6e1]">
                                    <Image
                                        src={concierge.photo}
                                        alt={concierge.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#1c1c1a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a8a85] font-semibold">{concierge.region}</span>
                                    <h3 className="font-serif text-2xl text-[#1c1c1a] group-hover:text-[#8a8a85] transition-colors">{concierge.name}</h3>
                                    <p className="text-sm text-[#5c5c57] font-light leading-snug line-clamp-2">{concierge.territory}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {filteredConcierges.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="text-[#5c5c57] font-light italic text-lg">No concierges found matching your search.</p>
                    </div>
                )}
            </section>
        </main>
    );
}
