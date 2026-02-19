/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0C2E5E', // Deep Navy
          800: '#081F3E', // Darker Navy
          500: '#B08412', // Gold
          50: '#F7F7F7',  // Soft background
        },
        text: {
          main: '#1F2937',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 4px 14px 0 rgba(0, 0, 0, 0.15)',
        'luxury-hover': '0 6px 20px 0 rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
