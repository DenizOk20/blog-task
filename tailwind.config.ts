import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        plus: ['var(--font-jakarta-sans)'],
        worksans:['var(--font-work-sans)'],
        sourceSerif: ['var(--font-source-serif)']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text:{
          primary: "#3B3C4A",
          secondary: "#696A75",
          head: "#181A2A",
          initial: "#FFFFFF",
          dark: "#FFFFFF",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
