/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/**/*.{html,js}',
  "./views/*.ejs"],
  theme: {
    fontFamily: {
      source: [ 'Source Sans Pro', 'sans-serif'],
      poppins: [ 'Poppins', 'sans-serif'],
      lato: [ 'Lato', 'sans-serif'],
      lora: [ 'Lora', 'serif'],
    },
    extend: {
      colors:{
        'mainred': 'rgb(199, 0, 33)',
        'maingrey': 'rgb(32, 32, 70)',
        'maingrey7': ' rgba(229, 231, 235, .1)',
        'mainlime': '#FFB55C',
        'transwhite': 'rgba(255, 255, 255, .8)'
      },
    },
  },
  plugins: [],
}
