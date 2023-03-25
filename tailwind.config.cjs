/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        bg: '0',
        default: '1',
        overlay: '2',
        modal: '3',
      },

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
  plugins: [require('@tailwindcss/line-clamp')],
}
