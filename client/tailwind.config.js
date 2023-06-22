/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D2125",
        secondary: "#3c85ea", 
        third: "#6d9bdb",
        fourth: "#4C4C4C",
        fifth: "#5d50c6",
        foot: "#232323",
        gray: "#666666"
        
      },
      backgroundImage: { 
        homeBanner1: "url('./src/assets/homeBanner/bg1.png')", 
        homeBanner2: "url('./src/assets/homeBanner/bg2.png')", 
        homeBanner3: "url('./src/assets/homeBanner/bg3.png')", 
        homeBanner4: "url('./src/assets/homeBanner/bg4.jpeg')", 
      },
    },
  },
  plugins: [require("daisyui")],
}