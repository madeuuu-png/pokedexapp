/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'pokemon-dark': '#0a0a0a',
        'pokemon-card': '#1a0a1f',
        'pokemon-pink': '#FF6B9D',
        'pokemon-light-pink': '#FFB3E6',
        'pokemon-purple': '#B084CC',
        'pokemon-border': '#4a2a5a',
        'pokemon-input': '#2a1a3a',
      }
    },
  },
  plugins: [],
}