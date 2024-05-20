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
      theme: {
        screens: {
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
}

