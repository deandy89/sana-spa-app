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
  title: "Sana Bali Spa — Holistic Healing & Private Massage Therapy",
  description:
    "Luxury private massage therapist and holistic wellness based in Bali. Commissioned at Tribe Hotel Bali. Bespoke in-villa and sanctuary treatments.",
  keywords: [
    "Sana Bali Spa",
    "Massage Therapist Bali",
    "Private Spa Bali",
    "In-villa Massage Bali",
    "Tribe Hotel Bali Spa",
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

