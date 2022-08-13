/** @type {import('tailwindcss').Config} */

const pallette = require('./src/pallette.json');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: pallette
    },
  },
  plugins: [],
  darkMode: ['class']
}
