/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#D9D9D9',
          100: '#EAD8C0',
          150: '#D1BB9E',
          200: '#A79277',
          250: '#795458',
          300: '#8C6A5D',
        },
      },
      fontFamily: {
        italiana: ['Italiana', 'sans-serif'],
      },
      backgroundImage: {
        library: "url('/assets/images/bg-1.jpeg')",
      },
    },
  },
  plugins: [],
};
