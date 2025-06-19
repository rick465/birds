/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // 或 'media'
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
      colors: {
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
      },
      screens: {
        'xs': '360px',  // 自訂最小斷點
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem'
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'Noto Sans', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}

