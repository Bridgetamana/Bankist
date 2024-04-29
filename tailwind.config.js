/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    colors: {
      'green': '#5ec576',
      'green-dark': '#4bbb7d',
      'orange': '#ffcb03',
      'orange-dark': '#ffbb00',
      'red-dark': '#fd424b',
      'red': '#ff585f',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}