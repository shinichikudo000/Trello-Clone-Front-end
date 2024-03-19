import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'lg': '990px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'navShadow': '0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15)',
      },
      colors: {
        'blueButton': '#0066FF',
        'blueButtonHover': '#0747A6'
      }
    },
  },
  plugins: [],
};
export default config;
