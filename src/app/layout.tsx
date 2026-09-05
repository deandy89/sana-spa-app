import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sana Bali Spa — Luxury In-Villa & On-Call Massage Therapy Bali",
  description:
    "Luxury private on-call massage therapist and holistic wellness across Bali. We travel directly to your villa, resort, or residence anywhere in Bali with complete spa equipment.",
  keywords: [
    "Sana Bali Spa",
    "Massage Therapist Bali",
    "In-villa Massage Bali",
    "On-call Spa Bali",
    "Mobile Spa Bali Island Wide",
    "Bali Villa Massage Service",
    "Holistic Wellness Bali",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#FAF8F5] text-[#221B16] font-sans antialiased selection:bg-[#8B5A3C] selection:text-white">
        {children}
      </body>
    </html>
  );
}

