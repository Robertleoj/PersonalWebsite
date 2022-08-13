/** @type {import('tailwindcss').Config} */


module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        '100': '28rem',
      }
    },
  },
  plugins: [],
  darkMode: ['class']
}
