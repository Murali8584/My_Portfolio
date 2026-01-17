/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d4af37',
          accent: '#ffd700',
          light: '#f4e4bc',
        },
        muted: '#a8a8a8',
        danger: '#e74c3c',
        warning: '#ffb84d',
        success: '#27ae60',
      },
      backgroundColor: {
        base: 'var(--bg-base)',
        secondary: 'var(--bg-secondary)',
      },
      borderRadius: {
        '1': '4px',
        '2': '0.8rem',
        '3': '1.2rem',
        '4': '2rem',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        'border': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(212, 175, 55, 0.2)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.15)',
      },
    },
  },
  plugins: [],
  darkMode: ['selector', '[data-theme="dark"]'],
}

