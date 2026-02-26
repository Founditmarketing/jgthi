import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { Metadata } from 'next';
import { Button } from '@/app/components/ui/Button';
import { Plus, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ | Just Got 2 Have It!',
  description: 'Frequently asked questions about ordering, shipping, and registration.',
};

const faqs = [
  {
    category: 'Ordering',
    questions: [
      {
        q: 'How do I place an order?',
        a: 'You can place orders directly through our MarketTime portal, by contacting your dedicated territory manager, or by visiting us at one of our showrooms. If you are new to JGTHI, please register first to get your account set up.'
      },
      {
        q: 'What are the opening order minimums?',
        a: 'Minimums vary by brand, typically ranging from $150 to $500. You can view specific brand terms on their individual brand pages or in the MarketTime portal.'
      },
      {
        q: 'Can I order from multiple brands on one PO?',
        a: 'No, each brand requires a separate purchase order as they ship directly from their respective warehouses. However, our MarketTime portal allows you to build a cart with multiple brands and checkout in one session.'
      }
    ]
  },
  {
    category: 'Shipping & Returns',
    questions: [
      {
        q: 'How is shipping calculated?',
        a: 'Shipping costs are determined by the individual brand based on weight, dimensions, and destination. Most brands ship FOB from their warehouse. Freight caps or free freight programs may be available for qualifying orders.'
      },
      {
        q: 'What if I receive damaged goods?',
        a: 'Please report any damages directly to our customer service team within 5 days of receipt. Include photos of the damaged items and packaging. We will facilitate the claim process with the brand on your behalf.'
      }
    ]
  },
  {
    category: 'Registration',
    questions: [
      {
        q: 'Do I need a Tax ID to order?',
        a: 'Yes, as a wholesale agency, we sell strictly to the trade. A valid Resale Certificate/Tax ID is required to open an account.'
      },
      {
        q: 'How long does approval take?',
        a: 'Registration approval typically takes 1-2 business days. Once approved, you will receive an email with your MarketTime login credentials.'
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Header />

      <section className="pt-32 pb-20 px-4 bg-[#e8e6e1]">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-[#5c5c57] text-xs uppercase tracking-[0.3em] mb-4 block">Support</span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1c1c1a] mb-6">Frequently Asked Questions</h1>
          <p className="text-[#5c5c57] text-lg md:text-xl font-light leading-relaxed">
            Everything you need to know about partnering with Just Got 2 Have It!
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="font-serif text-3xl text-[#1c1c1a] mb-8 border-b border-[#1c1c1a] pb-4">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((item, index) => (
                  <details key={index} className="group bg-white border border-[#e8e6e1] rounded-sm open:ring-1 open:ring-[#1c1c1a]/10">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-medium text-[#1c1c1a] text-lg">{item.q}</span>
                      <span className="text-[#1c1c1a] transition-transform group-open:rotate-180">
                        <Plus className="w-5 h-5 group-open:hidden" />
                        <Minus className="w-5 h-5 hidden group-open:block" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-[#5c5c57] leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h3 className="font-serif text-2xl text-[#1c1c1a] mb-4">Still have questions?</h3>
          <p className="text-[#5c5c57] mb-8">Our team is happy to help you navigate the wholesale process.</p>
          <Button variant="luxury" className="bg-[#1c1c1a] text-white hover:bg-[#5c5c57]">
            Contact Support
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
