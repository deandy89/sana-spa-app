"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FullScreenMenu } from "@/components/FullScreenMenu";
import { HeroSection } from "@/components/HeroSection";
import { TrustSignal } from "@/components/TrustSignal";
import { AboutSection } from "@/components/AboutSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<
    string | undefined
  >(undefined);

  const handleOpenReserve = (treatmentId?: string) => {
    setSelectedTreatmentId(treatmentId);
    setIsReserveModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FAF8F5] text-[#231B15] relative selection:bg-[#8B5A3C] selection:text-white">
      {/* Global Transparent Navbar */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenReserve={() => handleOpenReserve()}
      />

      {/* Full-Screen Overlay Hamburger Menu (Home, About Me, Contact Us) */}
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenReserve={() => handleOpenReserve()}
      />

      {/* Hero Section (Above the fold - 100vh / 100svh) */}
      <HeroSection
        onOpenReserve={() => handleOpenReserve()}
        onExploreClick={() => handleNavigate("trust-signal")}
      />

      {/* Mandatory Trust Signal (Immediately below hero upon scroll) */}
      <div id="trust-signal">
        <TrustSignal />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Treatments & Therapies Menu */}
      <TreatmentsSection
        onSelectTreatment={(treatmentId) => handleOpenReserve(treatmentId)}
      />

      {/* The In-Villa & Sanctuary Experience */}
      <ExperienceSection />

      {/* Guest Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* Contact & Booking Overview */}
      <ContactSection onOpenReserve={() => handleOpenReserve()} />

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
        selectedTreatmentId={selectedTreatmentId}
      />
    </main>
  );
}
