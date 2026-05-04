/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Sky palette
        sky: {
          950: '#030810',
          900: '#060d1a',
          800: '#0a1628',
          700: '#0d1f4a',
          600: '#112248',
          500: '#1a3060',
          400: '#4a80d4',
          300: '#7aaee8',
          200: '#c8d8f0',
          100: '#e8f0ff',
        },
        // Gold accent (kept for UI chrome)
        accent: {
          DEFAULT: '#c8a96e',
          light:   '#e2c99a',
          dark:    '#9c7d45',
        },
        // ink aliases → sky for backwards compat with existing class names
        ink: {
          950: '#030810',
          900: '#060d1a',
          800: '#0a1628',
          700: '#0d1f4a',
          600: '#4a6090',
          500: '#6080a8',
          400: '#8098c0',
          300: '#a0b4d8',
          200: '#c8d8f0',
          100: '#e8f0ff',
        },
      },
    },
  },
  plugins: [],
}
