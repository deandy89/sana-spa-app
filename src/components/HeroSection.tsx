"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onOpenReserve: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReserve,
  onExploreClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[580px] sm:min-h-[640px] md:min-h-[700px] flex flex-col justify-between items-center text-center overflow-hidden select-none"
    >
      {/* Background Visual: Full-bleed high-res atmospheric Bali spa photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2600&auto=format&fit=crop"
          alt="Serene luxury spa sanctuary Bali"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-pulse-subtle transition-transform duration-1000 ease-out"
        />
        {/* Dark & warm earth overlay for optimal editorial text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#18120E]/75 via-[#1F1713]/60 to-[#150F0C]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1A130F]/40 to-[#0F0B09]/75" />
      </div>

      {/* Top spacer for navbar */}
      <div className="w-full pt-20 sm:pt-24 md:pt-32 z-10" />

      {/* Center Editorial Typography (H1) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3 sm:space-y-4 md:space-y-6"
        >
          <span className="inline-block text-[10px] sm:text-xs md:text-sm font-sans tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#DDD0BD] font-light">
            Private Bodywork &bull; Bali, Indonesia
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-[#FAF8F5] leading-[1.12] sm:leading-[1.08] tracking-tight">
            The Sacred Art of <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E8D7C3]">Balinese Healing</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-base md:text-lg text-[#DDD0BD]/90 font-light leading-relaxed tracking-wide pt-1 sm:pt-2 px-2">
            A deeply restorative, intuitive touch designed to release accumulated
            tension and awaken your body’s natural vitality. Private in-villa
            sanctuary treatments across Bali.
          </p>
        </motion.div>
      </div>

      {/* Bottom Center: Secondary CTA - Circular Outline Button with slow-fill hover effect */}
      <div className="relative z-10 w-full pb-4 sm:pb-8 md:pb-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <button
            onClick={onOpenReserve}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Reserve your therapy session"
            className="group relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border border-[#DDD0BD]/60 hover:border-[#FAF8F5] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 shadow-2xl backdrop-blur-[2px]"
          >
            {/* Smooth liquid fill animation from bottom to top */}
            <span
              className={`absolute inset-0 bg-[#8B5A3C] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full ${
                isHovered
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-full opacity-0 scale-90"
              }`}
            />

            {/* Inner Content */}
            <span className="relative z-10 font-serif text-xs sm:text-base md:text-lg tracking-[0.18em] sm:tracking-[0.2em] uppercase font-light text-[#FAF8F5] transition-colors duration-300">
              Reserve
            </span>
            <span className="relative z-10 text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-sans text-[#DDD0BD] group-hover:text-white/90 transition-colors duration-300 mt-0.5 sm:mt-1">
              Private Session
            </span>
          </button>
        </motion.div>

        {/* Subtle scroll down indicator */}
        <button
          onClick={onExploreClick}
          aria-label="Scroll to discover"
          className="mt-3 sm:mt-5 flex items-center space-x-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#DDD0BD]/60 hover:text-[#FAF8F5] transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
