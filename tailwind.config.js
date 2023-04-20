/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      animation: {
        'toRight': 'toRight 0.5s ease-in-out',
        'toLeft': 'toLeft 0.5s ease-in-out',
        'fade': 'fade 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}
