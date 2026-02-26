'use client';

import { motion } from 'motion/react';

interface TerritoryMapProps {
    activeRegion: string;
    onRegionSelect: (region: string) => void;
}

const regions = [
    { id: 'West', label: 'West', coords: 'col-start-1 col-end-4 row-start-1 row-end-4', bg: 'bg-[#e8e6e1]', desc: 'CA, WA, OR, NV, AZ, NM, ID, UT, CO, WY, MT' },
    { id: 'Midwest', label: 'Midwest / MINK', coords: 'col-start-4 col-end-8 row-start-1 row-end-3', bg: 'bg-[#d4d1c9]', desc: 'ND, SD, NE, KS, MN, IA, MO, WI, IL, MI, IN, OH' },
    { id: 'Northeast', label: 'Northeast', coords: 'col-start-8 col-end-11 row-start-1 row-end-2', bg: 'bg-[#8a8a85]', desc: 'NY, PA, NJ, CT, RI, MA, VT, NH, ME' },
    { id: 'Mid-Atlantic', label: 'Mid-Atlantic', coords: 'col-start-8 col-end-11 row-start-2 row-end-3', bg: 'bg-[#5c5c57] text-[#f5f5f0]', desc: 'MD, DE, DC, VA, WV' },
    { id: 'Southeast', label: 'Southeast', coords: 'col-start-6 col-end-10 row-start-3 row-end-5', bg: 'bg-[#1c1c1a] text-[#f5f5f0]', desc: 'NC, SC, GA, FL, AL, MS, TN, KY' },
    { id: 'International', label: 'International & Key Accounts', coords: 'col-start-1 col-end-11 row-start-5 row-end-6 mt-4', bg: 'bg-[#f5f5f0] border border-[#1c1c1a]/20', desc: 'Global Partners & National Accounts' }
];

export default function TerritoryMap({ activeRegion, onRegionSelect }: TerritoryMapProps) {
    return (
        <div className="w-full max-w-5xl mx-auto mb-24">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#1c1c1a] mb-2">Select Territory</h2>
                    <p className="text-[#5c5c57] font-light">Find your dedicated Brand Concierge by region</p>
                </div>
                <button
                    onClick={() => onRegionSelect('All')}
                    className={`text-xs uppercase tracking-widest font-medium transition-colors ${activeRegion === 'All' ? 'text-[#1c1c1a] border-b border-[#1c1c1a]' : 'text-[#8a8a85] hover:text-[#1c1c1a]'}`}
                >
                    View All Reps
                </button>
            </div>

            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-white border border-[#e8e6e1] p-4 md:p-8 rounded-sm">
                <div className="w-full h-full grid grid-cols-10 grid-rows-5 gap-2 md:gap-4">
                    {regions.map((region) => {
                        const isActive = activeRegion === region.id;
                        const isDimmed = activeRegion !== 'All' && !isActive;

                        return (
                            <motion.button
                                key={region.id}
                                onClick={() => onRegionSelect(region.id)}
                                whileHover={{ scale: 0.98 }}
                                whileTap={{ scale: 0.95 }}
                                className={`
                  relative group overflow-hidden rounded-sm text-left p-4 md:p-6 transition-all duration-500
                  ${region.coords}
                  ${region.bg}
                  ${isDimmed ? 'opacity-30 grayscale' : 'opacity-100'}
                  ${isActive ? 'ring-2 ring-offset-2 ring-[#1c1c1a]' : ''}
                `}
                            >
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <span className={`text-sm md:text-xl font-serif leading-tight ${region.bg.includes('text') ? 'text-[#f5f5f0]' : 'text-[#1c1c1a]'}`}>
                                        {region.label}
                                    </span>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                                        className="hidden md:block"
                                    >
                                        <p className={`text-[10px] md:text-xs tracking-widest uppercase mt-4 ${region.bg.includes('text') ? 'text-[#f5f5f0]/70' : 'text-[#5c5c57]'}`}>
                                            {region.desc}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
