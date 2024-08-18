import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000309",
          200: "#000618",
          300: "#000309",
          400: "#000309",
          500: "#000309",
          600: "#000309",
          700: "#000309",
        },
      },
    },
  },
  plugins: [],
};
export default config;
