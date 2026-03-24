'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MessageSquare, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import conciergesDataRaw from '@/app/data/concierges.json';

interface Brand {
    name: string;
    logo: string;
    description: string;
}

interface Concierge {
    id: number;
    name: string;
    slug: string;
    photo: string;
    region: string;
    territory: string;
    email: string;
    phone: string;
    mobile: string;
    appointments_url: string;
    brands: Brand[];
}

const conciergesData = conciergesDataRaw as Concierge[];

export default function ConciergeDetailPage() {
    const { slug } = useParams();
    const router = useRouter();

    const conciergeIndex = conciergesData.findIndex(c => c.slug === slug);
    const concierge = conciergesData[conciergeIndex];

    if (!concierge) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f5f5f0]">
                <div className="text-center">
                    <h1 className="font-serif text-4xl mb-4">Concierge not found</h1>
                    <Link href="/concierges">
                        <Button variant="outline">Back to All Concierges</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const prevConcierge = conciergesData[conciergeIndex - 1] || conciergesData[conciergesData.length - 1];
    const nextConcierge = conciergesData[conciergeIndex + 1] || conciergesData[0];

    return (
        <main className="pt-32 pb-24 bg-[#f5f5f0]">
            <div className="container mx-auto px-4">
                {/* Navigation */}
                <div className="flex items-center justify-between mb-12 border-b border-[#e8e6e1] pb-6">
                    <Link href="/concierges" className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5c5c57] hover:text-[#1c1c1a] transition-colors group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        All Concierges
                    </Link>

                    <div className="flex items-center gap-6">
                        <Link href={`/concierges/${prevConcierge.slug}`} className="p-2 hover:bg-[#e8e6e1] rounded-full transition-colors">
                            <ChevronLeft className="w-5 h-5 text-[#1c1c1a]" />
                        </Link>
                        <Link href={`/concierges/${nextConcierge.slug}`} className="p-2 hover:bg-[#e8e6e1] rounded-full transition-colors">
                            <ChevronRight className="w-5 h-5 text-[#1c1c1a]" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Profile Photo */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="aspect-[4/5] relative overflow-hidden rounded-sm bg-[#e8e6e1] shadow-2xl shadow-[#1c1c1a]/10"
                        >
                            <Image
                                src={concierge.photo}
                                alt={concierge.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs uppercase tracking-[0.4em] text-[#8a8a85] font-semibold block mb-4"
                            >
                                {concierge.region} Territory
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="font-serif text-5xl md:text-7xl text-[#1c1c1a] mb-6"
                            >
                                {concierge.name}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl text-[#1c1c1a] font-light italic leading-relaxed"
                            >
                                {concierge.territory}
                            </motion.p>
                        </div>

                        {/* Contact Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-10 border-y border-[#e8e6e1]">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white border border-[#e8e6e1] flex items-center justify-center text-[#1c1c1a] transition-colors group-hover:bg-[#1c1c1a] group-hover:text-white">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-[#8a8a85] mb-1">Email</span>
                                        <a href={`mailto:${concierge.email}`} className="text-[#1c1c1a] hover:text-[#8a8a85] transition-colors">{concierge.email}</a>
                                    </div>
                                </div>
                                {concierge.phone && (
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-white border border-[#e8e6e1] flex items-center justify-center text-[#1c1c1a] transition-colors group-hover:bg-[#1c1c1a] group-hover:text-white">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-[#8a8a85] mb-1">Office</span>
                                            <a href={`tel:${concierge.phone}`} className="text-[#1c1c1a] hover:text-[#8a8a85] transition-colors">{concierge.phone}</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="space-y-6">
                                {concierge.mobile && (
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-white border border-[#e8e6e1] flex items-center justify-center text-[#1c1c1a] transition-colors group-hover:bg-[#1c1c1a] group-hover:text-white">
                                            <MessageSquare className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-[#8a8a85] mb-1">Mobile</span>
                                            <a href={`tel:${concierge.mobile}`} className="text-[#1c1c1a] hover:text-[#8a8a85] transition-colors">{concierge.mobile}</a>
                                        </div>
                                    </div>
                                )}
                                <div className="pt-2">
                                    <Link href={concierge.appointments_url} target="_blank">
                                        <Button variant="luxury" className="w-full sm:w-auto h-14 px-10">Request Appointment</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Brands */}
                        {concierge.brands.length > 0 && (
                            <div className="space-y-8">
                                <h2 className="font-serif text-3xl text-[#1c1c1a]">Brands Managed</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {concierge.brands.map((brand, i) => (
                                        <div key={i} className="bg-white p-6 rounded-sm border border-[#e8e6e1] hover:border-[#1c1c1a] transition-colors group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="relative w-16 h-16 grayscale group-hover:grayscale-0 transition-all duration-500">
                                                    <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
                                                </div>
                                                <h4 className="font-serif text-xl">{brand.name}</h4>
                                            </div>
                                            <p className="text-sm text-[#5c5c57] font-light">{brand.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
