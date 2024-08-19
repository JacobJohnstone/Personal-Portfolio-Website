/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smallEclipse': '#554301',
        'largeEclipse': '#4F2202',
        'bottom-gradient': '#696969',
        'btn-colour': '#C5C5C5'
      },
      blur: {
        'smallBlur': '234px',
        'largeBlur': '176px'
      }
    },
  },
  plugins: [],
}

