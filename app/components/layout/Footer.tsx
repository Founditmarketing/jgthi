import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/jg2hi-tranparentlogo2.png"
                alt="Just Got 2 Have It!"
                width={180}
                height={54}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Just Got 2 Have It! is a premier multi-line wholesale agency representing the finest brands in the gift and home industry.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/brands" className="hover:text-white transition-colors">Our Brands</Link></li>
              <li><Link href="/lookbooks" className="hover:text-white transition-colors">Lookbooks</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/shows" className="hover:text-white transition-colors">Trade Shows</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="https://markettime.com/register" target="_blank" className="hover:text-white transition-colors">Register</Link></li>
              <li><Link href="https://markettime.com/login" target="_blank" className="hover:text-white transition-colors">MarketTime Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
            <div className="space-y-1 text-sm">
              <p>Atlanta Showroom: Building 2, Floor 17</p>
              <p>Las Vegas Showroom: C-1012</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Just Got 2 Have It! All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
