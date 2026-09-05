"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Check,
  Send,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { TREATMENTS } from "./TreatmentsSection";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatmentId?: string;
}

const DURATION_OPTIONS = [
  {
    label: "1 Jam",
    sub: "60 Menit",
    price: "Rp 250.000",
    value: "1 Jam (60 Menit) — Rp 250.000",
  },
  {
    label: "90 Menit",
    sub: "90 Menit",
    price: "Rp 350.000",
    value: "90 Menit — Rp 350.000",
  },
  {
    label: "2 Jam",
    sub: "120 Menit",
    price: "Rp 450.000",
    value: "2 Jam (120 Menit) — Rp 450.000",
  },
];

const RECOMMENDED_SLOTS = [
  { label: "09:00 - 11:00", name: "Pagi / Morning Refresh", startHour: 9, startMin: 0 },
  { label: "11:30 - 13:30", name: "Siang / Midday Relaxation", startHour: 11, startMin: 30 },
  { label: "14:00 - 16:00", name: "Sore / Afternoon Restorative", startHour: 14, startMin: 0 },
  { label: "16:30 - 18:30", name: "Sunset Unwind", startHour: 16, startMin: 30 },
  { label: "19:00 - 21:00", name: "Malam / Evening Sleep Prep", startHour: 19, startMin: 0 },
];

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  selectedTreatmentId,
}) => {
  // Helper to get local date formatted YYYY-MM-DD
  const getTodayDateString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayStr = useMemo(() => getTodayDateString(), []);

  const [treatment, setTreatment] = useState(
    selectedTreatmentId || TREATMENTS[0].id
  );
  const [duration, setDuration] = useState(DURATION_OPTIONS[0].value);
  const [date, setDate] = useState(todayStr);

  // Time mode: "slot" (recommended) or "custom" (user defines exact hour)
  const [timeMode, setTimeMode] = useState<"slot" | "custom">("slot");
  const [timeSlot, setTimeSlot] = useState(RECOMMENDED_SLOTS[0].label);
  const [customTime, setCustomTime] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [validationError, setValidationError] = useState("");

  // Sync when selectedTreatmentId prop changes
  useEffect(() => {
    if (selectedTreatmentId) {
      setTreatment(selectedTreatmentId);
    }
  }, [selectedTreatmentId]);

  // Set default date when opened
  useEffect(() => {
    if (isOpen && !date) {
      setDate(getTodayDateString());
    }
  }, [isOpen, date]);

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

  // Real-time time validation
  useEffect(() => {
    if (!date) return;

    const now = new Date();
    const currentTotalMinutes = now.getHours() * 60 + now.getMinutes();
    const isToday = date === todayStr;

    if (date < todayStr) {
      setValidationError(
        "Tanggal yang Anda pilih sudah lewat. Silakan pilih hari ini atau tanggal mendatang."
      );
      return;
    }

    if (isToday) {
      if (timeMode === "slot") {
        const selectedSlotObj = RECOMMENDED_SLOTS.find(
          (s) => s.label === timeSlot
        );
        if (selectedSlotObj) {
          const slotStartMinutes =
            selectedSlotObj.startHour * 60 + selectedSlotObj.startMin;
          if (currentTotalMinutes >= slotStartMinutes) {
            setValidationError(
              `Slot ${selectedSlotObj.label} sudah lewat untuk hari ini. Silakan pilih slot berikutnya atau tentukan jam sendiri.`
            );
            return;
          }
        }
      } else if (timeMode === "custom") {
        if (customTime) {
          const [h, m] = customTime.split(":").map(Number);
          const chosenMinutes = h * 60 + m;
          if (chosenMinutes <= currentTotalMinutes) {
            setValidationError(
              `Jam ${customTime} sudah lewat untuk hari ini. Silakan pilih jam setelah waktu saat ini atau pilih tanggal besok.`
            );
            return;
          }
        }
      }
    }

    // Operating hours notice for custom time (09:00 - 21:00)
    if (timeMode === "custom" && customTime) {
      const [h] = customTime.split(":").map(Number);
      if (h < 8 || h > 21) {
        setValidationError(
          "Jam operasional terapis adalah 09:00 - 21:00 WITA. Pesanan di luar rentang jam ini akan dikonfirmasi ketersediaannya terlebih dahulu."
        );
        return;
      }
    }

    setValidationError("");
  }, [date, timeMode, timeSlot, customTime, todayStr]);

  const activeTreatmentObj =
    TREATMENTS.find((t) => t.id === treatment) || TREATMENTS[0];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (validationError && validationError.includes("sudah lewat")) {
      alert(validationError);
      return;
    }

    if (timeMode === "custom" && !customTime) {
      setValidationError("Silakan masukkan jam yang Anda inginkan.");
      return;
    }

    const therapyName = activeTreatmentObj.name;
    const finalTime =
      timeMode === "custom"
        ? `${customTime} WITA (Jam Pilihan Tamu)`
        : `${timeSlot} WITA`;

    const message = `Hello Sana Bali Spa! 🌺%0A%0AI would like to reserve a private in-villa therapy session:%0A• *Treatment:* ${therapyName}%0A• *Duration & Rate:* ${duration}%0A• *Date:* ${
      date || "Today"
    }%0A• *Time:* ${finalTime}%0A• *Guest Name:* ${name}%0A• *WhatsApp:* ${phone}%0A• *Location / Villa:* ${
      location || "To be provided"
    }%0A• *Special Notes:* ${notes || "None"}%0A%0APlease confirm your availability. Thank you!`;

    // Direct WhatsApp to 083876667303
    const whatsappUrl = `https://wa.me/6283876667303?text=${message}`;
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
            className="relative w-full max-w-2xl bg-[#FAF8F5] text-[#231B15] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#DDD0BD] overflow-hidden sm:my-auto max-h-[92dvh] sm:max-h-[94vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="bg-[#231B15] text-[#FAF8F5] px-5 sm:px-8 pt-4 pb-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 shrink-0">
              {/* Mobile Drawer Handle */}
              <div className="w-10 h-1 rounded-full bg-white/30 mx-auto mb-3 sm:hidden" />

              <div className="flex items-center justify-between w-full">
                <div>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-light text-[#CDBAA1]">
                    Sana Bali Spa &bull; In-Villa Service (0838-7666-7303)
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

            {/* Form Content */}
            <form
              onSubmit={handleWhatsAppBooking}
              className="p-5 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto"
            >
              {/* 1. Selected Treatment (Single Exclusive Treatment) */}
              <div className="space-y-2">
                <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C] flex items-center justify-between">
                  <span>1. Signature Therapy</span>
                  <span className="text-[10px] text-[#756A63] font-normal">
                    In-Villa Private Service
                  </span>
                </label>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#231B15] text-[#FAF8F5] border border-[#231B15] shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-medium">
                      {activeTreatmentObj.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-[#DDD0BD] font-light mt-0.5">
                      {activeTreatmentObj.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs sm:text-sm font-serif text-[#CDBAA1]">
                      {activeTreatmentObj.price}
                    </span>
                    <Check className="w-4 h-4 text-[#CDBAA1]" />
                  </div>
                </div>
              </div>

              {/* 2. Select Duration & Official Pricing */}
              <div className="space-y-2">
                <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C]">
                  2. Pilih Durasi &amp; Tarif Layanan
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {DURATION_OPTIONS.map((dur) => {
                    const isSelected = duration === dur.value;
                    return (
                      <button
                        type="button"
                        key={dur.value}
                        onClick={() => setDuration(dur.value)}
                        className={`py-3 px-2 sm:px-3 rounded-2xl text-center transition-all border flex flex-col justify-center items-center ${
                          isSelected
                            ? "bg-[#8B5A3C] text-white border-[#8B5A3C] shadow-md scale-[1.02]"
                            : "bg-[#F5F0E8]/60 text-[#3E2E26] border-[#DDD0BD] hover:border-[#8B5A3C]"
                        }`}
                      >
                        <span className="text-xs font-bold block">{dur.label}</span>
                        <span
                          className={`text-[10px] block ${
                            isSelected ? "text-white/80" : "text-[#756A63]"
                          }`}
                        >
                          {dur.sub}
                        </span>
                        <span
                          className={`font-serif text-xs sm:text-sm font-medium mt-1 ${
                            isSelected ? "text-white" : "text-[#8B5A3C]"
                          }`}
                        >
                          {dur.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Date & Time Selection with Custom Time + Validation */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C] flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Pilih Tanggal</span>
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                    />
                  </div>

                  {/* Mode Selector: Slot vs Custom */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C] flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Pilihan Waktu</span>
                      </span>
                    </label>

                    {/* Tabs for Slot or Custom Time */}
                    <div className="grid grid-cols-2 gap-1.5 bg-[#EBE3D5]/60 p-1 rounded-xl border border-[#DDD0BD]">
                      <button
                        type="button"
                        onClick={() => setTimeMode("slot")}
                        className={`py-1.5 px-2 text-[11px] rounded-lg font-medium transition-all ${
                          timeMode === "slot"
                            ? "bg-[#231B15] text-[#FAF8F5] shadow-sm"
                            : "text-[#756A63] hover:text-[#231B15]"
                        }`}
                      >
                        Slot Rekomendasi
                      </button>
                      <button
                        type="button"
                        onClick={() => setTimeMode("custom")}
                        className={`py-1.5 px-2 text-[11px] rounded-lg font-medium transition-all ${
                          timeMode === "custom"
                            ? "bg-[#231B15] text-[#FAF8F5] shadow-sm"
                            : "text-[#756A63] hover:text-[#231B15]"
                        }`}
                      >
                        Tentukan Jam Sendiri
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub-inputs depending on mode */}
                {timeMode === "slot" ? (
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-[#756A63]">
                      Pilih Slot Waktu Rekomendasi:
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                    >
                      {RECOMMENDED_SLOTS.map((slot) => {
                        const now = new Date();
                        const curMin = now.getHours() * 60 + now.getMinutes();
                        const slotStartMin = slot.startHour * 60 + slot.startMin;
                        const isPast = date === todayStr && curMin >= slotStartMin;

                        return (
                          <option
                            key={slot.label}
                            value={slot.label}
                            disabled={isPast}
                          >
                            {slot.label} — {slot.name} {isPast ? "(Sudah Lewat)" : ""}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                ) : (
                  <div className="space-y-1.5 bg-[#F5F0E8]/40 p-3 rounded-2xl border border-[#DDD0BD]">
                    <label className="text-[10px] uppercase tracking-wider text-[#756A63] block">
                      Tentukan Jam Kustom Anda (WITA):
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="time"
                        value={customTime}
                        onChange={(e) => setCustomTime(e.target.value)}
                        placeholder="14:30"
                        className="w-full bg-white border border-[#DDD0BD] rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                      />
                      <span className="text-xs text-[#756A63] whitespace-nowrap font-medium">
                        WITA (Bali)
                      </span>
                    </div>
                    <p className="text-[10px] text-[#756A63] italic">
                      Contoh: 10:15, 15:30, atau 20:00. Jam operasional 09:00 - 21:00 WITA.
                    </p>
                  </div>
                )}

                {/* Validation Error Banner (e.g. Booking in the past) */}
                {validationError && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-[#FDF2F2] border border-[#F8B4B4] rounded-xl text-[#9B1C1C] text-xs flex items-start space-x-2 shadow-sm"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#E02424]" />
                    <p className="leading-snug">{validationError}</p>
                  </motion.div>
                )}
              </div>

              {/* 4. Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C]">
                    Nama Tamu / Guest Name *
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

                <div className="space-y-1.5">
                  <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C]">
                    Nomor WhatsApp Tamu *
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

              {/* 5. Villa / Hotel Location */}
              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C] flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Nama Villa / Hotel &amp; Area di Bali</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Villa di Canggu, Seminyak, Resort Ubud, Uluwatu, dll."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                />
              </div>

              {/* 6. Notes */}
              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5A3C]">
                  Permintaan Khusus / Focus Area
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Fokus bahu & leher kaku, tekanan kuat, alergi tertentu..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#F5F0E8]/60 border border-[#DDD0BD] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-xs text-[#231B15] focus:outline-none focus:border-[#8B5A3C]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 pb-1">
                <button
                  type="submit"
                  disabled={Boolean(validationError && validationError.includes("sudah lewat"))}
                  className={`w-full py-3.5 sm:py-4 rounded-2xl flex items-center justify-center space-x-2.5 text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all shadow-lg ${
                    validationError && validationError.includes("sudah lewat")
                      ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                      : "bg-[#8B5A3C] hover:bg-[#6E4429] text-white hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Reservasi ke WhatsApp</span>
                </button>
                <p className="text-[10px] sm:text-[11px] text-center text-[#756A63] mt-2 font-light">
                  Langsung terhubung ke WhatsApp resmi Sana Bali Spa (+62 838 7666 7303).
                  Tanpa uang muka untuk konfirmasi awal.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
