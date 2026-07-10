/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: {
          DEFAULT: '#fff7ec',
          50: '#fffdf9',
          100: '#fff7ec',
          200: '#fdecd6',
        },
        'grey-brown': {
          DEFAULT: '#442f2a',
          light: '#6b4c45',
          dark: '#2d1f1b',
        },
        blush: {
          DEFAULT: '#f5cbd7',
          light: '#fae4ec',
          dark: '#e8a8bc',
        },
        noir: {
          DEFAULT: '#070d0d',
          light: '#0f1a1a',
          medium: '#1a2626',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(ellipse at 70% 50%, rgba(245,203,215,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(68,47,42,0.08) 0%, transparent 50%)',
        'noir-pattern': 'radial-gradient(ellipse at 30% 50%, rgba(245,203,215,0.06) 0%, transparent 60%)',
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(68, 47, 42, 0.08)',
        'medium': '0 8px 40px rgba(68, 47, 42, 0.12)',
        'strong': '0 16px 64px rgba(68, 47, 42, 0.18)',
        'blush': '0 8px 32px rgba(245, 203, 215, 0.4)',
        'card-hover': '0 20px 60px rgba(68, 47, 42, 0.15)',
      },
    },
  },
  plugins: [],
}
