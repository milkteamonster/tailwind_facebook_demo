/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  mode: 'jit',
  darkMode: 'class', //media是依照電腦原本的設定 or false, class手動自己決定
  content: [],
  theme: {
    extend: {
      colors:{
        'primary': '#4f3cc9',
        'primary-dark': '#4232aa',
        'secondary': '#fff'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

