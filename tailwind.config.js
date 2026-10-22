/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F6FA',
        surface: '#FFFFFF',
        ink: '#0E1726',
        muted: '#4F5B73',
        rule: '#D9DEE8',
        cobalt: { DEFAULT: '#2845F5', dark: '#1B31C4', tint: '#E8ECFF' },
        console: { DEFAULT: '#0B1220', line: '#1C2740', text: '#C9D3EA', dim: '#6B7894' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: { page: '1120px' },
    },
  },
  plugins: [],
};
