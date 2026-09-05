"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  durations: string[];
  price: string;
  image: string;
  popular?: boolean;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "balinese-massage",
    name: "Balinese Massage Treatment",
    subtitle: "Traditional Island Healing & Mindful Restoration",
    description:
      "A deeply restorative ritual uniting traditional Balinese long flowing strokes, gentle skin-rolling, acupressure points, and soothing palm pressure. Performed using warm, 100% organic cold-pressed virgin coconut oil infused with natural Balinese frangipani and herbal essences to release accumulated muscular tension, soothe the nervous system, and awaken your body's natural harmony.",
    durations: ["60 Minutes", "90 Minutes", "120 Minutes"],
    price: "From IDR 450K (~$30)",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    popular: true,
  },
];

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentId: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
}) => {
  const item = TREATMENTS[0];

  return (
    <section id="treatments" className="py-16 sm:py-24 md:py-36 bg-[#F5F0E8] text-[#231B15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8B5A3C] font-semibold">
            Signature Therapy
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#231B15]">
            Our Exclusive Treatment
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#756A63] font-light leading-relaxed px-2">
            A dedicated signature bodywork experience adapted to your body’s unique daily rhythm.
            Delivered directly to your villa, resort, or private residence anywhere in Bali.
          </p>
        </div>

        {/* Single Featured Treatment Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#DDD0BD]/80 hover:border-[#8B5A3C]/40 transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl"
          >
            <div>
              {/* Image */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1612]/80 via-[#1C1612]/25 to-transparent" />

                {/* Top Left: Popular Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 bg-[#8B5A3C] text-white text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>Signature Offering</span>
                </div>

                {/* Top Right: Luxury Price Pill */}
                <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 bg-[#1C1612]/85 backdrop-blur-md text-[#FAF8F5] text-xs sm:text-sm font-serif font-light px-3.5 py-1.5 rounded-full border border-white/10 shadow-md">
                  {item.price}
                </div>

                {/* Bottom: Subtitle */}
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-[11px] sm:text-xs tracking-widest uppercase font-light text-[#DDD0BD] drop-shadow-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-10 space-y-5 sm:space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#231B15] group-hover:text-[#8B5A3C] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8B5A3C] font-medium tracking-wide mt-1">
                    Complete In-Villa Therapy &bull; All Bali Areas
                  </p>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-[#756A63] font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#EBE3D5]">
                  <div className="flex items-center space-x-2.5 text-xs text-[#3E2E26]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5A3C] shrink-0" />
                    <span>Warm Organic Coconut &amp; Frangipani Essential Oil</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs text-[#3E2E26]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5A3C] shrink-0" />
                    <span>Customizable Pressure (Gentle to Deep Tissue)</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs text-[#3E2E26]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5A3C] shrink-0" />
                    <span>Professional Portable Massage Table &amp; Clean Linens</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs text-[#3E2E26]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5A3C] shrink-0" />
                    <span>Mindful Calming Soundscape &amp; Aromatherapy Ambiance</span>
                  </div>
                </div>

                {/* Duration options */}
                <div className="pt-2">
                  <span className="text-[10px] sm:text-xs font-sans tracking-widest uppercase text-[#756A63] block mb-2 font-medium">
                    Available Durations:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {item.durations.map((dur) => (
                      <span
                        key={dur}
                        className="inline-flex items-center space-x-1.5 text-xs text-[#3E2E26] bg-[#EBE3D5]/60 px-3.5 py-1.5 rounded-full border border-[#DDD0BD] font-light"
                      >
                        <Clock className="w-3.5 h-3.5 text-[#8B5A3C]" />
                        <span>{dur}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-6 sm:p-10 pt-0 mt-auto">
              <button
                onClick={() => onSelectTreatment(item.id)}
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-full bg-[#8B5A3C] hover:bg-[#6E4429] text-[#FAF8F5] transition-all duration-300 text-xs sm:text-sm tracking-wider sm:tracking-[0.2em] uppercase font-medium group/btn shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Reserve Balinese Massage Session</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
