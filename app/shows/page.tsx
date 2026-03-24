import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/app/components/ui/Button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import CountdownTimer from '@/app/components/shows/CountdownTimer';

export const metadata: Metadata = {
  title: 'Trade Shows | Just Got 2 Have It!',
  description: 'Visit our showrooms in Atlanta and Las Vegas. Book an appointment for the upcoming market.',
};

const shows = [
  {
    id: 'atlanta-summer',
    name: 'Atlanta Market',
    season: 'Summer 2026',
    dates: 'July 14 – 20, 2026',
    location: 'AmericasMart, Bldg 2',
    booth: 'Floor 17, Suite 1700',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop',
    description: 'Join us in our flagship showroom featuring over 40,000 sq ft of curated collections. Experience the launch of our new holiday lines.',
    status: 'Upcoming'
  },
  {
    id: 'vegas-summer',
    name: 'Las Vegas Market',
    season: 'Summer 2026',
    dates: 'July 26 – 30, 2026',
    location: 'World Market Center',
    booth: 'Building C, Suite C-1012',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
    description: 'Discover the West Coast\'s premier gift and home market. See our exclusive lines and enjoy daily happy hours.',
    status: 'Upcoming'
  },
  {
    id: 'shoppe-object',
    name: 'Shoppe Object',
    season: 'Summer 2026',
    dates: 'August 4 – 6, 2026',
    location: 'Pier 36, NYC',
    booth: 'Booth A-100',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1200&auto=format&fit=crop',
    description: 'A curated selection of our most design-forward artisan brands in a boutique setting.',
    status: 'Upcoming'
  }
];

export default function ShowsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-20 px-4 bg-[#e8e6e1]/50 border-b border-[#e8e6e1]">
        <div className="container mx-auto text-center max-w-4xl">
          <span className="text-[#5c5c57] text-xs uppercase tracking-[0.3em] font-medium block mb-6">Trade Shows & Events</span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1c1c1a] mb-8 leading-[1.1]">Meet Us at Market</h1>
          <p className="text-[#5c5c57] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16">
            There&apos;s no substitute for seeing the product in person.
            Schedule an appointment with your rep to walk the floor and write your order.
          </p>

          <div className="border-t border-[#e8e6e1] pt-16 mt-8 max-w-3xl mx-auto">
            <span className="font-serif text-3xl md:text-4xl text-[#1c1c1a] block mb-2">Countdown to Atlanta Market</span>
            <p className="text-[#5c5c57] text-sm uppercase tracking-[0.2em] mb-8">July 14 – 20, 2026</p>
            <CountdownTimer targetDate="2026-07-14T09:00:00" />
            <Button variant="luxury" className="bg-[#1c1c1a] text-[#f5f5f0] hover:bg-[#5c5c57] mt-8">
              Book Atlanta Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Shows List */}
      <section className="py-24 px-4 bg-[#f5f5f0]">
        <div className="container mx-auto space-y-24 md:space-y-32">
          {shows.map((show, index) => (
            <div key={show.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}>
              {/* Image */}
              <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden rounded-md group">
                <Image
                  src={show.image}
                  alt={show.name}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 ease-[0.16,1,0.3,1]"
                />
                <div className="absolute inset-0 bg-[#1c1c1a]/10 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-6 left-6 bg-[#f5f5f0]/95 backdrop-blur-sm px-4 py-2 rounded-sm shadow-sm transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
                  <span className="text-[#1c1c1a] text-[10px] uppercase tracking-[0.2em] font-medium">{show.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <span className="text-[#5c5c57] text-xs uppercase tracking-[0.2em] font-medium mb-4 block">{show.season}</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-[#1c1c1a] mb-6">{show.name}</h2>
                  <p className="text-[#5c5c57] text-lg font-light leading-relaxed mb-8 max-w-lg">
                    {show.description}
                  </p>
                </div>

                <div className="space-y-5 border-t border-[#e8e6e1]/60 pt-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#1c1c1a]/5 flex items-center justify-center text-[#1c1c1a] transition-colors group-hover:bg-[#1c1c1a] group-hover:text-[#f5f5f0]">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-[#1c1c1a] text-lg">{show.dates}</span>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#1c1c1a]/5 flex items-center justify-center text-[#1c1c1a] transition-colors group-hover:bg-[#1c1c1a] group-hover:text-[#f5f5f0]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[#5c5c57] text-lg">{show.location} • <span className="font-medium text-[#1c1c1a]">{show.booth}</span></span>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#1c1c1a]/5 flex items-center justify-center text-[#1c1c1a] transition-colors group-hover:bg-[#1c1c1a] group-hover:text-[#f5f5f0]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-[#5c5c57] text-lg">9:00 AM – 6:00 PM Daily</span>
                  </div>
                </div>

                <div className="pt-8">
                  <Button variant="luxury" className="bg-[#1c1c1a] text-[#f5f5f0] hover:bg-[#5c5c57]">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 bg-[#1c1c1a] text-[#f5f5f0] text-center relative overflow-hidden">
        <div className="container mx-auto max-w-3xl relative z-10">
          <span className="text-[#f5f5f0]/50 text-xs uppercase tracking-[0.3em] font-medium block mb-6">Shop 24/7</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-[1.1]">Can&apos;t make it to market?</h2>
          <div className="w-24 h-[1px] bg-[#f5f5f0]/20 mx-auto mb-8" />
          <p className="text-[#e8e6e1]/80 mb-12 text-lg md:text-xl font-light leading-relaxed">
            Our digital showroom is always open. Browse the latest catalogs and write orders anytime, anywhere.
          </p>
          <Button variant="luxury" className="bg-[#f5f5f0] text-[#1c1c1a] hover:bg-[#e8e6e1]">
            Shop Online
          </Button>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f5f5f0]/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

      <Footer />
    </main>
  );
}
