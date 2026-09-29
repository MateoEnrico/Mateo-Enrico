/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F6F6F2',
        ink: {
          DEFAULT: '#0C100F',
          900: '#0C100F',
          800: '#161B1A',
          700: '#232A28',
          600: '#3A4441',
          500: '#5B6562',
          400: '#8A938F',
          300: '#B9BFBC',
          200: '#DEE1DC',
          100: '#ECEDE8',
        },
        brand: {
          50: '#E8F7F0',
          100: '#CDEEDF',
          200: '#9ADDBF',
          300: '#5EC99C',
          400: '#2FB57E',
          500: '#12996A',
          600: '#0C7C56',
          700: '#0A6346',
          800: '#084D37',
          900: '#063A2A',
        },
        lime: '#C6F36B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '72rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
