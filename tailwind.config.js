/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#186F65', // Change this to your primary color code
        primaryDark: 'darkgreen', // Change this to your primary color code
        secondary: '#B5CB99', // Change this to your secondary color code
      },
    },
  },
  plugins: [],
}
