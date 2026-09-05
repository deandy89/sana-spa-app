"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenReserve: () => void;
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenReserve,
}) => {
  // Prevent body scroll when menu is open
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

  const menuItems = [
    { label: "Home", target: "hero" },
    { label: "About Me", target: "about" },
    { label: "Contact Us", target: "contact" },
  ];

  const handleItemClick = (target: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(target);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#1C1612] text-[#F5F0E8] p-6 sm:p-10 md:p-16 lg:p-24 overflow-y-auto"
        >
          {/* Header row in overlay */}
          <div className="flex items-center justify-between shrink-0">
            <span className="font-serif text-lg sm:text-xl tracking-widest uppercase font-light text-[#CDBAA1]">
              Sana Bali Spa
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2.5 text-[#F5F0E8] hover:text-[#CDBAA1] transition-colors rounded-full border border-white/10 hover:border-white/30"
            >
              <X strokeWidth={1.2} className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Main vertical menu items: Exactly Home, About Me, Contact Us with large Serif */}
          <div className="flex flex-col justify-center my-8 sm:my-auto space-y-5 sm:space-y-8 md:space-y-10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  onClick={() => handleItemClick(item.target)}
                  className="group flex items-baseline space-x-4 sm:space-x-6 text-left"
                >
                  <span className="text-[11px] sm:text-xs md:text-sm font-sans tracking-widest text-[#A57352]">
                    0{index + 1}
                  </span>
                  <span className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#FAF8F5] group-hover:text-[#CDBAA1] group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-all duration-300">
                    {item.label}
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Footer info in overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 text-xs md:text-sm text-[#B89B84] shrink-0"
          >
            <div>
              <p className="font-light tracking-wider">
                Bali, Indonesia • In-Villa &amp; Private Sanctuary
              </p>
              <p className="text-white/40 mt-0.5">Daily 09:00 - 21:00 WITA</p>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => {
                  onClose();
                  onOpenReserve();
                }}
                className="flex items-center space-x-2 text-[#FAF8F5] hover:text-[#CDBAA1] transition-colors uppercase tracking-widest font-medium text-xs"
              >
                <span>Book a Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
