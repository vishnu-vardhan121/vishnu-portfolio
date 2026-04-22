/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0fdfa',
          400: '#2dd4bf', 
          900: '#134e4a',
        },
        dark: {
          900: '#0a0a0a',
          800: '#171717',
          700: '#262626',
        }
      }
    },
  },
  plugins: [],
}
