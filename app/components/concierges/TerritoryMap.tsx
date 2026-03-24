'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface TerritoryMapProps {
    activeRegion: string;
    onRegionSelect: (region: string) => void;
}

const regions = [
    { id: 'All', label: 'All Regions', desc: 'National Sales' },
    { id: 'Southeast', label: 'Southeast', desc: 'NC, SC, GA, FL, AL, MS, TN, KY' },
    { id: 'Mid-Atlantic', label: 'Mid-Atlantic', desc: 'MD, DE, DC, VA, WV, NY, PA, NJ' },
    { id: 'Northeast', label: 'Northeast', desc: 'CT, RI, MA, VT, NH, ME' },
    { id: 'Midwest', label: 'Midwest / MINK', desc: 'ND, SD, NE, KS, MN, IA, MO, WI, IL, MI, OH' },
    { id: 'West', label: 'West', desc: 'CA, WA, OR, NV, AZ, NM, ID, UT, CO, WY, MT' },
    { id: 'International', label: 'Key Accounts', desc: 'Global Partners' }
];

export default function TerritoryMap({ activeRegion, onRegionSelect }: TerritoryMapProps) {
    return (
        <div className="w-full max-w-5xl mx-auto mb-24">
            <div className="flex flex-col mb-12 border-b border-[#1c1c1a]/10 pb-4">
                <h2 className="font-serif text-3xl md:text-5xl text-[#1c1c1a] mb-2">Refine by Territory</h2>
                <p className="text-[#5c5c57] font-light">Select a region to find your dedicated Brand Concierge</p>
            </div>

            <div className="w-full flex flex-col gap-2">
                {regions.map((region) => {
                    const isActive = activeRegion === region.id;

                    return (
                        <motion.button
                            key={region.id}
                            onClick={() => {
                                onRegionSelect(region.id);
                                document.getElementById('directory-grid')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`group relative w-full text-left flex items-center justify-between py-6 md:py-8 border-b transition-colors overflow-hidden ${isActive ? 'border-[#1c1c1a]' : 'border-[#e8e6e1] hover:border-[#1c1c1a]'}`}
                            whileHover={!isActive ? "hover" : undefined}
                        >
                            {/* Animated Background Slide on Hover (Left to right) */}
                            <motion.div
                                className="absolute inset-0 bg-[#1c1c1a] z-0"
                                initial={false}
                                animate={{ x: isActive ? 0 : '-100%' }}
                                transition={{ type: 'tween', ease: 'circOut', duration: 0.5 }}
                                variants={!isActive ? {
                                    hover: { x: 0 }
                                } : {}}
                            />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-2 md:gap-12 w-full transition-colors duration-500">
                                <span className={`font-serif text-4xl md:text-6xl tracking-tight transition-colors duration-500 ${isActive ? 'text-[#f5f5f0] italic' : 'text-[#8a8a85] group-hover:text-[#f5f5f0]'}`}>
                                    {region.label}
                                </span>

                                <span className={`text-xs md:text-sm uppercase tracking-widest transition-colors duration-500 max-w-sm ${isActive ? 'text-[#e8e6e1]' : 'text-[#8a8a85] group-hover:text-[#e8e6e1]'}`}>
                                    {region.desc}
                                </span>
                            </div>

                            {/* Arrow */}
                            <div className="relative z-10 hidden md:flex items-center justify-center overflow-hidden">
                                <motion.div
                                    className={`flex transition-colors duration-500 ${isActive ? 'text-[#f5f5f0]' : 'text-[#1c1c1a] group-hover:text-[#f5f5f0]'}`}
                                    variants={{
                                        hover: { x: [0, 10, 0], transition: { repeat: Infinity, duration: 1.5 } }
                                    }}
                                >
                                    {isActive ? <div className="w-3 h-3 rounded-full bg-[#f5f5f0] mr-4 shadow-sm" /> : <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </motion.div>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
