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
        primary: {
          50: '#f5f3f0',
          100: '#e8e4dd',
          200: '#d1c9bb',
          300: '#b9ad99',
          400: '#a29277',
          500: '#8b7755',
          600: '#6f5f44',
          700: '#534733',
          800: '#382f22',
          900: '#1c1811',
        },
        accent: {
          50: '#fef6ee',
          100: '#fce9d4',
          200: '#f9d0a8',
          300: '#f5b271',
          400: '#f08938',
          500: '#ec6b18',
          600: '#dd530d',
          700: '#b73e0d',
          800: '#923212',
          900: '#772b12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
