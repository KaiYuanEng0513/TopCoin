module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        'didot': ['Didot', 'serif'], 
      },
      colors: {
       'text-primary' : 'white',
       'text-secondary' : 'black',
       'bg-black' : 'black',
       'bg-white' : 'white',
      }
    },
  },
  plugins: [],
}
