/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        screenArea: {
          DEFAULT: '#ffffff',
          dark: '#424549',
        },
        mainButton: {
          DEFAULT: '#5eead4',
          dark: '#7289da',
        },
        secondaryButton: {
          DEFAULT: '#0f766e',
          dark: '#1e2124',
        },
        ellipseButton: {
          DEFAULT: '#d1d5db',
          dark: '#36393e',
        },
        background: {
          DEFAULT: '#f9fafb',
          dark: '#282b30',
        },
      },
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
