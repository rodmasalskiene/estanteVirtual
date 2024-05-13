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
          350: '#503C3C',
          400: '#3E3232',
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
