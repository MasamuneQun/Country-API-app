/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        LightText: 'hsl(200, 15%, 8%)',
        LightInput: 'hsl(0, 0%, 52%)',
        GreyBackground: 'hsl(0, 0%, 94%)',
        LightBackground: 'hsl(0, 0%, 98%)',
        White: ' hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
