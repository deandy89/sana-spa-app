"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

interface ContactSectionProps {
  onOpenReserve: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenReserve,
}) => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-36 bg-[#231B15] text-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#CDBAA1] font-light">
                Private Inquiries &amp; Bookings
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#FAF8F5]">
                Let Calm Wash Over You
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#DDD0BD]/80 font-light leading-relaxed max-w-xl">
                We bring an authentic, restorative spa sanctuary directly to your
                doorstep anywhere on the island of Bali. Whether you are staying in
                a secluded villa or a luxury resort, we travel to you.
              </p>
            </div>

            {/* Direct contact items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-[#CDBAA1] shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-sans text-white/50">
                    WhatsApp Direct
                  </h4>
                  <a
                    href="https://wa.me/6283876667303?text=Hello%20Sana%20Bali%20Spa,%20I%20would%20like%20to%20inquire%20about%20a%20private%20in-villa%20treatment."
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif text-base sm:text-lg text-[#FAF8F5] hover:text-[#CDBAA1] transition-colors"
                  >
                    +62 838 7666 7303
                  </a>
                  <p className="text-[10px] sm:text-[11px] text-[#DDD0BD]/60 mt-0.5">
                    Instant reply &amp; booking (0838-7666-7303)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-[#CDBAA1] shrink-0">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-sans text-white/50">
                    Instagram
                  </h4>
                  <a
                    href="https://www.instagram.com/sanaspahomeservice/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif text-base sm:text-lg text-[#FAF8F5] hover:text-[#CDBAA1] transition-colors"
                  >
                    @sanaspahomeservice
                  </a>
                  <p className="text-[10px] sm:text-[11px] text-[#DDD0BD]/60 mt-0.5">
                    Rituals &amp; Island Life
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-[#CDBAA1] shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-sans text-white/50">
                    Service Areas
                  </h4>
                  <p className="font-serif text-base sm:text-lg text-[#FAF8F5]">
                    Island-Wide Across Bali
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#DDD0BD]/60 mt-0.5">
                    Canggu, Seminyak, Ubud, Uluwatu, Sanur &amp; Beyond
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-[#CDBAA1] shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-sans text-white/50">
                    Operating Hours
                  </h4>
                  <p className="font-serif text-base sm:text-lg text-[#FAF8F5]">
                    09:00 — 21:00 WITA
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#DDD0BD]/60 mt-0.5">
                    Monday to Sunday
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#1C1612] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-5 sm:space-y-6"
          >
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-light text-[#CDBAA1]">
                Island-Wide In-Villa Spa Service
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#FAF8F5]">
                Ready for Pure Stillness?
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD0BD]/80 font-light leading-relaxed">
                We travel directly to your villa anywhere in Bali. Click below to
                select your treatment and confirm your booking via WhatsApp instantly.
              </p>
            </div>

            <button
              onClick={onOpenReserve}
              className="w-full bg-[#8B5A3C] hover:bg-[#A57352] text-white py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Reserve In-Villa Session
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
