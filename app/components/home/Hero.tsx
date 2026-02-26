'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Button } from '@/app/components/ui/Button';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const heroImages = [
  '/jg2hi-hero1.jpg',
  '/jg2hi-hero3.jpg',
  '/jg2hi-hero4.jpg',
  '/jg2hi-hero5.jpg',
  '/jg2hi-hero6.jpg',
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Safety reset if index somehow goes out of bounds
  useEffect(() => {
    if (activeIndex >= heroImages.length) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  return (
    <section ref={containerRef} className="relative h-[95vh] min-h-[800px] w-full overflow-hidden bg-[#1c1c1a] text-[#f5f5f0]">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 2.5, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              style={{ y, opacity, scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}
              className="absolute inset-0 origin-top"
            >
              <Image
                src={heroImages[activeIndex] || heroImages[0]}
                alt={`Luxury Showroom ${activeIndex + 1}`}
                fill
                className="object-cover opacity-60"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1a]/80 via-[#1c1c1a]/50 to-[#1c1c1a]/95 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pr-8 h-full flex flex-col justify-center pt-6 md:pt-0">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-16 bg-[#e8e6e1]/80" />
            <span className="text-xs md:text-sm font-medium tracking-[0.5em] uppercase text-[#e8e6e1]">
              Est. 2002
            </span>
          </motion.div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] mb-8 text-[#f5f5f0] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 100, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Curated
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block italic font-light text-[#d4d1c9] ml-8 md:ml-24"
            >
              Excellence
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-[#e8e6e1] max-w-2xl leading-snug font-light mb-12 border-l-2 border-[#e8e6e1]/40 pl-8 ml-2 md:ml-4"
          >
            The premier digital showroom bridging the gap between exceptional brands and visionary retailers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-6 ml-2 md:ml-4"
          >
            <Link href="/brands">
              <Button variant="luxury" size="lg" className="min-w-[200px] h-14 text-sm tracking-widest bg-[#f5f5f0] text-[#1c1c1a] border-[#f5f5f0] hover:bg-[#e8e6e1] hover:text-[#1c1c1a] transition-all duration-300">
                Explore The Edit
              </Button>
            </Link>
            <Link href="https://markettime.com/login" target="_blank">
              <Button variant="outline" size="lg" className="min-w-[200px] h-14 text-sm tracking-widest text-[#f5f5f0] border-[#f5f5f0]/40 hover:bg-[#f5f5f0] hover:text-[#1c1c1a] transition-all duration-300 backdrop-blur-sm">
                Join MarketTime
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Vertical Navigation Dots */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="group relative flex items-center justify-center p-1"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-[#f5f5f0] scale-125' : 'bg-[#f5f5f0]/30 hover:bg-[#f5f5f0]/60'
                }`}
            />
            <div className={`absolute right-full mr-4 px-2 py-1 bg-[#1c1c1a]/80 backdrop-blur-sm text-[10px] uppercase tracking-widest text-[#f5f5f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#f5f5f0]/10 whitespace-nowrap`}>
              Slide {index + 1}
            </div>
          </button>
        ))}
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 right-4 md:right-12 z-20 hidden md:block group cursor-pointer"
      >
        <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border border-[#f5f5f0]/30 flex items-center justify-center backdrop-blur-md bg-[#f5f5f0]/5 group-hover:bg-[#f5f5f0]/10 transition-colors duration-500">
          <div className="absolute inset-0 animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                id="curve"
                d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                fill="transparent"
              />
              <text className="text-[10px] uppercase tracking-[0.25em] fill-[#f5f5f0] font-medium">
                <textPath href="#curve">
                  Just Got 2 Have It • Premium Agency •
                </textPath>
              </text>
            </svg>
          </div>
          <span className="font-serif text-4xl text-[#f5f5f0] group-hover:scale-110 transition-transform duration-500">JG</span>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#f5f5f0]/60">Scroll</span>
        <div className="w-[1px] h-12 bg-[#f5f5f0]/20 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-[#f5f5f0]"
          />
        </div>
      </motion.div>
    </section>
  );
}


