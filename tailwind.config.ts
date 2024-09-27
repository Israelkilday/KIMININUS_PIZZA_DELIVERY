import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        bangers: [`var(--font-bangers)`, "sans-serif"],
        quicksand: [`var(--font-quicksand)`, "sans-serif"],
        robotoCondensed: [`var(--font-robotoCondensed)`, "sans-serif"],
      },
      colors: {
        primary: "#d1411e",
        secondary: "#ffa323",
        tertiary: "#331812",
        black: "#231714",
        orange: "#FF7A30",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "translateY(100%)" },
          "100%": {
            transform: "translateY(0) rotate(360deg)",
          },
        },
      },
      animation: {
        rotation: "rotation .8s ease-in-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), "tailwindcss-animate"],
};
export default config;
