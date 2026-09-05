import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FAF8F5",
          100: "#F5F0E8",
          200: "#EBE3D5",
          300: "#DDD0BD",
          400: "#CDBAA1",
        },
        earth: {
          primary: "#231B15",
          secondary: "#3E2E26",
          terracotta: "#8B5A3C",
          clay: "#A57352",
          muted: "#756A63",
          light: "#B89B84",
        },
        cream: {
          base: "#FBF9F5",
          soft: "#F4EFE6",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".35em",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "pulse-subtle": "pulseSubtle 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        }
      }
    },
  },
  plugins: [],
};
export default config;

