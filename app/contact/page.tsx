import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { Metadata } from 'next';
import { Button } from '@/app/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Just Got 2 Have It!',
  description: 'Get in touch with our team or find a rep in your territory.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Header />

      <section className="pt-40 pb-20 px-4 bg-[#e8e6e1]/50 border-b border-[#e8e6e1]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Info */}
            <div className="space-y-16">
              <div>
                <span className="text-[#5c5c57] text-xs uppercase tracking-[0.3em] font-medium block mb-6">Get in Touch</span>
                <h1 className="font-serif text-5xl md:text-7xl text-[#1c1c1a] mb-8 leading-[1.1]">We&apos;d love to hear from you.</h1>
                <p className="text-[#5c5c57] text-lg font-light leading-relaxed max-w-md">
                  Whether you&apos;re a retailer looking for the next bestseller or a brand seeking representation, our team is here to help.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white shadow-sm rounded-full text-[#1c1c1a] transition-transform duration-500 group-hover:scale-110">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#1c1c1a] mb-2">Call Us</h3>
                    <p className="text-[#5c5c57] text-sm mb-2 font-light">Mon-Fri from 9am to 5pm EST</p>
                    <a href="tel:+14047494850" className="text-[#1c1c1a] text-lg font-medium hover:text-[#5c5c57] transition-colors">
                      (404) 749-4850
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white shadow-sm rounded-full text-[#1c1c1a] transition-transform duration-500 group-hover:scale-110">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#1c1c1a] mb-2">Email Us</h3>
                    <p className="text-[#5c5c57] text-sm mb-2 font-light">General inquiries and support</p>
                    <a href="mailto:info@jgthi.com" className="text-[#1c1c1a] text-lg font-medium hover:text-[#5c5c57] transition-colors">
                      info@jgthi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white shadow-sm rounded-full text-[#1c1c1a] transition-transform duration-500 group-hover:scale-110">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#1c1c1a] mb-2">Headquarters</h3>
                    <p className="text-[#5c5c57] leading-relaxed font-light text-lg">
                      40 John Portman Blvd NW<br />
                      Building 2, Suite 1700<br />
                      Atlanta, GA 30303
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-14 shadow-sm relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#1c1c1a]" />
              <h3 className="font-serif text-3xl text-[#1c1c1a] mb-10">Send a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-medium text-[#5c5c57]">First Name</label>
                    <input type="text" className="w-full bg-[#f5f5f0] border-none p-4 text-[#1c1c1a] focus:ring-1 focus:ring-[#1c1c1a] transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-medium text-[#5c5c57]">Last Name</label>
                    <input type="text" className="w-full bg-[#f5f5f0] border-none p-4 text-[#1c1c1a] focus:ring-1 focus:ring-[#1c1c1a] transition-all" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-medium text-[#5c5c57]">Email Address</label>
                  <input type="email" className="w-full bg-[#f5f5f0] border-none p-4 text-[#1c1c1a] focus:ring-1 focus:ring-[#1c1c1a] transition-all" />
                </div>

                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-medium text-[#5c5c57]">Subject</label>
                  <select className="w-full bg-[#f5f5f0] border-none p-4 text-[#1c1c1a] focus:ring-1 focus:ring-[#1c1c1a] transition-all appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Become a Retailer</option>
                    <option>Brand Representation</option>
                    <option>Showroom Appointment</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-medium text-[#5c5c57]">Message</label>
                  <textarea rows={5} className="w-full bg-[#f5f5f0] border-none p-4 text-[#1c1c1a] focus:ring-1 focus:ring-[#1c1c1a] transition-all resize-none"></textarea>
                </div>

                <Button variant="luxury" className="w-full bg-[#1c1c1a] text-[#f5f5f0] hover:bg-[#5c5c57] py-4 h-auto text-sm tracking-[0.2em]">
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
