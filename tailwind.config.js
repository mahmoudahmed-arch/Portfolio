/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050816',
          900: '#0a0f1e',
          800: '#111a30',
          700: '#1a2542',
        },
        electric: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#2563eb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(56, 189, 248, 0.45)',
        'glow-violet': '0 0 40px -8px rgba(139, 92, 246, 0.45)',
        card: '0 20px 60px -20px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s ease-out infinite',
        scan: 'scan 3.2s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-24px, 20px) scale(0.95)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(56,189,248,0.5)' },
          '100%': { boxShadow: '0 0 0 14px rgba(56,189,248,0)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-10px)', opacity: '0.7' },
          '50%': { transform: 'translateY(70px)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
      },
    },
  },
  plugins: [],
};
