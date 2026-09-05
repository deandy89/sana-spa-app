"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenReserve: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMenu,
  onOpenReserve,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1C1612]/85 backdrop-blur-md py-3 sm:py-4 text-[#FAF8F5] shadow-sm"
          : "bg-transparent py-4 sm:py-6 md:py-8 text-[#FAF8F5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Left: Thin hamburger icon */}
        <div className="flex items-center">
          <button
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="group flex items-center space-x-2 sm:space-x-3 p-1.5 sm:p-2 -ml-1 sm:-ml-2 text-[#FAF8F5] hover:text-[#CDBAA1] transition-colors focus:outline-none"
          >
            <Menu
              strokeWidth={1.2}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden md:inline-block text-xs uppercase tracking-[0.25em] font-light text-white/80 group-hover:text-[#CDBAA1] transition-colors">
              Menu
            </span>
          </button>
        </div>

        {/* Center: Brand Name (Responsive font and tracking to prevent mobile collision) */}
        <div className="text-center pointer-events-auto px-2">
          <a
            href="#"
            className="font-serif text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#FAF8F5] hover:text-[#CDBAA1] transition-colors whitespace-nowrap inline-block"
          >
            Sana Bali Spa
          </a>
        </div>

        {/* Right: Primary CTA (Pill-shaped "Reserve" button with mobile-friendly sizing) */}
        <div className="flex items-center">
          <button
            onClick={onOpenReserve}
            className="relative inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 bg-[#8B5A3C] hover:bg-[#6E4429] text-[#FAF8F5] shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Reserve
          </button>
        </div>
      </div>
    </header>
  );
};
