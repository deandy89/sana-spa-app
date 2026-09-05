"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";

export const TrustSignal: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF8F5] border-b border-[#EBE3D5]/80 py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center space-y-3 sm:space-y-4"
        >
          {/* Subtle icon & badge */}
          <div className="flex items-center space-x-2 text-[#8B5A3C]">
            <MapPin className="w-4 h-4 stroke-[1.5]" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-medium text-[#756A63]">
              Island-Wide In-Villa Spa Service &bull; Bali
            </span>
          </div>

          {/* Core Service Statement: Available across all Bali */}
          <h2 className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#231B15] tracking-tight max-w-4xl leading-snug px-2">
            &ldquo;Bespoke Private Bodywork &mdash;{" "}
            <span className="italic font-normal text-[#8B5A3C] underline decoration-[#DDD0BD] underline-offset-4 sm:underline-offset-8">
              We Travel Directly to You Anywhere in Bali
            </span>
            &rdquo;
          </h2>

          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-6 lg:gap-8 text-[11px] sm:text-xs tracking-wider uppercase text-[#756A63] font-light">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] shrink-0" />
              <span>Seminyak, Canggu, Ubud, Uluwatu &amp; Beyond</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] shrink-0" />
              <span>Complete Massage Table &amp; Linens Provided</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] shrink-0" />
              <span>10+ Years Professional Experience</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] shrink-0" />
              <span>100% Organic Cold-Pressed Botanicals</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
