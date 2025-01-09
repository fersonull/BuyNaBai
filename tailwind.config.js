/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto']
      },
      colors: {
        eye: '#F0F0F0'
      },
      fontSize: {
        xxs: '0.635rem'
      }
    },
  },
  plugins: [],
}

