/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'primary':'#f3c614',
        'secondary':'#353535'
      },
      height: {
        '80':'20rem'
      }
    },
  },
  plugins: [],
}
