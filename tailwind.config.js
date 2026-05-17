/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'phoenix': {
          // Bold hot pink from logo
          50: '#FFF0F7',
          100: '#FFE0F0',
          200: '#FFC2E0',
          300: '#FF94CA',
          400: '#FF66B5',
          500: '#FF1493', // Main brand pink from logo
          600: '#E6007A',
          700: '#B30060',
          800: '#800047',
          900: '#4D002B',
        },
        'phoenix-dark': {
          900: '#0A0A0A',
          800: '#141414',
          700: '#1E1E1E',
          600: '#282828',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'], // Geometric sporty font
        heading: ['Orbitron', 'sans-serif'], // Futuristic font
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(255, 20, 147, 0.3)',
        'glow': '0 0 20px rgba(255, 20, 147, 0.4)',
        'glow-lg': '0 0 40px rgba(255, 20, 147, 0.5)',
      },
    },
  },
  plugins: [],
}
