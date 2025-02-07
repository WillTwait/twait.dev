/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Scan all files in app directory
  ],
  theme: {
    extend: {
      writingMode: {
        vertical: 'vertical-lr',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.writing-mode-vertical': {
          'writing-mode': 'vertical-lr',
        },
      });
    },
  ],
  darkMode: 'class', // This changes from 'media' (system preference) to 'class' (manual control)
};
