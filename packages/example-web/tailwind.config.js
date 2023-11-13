const expoTheme = require('@expo/styleguide/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './common/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/**/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@expo/styleguide/dist/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@expo/styleguide-search-ui/dist/**/*.{js,ts}',
  ],
  ...expoTheme,
};
