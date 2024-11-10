/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#4b66d0",
        'focus': '#2554ae',
        'input-border': '#66AFE9',
        'second-color': '#3c3f45'
      },
      borderColor: {
        'primary': "#e7e7e7",
        'input-inset': 'inset 0px 1px 1px #0000000D, 0px 0px 8px #66AFE999'
      },
      backgroundColor: {
        'hover-button': '#5775eb'
      }
    },
  },
  plugins: [],
}