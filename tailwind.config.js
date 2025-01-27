/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Scan all files in app directory
  ],
  theme: {
    extend: {}, // Extend default theme
  },
  darkMode: 'class', // This changes from 'media' (system preference) to 'class' (manual control)
};
