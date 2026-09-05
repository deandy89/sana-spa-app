"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Sparkles, ArrowRight } from "lucide-react";

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
    id: "balinese-flow",
    name: "Signature Balinese Intuitive Flow",
    subtitle: "Rhythmic Restoration & Tension Release",
    description:
      "A seamless fusion of gentle stretches, palm pressure, and rhythmic palm strokes using organic cold-pressed coconut oil infused with island frangipani.",
    durations: ["60 Minutes", "90 Minutes"],
    price: "From IDR 450K (~$30)",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue & Neuromuscular Release",
    subtitle: "Anatomical Target for Surf & Travel Fatigue",
    description:
      "Targeted firm pressure addressing deep muscle knots, chronic postural tightness, and travel fatigue with warm camphor & clove warming balm.",
    durations: ["60 Minutes", "90 Minutes"],
    price: "From IDR 520K (~$35)",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "warm-stone-herbal",
    name: "Agung Warm Stone & Herbal Compress",
    subtitle: "Volcanic Basalt & Steamed Botanical Poultice",
    description:
      "Polished volcanic basalt stones paired with warm muslin compresses filled with steamed ginger, galangal, and lemongrass to melt muscular rigidity.",
    durations: ["90 Minutes", "120 Minutes"],
    price: "From IDR 750K (~$50)",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "reflexology-crown",
    name: "Meridian Reflexology & Crown Release",
    subtitle: "Grounding Soles & Serene Mental Clarity",
    description:
      "Precision pressure on foot reflex zones combined with craniosacral neck release and therapeutic peppermint scalp treatment.",
    durations: ["60 Minutes"],
    price: "IDR 420K (~$28)",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
  },
];

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentId: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
}) => {
  return (
    <section id="treatments" className="py-16 sm:py-24 md:py-36 bg-[#F5F0E8] text-[#231B15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16 md:mb-24">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8B5A3C] font-semibold">
            Curated Therapies
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#231B15]">
            Signature Treatment Menu
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#756A63] font-light leading-relaxed px-2">
            Every therapy is adapted to your body’s unique daily rhythm. Hand-blended
            organic essential oils, heated stones, and professional portable spa
            equipment provided directly at your villa.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {TREATMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#DDD0BD]/60 hover:border-[#8B5A3C]/40 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1612]/75 via-[#1C1612]/20 to-transparent" />

                  {/* Top Left: Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#8B5A3C] text-white text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 sm:px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>Guest Favorite</span>
                    </div>
                  )}

                  {/* Top Right: Luxury Price Pill (Never collides with subtitle) */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#1C1612]/80 backdrop-blur-sm text-[#FAF8F5] text-xs sm:text-sm font-serif font-light px-3 py-1 rounded-full border border-white/10 shadow-md">
                    {item.price}
                  </div>

                  {/* Bottom: Subtitle with clear room */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[10px] sm:text-xs tracking-wider uppercase font-light text-[#DDD0BD] drop-shadow-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#231B15] group-hover:text-[#8B5A3C] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#756A63] font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
                    {item.durations.map((dur) => (
                      <span
                        key={dur}
                        className="inline-flex items-center space-x-1 text-[11px] sm:text-xs text-[#3E2E26] bg-[#EBE3D5]/50 px-2.5 sm:px-3 py-1 rounded-full border border-[#DDD0BD]/60 font-light"
                      >
                        <Clock className="w-3 h-3 text-[#8B5A3C]" />
                        <span>{dur}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-8 pt-0 mt-auto">
                <button
                  onClick={() => onSelectTreatment(item.id)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-[#8B5A3C] text-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-[#FAF8F5] transition-all duration-300 text-xs tracking-wider sm:tracking-[0.2em] uppercase font-medium group/btn"
                >
                  <span>Select &amp; Reserve</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
