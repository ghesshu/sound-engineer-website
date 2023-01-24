/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'sm': '320px',
      'smd': '481px',
      'md': '600px',
      'slg': '760px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      backgroundImage: {
        'img-1': "url('../src/assets/tomorrowland-featured1-.jpeg')",
        's-img-1': "url('/src/assets/Conferencing-scaled.jpg')",
        's-img-2': "url('/src/assets/rtaroute-1.jpeg')",
        's-img-3': "url('/src/assets/tomorrowland-featured1-.jpeg')",
        'nl-img-4': "url('/src/assets/h1-parallax-img-1.jpg')",
        'P-img-1': "url('/src/assets/Afromusic.gif')",
      },

    },
  },
  plugins: [],
}
