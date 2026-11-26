/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f7f8f9',
          100: '#eceef1',
          200: '#d4d8de',
          300: '#aab2bc',
          400: '#7c8794',
          500: '#5a6573',
          600: '#454f5b',
          700: '#363e48',
          800: '#232930',
          900: '#161b20',
          950: '#0c0f12',
        },
        accent: {
          50: '#eef6fc',
          100: '#d8eaf8',
          200: '#b5d6f1',
          300: '#84bbe7',
          400: '#4c99da',
          500: '#2378c4',
          600: '#175fa3',
          700: '#144c84',
          800: '#15416e',
          900: '#16375b',
        },
        teal: {
          50: '#edf9f7',
          100: '#d2f0eb',
          200: '#a6e1d8',
          300: '#6ec9bd',
          400: '#3ead9f',
          500: '#249184',
          600: '#1b746b',
          700: '#185d57',
          800: '#174b47',
          900: '#173f3c',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-down': 'fadeDown 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-14px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};