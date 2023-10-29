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
        primaryDark: '#104a43', // Change this to your primary color code
        secondary: '#d5e5e3', // Change this to your secondary color code
      },
    },
  },
  plugins: [],
}
