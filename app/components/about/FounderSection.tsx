'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function FounderSection() {
    return (
        <section className="py-24 md:py-32 px-4 bg-[#f5f5f0] overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-5/12 relative aspect-[3/4]"
                    >
                        <div className="absolute inset-0 bg-[#e8e6e1] -rotate-3 scale-105 rounded-sm transform origin-bottom-left" />
                        <div className="relative h-full w-full overflow-hidden rounded-sm">
                            <Image
                                src="/michelle.png"
                                alt="Michelle - Founder & CEO"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-7/12 space-y-8"
                    >
                        <div>
                            <span className="text-[#5c5c57] text-xs uppercase tracking-[0.3em] font-medium block mb-4">Meet The Founder</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-[#1c1c1a] leading-tight mb-2">A Vision for Excellence.</h2>
                        </div>

                        <div className="space-y-6 text-[#5c5c57] text-lg font-light leading-relaxed max-w-2xl">
                            <p>
                                When our founder started Just Got 2 Have It! back in 2002, the vision was simple: to create a wholesale agency that felt like family but operated with world-class precision.
                            </p>
                            <p>
                                She saw a gap in the industry—a need for an agency that didn&apos;t just move boxes, but genuinely understood the art of retail and the passion behind the brands. Her dedication to finding the perfect products and her commitment to the success of every retailer she met laid the foundation for everything we do today.
                            </p>
                            <p className="font-medium text-[#1c1c1a]">
                                &quot;We don&apos;t just sell products; we tell stories. And the most important story is the one our retailers create every day.&quot;
                            </p>
                        </div>

                        <div className="pt-8 flex items-center gap-6 border-t border-[#e8e6e1]/60">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                <Image
                                    src="/michelle.png"
                                    alt="Michelle Thumbnail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-serif text-2xl text-[#1c1c1a]">Michelle</p>
                                <p className="text-[#5c5c57] text-sm uppercase tracking-widest mt-1">Founder & CEO</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
