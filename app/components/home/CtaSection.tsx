'use client';

import { Button } from '@/app/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-32 bg-[#1c1c1a] text-[#f5f5f0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#e8e6e1] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#e8e6e1] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-[#e8e6e1]/60 text-xs uppercase tracking-[0.3em] block">Join The Network</span>
          <h2 className="font-serif text-5xl md:text-7xl text-[#f5f5f0] leading-tight">
            Ready to curate your collection?
          </h2>
          <p className="text-lg md:text-xl text-[#e8e6e1]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Join thousands of successful retailers who trust Just Got 2 Have It! for their seasonal buying. 
            Register today for exclusive access to our digital showroom and MarketTime ordering portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="https://markettime.com/register" target="_blank">
              <Button variant="luxury" size="lg" className="gap-2 bg-[#f5f5f0] text-[#1c1c1a] hover:bg-[#e8e6e1] border-none min-w-[200px]">
                Start Registration <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-[#f5f5f0] border-[#f5f5f0]/30 hover:bg-[#f5f5f0]/10 hover:text-white min-w-[200px]">
                Contact a Rep
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
