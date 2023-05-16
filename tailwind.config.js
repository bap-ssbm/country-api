/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue':'hsl(209, 23%, 22%)',
        'very-dark-blue-dark':'hsl(207, 26%, 17%)',
        'very-dark-blue-light':'hsl(200, 15%, 8%)',
        'dark-gray-light':'hsl(0, 0%, 52%)',
        'Very-Light-Gray':'hsl(0, 0%, 98%)'

      },
      fontFamily:{
        'Nunito-Sans' : ['Nunito Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}

