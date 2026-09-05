"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18120E] text-[#DDD0BD] py-10 sm:py-14 border-t border-white/10 text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg sm:text-xl text-[#FAF8F5] tracking-widest uppercase font-light">
            Sana Bali Spa
          </p>
          <p className="text-[10px] sm:text-[11px] text-[#A57352] uppercase tracking-[0.2em] mt-0.5 sm:mt-1">
            Certified Professional Massage Therapist &bull; Bali
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#CDBAA1]">
          <a href="#hero" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About Me
          </a>
          <a href="#treatments" className="hover:text-white transition-colors">
            Treatments
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </div>

        <div className="text-center md:text-right text-white/40 text-[9px] sm:text-[10px] tracking-wider">
          <p>&copy; {new Date().getFullYear()} Sana Bali Spa. All Rights Reserved.</p>
          <p className="mt-0.5">Trusted &amp; Commissioned at Tribe Hotel, Bali.</p>
        </div>
      </div>
    </footer>
  );
};
