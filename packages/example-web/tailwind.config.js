const { theme } = require('@expo/styleguide/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@expo/styleguide/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: theme,
  },
  plugins: [],
};
