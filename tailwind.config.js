import flowbite from 'flowbite/plugin'
// const { nextui } = require("@nextui-org/react");
import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
    fontFamily:{
      'gorditas': ['Gorditas', 'sans-serif'],
      'sevillana': ['Sevillana', 'sans-serif'],
      'biorhyme': ['BioRhyme', 'sans-serif'],
      'lilitaone': ['Lilita One', 'sans-serif'],
    }
  },
  darkMode: "class",
  plugins: [nextui(), flowbite]
}

