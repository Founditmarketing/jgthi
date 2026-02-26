'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Upload, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';

export default function VendorSubmissions() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        productCategory: '',
        brandStory: '',
        currentDistribution: '',
        lookbookLink: '',
    });

    const totalSteps = 4;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        nextStep(); // Move to success step
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        exit: { opacity: 0, y: -40, transition: { duration: 0.4 } }
    };

    return (
        <main className="min-h-screen pt-32 pb-24 bg-[#1c1c1a] text-[#f5f5f0] flex items-center">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header Container */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs uppercase tracking-[0.4em] text-[#8a8a85] font-medium block mb-4"
                    >
                        Partnerships
                    </motion.span>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-serif text-5xl md:text-7xl leading-tight"
                        >
                            Brand <br />
                            <span className="italic font-light text-[#8a8a85]">Application.</span>
                        </motion.h1>

                        {/* Progress Indicator */}
                        {step < 4 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 hidden md:flex"
                            >
                                <span className="text-sm font-light text-[#8a8a85]">Step {step} of 3</span>
                                <div className="flex gap-2">
                                    {[1, 2, 3].map(i => (
                                        <div
                                            key={i}
                                            className={`h-px w-8 transition-colors duration-500 ${i <= step ? 'bg-[#f5f5f0]' : 'bg-[#5c5c57]'}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Form Container */}
                <div className="relative bg-white/5 border border-[#5c5c57]/30 p-8 md:p-16 rounded-sm backdrop-blur-sm overflow-hidden min-h-[500px]">
                    <AnimatePresence mode="wait">

                        {/* STEP 1: Company Discovery */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="font-serif text-3xl mb-2">Company Discovery</h2>
                                    <p className="text-[#8a8a85] font-light">Tell us about you and the brand you&apos;ve built.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8a8a85]">Brand Name</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border-b border-[#5c5c57] py-3 text-lg outline-none focus:border-[#f5f5f0] transition-colors"
                                            placeholder="Your Brand"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8a8a85]">Primary Contact</label>
                                        <input
                                            type="text"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border-b border-[#5c5c57] py-3 text-lg outline-none focus:border-[#f5f5f0] transition-colors"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8a8a85]">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border-b border-[#5c5c57] py-3 text-lg outline-none focus:border-[#f5f5f0] transition-colors"
                                            placeholder="jane@yourbrand.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8a8a85]">Website</label>
                                        <input
                                            type="url"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border-b border-[#5c5c57] py-3 text-lg outline-none focus:border-[#f5f5f0] transition-colors"
                                            placeholder="https://yourbrand.com"
                                        />
                                    </div>
                                </div>
                                <div className="pt-8 flex justify-end">
                                    <Button onClick={nextStep} className="bg-[#f5f5f0] text-[#1c1c1a] hover:bg-white group">
                                        Continue to Product <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Product & Story */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="font-serif text-3xl mb-2">Product & Positioning</h2>
                                    <p className="text-[#8a8a85] font-light">What makes your assortment world-class?</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8a8a85]">Primary Category</label>
                                        <select
                                            name="productCategory"
                                            value={formData.productCategory}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border-b border-[#5c5c57] py-3 text-lg outline-none focus:border-[#f5f5f0] transition-colors appearance-none"
                                        >
                                            <option value="" disabled className="bg-[#1c1c1a]">Select Category</option>
                                            <option value="Gourmet" className="bg-[#1c1c1a]">Gourmet & Specialty Food</option>
                                            <option value="Home Decor" className="bg-[#1c1c1a]">Home Decor & Accents</option>
                                            <option value="Bath & Body" className="bg-[#1c1c1a]">Bath, Body & Spa</option>
                                            <option value="Apparel" className="bg-[#1c1c1a]">Apparel & Fashion</option>
                                            <option value="Gift" className="bg-[#1c1c1a]">General Gift & Novelty</option>
                                            <option value="Other" className="bg-[#1c1c1a]">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8a8a85]">Brand Story & Aesthetic</label>
                                        <textarea
                                            name="brandStory"
                                            value={formData.brandStory}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full bg-transparent border-b border-[#5c5c57] py-3 text-lg outline-none focus:border-[#f5f5f0] transition-colors resize-none"
                                            placeholder="Briefly describe your inspiration, origin, and target demographic..."
                                        />
                                    </div>
                                </div>
                                <div className="pt-8 flex justify-between">
                                    <Button variant="ghost" onClick={prevStep} className="text-[#8a8a85] hover:text-[#f5f5f0] hover:bg-white/5">
                                        <ArrowLeft className="mr-2 w-4 h-4" /> Back
                                    </Button>
                                    <Button onClick={nextStep} className="bg-[#f5f5f0] text-[#1c1c1a] hover:bg-white group">
                                        Continue to Collateral <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Collateral & Submission */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="font-serif text-3xl mb-2">Digital Collateral</h2>
                                    <p className="text-[#8a8a85] font-light">Share your catalogs, lookbooks, and line sheets.</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8a8a85]">Digital Lookbook / Catalog URL</label>
                                        <input
                                            type="url"
                                            name="lookbookLink"
                                            value={formData.lookbookLink}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border-b border-[#5c5c57] py-3 text-lg outline-none focus:border-[#f5f5f0] transition-colors"
                                            placeholder="Link to Dropbox, Drive, Brandsboom, etc."
                                        />
                                    </div>

                                    <div className="bg-[#5c5c57]/10 border border-[#5c5c57]/30 border-dashed rounded-sm p-8 text-center flex flex-col items-center justify-center">
                                        <Upload className="w-8 h-8 text-[#8a8a85] mb-4" />
                                        <p className="text-sm text-[#f5f5f0] mb-1">Prefer to upload a PDF directly?</p>
                                        <p className="text-xs text-[#8a8a85] mb-6">Max file size 25MB.</p>
                                        <Button variant="outline" className="border-[#5c5c57] text-[#f5f5f0] hover:bg-white/5 disabled:opacity-50">
                                            Choose File
                                        </Button>
                                    </div>
                                </div>
                                <div className="pt-8 flex justify-between">
                                    <Button variant="ghost" onClick={prevStep} className="text-[#8a8a85] hover:text-[#f5f5f0] hover:bg-white/5" disabled={isSubmitting}>
                                        <ArrowLeft className="mr-2 w-4 h-4" /> Back
                                    </Button>
                                    <Button
                                        onClick={handleSubmit}
                                        className="bg-[#f5f5f0] text-[#1c1c1a] hover:bg-white"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: Success */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                className="text-center py-16 flex flex-col items-center justify-center h-full"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                                    className="w-20 h-20 bg-[#f5f5f0]/10 rounded-full flex items-center justify-center mb-8"
                                >
                                    <CheckCircle2 className="w-10 h-10 text-[#f5f5f0]" />
                                </motion.div>
                                <h2 className="font-serif text-4xl mb-4">Application Received.</h2>
                                <p className="text-[#8a8a85] font-light max-w-lg mx-auto leading-relaxed mb-8">
                                    Thank you for your interest in partnering with Just Got 2 Have It! Our acquisitions team will review your collateral and reach out if there is a complementary fit for our portfolio.
                                </p>
                                <Button className="bg-[#f5f5f0] text-[#1c1c1a] hover:bg-white" onClick={() => window.location.href = '/'}>
                                    Return to Home
                                </Button>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>

            {/* Background Texture elements */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
                <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#5c5c57]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#f5f5f0]/5 blur-[100px] rounded-full" />
            </div>
        </main>
    );
}
