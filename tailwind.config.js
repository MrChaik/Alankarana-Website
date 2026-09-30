/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EE',
        ivory: '#F3ECDD',
        card: '#FFFDF8',
        ink: '#2B1A1D',
        muted: '#7B6B68',
        line: '#E7DCC9',
        burgundy: { DEFAULT: '#6B1E2E', dark: '#4E1421', light: '#8A2F42' },
        gold: { DEFAULT: '#A98550', soft: '#D9C7A2' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: { sm: '2px', DEFAULT: '4px', md: '6px', lg: '10px' },
      boxShadow: {
        soft: '0 1px 2px rgba(43,26,29,0.05), 0 6px 20px -8px rgba(43,26,29,0.10)',
        lift: '0 2px 4px rgba(43,26,29,0.06), 0 14px 32px -12px rgba(43,26,29,0.16)',
      },
      maxWidth: { page: '1240px' },
    },
  },
  plugins: [],
}
