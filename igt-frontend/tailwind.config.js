/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#02073E",
        secondary:"#0F2137",
        tirtary:"#EF9E48"
      }
    },
  },
  plugins: [],
}

