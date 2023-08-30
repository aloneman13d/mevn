// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brown:{
          50:'#fdf8f6',
          100:'#f2e8e5',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}