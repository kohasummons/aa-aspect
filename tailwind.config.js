module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black': '#000000',
        '[#003840]': '#003840',
        'teal-700': '#0f766e',
      },
      textColor: {
        'white': '#ffffff',
        'black': '#000000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 