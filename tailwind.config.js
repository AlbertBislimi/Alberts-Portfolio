/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Legacy aliases (keep for any old components)
        accent: '#6366f1',
        accent2: '#8b5cf6',
        // Primary palette used throughout new components
        primary: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
        },
        // Dark backgrounds
        dark: {
          DEFAULT: '#0a0a0f',
          2: '#111118',
          3: '#1a1a25',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
