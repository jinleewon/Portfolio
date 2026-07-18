/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#2563eb',
          cyan: '#00d2ff',
          dark: '#0a0e27',
          card: '#12183a',
          border: '#1e295d',
        }
      }
    },
  },
  plugins: [],
}
