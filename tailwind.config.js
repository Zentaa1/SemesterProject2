/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./src/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A161B',
        'secondary': '#37A4BD',
        'customWhite': '#F0F2F3',
        'customGray': '#D9D9D9'
      },
      fontFamily: {
        'sans': ['"PT Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

