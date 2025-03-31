/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#4B5563',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'h1, h2, h3': {
              color: '#003840',
              fontWeight: '700',
            },
            a: {
              color: '#0D9488',
              '&:hover': {
                color: '#0F766E',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 