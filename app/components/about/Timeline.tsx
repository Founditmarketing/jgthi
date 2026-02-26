'use client';

import { motion } from 'motion/react';
import { useRef } from 'react';

const timelineEvents = [
    {
        year: '2002',
        title: 'The Beginning',
        description: 'Founded with a simple vision to connect exceptional brands with visionary retailers, starting with a handful of dedicated lines.'
    },
    {
        year: '2008',
        title: 'Atlanta Expansion',
        description: 'Opened our flagship permanent showroom in AmericasMart, establishing a major presence in the Southeast.'
    },
    {
        year: '2015',
        title: 'Going West',
        description: 'Expanded to the West Coast market with a premier showroom at the Las Vegas World Market Center.'
    },
    {
        year: '2023',
        title: 'Digital Evolution',
        description: 'Partnered with MarketTime to bring our curated collections online, creating a seamless 24/7 ordering experience.'
    },
    {
        year: '2026',
        title: 'World-Class Future',
        description: 'Continuing our legacy of excellence, representing over 100 premium brands with a dedicated team of over 35 reps.'
    }
];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="py-24 md:py-32 px-4 bg-[#1c1c1a] text-[#f5f5f0] overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[#f5f5f0]/60 text-xs uppercase tracking-[0.3em] font-medium block mb-4">Our History</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-[#f5f5f0]">A Legacy of Excellence</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#f5f5f0]/20 md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Node */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#1c1c1a] border-2 border-[#f5f5f0] transform -translate-x-[7px] md:-translate-x-1/2 mt-2 md:mt-0 z-10" />

                                {/* Year Badge (Mobile Only) */}
                                <div className="md:hidden ml-12 mb-2">
                                    <span className="font-serif text-3xl text-[#f5f5f0]">{event.year}</span>
                                </div>

                                {/* Content */}
                                <div className={`w-full md:w-1/2 ml-12 md:ml-0 pl-0 md:px-12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                                    <h3 className="font-serif text-2xl md:text-3xl text-[#f5f5f0] mb-3">{event.title}</h3>
                                    <p className="text-[#e8e6e1]/80 font-light leading-relaxed">{event.description}</p>
                                </div>

                                {/* Year Badge (Desktop Only) */}
                                <div className={`hidden md:block w-1/2 px-12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <span className="font-serif text-6xl text-[#f5f5f0]/30 italic">{event.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
