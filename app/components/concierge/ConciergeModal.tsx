'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';

type Step = 'welcome' | 'role' | 'details' | 'preferences' | 'success';

export default function ConciergeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('welcome');
  const [formData, setFormData] = useState({
    role: '',
    storeName: '',
    zipCode: '',
    aesthetics: [] as string[]
  });

  // Auto-open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only open if not already interacted with (mock logic)
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = (nextStep: Step) => {
    setStep(nextStep);
  };

  const toggleAesthetic = (style: string) => {
    setFormData(prev => ({
      ...prev,
      aesthetics: prev.aesthetics.includes(style)
        ? prev.aesthetics.filter(a => a !== style)
        : [...prev.aesthetics, style]
    }));
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#1c1c1a] text-[#f5f5f0] rounded-full shadow-2xl flex items-center justify-center border border-[#f5f5f0]/20"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#f5f5f0] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative border border-[#e8e6e1]"
            >
              {/* Header */}
              <div className="bg-[#1c1c1a] p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-[#f5f5f0] font-serif text-2xl">Concierge</h3>
                  <p className="text-[#e8e6e1]/60 text-xs uppercase tracking-widest">Digital Showroom Assistant</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[#e8e6e1]/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 min-h-[400px] flex flex-col">
                <AnimatePresence mode="wait">
                  {step === 'welcome' && (
                    <motion.div
                      key="welcome"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1 flex flex-col justify-center space-y-6"
                    >
                      <p className="text-[#1c1c1a] text-lg leading-relaxed">
                        Welcome to Just Got 2 Have It! I can help you navigate our showroom, check territory availability, or fast-track your registration.
                      </p>
                      <p className="text-[#5c5c57]">First, are you a new or existing retailer?</p>
                      <div className="grid grid-cols-2 gap-4">
                        <Button 
                          variant="outline" 
                          className="h-auto py-4 flex flex-col gap-2 border-[#1c1c1a]/20 hover:bg-[#1c1c1a] hover:text-[#f5f5f0]"
                          onClick={() => {
                            setFormData({...formData, role: 'new'});
                            handleNext('details');
                          }}
                        >
                          <span className="font-serif text-xl">New</span>
                          <span className="text-[10px] uppercase tracking-widest opacity-60">I want to register</span>
                        </Button>
                        <Button 
                          variant="outline"
                          className="h-auto py-4 flex flex-col gap-2 border-[#1c1c1a]/20 hover:bg-[#1c1c1a] hover:text-[#f5f5f0]"
                          onClick={() => {
                            setFormData({...formData, role: 'existing'});
                            handleNext('success'); // Skip for demo
                          }}
                        >
                          <span className="font-serif text-xl">Existing</span>
                          <span className="text-[10px] uppercase tracking-widest opacity-60">I have an account</span>
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 'details' && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1 flex flex-col space-y-6"
                    >
                      <h4 className="font-serif text-2xl text-[#1c1c1a]">Tell us about your store</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-[#5c5c57] mb-2">Store Name</label>
                          <input 
                            type="text" 
                            className="w-full bg-white border border-[#e8e6e1] p-3 rounded-sm focus:outline-none focus:border-[#1c1c1a] transition-colors"
                            placeholder="e.g. The Coastal Cottage"
                            value={formData.storeName}
                            onChange={(e) => setFormData({...formData, storeName: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-[#5c5c57] mb-2">Zip Code</label>
                          <input 
                            type="text" 
                            className="w-full bg-white border border-[#e8e6e1] p-3 rounded-sm focus:outline-none focus:border-[#1c1c1a] transition-colors"
                            placeholder="e.g. 90210"
                            value={formData.zipCode}
                            onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                          />
                          <p className="text-[10px] text-[#5c5c57] mt-2">* We use this to check territory availability for exclusive lines.</p>
                        </div>
                      </div>
                      <div className="mt-auto flex justify-end">
                        <Button onClick={() => handleNext('preferences')}>
                          Next Step <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 'preferences' && (
                    <motion.div
                      key="preferences"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1 flex flex-col space-y-6"
                    >
                      <h4 className="font-serif text-2xl text-[#1c1c1a]">What is your aesthetic?</h4>
                      <p className="text-[#5c5c57] text-sm">Select all that apply. This helps us curate your initial lookbook.</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {['Coastal', 'Farmhouse', 'Modern', 'Boho', 'Industrial', 'Traditional', 'Glam', 'Kids'].map((style) => (
                          <button
                            key={style}
                            onClick={() => toggleAesthetic(style)}
                            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                              formData.aesthetics.includes(style)
                                ? 'bg-[#1c1c1a] text-white border-[#1c1c1a]'
                                : 'bg-white text-[#5c5c57] border-[#e8e6e1] hover:border-[#1c1c1a]'
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>

                      <div className="mt-auto flex justify-end">
                        <Button onClick={() => handleNext('success')}>
                          Finish <Check className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex-1 flex flex-col justify-center items-center text-center space-y-6"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif text-3xl text-[#1c1c1a]">You&apos;re all set!</h4>
                      <p className="text-[#5c5c57] max-w-xs mx-auto">
                        {formData.role === 'new' 
                          ? "We've started your registration profile. Redirecting you to MarketTime to complete your tax ID verification."
                          : "Welcome back! We've unlocked the latest seasonal catalogs for your territory."
                        }
                      </p>
                      <Button variant="luxury" className="w-full mt-8">
                        {formData.role === 'new' ? 'Complete Registration' : 'Browse Catalogs'}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
