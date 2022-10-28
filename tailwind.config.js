/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    darkSelector: '.dark',
},
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },


      screens: {
        'vsm': '340',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    }
  },
  variants: {
    backgroundColor: [
  'dark',
  'dark-hover',
  'dark-group-hover',
  'dark-even',
  'dark-odd',
  'hover',
  'responsive'
],
borderColor: [
  'dark',
  'dark-focus',
  'dark-focus-within',
  'hover',
  'responsive'
],
textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
},
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/line-clamp'),
  ],
}
