js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#92400E',
        secondary: '#B45309',
        beige: '#FEF3C7',
        'light-beige': '#FEFCE8',
      },
    },
  },
  plugins: [],
}