import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFCDD2',
          DEFAULT: '#F44336',
          dark: '#D32F2F',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
