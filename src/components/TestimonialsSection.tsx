"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      quote:
        "Sana is without doubt the most gifted bodywork therapist I’ve experienced in Bali. Having her set up her sanctuary directly in our villa in Seminyak transformed our vacation.",
      author: "Elena Rostova",
      origin: "Zurich, Switzerland",
      stay: "Private Villa Guest, Seminyak",
    },
    {
      quote:
        "After a week of intense surfing in Uluwatu, the Deep Tissue & Warm Basalt stone treatment was miraculous. The pressure was firm yet deeply relaxing. Highly recommended by Tribe Hotel concierge.",
      author: "Marcus & Liam",
      origin: "Sydney, Australia",
      stay: "Tribe Hotel Bali Guests",
    },
    {
      quote:
        "Her intuitive understanding of muscle knots and energy flow is rare. The organic essential oils smelled like heaven. It was the highlight of our honeymoon in Ubud.",
      author: "Claire Chen",
      origin: "Singapore",
      stay: "Private Sanctuary Appointment",
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-36 bg-[#FAF8F5] text-[#231B15] border-t border-[#EBE3D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8B5A3C] font-semibold">
            Guest Testimonials
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#231B15]">
            Words from the Journey
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#756A63] font-light leading-relaxed px-2">
            Every session is conducted with devotion, confidentiality, and deep
            reverence for your privacy.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#F5F0E8]/60 p-5 sm:p-7 md:p-8 rounded-2xl border border-[#DDD0BD]/60 flex flex-col justify-between space-y-4 sm:space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex text-[#8B5A3C] space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#8B5A3C] stroke-[#8B5A3C]"
                    />
                  ))}
                </div>
                <p className="font-serif text-sm sm:text-base md:text-lg font-light text-[#231B15] leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-[#DDD0BD]/60">
                <h4 className="font-serif text-base sm:text-lg font-medium text-[#231B15]">
                  {rev.author}
                </h4>
                <p className="text-xs text-[#756A63] font-light">{rev.origin}</p>
                <span className="inline-block mt-0.5 text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8B5A3C] font-sans">
                  {rev.stay}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
