"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Feather, Home, Flower2, ShieldCheck } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const pillars = [
    {
      icon: Home,
      title: "In-Villa Sanctuary Setup",
      description:
        "We bring an ergonomic orthopedic massage table, crisp imported Egyptian cotton linen, and plush support pillows directly to your villa.",
    },
    {
      icon: Flower2,
      title: "Botanical Aromatherapy",
      description:
        "Cold-pressed virgin coconut base blended with pure Balinese essential oils: Jasmine sambac, Cempaka, Frangipani, and warming Ginger.",
    },
    {
      icon: Feather,
      title: "Soundscapes & Ambiance",
      description:
        "Carefully curated acoustic frequency soundscapes, subtle incense cleansing, and mindful breath alignment for deep restorative surrender.",
    },
    {
      icon: ShieldCheck,
      title: "Hotel-Standard Hygiene",
      description:
        "Strict sanitization protocols, single-use botanical sheets, and clean organic practices trusted by 5-star properties across the island.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-36 bg-[#FAF8F5] text-[#231B15] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8B5A3C] font-semibold">
            The Bespoke Experience
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#231B15]">
            Sanctuary Brought to Your Door
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#756A63] font-light leading-relaxed px-2">
            No need to navigate Bali’s traffic after your treatment. Experience the
            pinnacle of private relaxation in the peace of your private pool villa.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="p-5 sm:p-7 md:p-8 rounded-2xl bg-[#F5F0E8]/70 border border-[#EBE3D5] flex flex-col justify-between space-y-4 sm:space-y-6 hover:border-[#8B5A3C]/40 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF8F5] border border-[#DDD0BD] flex items-center justify-center text-[#8B5A3C] shrink-0">
                  <Icon strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-light text-[#231B15] mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#756A63] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full width luxury visual strip */}
        <div className="mt-12 sm:mt-16 md:mt-24 relative h-56 sm:h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop"
            alt="Warm tropical spa interior with incense and flower petals"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1C1612]/50 flex items-center justify-center p-4 sm:p-6 text-center">
            <div className="max-w-xl text-white space-y-2 sm:space-y-3">
              <p className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light italic">
                &ldquo;Where time slows down, and stillness begins.&rdquo;
              </p>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#DDD0BD] font-light">
                Available across Canggu, Seminyak, Pererenan &amp; Uluwatu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
