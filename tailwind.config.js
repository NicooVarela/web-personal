/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme:{
    extend:{
      colors:{
        brandPink: '#F54177',
        brandBlack: '#242424',
        brandWhite: '#F8F8F8',
        bgWhite: '#FCFCFC',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },

    minHeight:{
      '450': '550px'
    },
    maxHeight:{
      '850': '850px'
    },
    maxWidth:{
      '800': '1200px'
    },

    fontSize: {
      Header: '4.5rem',
      SubTitles: '2.25rem', 
      content: '1rem', 

      TitleCards: '1.5rem',
      Links: '1rem',
      btn: '1.2rem',
    },
  },
  plugins: [

  ],
}
