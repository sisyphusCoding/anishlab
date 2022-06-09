module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['SPACE GROTESK' , 'sans-serif'],
        ibm: ['IBM PLEX MONO' , 'mono'],
        manrope:['MANROPE','sans-serif']
      }
    },
  },
  plugins: [],
}
