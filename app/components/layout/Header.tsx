'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';

const navLinks = [
  { name: 'Brands', href: '/brands' },
  { name: 'Concierges', href: '/concierges' },
  { name: 'Promotions', href: '/promotions' },
  { name: 'Lookbooks', href: '/lookbooks' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const solidMode = isScrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${solidMode ? 'bg-[#f5f5f0]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-10 flex items-center justify-between">
          <Link href="/" className="relative z-50 group">
            <Image
              src="/jg2hi-tranparentlogo2.png"
              alt="Just Got 2 Have It!"
              width={150}
              height={45}
              className={`w-[120px] md:w-[150px] transition-all duration-500 ease-in-out ${solidMode ? 'scale-95 md:scale-90 opacity-95 md:opacity-90' : 'scale-100 opacity-100'
                }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-[#1c1c1a] after:transition-all hover:after:w-full ${solidMode ? 'text-[#5c5c57] hover:text-[#1c1c1a]' : 'text-[#e8e6e1] hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`p-2 transition-colors ${solidMode ? 'text-[#5c5c57] hover:text-[#1c1c1a]' : 'text-[#e8e6e1] hover:text-white'}`}>
              <Search className="w-5 h-5" />
            </button>
            <Button variant="luxury" size="sm" className={`hidden lg:inline-flex ${solidMode ? '' : 'bg-[#f5f5f0] text-[#1c1c1a] border-[#f5f5f0] hover:bg-[#e8e6e1]'}`} onClick={() => window.open('https://markettime.com/login', '_blank')}>
              MarketTime Login
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden relative z-50 p-2 transition-colors ${solidMode ? 'text-[#1c1c1a]' : 'text-[#f5f5f0]'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#1c1c1a]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </header>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-[#f5f5f0] pt-24 px-4 md:hidden flex flex-col items-center justify-start overflow-y-auto"
          >
            {/* Close Button inside menu */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-[#1c1c1a] hover:opacity-70 transition-opacity"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col gap-6 items-center">
              <Link
                href="/"
                className="text-2xl font-serif font-medium text-[#1c1c1a]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link href="/contact/vendor-submissions" className="text-3xl font-serif text-[#1c1c1a] hover:text-[#5c5c57] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Vendor Submissions
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-serif font-medium text-[#1c1c1a]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-12 bg-[#e8e6e1] my-4" />
              <Button variant="luxury" className="w-full max-w-xs bg-[#1c1c1a] text-[#f5f5f0]" onClick={() => window.open('https://markettime.com/login', '_blank')}>
                MarketTime Login
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
