"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-36 bg-[#FAF8F5] text-[#231B15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Editorial Photo of Sana */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sana.jpg"
                alt="Sana Bali Spa - Certified Professional Massage Therapist"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 50vw"
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1612]/30 via-transparent to-transparent" />
            </div>

            {/* Editorial Badge (Mobile responsive: displayed cleanly below image or floating on desktop) */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-6 bg-[#231B15] text-[#FAF8F5] p-4 sm:p-6 rounded-xl shadow-xl max-w-[280px] sm:max-w-[240px] mx-auto sm:mx-0 border border-white/10 flex sm:block items-center sm:items-start space-x-3 sm:space-x-0">
              <Sparkles className="w-5 h-5 text-[#CDBAA1] mb-0 sm:mb-2 shrink-0" />
              <div>
                <p className="font-serif text-sm sm:text-lg font-light leading-snug">
                  Isandi Nurul Hasannah
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#DDD0BD] tracking-wider uppercase mt-0.5 sm:mt-1 font-sans">
                  Sana Bali Spa - Certified Professional Massage Therapist
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 pt-4 lg:pt-0"
          >
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8B5A3C] font-semibold">
                About The Practitioner
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#231B15] leading-[1.18] sm:leading-[1.15]">
                Intuitive Bodywork Rooted in <span className="italic">Balinese Wisdom</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-[#756A63] font-light leading-relaxed">
              Welcome. I am Sana, a Certified Professional Massage Therapist
              practicing in the heart of Bali. My therapy bridges ancient island
              healing traditions with contemporary deep-tissue anatomical precision.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#756A63] font-light leading-relaxed">
              Commissioned regularly at premier luxury accommodations such as
              <strong> Tribe Hotel Bali</strong>, I deliver an unhurried, deeply
              customized sanctuary experience directly to your private villa or suite.
              Every movement, breath, and botanical application is attuned to your
              nervous system.
            </p>

            {/* Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-[#EBE3D5]">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B5A3C] mt-0.5 shrink-0" />
                <span className="text-xs text-[#3E2E26] tracking-wide">
                  International CIBTAC &amp; Balinese Certified
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B5A3C] mt-0.5 shrink-0" />
                <span className="text-xs text-[#3E2E26] tracking-wide">
                  Customized Pressure &amp; Acupressure
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B5A3C] mt-0.5 shrink-0" />
                <span className="text-xs text-[#3E2E26] tracking-wide">
                  Organic Lemongrass, Frangipani &amp; Clove Oils
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B5A3C] mt-0.5 shrink-0" />
                <span className="text-xs text-[#3E2E26] tracking-wide">
                  Professional Portable Bed &amp; Linens Provided
                </span>
              </div>
            </div>

            {/* Signature Quote */}
            <div className="pt-2 sm:pt-4">
              <blockquote className="border-l-2 border-[#8B5A3C] pl-3.5 sm:pl-4 italic font-serif text-sm sm:text-base md:text-lg text-[#3E2E26]">
                &ldquo;True healing is not merely about relaxation; it is a conscious return to harmony within yourself.&rdquo;
              </blockquote>
              <p className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-[#A57352] mt-1.5 sm:mt-2 pl-3.5 sm:pl-4">
                — Sana, Lead Bodywork Therapist
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
