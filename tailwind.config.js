module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction :{
        'in-Expo' : 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      fontFamily: {
        accuratist:['Accuratist', 'sans-serif'],
        zizo:['ZIZO','serif'],
        space: ['SPACE GROTESK' , 'sans-serif'],
        ibm: ['IBM PLEX MONO' , 'mono'],
        manrope:['MANROPE','sans-serif']
      }
    },
  },
  plugins: [],
}
