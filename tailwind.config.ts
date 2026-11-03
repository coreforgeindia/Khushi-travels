import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1a365d",
          "primary-dark": "#1a365d",
          "primary-light": "#1a365d",
          gold: "#f59e0b",
          "gold-dark": "#d97706",
          white: "#FFFFFF",
          black: "#111111",
          ivory: "#F7F7FB",
          "light-blue": "#E8E8F4",
          slate: "#55556B",
          navy: "#1a365d",
          "navy-dark": "#1a365d",
          "navy-light": "#1a365d",
          amber: "#f59e0b",
          "amber-dark": "#d97706",
          blue: "#1a365d",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "sans-serif"],
      },
      fontSize: {
        // Fluid typography matching desktop 48-60px / mobile 32-38px
        display: ["clamp(2rem, 1.5rem + 2.5vw, 3.75rem)", { lineHeight: "1.08" }],
        // H1: Desktop 40-48px, Mobile 30-34px
        h1: ["clamp(1.875rem, 1.5rem + 1.8vw, 3rem)", { lineHeight: "1.15" }],
        // H2: Desktop 32-36px, Mobile 25-29px
        h2: ["clamp(1.5625rem, 1.35rem + 1vw, 2.25rem)", { lineHeight: "1.22" }],
        // H3: Desktop 20-24px, Mobile 18-20px
        h3: ["clamp(1.125rem, 1.05rem + 0.4vw, 1.5rem)", { lineHeight: "1.3" }],
        // Body: Desktop 16-17px, Mobile 14-16px
        body: ["clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)", { lineHeight: "1.6" }],
        // Caption / Small: Desktop 13-14px, Mobile 12-13px
        sm: ["clamp(0.75rem, 0.72rem + 0.15vw, 0.875rem)", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
};

export default config;
