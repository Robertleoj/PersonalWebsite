/** @type {import('tailwindcss').Config} */

const pct = {
  "5%": "5%",
  "10%": "10%",
  "20%": "20%",
  '30%': '30%',
  '40%': '40%',
  '50%': '50%',
  '60%': '60%',
  '70%': '70%',
  '80%': '80%',
  '90%': '90%',
  '100%': '100%'
}

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        '100': '28rem',
        ...pct
      },

      padding: pct,

      maxWidth: {
        'screen-3xl': '1700px',
        'screen-4xl': '2000px',
        'screen-5xl': '2200px',
        "10%": "10%",
        "20%": "20%",
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px'
      }
    },
  },
  plugins: [],
  darkMode: ['class']
}
