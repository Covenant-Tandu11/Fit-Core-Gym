/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },

  plugins: [],
}