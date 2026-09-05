"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, Check, Send } from "lucide-react";
import { TREATMENTS } from "./TreatmentsSection";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatmentId?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  selectedTreatmentId,
}) => {
  const [treatment, setTreatment] = useState(
    selectedTreatmentId || TREATMENTS[0].id
  );
  const [duration, setDuration] = useState("90 Minutes");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("14:00 - 16:00 (Afternoon Restorative)");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  // Sync when selectedTreatmentId prop changes
  useEffect(() => {
    if (selectedTreatmentId) {
      setTreatment(selectedTreatmentId);
    }
  }, [selectedTreatmentId]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const activeTreatmentObj =
    TREATMENTS.find((t) => t.id === treatment) || TREATMENTS[0];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const therapyName = activeTreatmentObj.name;
    const message = `Hello Sana Bali Spa! 🌺%0A%0AI would like to reserve a private therapy session:%0A• *Treatment:* ${therapyName}%0A• *Duration:* ${duration}%0A• *Preferred Date:* ${
      date || "As soon as available"
    }%0A• *Preferred Time:* ${timeSlot}%0A• *Guest Name:* ${name}%0A• *Location / Villa:* ${
      location || "To be provided"
    }%0A• *Special Notes:* ${notes || "None"}%0A%0APlease let me know your availability. Thank you!`;

    // Direct WhatsApp URI
    const whatsappUrl = `https://wa.me/6281239887766?text=${message}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#120E0B]/75 backdrop-blur-sm"
          />

          {/* Modal Card (Mobile Bottom Sheet + Desktop Modal) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-[#FAF8F5] text-[#231B15] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#DDD0BD] overflow-hidden sm:my-auto max-h-[90dvh] sm:max-h-[92vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="bg-[#231B15] text-[#FAF8F5] px-5 sm:px-8 pt-4 pb-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 shrink-0">
              {/* Mobile Drawer Handle Indicator */}
              <div className="w-10 h-1 rounded-full bg-white/30 mx-auto mb-3 sm:hidden" />

              <div className="flex items-center justify-between w-full">
                <div>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-light text-[#CDBAA1]">
                    Sana Bali Spa &bull; In-Villa &amp; Sanctuary
                  </span>
                  <h3 className="font-serif text-xl sm:text-3xl font-light">
                    Reserve Your Treatment
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close booking modal"
                  className="p-1.5 sm:p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                </button>
              </div>
            </div>

            {/* Form Content (Scrollable with mobile-safe inputs) */}
            <form
              onSubmit={handleWhatsAppBooking}
              className="p-5 sm:p-8 space-y-4 sm:space-y-6 overflow-y-auto"
            >
              {/* Select Treatment */}
              <div className="space-y-2">
                <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C]">
                  1. Select Signature Therapy
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {TREATMENTS.map((t) => {
                    const isSelected = t.id === treatment;
                    return (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setTreatment(t.id)}
                        className={`p-3 sm:p-3.5 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#231B15] text-[#FAF8F5] border-[#231B15] shadow-md"
                            : "bg-[#F5F0E8]/50 text-[#3E2E26] border-[#DDD0BD] hover:border-[#8B5A3C]"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="font-serif text-xs sm:text-sm font-medium">
                            {t.name}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#CDBAA1] shrink-0" />}
                        </div>
                        <span
                          className={`text-[10px] ${
                            isSelected ? "text-[#DDD0BD]" : "text-[#756A63]"
                          }`}
                        >
                          {t.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Select Duration */}
              <div className="space-y-2">
                <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C]">
                  2. Session Duration
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: "60 Min", full: "60 Minutes" },
                    { label: "90 Min", full: "90 Minutes" },
                    { label: "120 Min", full: "120 Minutes" },
                  ].map((dur) => (
                    <button
                      type="button"
                      key={dur.full}
                      onClick={() => setDuration(dur.full)}
                      className={`py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        duration === dur.full
                          ? "bg-[#8B5A3C] text-white border-[#8B5A3C] shadow-sm"
                          : "bg-[#F5F0E8]/50 text-[#3E2E26] border-[#DDD0BD] hover:border-[#8B5A3C]"
                      }`}
                    >
                      <span className="sm:hidden">{dur.label}</span>
                      <span className="hidden sm:inline">{dur.full}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C] flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C] flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                  >
                    <option value="09:00 - 11:00 (Morning Refresh)">
                      09:00 - 11:00 (Morning Refresh)
                    </option>
                    <option value="11:30 - 13:30 (Midday Relaxation)">
                      11:30 - 13:30 (Midday Relaxation)
                    </option>
                    <option value="14:00 - 16:00 (Afternoon Restorative)">
                      14:00 - 16:00 (Afternoon Restorative)
                    </option>
                    <option value="16:30 - 18:30 (Sunset Unwind)">
                      16:30 - 18:30 (Sunset Unwind)
                    </option>
                    <option value="19:00 - 21:00 (Evening Sleep Prep)">
                      19:00 - 21:00 (Evening Sleep Prep)
                    </option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C]">
                    Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica Miller"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C]">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +62 812-xxxx-xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                  />
                </div>
              </div>

              {/* Villa / Hotel Location */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C] flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Villa Name &amp; Area in Bali</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Villa Samuan, Seminyak or Tribe Hotel Kuta"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                />
              </div>

              {/* Notes */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C]">
                  Special Focus / Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Focus on neck and shoulders, firm pressure, allergy..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 pb-1">
                <button
                  type="submit"
                  className="w-full bg-[#8B5A3C] hover:bg-[#6E4429] text-white py-3.5 sm:py-4 rounded-2xl flex items-center justify-center space-x-2.5 text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm via WhatsApp (Instant Booking)</span>
                </button>
                <p className="text-[10px] sm:text-[11px] text-center text-[#756A63] mt-2 font-light">
                  No advance payment needed for initial confirmation. You will
                  connect directly with Sana on WhatsApp.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
