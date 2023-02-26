/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#03C75A',
          200: '#0AAE4F',
        },
        secondary: '#6B90DC',
        Gray: {
          100: '#F1F2F4',
          200: '#DEE0E3',
          300: '#999999',
          400: '#333333',
        },
      },
      fontFamily: {
        sans: ['Spoqa Han Sans Neo', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
