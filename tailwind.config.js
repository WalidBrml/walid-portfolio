/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070811',
        surface: '#101321',
        brand: { blue: '#5B8CFF', purple: '#A855F7', cyan: '#36DDF5' },
        ink: { DEFAULT: '#F5F6FF', soft: '#A1A9C5' },
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'] },
      boxShadow: {
        glow: '0 0 32px rgba(91,140,255,.35)',
        'glow-purple': '0 0 40px rgba(168,85,247,.35)',
      },
    },
  },
  plugins: [],
}
