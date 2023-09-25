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
    extend: {},
    fontFamily:{
      'gorditas': ['Gorditas', 'sans-serif'],
      'sevillana': ['Sevillana', 'sans-serif'],
      
    }
  },
  darkMode: "class",
  plugins: [nextui(), flowbite]
}

