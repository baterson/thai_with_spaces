/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        sarabun: ['Sarabun', 'sans-serif'],
        chakraPetch: ['Chakra+Petch', 'sans-serif'],
        taviraj: ['Taviraj', 'sans-serif'],
        niramit: ['Niramit', 'sans-serif'],
        anthiti: ['Athiti', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
