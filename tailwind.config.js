import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#070b14',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
          950: '#0f172a',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-down': 'fadeDown 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        html: {
          scrollBehavior: 'smooth',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        body: {
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          backgroundColor: '#f8fafc',
          color: '#1e293b',
          overflowX: 'hidden',
          transitionProperty: 'background-color, color',
          transitionDuration: '250ms',
        },
        '.dark body': {
          backgroundColor: '#070b14',
          color: '#f1f5f9',
        },
        'h1, h2, h3, h4': {
          fontFamily: 'Fraunces, Georgia, serif',
          letterSpacing: '-0.02em',
          lineHeight: '1.18',
        },
      });

      addComponents({
        '.container-page': {
          width: '100%',
          maxWidth: '72rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.75rem',
          paddingRight: '1.75rem',
          '@screen sm': {
            paddingLeft: '2.75rem',
            paddingRight: '2.75rem',
          },
          '@screen lg': {
            paddingLeft: '3.5rem',
            paddingRight: '3.5rem',
          },
        },
        '.btn-primary': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.875rem 1.5rem',
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          lineHeight: '1.25rem',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          boxShadow: '0 1px 2px 0 rgb(15 23 42 / 0.08)',
          transition: 'all 200ms ease',
          '&:hover': {
            backgroundColor: '#1d4ed8',
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 16px -4px rgb(29 78 216 / 0.28)',
          },
          '.dark &': {
            backgroundColor: '#2563eb',
            color: '#ffffff',
          },
          '.dark &:hover': {
            backgroundColor: '#3b82f6',
          },
        },
        '.btn-secondary': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.875rem 1.5rem',
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          lineHeight: '1.25rem',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          border: '1px solid #cbd5e1',
          boxShadow: '0 1px 2px 0 rgb(15 23 42 / 0.04)',
          transition: 'all 200ms ease',
          '&:hover': {
            borderColor: '#2563eb',
            color: '#1d4ed8',
            backgroundColor: '#eff6ff',
          },
          '.dark &': {
            backgroundColor: '#0f172a',
            color: '#f1f5f9',
            borderColor: '#1e293b',
          },
          '.dark &:hover': {
            borderColor: '#60a5fa',
            color: '#93c5fd',
            backgroundColor: '#1e293b',
          },
        },
        '.btn-ghost': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.875rem 1.25rem',
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          lineHeight: '1.25rem',
          color: '#334155',
          transition: 'all 200ms ease',
          '&:hover': {
            backgroundColor: '#f1f5f9',
            color: '#0f172a',
          },
          '.dark &': {
            color: '#cbd5e1',
          },
          '.dark &:hover': {
            backgroundColor: '#1e293b',
            color: '#ffffff',
          },
        },
        '.card': {
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '1rem',
          padding: '1.75rem',
          boxShadow: '0 1px 3px 0 rgb(15 23 42 / 0.04)',
          transition: 'all 250ms ease',
          '@screen sm': {
            padding: '2rem',
          },
          '.dark &': {
            backgroundColor: '#0f172a',
            borderColor: '#1e293b',
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.35)',
          },
        },
        '.card-hover': {
          '&:hover': {
            borderColor: '#93c5fd',
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 24px -8px rgb(15 23 42 / 0.08)',
          },
          '.dark &:hover': {
            borderColor: '#1d4ed8',
            boxShadow: '0 12px 24px -8px rgb(0 0 0 / 0.55)',
          },
        },
        '.section-label': {
          fontSize: '0.75rem',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: '600',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#1d4ed8',
          '.dark &': {
            color: '#60a5fa',
          },
        },
        '.input-field': {
          width: '100%',
          padding: '0.75rem 1rem',
          backgroundColor: '#ffffff',
          border: '1px solid #cbd5e1',
          borderRadius: '0.75rem',
          color: '#0f172a',
          fontSize: '0.875rem',
          transition: 'all 200ms ease',
          '&:focus': {
            outline: 'none',
            borderColor: '#2563eb',
            boxShadow: '0 0 0 3px rgb(37 99 235 / 0.15)',
          },
          '.dark &': {
            backgroundColor: '#0f172a',
            borderColor: '#334155',
            color: '#f8fafc',
          },
          '.dark &:focus': {
            borderColor: '#60a5fa',
            boxShadow: '0 0 0 3px rgb(96 165 250 / 0.15)',
          },
        },
        '.input-error': {
          borderColor: '#f87171',
          '&:focus': {
            borderColor: '#ef4444',
            boxShadow: '0 0 0 3px rgb(239 68 68 / 0.15)',
          },
        },
        '.grid-bg': {
          backgroundImage:
            'linear-gradient(to right, rgb(15 23 42 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.035) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          '.dark &': {
            backgroundImage:
              'linear-gradient(to right, rgb(255 255 255 / 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.03) 1px, transparent 1px)',
          },
        },
        '.editorial-accent': {
          backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #0d9488 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          '.dark &': {
            backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #2dd4bf 100%)',
          },
        },
      });
    }),
  ],
};
