"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

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
            <Award className="w-4 h-4 stroke-[1.5]" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-medium text-[#756A63]">
              Excellence &amp; Credentials
            </span>
          </div>

          {/* Mandatory Trust Signal Statement */}
          <h2 className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#231B15] tracking-tight max-w-3xl leading-snug px-2">
            &ldquo;Trusted &amp; Regularly Commissioned at{" "}
            <span className="italic font-normal text-[#8B5A3C] underline decoration-[#DDD0BD] underline-offset-4 sm:underline-offset-8">
              Tribe Hotel, Bali
            </span>
            &rdquo;
          </h2>

          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-8 text-[11px] sm:text-xs tracking-wider uppercase text-[#756A63] font-light">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] shrink-0" />
              <span>Certified International Therapist</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] shrink-0" />
              <span>10+ Years Dedicated Practice</span>
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
