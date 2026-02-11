/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Update your content paths
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  // 2. ADD THIS PRESET (Vital for v4)
  presets: [require('nativewind/preset')],

  theme: {
    extend: {},
  },
  plugins: [],
};
