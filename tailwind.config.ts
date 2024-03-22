import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
   
        extend: {
          colors: {
            'purple': '#3f3cbb',
             'bg':'var(--bg)',
            "softTextColor":"var(--softTextColor)",
            'icons':"var(--icons)",
            "loginBg":"var(--loginBg)",
            "textColor":"var(--textColor)",
            "light-blue":"var(--light-blue)",
            "light-purple":"var(--light-purple)",
            "light-pink":"var(--light-pink)",
            "light-green":"var(--light-green)",
            "red-btn":"var(--red-btn)",
            "iconDisable": "var(--iconDisable)",
            "input-bg": "var(--input-bg)",
            "input-bg2": "var(--input-bg2)",
          },
          screens: {
            'xxs':'320px',
            'xs': '480px',
            'sm': '640px',
           'md': '768px',
            'lg': '1024px',
           'xl': '1280px',
              '2xl': '1536px',
                }
    },
  },
  safelist: ['animate-[slide-right_1s_ease-in-out]', 'animate-[slide-right_1s_ease-in-out]'],
  plugins: [],
};
export default config;
