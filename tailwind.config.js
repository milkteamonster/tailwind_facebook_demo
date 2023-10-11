/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html','./src/**/*.js'],
  mode: 'jit',
  darkMode: 'class', //media是依照電腦原本的設定 or false, class手動自己決定
  content: [],
  theme: {
    extend: {
      spacing: {
        'main-span': '72px'
      },
      colors: {
        'fb-bg': '#18191a',
        'fb-header': '#242526',
        'fb-input': '#3a3b3c',
        'fb-popover': '#3e4042',
        'fb-active': '#323436',
        'fb-card': '#242526',
        'fb': '#2e89ff'
      }
    },
  },
  plugins: [],
}

