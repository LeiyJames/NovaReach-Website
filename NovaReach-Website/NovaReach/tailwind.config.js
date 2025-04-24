/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#8445ff',
          600: '#7928fa',
          700: '#6b15ea',
          800: '#5a11cb',
          900: '#4c0fa5',
          950: '#2e0879',
        },
        secondary: {
          50: '#eefbfd',
          100: '#d5f1f9',
          200: '#b1e5f3',
          300: '#7ed2e9',
          400: '#44b7d8',
          500: '#259bc0',
          600: '#1c7ca2',
          700: '#1a6584',
          800: '#1b546d',
          900: '#1b465e',
          950: '#0d2d3d',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffeed3',
          200: '#ffd9a5',
          300: '#ffbf6d',
          400: '#ff9d3a',
          500: '#ff7b12',
          600: '#f85c07',
          700: '#c73d08',
          800: '#a2330f',
          900: '#842d10',
          950: '#481504',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at 30% 20%, rgba(121, 40, 250, 0.3) 0%, rgba(121, 40, 250, 0) 35%), radial-gradient(circle at 80% 80%, rgba(37, 155, 192, 0.3) 0%, rgba(37, 155, 192, 0) 35%)',
        'gradient-primary': 'linear-gradient(135deg, #7928fa 0%, #259bc0 100%)',
      },
    },
  },
  plugins: [],
};